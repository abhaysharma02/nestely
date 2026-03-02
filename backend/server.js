import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB, DemoRequest, ContactMessage, User, Plan } from './db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Initialize Database connection on startup
connectDB();

// ==========================================
// PUBLIC APIs 
// ==========================================

// Submit Demo Request
app.post('/api/demo', async (req, res) => {
    try {
        const { name, phone, email, businessName, softwareRequired, message } = req.body;

        // Basic validation
        if (!name || !phone || !email || !businessName || !softwareRequired) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const newRequest = await DemoRequest.create({
            name, phone, email, businessName, softwareRequired, message
        });

        res.status(201).json({ success: true, message: 'Demo request submitted successfully', id: newRequest._id });
    } catch (err) {
        console.error('[API Error /demo]', err);
        res.status(500).json({ error: 'Internal server error while saving demo request' });
    }
});

// Submit Contact Message
app.post('/api/contact', async (req, res) => {
    try {
        const { name, phone, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const newMessage = await ContactMessage.create({
            name, phone: phone || '', email, message
        });

        res.status(201).json({ success: true, message: 'Contact message saved successfully', id: newMessage._id });
    } catch (err) {
        console.error('[API Error /contact]', err);
        res.status(500).json({ error: 'Internal server error while saving contact message' });
    }
});

// Mock Login API
app.post('/api/login', (req, res) => {
    // Mock functional login
    const { email, password } = req.body;
    if (email && password) {
        res.json({ token: 'mock-jwt-token-12345', user: { email, role: 'admin' } });
    } else {
        res.status(400).json({ error: 'Invalid credentials' });
    }
});

// ==========================================
// ADMIN APIs 
// ==========================================

// Fetch all Demo Requests
app.get('/api/admin/demo', async (req, res) => {
    try {
        const requests = await DemoRequest.find().sort({ createdAt: -1 });
        res.json(requests);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Fetch all Contact Messages
app.get('/api/admin/contact', async (req, res) => {
    try {
        const messages = await ContactMessage.find().sort({ date: -1 });
        res.json(messages);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Fetch Users
app.get('/api/admin/users', async (req, res) => {
    try {
        const users = await User.find().sort({ createdAt: -1 });
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Fetch Plans
app.get('/api/admin/plans', async (req, res) => {
    try {
        const plans = await Plan.find();
        res.json(plans);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
