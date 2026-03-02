import React from 'react';
import { ChevronRight, Play } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-orange/20 via-brand-darker to-brand-darker z-0"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <div className="inline-flex items-center space-x-2 bg-white/5 rounded-full px-3 py-1 mb-8 border border-white/10">
                    <span className="flex h-2 w-2 rounded-full bg-brand-orange"></span>
                    <span className="text-sm font-medium text-gray-300">Nestely Platform 2.0 is out</span>
                    <ChevronRight size={14} className="text-brand-gray" />
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8">
                    Smart POS & QR Ordering <br className="hidden md:block" /> Software for <span className="text-transparent bg-clip-text bg-brand-gradient">Restaurants</span>
                </h1>

                <p className="mt-4 text-xl md:text-2xl text-brand-gray max-w-3xl mx-auto mb-12">
                    Run your business with Nestely POS and Kartly QR. The all-in-one platform for food vendors.
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                    <a href="https://pos.nestely.in/register" className="w-full sm:w-auto px-8 py-4 bg-brand-gradient text-white rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-brand-orange/20 transition-all flex items-center justify-center gap-2">
                        Start Free Trial <ChevronRight size={20} />
                    </a>
                    <a href="#demo" className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white border border-white/10 rounded-full font-semibold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
                        <Play size={20} fill="currentColor" /> Book Demo
                    </a>
                </div>

                {/* Mockup Illustration */}
                <div className="mt-20 relative max-w-5xl mx-auto">
                    <div className="absolute inset-0 bg-brand-gradient blur-[100px] opacity-20 rounded-full"></div>
                    <div className="relative rounded-2xl border border-white/10 bg-[#1A1A1A] shadow-2xl overflow-hidden aspect-video flex border-t-white/20">
                        {/* Window Controls */}
                        <div className="absolute top-0 w-full h-12 bg-[#252525] flex items-center px-4 space-x-2 border-b border-white/5">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>

                        {/* Fake Dashboard Content */}
                        <div className="mt-12 w-full flex bg-[#141414]">
                            {/* Sidebar */}
                            <div className="w-64 border-r border-white/5 p-4 flex-col space-y-4 hidden md:flex">
                                <div className="h-8 bg-white/10 rounded w-3/4"></div>
                                <div className="space-y-2 mt-8">
                                    {[...Array(6)].map((_, i) => (
                                        <div key={i} className="h-4 bg-white/5 rounded w-full"></div>
                                    ))}
                                </div>
                            </div>
                            {/* Main Content */}
                            <div className="flex-1 p-8">
                                <div className="flex justify-between items-center mb-8">
                                    <div className="h-8 bg-brand-orange/20 rounded w-48 mb-4"></div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                    {[...Array(3)].map((_, i) => (
                                        <div key={i} className="h-32 bg-white/5 rounded-xl border border-white/5"></div>
                                    ))}
                                </div>
                                <div className="h-64 bg-white/5 rounded-xl border border-white/5"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
