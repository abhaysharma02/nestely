import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { handlePayment } from '../utils/razorpay';

const Pricing = () => {
    const plans = [
        {
            name: 'Basic',
            price: '₹999',
            period: '/month',
            description: 'Perfect for small food carts and single outlets.',
            features: ['QR Menu Ordering', 'Basic POS Billing', 'UPI Payments', 'Email Support'],
            highlighted: false,
        },
        {
            name: 'Pro',
            price: '₹1,999',
            period: '/month',
            description: 'Ideal for growing restaurants and cafes.',
            features: ['Everything in Basic', 'Kitchen Display System', 'Inventory Management', 'Priority Support'],
            highlighted: true,
        },
        {
            name: 'Premium',
            price: '₹3,499',
            period: '/month',
            description: 'Advanced features for multi-outlet chains.',
            features: ['Everything in Pro', 'Multi-store Dashboard', 'API Access', '24/7 Phone Support', 'Custom Integration'],
            highlighted: false,
        }
    ];

    return (
        <section id="pricing" className="py-24 bg-brand-dark relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Simple, transparent pricing</h2>
                    <p className="text-brand-gray text-lg">
                        Choose the plan that fits your business needs. No hidden fees or contracts.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, idx) => (
                        <div
                            key={idx}
                            className={`rounded-3xl p-8 border ${plan.highlighted
                                ? 'bg-brand-card border-brand-orange relative transform md:-translate-y-4 shadow-2xl shadow-brand-orange/10'
                                : 'bg-brand-card/50 border-white/5 hover:border-white/10 transition-colors'
                                }`}
                        >
                            {plan.highlighted && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-gradient text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    Most Popular
                                </div>
                            )}

                            <h3 className="text-xl font-medium text-white mb-2">{plan.name}</h3>
                            <p className="text-brand-gray text-sm mb-6 h-10">{plan.description}</p>

                            <div className="mb-8">
                                <span className="text-4xl font-bold text-white">{plan.price}</span>
                                <span className="text-brand-gray">{plan.period}</span>
                            </div>

                            <button
                                onClick={() => handlePayment(plan.name, plan.price)}
                                className={`w-full py-3 rounded-full font-medium transition-all mb-8 ${plan.highlighted
                                    ? 'bg-brand-gradient text-white hover:shadow-lg hover:shadow-brand-orange/20'
                                    : 'bg-white/10 text-white hover:bg-white/20'
                                    }`}
                            >
                                Get Started
                            </button>

                            <ul className="space-y-4">
                                {plan.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-center text-sm text-gray-300">
                                        <CheckCircle2 size={16} className={plan.highlighted ? 'text-brand-orange mr-3' : 'text-white/40 mr-3'} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
