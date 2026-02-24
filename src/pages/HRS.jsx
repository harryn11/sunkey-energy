import React from 'react';
import { ChevronRight, Thermometer, Wind, Leaf, Home } from 'lucide-react';

const HRS = () => {
    return (
        <main className="pt-32 pb-24 px-6 bg-background min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <p className="font-mono text-accent text-sm uppercase tracking-widest mb-4">Climate Control</p>
                    <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary tracking-tight mb-8">
                        Heat Recovery <br />
                        <span className="font-drama italic text-accent font-normal">Systems (HRS)</span>
                    </h1>
                    <div className="h-px w-full bg-primary/10 mb-12" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    <div className="space-y-12">
                        <div className="prose prose-lg text-dark/80">
                            <p className="text-xl leading-relaxed font-medium">
                                A Heat Recovery System (HRS) is an energy-efficient solution designed to capture and reuse heat that would otherwise be lost, improving the overall energy efficiency of your home or business.
                            </p>
                            <p className="text-lg leading-relaxed mt-6">
                                Typically, these systems are used in ventilation, where the outgoing stale air is used to preheat incoming fresh air, reducing the need for additional heating. This process not only lowers energy consumption but also helps maintain a comfortable indoor climate all year-round.
                            </p>
                        </div>

                        <h3 className="text-2xl font-heading font-bold text-primary mb-8 px-6 py-2 bg-primary/10 rounded-full w-fit">Key Benefits</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { title: "Energy Efficiency", desc: "Reduces the need for extra heating or cooling, saving you money on energy bills.", icon: Thermometer },
                                { title: "Improved Air Quality", desc: "Provides fresh, filtered air while removing pollutants and excess humidity.", icon: Wind },
                                { title: "Sustainability", desc: "Reduces your carbon footprint by reusing heat and lowering overall energy demand.", icon: Leaf },
                                { title: "Atmosphere", desc: "Maintains consistent temperatures and humidity levels in your indoor spaces.", icon: Home }
                            ].map((item, i) => (
                                <div key={i} className="p-8 bg-primary/5 rounded-[2.5rem] border border-primary/10 transition-all">
                                    <item.icon size={24} className="text-accent mb-6" />
                                    <h4 className="font-heading font-bold text-primary mb-3">{item.title}</h4>
                                    <p className="text-dark/70 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <p className="text-dark/60 bg-white/50 p-8 rounded-3xl border border-primary/5 italic">
                            A Heat Recovery System is an ideal choice for both new builds and retrofitting existing homes or commercial properties. Integrating a heat recovery solution helps reduce environmental impact while enhancing comfort and savings.
                        </p>
                    </div>

                    <div className="sticky top-40 space-y-8">
                        <div className="rounded-[3rem] overflow-hidden border border-primary/20 aspect-[4/5] bg-dark relative">
                            <img
                                src="https://sunkeyenergy.co.uk/wp-content/uploads/2025/02/adobestock_1152569868.jpg?w=1024"
                                alt="Heat Recovery Installation"
                                className="w-full h-full object-cover opacity-80"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
                        </div>

                        <div className="p-10 bg-primary rounded-[3rem] text-background shadow-xl">
                            <h4 className="font-heading font-bold text-2xl mb-4 text-white">Efficiency Upgrade</h4>
                            <p className="text-background/60 mb-8 leading-relaxed">Optimise your building's thermal performance with our precision HRS solutions.</p>
                            <button className="magnetic-btn w-full py-4 bg-accent text-white rounded-full font-bold flex items-center justify-center gap-2">
                                Request an Efficiency Audit <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HRS;
