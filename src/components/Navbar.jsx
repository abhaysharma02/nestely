import React, { useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '#' },
        { name: 'Products', path: '#products' },
        { name: 'Pricing', path: '#pricing' },
        { name: 'Demo', path: '#demo' },
        { name: 'Contact', path: '#contact' },
    ];

    return (
        <nav className="fixed w-full z-50 bg-brand-dark/80 backdrop-blur-md border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-lg bg-brand-gradient flex items-center justify-center">
                            <span className="text-white font-bold text-lg leading-none">N</span>
                        </div>
                        <span className="text-2xl font-bold text-white tracking-tight">Nestely</span>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.path} className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                                {link.name}
                            </a>
                        ))}
                        <a href="https://pos.nestely.in/login" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                            Login
                        </a>
                        <a href="https://pos.nestely.in/register" className="bg-brand-gradient text-white px-5 py-2.5 rounded-full font-medium hover:shadow-lg hover:shadow-brand-orange/20 transition-all flex items-center gap-1 text-sm">
                            Start Free Trial <ChevronRight size={16} />
                        </a>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-brand-darker border-b border-white/5">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.path} className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md">
                                {link.name}
                            </a>
                        ))}
                        <a href="https://pos.nestely.in/login" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md">
                            Login
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
