import React from 'react';
import { ChevronRight, Battery as BatteryIcon, ShieldAlert, Zap } from 'lucide-react';

const Battery = () => {
    return (
        <main className="pt-32 pb-24 px-6 bg-background min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <p className="font-mono text-accent text-sm uppercase tracking-widest mb-4">Storage Solutions</p>
                    <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary tracking-tight mb-8">
                        Reliable DC <br />
                        <span className="font-drama italic text-accent font-normal">Battery Storage</span>
                    </h1>
                    <div className="h-px w-full bg-primary/10 mb-12" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    <div className="space-y-12">
                        <div className="prose prose-lg text-dark/80">
                            <h2 className="text-3xl font-heading font-bold text-primary mb-6">Power When You Need It Most</h2>
                            <p className="text-xl leading-relaxed">
                                We offer a wide range of high-performance battery storage systems to suit your energy needs, from 5kWh to 13.5kWh. All of which can be stacked to further increase your storage capacity.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-8">
                            <div className="group p-10 bg-dark rounded-[3rem] border border-primary/20 transition-all">
                                <ShieldAlert size={32} className="text-accent mb-6" />
                                <h3 className="text-2xl font-heading font-bold text-white mb-4">Emergency Backup Power (EPS)</h3>
                                <p className="text-background/60 leading-relaxed mb-6">
                                    Stay protected during power outages with our EPS systems, providing backup power up to 20 amps to keep essential appliances running.
                                </p>
                                <div className="flex items-center gap-2 text-accent text-sm font-mono">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                                    Status: Vigilant
                                </div>
                            </div>

                            <div className="group p-10 bg-primary/5 rounded-[3rem] border border-primary/10 transition-all">
                                <Zap size={32} className="text-accent mb-6" />
                                <h3 className="text-2xl font-heading font-bold text-primary mb-4">Uninterrupted Power Supply (UPS)</h3>
                                <p className="text-dark/70 leading-relaxed">
                                    For complete peace of mind, our UPS systems offer full-house backup power, supporting up to 80 amps to keep your home running smoothly without interruptions.
                                </p>
                            </div>
                        </div>

                        <p className="text-dark/60 italic border-l-2 border-accent pl-6">
                            Whether you’re looking to power your essentials or ensure seamless energy use during outages, our battery storage solutions provide the security and reliability you need.
                        </p>
                    </div>

                    <div className="sticky top-40 space-y-8">
                        <div className="rounded-[3rem] overflow-hidden border border-primary/20 aspect-[4/5] bg-dark relative">
                            <img
                                src="https://sunkeyenergy.co.uk/wp-content/uploads/2025/02/adobestock_853409459.jpg?w=1024"
                                alt="Battery Storage System"
                                className="w-full h-full object-cover opacity-80"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
                        </div>

                        <div className="p-10 border border-primary/10 rounded-[3rem] bg-background">
                            <h4 className="font-heading font-bold text-2xl mb-4 text-primary">Request a Storage Audit</h4>
                            <p className="text-dark/60 mb-8 leading-relaxed">Calculate your ideal capacity based on your consumption profile.</p>
                            <button className="magnetic-btn w-full py-4 bg-primary text-white rounded-full font-bold flex items-center justify-center gap-2">
                                Connect with Engineers <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Battery;
