import React from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
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

                            <form className="space-y-4 relative z-10" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all placeholder:text-gray-600"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-1">Phone</label>
                                        <input
                                            type="tel"
                                            placeholder="+91 98765 43210"
                                            className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all placeholder:text-gray-600"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-1">Business Name</label>
                                    <input
                                        type="text"
                                        placeholder="The Great Cafe"
                                        className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all placeholder:text-gray-600"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-1">City</label>
                                    <input
                                        type="text"
                                        placeholder="Mumbai"
                                        className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all placeholder:text-gray-600"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full mt-4 bg-brand-gradient text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-brand-orange/20 transition-all flex items-center justify-center gap-2"
                                >
                                    Request Demo <Send size={18} />
                                </button>
                                <p className="text-center text-xs text-brand-gray mt-4">
                                    By submitting this form, you agree to our Terms of Service.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
