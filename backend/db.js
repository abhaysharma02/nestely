import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

// Helper function to initialize database connection
export async function connectDB() {
  try {
    // Default to a local MongoDB instance if no URI is provided
    const mongoURI = process.env.MONGODB_URI || process.env.MONGO_URI || 'mongodb://localhost:27017/nestely_db';

    await mongoose.connect(mongoURI);

    console.log(`[DB] Connected to MongoDB at ${mongoURI}`);

    // Call seeder after successful connection
    await seedDemoData();

  } catch (error) {
    console.error('[DB Connection Error]', error);
    process.exit(1); // Exit process with failure
  }
}

// ==========================================
// MONGOOSE MODELS
// ==========================================

const demoRequestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  businessName: { type: String, required: true },
  softwareRequired: { type: String, enum: ['POS', 'Kartly'], required: true },
  message: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export const DemoRequest = mongoose.model('DemoRequest', demoRequestSchema);

const contactMessageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

export const ContactMessage = mongoose.model('ContactMessage', contactMessageSchema);

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, default: 'User' },
  createdAt: { type: Date, default: Date.now }
});

export const User = mongoose.model('User', userSchema);

const planSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  features: { type: String, required: true }
});

export const Plan = mongoose.model('Plan', planSchema);

// ==========================================
// SEEDER FUNCTION
// ==========================================
// Insert some mock data for Users and Plans if empty to make the Admin Panel look good initially
async function seedDemoData() {
  try {
    const userCount = await User.countDocuments();
    if (userCount === 0) {
      await User.create([
        { name: 'Admin User', email: 'admin@node.nestely.in', role: 'Admin' },
        { name: 'Test Owner', email: 'owner@cafe.in', role: 'User' }
      ]);
      console.log('[DB] Mock users seeded.');
    }

    const planCount = await Plan.countDocuments();
    if (planCount === 0) {
      await Plan.create([
        { name: 'Basic', price: '999', features: 'QR Menu, Basic POS, Email Support' },
        { name: 'Pro', price: '1999', features: 'Everything in Basic, KDS, Priority Support' },
        { name: 'Premium', price: '3499', features: 'Multi-outlet, Custom API, 24/7 Phone' }
      ]);
      console.log('[DB] Plans seeded.');
    }
  } catch (err) {
    console.error('[DB Seeding Error]', err);
  }
}
