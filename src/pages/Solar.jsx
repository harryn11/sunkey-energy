import React from 'react';
import { ChevronRight, Check } from 'lucide-react';

const Solar = () => {
    return (
        <main className="pt-32 pb-24 px-6 bg-background min-h-screen">
            <div className="max-w-7xl mx-auto">
                {/* Hero Header */}
                <div className="mb-20">
                    <p className="font-mono text-accent text-sm uppercase tracking-widest mb-4">Service Details</p>
                    <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary tracking-tight mb-8">
                        Solar Panels – <br />
                        <span className="font-drama italic text-accent font-normal">Domestic & Commercial</span>
                    </h1>
                    <div className="h-px w-full bg-primary/10 mb-12" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    <div className="space-y-12">
                        <div className="prose prose-lg text-dark/80">
                            <p className="text-xl leading-relaxed font-medium">
                                We offer expert solar panel installations for every type of roof and property. Whether you’re looking to upgrade your home or business, we have a solution that fits your needs.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            {[
                                { title: "Tiled Roofs", desc: "Precision installations that preserve the integrity and aesthetics of your roof while maximising energy efficiency." },
                                { title: "Flat Roofs", desc: "Specialised mounting systems that optimise panel angles for maximum energy production, tailored to your roof’s unique layout." },
                                { title: "Slate Roofs", desc: "Expert handling of delicate slate tiles, ensuring safe, secure, and high-performing solar panel installations." },
                                { title: "Commercial Roofs", desc: "Scalable solar solutions designed for businesses, focusing on energy savings, sustainability, and long-term value." },
                                { title: "Ground Mounts", desc: "Flexible ground-based solar options for properties with limited roof space, designed for easy access and optimal performance." }
                            ].map((item, i) => (
                                <div key={i} className="group p-8 bg-primary/5 rounded-[2rem] border border-primary/10 hover:border-accent/30 transition-all">
                                    <h3 className="text-xl font-heading font-bold text-primary mb-3 flex items-center gap-3">
                                        <span className="text-accent text-sm font-mono">0{i + 1}</span>
                                        {item.title}
                                    </h3>
                                    <p className="text-dark/70 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="sticky top-40 space-y-8">
                        <div className="rounded-[3rem] overflow-hidden border border-primary/20 aspect-[4/5] bg-dark relative">
                            <img
                                src="https://sunkeyenergy.co.uk/wp-content/uploads/2025/10/sk-solerpanal-installation-edited-e1761061942653.jpg?w=1024"
                                alt="Solar Installation"
                                className="w-full h-full object-cover opacity-80"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
                        </div>

                        <div className="p-10 bg-primary rounded-[3rem] text-background">
                            <h4 className="font-heading font-bold text-2xl mb-6 text-white">Ready for Independence?</h4>
                            <p className="text-background/70 mb-8 leading-relaxed">Let our engineers architect a bespoke solar generation strategy for your home or business.</p>
                            <button className="magnetic-btn w-full py-4 bg-accent text-white rounded-full font-bold flex items-center justify-center gap-2">
                                Request a Consultation <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Solar;
