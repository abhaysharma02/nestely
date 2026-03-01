import React from 'react';
import { UserPlus, Utensils, Receipt, TrendingUp } from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        {
            id: "01",
            name: "Create account",
            description: "Sign up in 2 minutes and set up your business profile.",
            icon: <UserPlus className="text-white" size={24} />
        },
        {
            id: "02",
            name: "Add menu",
            description: "Upload your items, pricing, and tax details easily.",
            icon: <Utensils className="text-white" size={24} />
        },
        {
            id: "03",
            name: "Start billing / QR",
            description: "Begin taking orders via POS or print your QR codes.",
            icon: <Receipt className="text-white" size={24} />
        },
        {
            id: "04",
            name: "Track orders",
            description: "Watch your sales grow with real-time analytics.",
            icon: <TrendingUp className="text-white" size={24} />
        }
    ];

    return (
        <section className="py-24 bg-brand-darker relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">How it works</h2>
                    <p className="text-brand-gray text-lg">
                        Get your restaurant up and running on Nestely in four simple steps.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connector Line (visible on large screens) */}
                    <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-brand-orange/0 via-brand-orange/30 to-brand-orange/0 z-0"></div>

                    {steps.map((step, idx) => (
                        <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                            <div className="w-24 h-24 rounded-full bg-brand-card border-4 border-brand-darker flex items-center justify-center mb-6 relative group-hover:scale-110 transition-transform duration-300">
                                <div className="absolute inset-0 bg-brand-gradient rounded-full opacity-0 group-hover:opacity-20 transition-opacity blur-md"></div>
                                <div className="w-16 h-16 rounded-full bg-brand-gradient flex items-center justify-center relative z-10 transform transition-transform group-hover:rotate-12">
                                    {step.icon}
                                </div>
                            </div>

                            <div className="text-brand-orange font-bold text-sm mb-2">STEP {step.id}</div>
                            <h3 className="text-xl font-bold text-white mb-3">{step.name}</h3>
                            <p className="text-brand-gray text-sm leading-relaxed max-w-[200px]">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
