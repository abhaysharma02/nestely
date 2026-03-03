import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import jwt from 'jsonwebtoken';
import { connectDB, DemoRequest, ContactMessage, User, Plan } from './db.js';
import { requireAdmin } from './middleware/authMiddleware.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret_nestely_admin';

// 1. Security Middleware
app.use(helmet());
app.use(cors({ origin: ['http://localhost:5173', 'https://nestely.in'] })); // Restrict CORS in production
app.use(express.json());

// 2. Rate Limiting
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window`
    message: { success: false, error: 'Too many requests, please try again later.', code: 429 }
});
app.use('/api', apiLimiter);

// Initialize Database connection on startup
connectDB();

// ==========================================
// PUBLIC APIs 
// ==========================================

// Submit Demo Request
app.post('/api/demo', async (req, res, next) => {
    try {
        const { name, phone, email, businessName, softwareRequired, message } = req.body;

        // Basic validation
        if (!name || !phone || !email || !businessName || !softwareRequired) {
            return res.status(400).json({ success: false, error: 'Missing required fields', code: 400 });
        }

        const newRequest = await DemoRequest.create({
            name, phone, email, businessName, softwareRequired, message
        });

        res.status(201).json({ success: true, message: 'Demo request submitted successfully', id: newRequest._id });
    } catch (err) {
        next(err);
    }
});

// Submit Contact Message
app.post('/api/contact', async (req, res, next) => {
    try {
        const { name, phone, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ success: false, error: 'Missing required fields', code: 400 });
        }

        const newMessage = await ContactMessage.create({
            name, phone: phone || '', email, message
        });

        res.status(201).json({ success: true, message: 'Contact message saved successfully', id: newMessage._id });
    } catch (err) {
        next(err);
    }
});

// Admin JWT Login API
app.post('/api/auth/login', async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // MVP Fast-track: Verify against db or hardcoded superadmin
        // For production, bcrypt.compare should be used against User model.
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(
                { email, role: 'Admin' },
                JWT_SECRET,
                { expiresIn: '1d' }
            );
            return res.json({ success: true, token, user: { email, role: 'Admin' } });
        }

        return res.status(401).json({ success: false, error: 'Invalid admin credentials', code: 401 });
    } catch (err) {
        next(err);
    }
});

// ==========================================
// WEBHOOKS 
// ==========================================
import { handleRazorpayWebhook } from './controllers/webhookController.js';
app.post('/api/webhooks/razorpay', handleRazorpayWebhook);

// ==========================================
// PROTECTED ADMIN APIs 
// ==========================================

// Fetch all Demo Requests
app.get('/api/admin/demo', requireAdmin, async (req, res, next) => {
    try {
        const requests = await DemoRequest.find().sort({ createdAt: -1 });
        res.json({ success: true, count: requests.length, data: requests });
    } catch (err) {
        next(err);
    }
});

// Fetch all Contact Messages
app.get('/api/admin/contact', requireAdmin, async (req, res, next) => {
    try {
        const messages = await ContactMessage.find().sort({ date: -1 });
        res.json({ success: true, count: messages.length, data: messages });
    } catch (err) {
        next(err);
    }
});

// Fetch Users
app.get('/api/admin/users', requireAdmin, async (req, res, next) => {
    try {
        const users = await User.find().sort({ createdAt: -1 });
        res.json({ success: true, count: users.length, data: users });
    } catch (err) {
        next(err);
    }
});

// Fetch Plans
app.get('/api/admin/plans', requireAdmin, async (req, res, next) => {
    try {
        const plans = await Plan.find();
        res.json({ success: true, count: plans.length, data: plans });
    } catch (err) {
        next(err);
    }
});

// ==========================================
// GLOBAL ERROR HANDLER
// ==========================================
app.use((err, req, res, next) => {
    console.error('[Global Error]', err.stack || err);
    res.status(500).json({
        success: false,
        error: 'Internal Server Error',
        code: 500,
        message: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
