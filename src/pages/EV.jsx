import React from 'react';
import { ChevronRight, Zap, Smartphone, RefreshCw, Leaf } from 'lucide-react';

const EV = () => {
    return (
        <main className="pt-32 pb-24 px-6 bg-background min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <p className="font-mono text-accent text-sm uppercase tracking-widest mb-4">Electric Mobility</p>
                    <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary tracking-tight mb-8">
                        Electric Vehicle <br />
                        <span className="font-drama italic text-accent font-normal">Charging Points</span>
                    </h1>
                    <div className="h-px w-full bg-primary/10 mb-12" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    <div className="space-y-12">
                        <div className="prose prose-lg text-dark/80">
                            <h2 className="text-3xl font-heading font-bold text-primary mb-6">Powering Your Drive</h2>
                            <p className="text-xl leading-relaxed font-medium">
                                Charge your electric vehicle with ease and convenience at home with our high-performance EV charging solutions.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { title: "Fast & Efficient", desc: "Enjoy fast, reliable charging to keep your EV ready for the road with minimal downtime.", icon: Zap },
                                { title: "Smart Tech", desc: "Equipped with Wi-Fi and mobile app control so you can manage charging remotely.", icon: Smartphone },
                                { title: "Seamless", desc: "Integrates perfectly into your existing electrical system for a hassle-free experience.", icon: RefreshCw },
                                { title: "Future Ready", desc: "Eco-friendly solutions that support the growing sustainable transport market.", icon: Leaf }
                            ].map((item, i) => (
                                <div key={i} className="p-8 bg-primary/5 rounded-[2.5rem] border border-primary/10 transition-all hover:-translate-y-1">
                                    <item.icon size={24} className="text-accent mb-6" />
                                    <h3 className="text-xl font-heading font-bold text-primary mb-3">{item.title}</h3>
                                    <p className="text-dark/70 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="sticky top-40 space-y-8">
                        <div className="rounded-[3rem] overflow-hidden border border-primary/20 aspect-[4/5] bg-dark relative">
                            <img
                                src="https://sunkeyenergy.co.uk/wp-content/uploads/2025/02/adobestock_967334879.jpg?w=683"
                                alt="EV Charging Point"
                                className="w-full h-full object-cover opacity-80"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
                        </div>

                        <div className="p-10 bg-dark rounded-[3rem] text-background border border-primary/20">
                            <h4 className="font-heading font-bold text-2xl mb-4 text-white">Smart Charging Setup</h4>
                            <p className="text-background/50 mb-8 leading-relaxed">Schedule your charging during off-peak hours for maximum savings.</p>
                            <button className="magnetic-btn w-full py-4 bg-accent text-white rounded-full font-bold flex items-center justify-center gap-2">
                                Get an Install Quote <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default EV;
