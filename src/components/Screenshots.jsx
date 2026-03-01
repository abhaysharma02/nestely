import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Screenshots = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { id: 0, name: 'POS Screen' },
        { id: 1, name: 'Kitchen Screen' },
        { id: 2, name: 'QR Menu' },
        { id: 3, name: 'Dashboard' }
    ];

    const nextTab = () => setActiveTab((activeTab + 1) % tabs.length);
    const prevTab = () => setActiveTab((activeTab - 1 + tabs.length) % tabs.length);

    return (
        <section id="demo" className="py-24 bg-brand-darker relative border-t border-white/5 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">See Nestely in action</h2>
                    <p className="text-brand-gray text-lg">
                        A beautifully designed interface that your staff will love using.
                    </p>
                </div>

                {/* Custom Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${activeTab === tab.id
                                    ? 'bg-brand-gradient text-white shadow-lg shadow-brand-orange/20'
                                    : 'bg-white/5 text-brand-gray hover:bg-white/10 hover:text-white'
                                }`}
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>

                {/* Dashboard Mockup Slider */}
                <div className="relative max-w-5xl mx-auto">
                    <button
                        onClick={prevTab}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-brand-orange transition-colors border border-white/10"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <button
                        onClick={nextTab}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-brand-orange transition-colors border border-white/10"
                    >
                        <ChevronRight size={24} />
                    </button>

                    <div className="relative rounded-2xl border border-white/10 bg-[#141414] shadow-2xl overflow-hidden aspect-video transition-all duration-500">
                        {/* Window Controls */}
                        <div className="absolute top-0 w-full h-10 bg-[#1A1A1A] flex items-center px-4 space-x-2 border-b border-white/5 z-10">
                            <div className="w-3 h-3 rounded-full bg-white/20"></div>
                            <div className="w-3 h-3 rounded-full bg-white/20"></div>
                            <div className="w-3 h-3 rounded-full bg-white/20"></div>
                            <div className="ml-4 text-xs text-white/40 font-medium">{tabs[activeTab].name}</div>
                        </div>

                        <div className="absolute inset-0 pt-10 px-6 pb-6 bg-[#0A0A0A] flex items-center justify-center">
                            <div className="w-full h-full border-2 border-dashed border-white/10 flex flex-col items-center justify-center rounded-xl bg-white/5 relative overflow-hidden">
                                <div className="absolute inset-0 opacity-10 blur-xl bg-brand-gradient"></div>

                                {activeTab === 0 && (
                                    <div className="text-center z-10">
                                        <div className="w-16 h-16 bg-brand-orange/20 text-brand-orange rounded-full flex items-center justify-center mx-auto mb-4">
                                            <span className="text-2xl font-bold">POS</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2">POS Interface Visualization</h3>
                                        <p className="text-brand-gray">Menu items grid on left, cart and billing on right.</p>
                                    </div>
                                )}
                                {activeTab === 1 && (
                                    <div className="text-center z-10">
                                        <div className="w-16 h-16 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <span className="text-2xl font-bold">KDS</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2">Kitchen Display View</h3>
                                        <p className="text-brand-gray">Incoming orders structured exactly for the kitchen.</p>
                                    </div>
                                )}
                                {activeTab === 2 && (
                                    <div className="text-center z-10 w-full max-w-[300px]">
                                        <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <span className="text-2xl font-bold">QR</span>
                                        </div>
                                        <div className="h-[400px] w-[250px] mx-auto border-4 border-[#333] rounded-[2rem] bg-[#111] overflow-hidden flex flex-col">
                                            <div className="h-6 w-1/2 bg-[#333] mx-auto rounded-b-xl flex-shrink-0"></div>
                                            <div className="p-4 flex flex-col items-center mt-4 w-full">
                                                <h3 className="text-sm font-bold text-white mb-2 text-center">Mobile Menu</h3>
                                                <div className="w-full h-10 bg-white/10 rounded-lg mb-2"></div>
                                                <div className="w-full h-10 bg-white/10 rounded-lg mb-2"></div>
                                                <div className="w-full h-10 bg-white/10 rounded-lg"></div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {activeTab === 3 && (
                                    <div className="text-center z-10">
                                        <div className="w-16 h-16 bg-purple-500/20 text-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <span className="text-2xl font-bold">DASH</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2">Analytics Dashboard</h3>
                                        <p className="text-brand-gray">Charts, metrics, and real-time revenue stats.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Screenshots;
