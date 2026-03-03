import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', phone: '', email: '', businessName: '', city: '', softwareRequired: 'POS', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMsg('');

        try {
            const response = await fetch('http://localhost:5001/api/demo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                // map frontend keys to backend keys
                body: JSON.stringify({
                    name: formData.name,
                    phone: formData.phone,
                    email: formData.email,
                    businessName: formData.businessName,
                    softwareRequired: formData.softwareRequired,
                    message: formData.message || `City: ${formData.city}`
                })
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Failed to submit request');
            }

            setIsSuccess(true);
            setFormData({ name: '', phone: '', email: '', businessName: '', city: '', softwareRequired: 'POS', message: '' });
            setTimeout(() => setIsSuccess(false), 5000);
        } catch (error) {
            console.error('Submission error', error);
            setErrorMsg(error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-24 bg-brand-dark relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to upgrade your restaurant?</h2>
                        <p className="text-brand-gray text-lg mb-8">
                            Book a free personalized demo with our team. We'll show you how Nestely can help you streamline operations and increase revenue.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-brand-orange font-bold">1</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-medium">Quick 15-min call</h4>
                                    <p className="text-sm text-brand-gray">To understand your business needs.</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-brand-orange font-bold">2</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-medium">Customized Demo</h4>
                                    <p className="text-sm text-brand-gray">See exactly how Nestely works for you.</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-brand-orange font-bold">3</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-medium">Easy Setup</h4>
                                    <p className="text-sm text-brand-gray">We'll help you migrate your data and go live.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <div className="bg-brand-card border border-white/5 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gradient opacity-10 rounded-full blur-[80px]"></div>

                            <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Request a Demo</h3>

                            {isSuccess ? (
                                <div className="relative z-10 bg-green-500/10 border border-green-500/20 rounded-xl p-8 text-center animate-in fade-in duration-300">
                                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <CheckCircle2 size={32} className="text-green-500" />
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-2">Request Received!</h4>
                                    <p className="text-brand-gray">
                                        Thank you for your interest. One of our specialists will contact you shortly to schedule your personalized demo.
                                    </p>
                                </div>
                            ) : (
                                <form className="space-y-4 relative z-10" onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                                            <input
                                                required
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                type="text"
                                                placeholder="John Doe"
                                                className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all placeholder:text-gray-600"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-1">Phone</label>
                                            <input
                                                required
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                type="tel"
                                                placeholder="+91 98765 43210"
                                                className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all placeholder:text-gray-600"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-1">Business Name</label>
                                            <input
                                                required
                                                name="businessName"
                                                value={formData.businessName}
                                                onChange={handleChange}
                                                type="text"
                                                placeholder="The Great Cafe"
                                                className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all placeholder:text-gray-600"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                                            <input
                                                required
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                type="email"
                                                placeholder="owner@cafe.com"
                                                className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all placeholder:text-gray-600"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-1">City</label>
                                            <input
                                                required
                                                name="city"
                                                value={formData.city}
                                                onChange={handleChange}
                                                type="text"
                                                placeholder="Mumbai"
                                                className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all placeholder:text-gray-600"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-1">Software Required</label>
                                            <select
                                                required
                                                name="softwareRequired"
                                                value={formData.softwareRequired}
                                                onChange={handleChange}
                                                className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all appearance-none"
                                            >
                                                <option value="POS">Nestely POS</option>
                                                <option value="Kartly">Kartly QR</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-1">Message (Optional)</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="2"
                                            placeholder="Any specific requirements?"
                                            className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all placeholder:text-gray-600 resize-none"
                                        ></textarea>
                                    </div>

                                    {errorMsg && <p className="text-red-500 text-sm mt-2">{errorMsg}</p>}

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full mt-4 bg-brand-gradient text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-brand-orange/20 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center gap-2">
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending...
                                            </span>
                                        ) : (
                                            <>Request Demo <Send size={18} /></>
                                        )}
                                    </button>
                                    <p className="text-center text-xs text-brand-gray mt-4">
                                        By submitting this form, you agree to our Terms of Service.
                                    </p>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
