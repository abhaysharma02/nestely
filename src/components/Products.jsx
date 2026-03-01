import React from 'react';
import { MonitorSmartphone, QrCode, CheckCircle2, ArrowRight } from 'lucide-react';

const Products = () => {
    return (
        <section id="products" className="py-24 bg-brand-darker relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-brand-orange font-semibold tracking-wide uppercase text-sm mb-3">Our Suite</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Everything you need to grow</h3>
                    <p className="text-brand-gray text-lg">
                        Powerful tools designed specifically for restaurants, cafes, and food carts to manage orders and process payments seamlessly.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {/* Nestely POS Card */}
                    <div className="bg-brand-card border border-white/5 rounded-3xl p-8 md:p-12 hover:border-brand-orange/30 transition-all duration-300 group">
                        <div className="w-16 h-16 rounded-2xl bg-brand-orange/10 flex items-center justify-center mb-8">
                            <MonitorSmartphone size={32} className="text-brand-orange" />
                        </div>

                        <h4 className="text-3xl font-bold text-white mb-4">Nestely POS</h4>
                        <p className="text-brand-gray mb-8 h-12">
                            Advanced billing and restaurant POS software to streamline your operations and manage your kitchen.
                        </p>

                        <ul className="space-y-4 mb-10">
                            {[
                                'Lightning fast billing',
                                'Kitchen Display System (KDS)',
                                'Detailed Sales Reports',
                                'Inventory Management',
                                'Staff & Role Management'
                            ].map((feature, idx) => (
                                <li key={idx} className="flex items-center text-gray-300">
                                    <CheckCircle2 size={20} className="text-brand-orange mr-3 flex-shrink-0" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <button className="flex items-center text-white font-medium group-hover:text-brand-orange transition-colors">
                            Learn more about POS <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Kartly QR Card */}
                    <div className="bg-brand-card border border-white/5 rounded-3xl p-8 md:p-12 hover:border-brand-orange/30 transition-all duration-300 group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gradient opacity-5 rounded-full blur-[80px]"></div>

                        <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8 relative z-10">
                            <QrCode size={32} className="text-white" />
                        </div>

                        <h4 className="text-3xl font-bold text-white mb-4 relative z-10">Kartly QR</h4>
                        <p className="text-brand-gray mb-8 h-12 relative z-10">
                            Contactless QR ordering system perfect for food carts, quick-service vendors, and dine-in tables.
                        </p>

                        <ul className="space-y-4 mb-10 relative z-10">
                            {[
                                'Digital QR Menu',
                                'Seamless Online Ordering',
                                'Integrated UPI Payments',
                                'Digital Token System',
                                'Intuitive Vendor Dashboard'
                            ].map((feature, idx) => (
                                <li key={idx} className="flex items-center text-gray-300">
                                    <CheckCircle2 size={20} className="text-white mr-3 flex-shrink-0" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <button className="flex items-center text-white font-medium group-hover:text-brand-orange transition-colors relative z-10">
                            Learn more about Kartly <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;
