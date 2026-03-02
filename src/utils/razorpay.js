export const loadRazorpay = () => {
    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
    });
};

export const handlePayment = async (planName, amountStr) => {
    const res = await loadRazorpay();

    if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
    }

    // Extract number from price string (e.g. ₹999 -> 999)
    const numericAmount = parseInt(amountStr.replace(/[^0-9]/g, ''), 10);
    const amountInPaise = numericAmount * 100;

    // VITE_RAZORPAY_KEY_ID should be set in .env
    const keyId = import.meta.env.VITE_RAZORPAY_KEY_ID;

    if (!keyId || keyId === '') {
        // Mock behaviour if no key is provided
        alert(`[Demo Mode] Razorpay Checkout would open here for the ${planName} Plan (${amountStr}). \n\nPlease configure VITE_RAZORPAY_KEY_ID in your .env file to enable live payments.`);
        return;
    }

    const options = {
        key: keyId,
        amount: amountInPaise.toString(),
        currency: "INR",
        name: "Nestely",
        description: `Subscription for ${planName} Plan`,
        handler: function (response) {
            alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
            // In a real app, verify this payment on your backend
        },
        prefill: {
            name: "Business Owner",
            email: "owner@restaurant.com",
            contact: "9876543210",
        },
        theme: {
            color: "#FF6B00",
        },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
};
