import crypto from 'crypto';
import { v4 as uuidv4 } from 'uuid';
import { Tenant, Subscription, WebhookLog, User } from '../db.js';

// Secret from Razorpay Dashboard
const RAZORPAY_WEBHOOK_SECRET = process.env.RAZORPAY_WEBHOOK_SECRET || 'fallback_nestely_webhook_secret';

export const handleRazorpayWebhook = async (req, res) => {
    try {
        const signature = req.headers['x-razorpay-signature'];
        const eventId = req.headers['x-razorpay-event-id'];

        // 1. Check idempotency (Prevent duplicate processing)
        if (eventId) {
            const existingEvent = await WebhookLog.findOne({ eventId });
            if (existingEvent) {
                console.log(`[Webhook] Event ${eventId} already processed. Skipping.`);
                return res.status(200).json({ success: true, message: 'Already processed' }); // Return 200 so Razorpay stops retrying
            }
        }

        // 2. Signature Validation
        const rawBody = JSON.stringify(req.body); // Warning: Ideally parsed raw body buffer for purity, but strigify works for MVP if middleware keeps ordering.
        const expectedSignature = crypto
            .createHmac('sha256', RAZORPAY_WEBHOOK_SECRET)
            .update(rawBody)
            .digest('hex');

        if (expectedSignature !== signature) {
            console.error('[Webhook] Invalid signature');
            return res.status(400).json({ success: false, error: 'Invalid signature' });
        }

        const event = req.body;
        console.log(`[Webhook] Received verified event: ${event.event}`);

        // 3. Process the Event
        switch (event.event) {
            case 'payment.captured':
                await processPaymentCaptured(event.payload.payment.entity, eventId);
                break;
            case 'payment.failed':
                console.log(`[Webhook] Payment Failed: ${event.payload.payment.entity.id}`);
                // Could log to DB for tracking leads
                if (eventId) {
                    await WebhookLog.create({ eventId, eventType: event.event, paymentId: event.payload.payment.entity.id, status: 'processed' });
                }
                break;
            default:
                console.log(`[Webhook] Unhandled event type: ${event.event}`);
                break;
        }

        // Always return 200 OK to acknowledge receipt
        res.status(200).json({ success: true });

    } catch (err) {
        console.error('[Webhook Error]', err);
        res.status(500).json({ success: false, error: 'Webhook processing failed' });
    }
};

const processPaymentCaptured = async (paymentEntity, eventId) => {
    const paymentId = paymentEntity.id;
    const amountPaid = paymentEntity.amount / 100; // Convert paise to INR
    const email = paymentEntity.email;
    const contact = paymentEntity.contact;

    // In a real flow, metadata is passed during order creation
    const businessName = paymentEntity.notes?.businessName || `Business_${paymentId.substring(4, 9)}`;
    const planName = paymentEntity.notes?.planName || 'Standard Plan';
    const softwareType = paymentEntity.notes?.softwareType || 'POS';

    // Check if user already exists
    let user = await User.findOne({ email });

    // 4. Generate Temporary Credentials for New Users
    const tempPassword = uuidv4().slice(0, 8); // e.g. "a1b2c3d4"
    const newTenantId = uuidv4();

    // 5. Database Transactions (SaaS Creation)
    // Save User if new
    if (!user) {
        user = await User.create({
            name: businessName,
            email,
            role: 'Vendor',
        });
        // In real app: Hash tempPassword with bcrypt and save to User model.
        // const hashedPw = await bcrypt.hash(tempPassword, 10);
    }

    // Provision Tenant Space
    const newTenant = await Tenant.create({
        tenantId: newTenantId,
        businessName,
        email,
        softwareType,
        status: 'active'
    });

    // Save Subscription 
    const validUntilDate = new Date();
    validUntilDate.setMonth(validUntilDate.getMonth() + 1); // Mock 1 month validity

    await Subscription.create({
        tenantId: newTenantId,
        planName,
        razorpayPaymentId: paymentId,
        amount: amountPaid,
        status: 'active',
        validUntil: validUntilDate
    });

    // Log the successful webhook execution
    if (eventId) {
        await WebhookLog.create({
            eventId,
            eventType: 'payment.captured',
            paymentId,
            status: 'processed'
        });
    }

    console.log(`[SaaS Automated] Provisioned Tenant ${newTenantId} for ${email}`);

    // 6. Trigger Onboarding Email (Mocked for now, but ready for Nodemailer)
    sendOnboardingEmail(email, businessName, newTenantId, tempPassword, softwareType);
};

// Simple nodemail stub
const sendOnboardingEmail = (toEmail, businessName, tenantId, password, softwareType) => {
    console.log(`\n============================`);
    console.log(`📧 EMAIL DISPATCH TO: ${toEmail}`);
    console.log(`Subject: Welcome to Nestely SaaS!`);
    console.log(`Body: 
        Hi ${businessName},
        Your payment was successful! Your ${softwareType} instance is now provisioned.
        
        Tenant ID: ${tenantId}
        Login: ${toEmail}
        Temporary Password: ${password}
        
        Please login and change your password immediately.
    `);
    console.log(`============================\n`);
};
