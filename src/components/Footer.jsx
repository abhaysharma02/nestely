import React from 'react';
import { Twitter, Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-brand-darker border-t border-white/5 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 bg-brand-dark p-8 rounded-3xl mb-12 border border-white/5">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center space-x-2 mb-6">
                            <div className="w-8 h-8 rounded-lg bg-brand-gradient flex items-center justify-center">
                                <span className="text-white font-bold text-lg leading-none">N</span>
                            </div>
                            <span className="text-2xl font-bold text-white tracking-tight">Nestely</span>
                        </div>
                        <p className="text-brand-gray text-sm leading-relaxed mb-6">
                            Smart POS & QR Ordering Software for Restaurants and Food Vendors.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-brand-gray hover:text-brand-orange transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-brand-gray hover:text-brand-orange transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-brand-gray hover:text-brand-orange transition-colors"><Linkedin size={20} /></a>
                            <a href="#" className="text-brand-gray hover:text-brand-orange transition-colors"><Facebook size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Products</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-brand-gray hover:text-white transition-colors text-sm">Nestely POS</a></li>
                            <li><a href="#" className="text-brand-gray hover:text-white transition-colors text-sm">Kartly QR</a></li>
                            <li><a href="#" className="text-brand-gray hover:text-white transition-colors text-sm">Kitchen Display</a></li>
                            <li><a href="#" className="text-brand-gray hover:text-white transition-colors text-sm">Vendor Dashboard</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Company</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-brand-gray hover:text-white transition-colors text-sm">About Us</a></li>
                            <li><a href="#" className="text-brand-gray hover:text-white transition-colors text-sm">Pricing</a></li>
                            <li><a href="#" className="text-brand-gray hover:text-white transition-colors text-sm">Blog</a></li>
                            <li><a href="#" className="text-brand-gray hover:text-white transition-colors text-sm">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact</h3>
                        <ul className="space-y-3">
                            <li className="text-brand-gray text-sm">support@nestely.com</li>
                            <li className="text-brand-gray text-sm">+1 (555) 123-4567</li>
                            <li className="text-brand-gray text-sm">123 Business Avenue, Tech District</li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center text-brand-gray text-xs">
                    <p>&copy; {new Date().getFullYear()} Nestely. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
