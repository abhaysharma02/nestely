import React from 'react';
import { Zap, Clock, Cloud, Monitor, ShieldCheck, BarChart3 } from 'lucide-react';

const Features = () => {
    const features = [
        {
            name: 'Fast billing',
            description: 'Process orders and generate bills in seconds with our optimized interface.',
            icon: <Zap className="text-brand-orange" size={24} />
        },
        {
            name: 'Real-time orders',
            description: 'Instant synchronization between QR menu, POS, and Kitchen Display.',
            icon: <Clock className="text-brand-orange" size={24} />
        },
        {
            name: 'Cloud dashboard',
            description: 'Access your restaurant data from anywhere, anytime on any device.',
            icon: <Cloud className="text-brand-orange" size={24} />
        },
        {
            name: 'Multi-device',
            description: 'Works seamlessly across tablets, smartphones, and desktop computers.',
            icon: <Monitor className="text-brand-orange" size={24} />
        },
        {
            name: 'Secure payments',
            description: 'Integrated with top gateways for safe UPI, card, and cash transactions.',
            icon: <ShieldCheck className="text-brand-orange" size={24} />
        },
        {
            name: 'Analytics',
            description: 'Deep insights into your sales, inventory, and staff performance.',
            icon: <BarChart3 className="text-brand-orange" size={24} />
        }
    ];

    return (
        <section className="py-24 bg-brand-dark relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Built for speed and scale</h2>
                    <p className="text-brand-gray text-lg">
                        Every feature you need to run an efficient food business, without the complexity.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <div key={idx} className="bg-brand-card/50 border border-white/5 rounded-2xl p-8 hover:bg-white/5 transition-colors">
                            <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{feature.name}</h3>
                            <p className="text-brand-gray leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
