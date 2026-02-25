import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Activity, ChevronRight, Sun, Battery, Wrench, Search } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// --- Component Fragments ---

const DiagnosticShuffler = () => {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);
    const [cards, setCards] = useState([
        { id: 1, text: "Grid Dependency: Minimal", value: "85% Reduction" },
        { id: 2, text: "Carbon Offset", value: "Active Tracking" },
        { id: 3, text: "Monthly Bills", value: "Optimised" }
    ]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );
        if (containerRef.current) observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;
        const interval = setInterval(() => {
            setCards(prev => {
                const newCards = [...prev];
                const last = newCards.pop();
                newCards.unshift(last);
                return newCards;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, [isVisible]);

    return (
        <div ref={containerRef} className="relative h-48 w-full flex items-center justify-center">
            {cards.map((card, i) => (
                <div
                    key={card.id}
                    className="absolute w-full max-w-[280px] bg-background border border-primary/20 rounded-3xl p-6 shadow-xl transition-[transform,opacity] duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] will-change-transform"
                    style={{
                        transform: `translateY(${i * 12}px) scale(${1 - i * 0.05}) translateZ(0)`,
                        zIndex: 10 - i,
                        opacity: 1 - i * 0.3
                    }}
                >
                    <div className="flex items-center gap-3 mb-2">
                        <Activity size={16} className="text-accent" />
                        <span className="text-xs uppercase tracking-wider font-mono text-dark/60">Diagnostics</span>
                    </div>
                    <h4 className="font-heading font-bold text-primary mb-1">{card.text}</h4>
                    <p className="font-mono text-sm text-accent">{card.value}</p>
                </div>
            ))}
        </div>
    );
};

const TelemetryTypewriter = () => {
    const [text, setText] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);
    const fullText = "INITIALIZING INDEPENDENCE PROTOCOL...\n> GRID DETACHMENT INITIATED\n> SOLAR YIELD: OPTIMAL\n> STORAGE SYSTEMS: ONLINE\n> YOU ARE NOW YOUR OWN UTILITY.";

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );
        if (containerRef.current) observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, 75); // Increased from 50ms
        return () => clearInterval(interval);
    }, [isVisible]);

    return (
        <div ref={containerRef} className="bg-[#1A1A1A] rounded-3xl p-6 h-48 w-full border border-primary/20 relative overflow-hidden flex flex-col">
            <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-background/50">Live Feed</span>
                <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
            </div>
            <pre className="font-mono text-[11px] leading-relaxed text-[#00FF66] whitespace-pre-wrap flex-1">
                {text}
                <span className="inline-block w-2.5 h-3.5 bg-accent ml-1 animate-pulse align-middle"></span>
            </pre>
        </div>
    );
};

const CursorProtocolScheduler = () => {
    return (
        <div className="bg-background rounded-3xl p-6 h-48 w-full border border-primary/20 flex flex-col items-center justify-center relative overflow-hidden group">
            <div className="grid grid-cols-7 gap-1.5 w-full max-w-[200px] mb-4">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => (
                    <div key={d} className="text-[10px] text-center font-mono text-primary/50">{d}</div>
                ))}
                {Array.from({ length: 14 }).map((_, i) => (
                    <div key={i} className={`h-6 rounded-md transition-colors duration-500 ${i === 3 ? 'bg-accent shadow-[0_0_10px_rgba(204,88,51,0.4)]' : 'bg-primary/5'}`}></div>
                ))}
            </div>
            <div className="px-4 py-1.5 rounded-full bg-primary text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-2">
                Secure Tomorrow <ChevronRight size={12} />
            </div>

            <svg className="absolute w-5 h-5 text-dark drop-shadow-md z-10 transition-all duration-1000 ease-in-out group-hover:translate-x-4 group-hover:-translate-y-8"
                style={{ bottom: '20%', right: '20%' }}
                viewBox="0 0 24 24" fill="currentColor" stroke="white" strokeWidth="1.5">
                <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
            </svg>
        </div>
    );
};

const Hero = () => {
    const container = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.hero-elem', {
                y: 60,
                opacity: 0,
                duration: 1.2,
                stagger: 0.15,
                ease: 'power3.out',
                delay: 0.2
            });
        }, container);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={container} className="relative h-[100dvh] w-full overflow-hidden bg-dark transform-gpu">
            <div className="absolute inset-0 z-0 will-change-transform">
                <img
                    src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop"
                    alt="Solar energy landscape"
                    className="w-full h-full object-cover opacity-60 mix-blend-luminosity will-change-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-primary/40 to-transparent"></div>
            </div>

            <div className="relative z-10 h-full flex flex-col justify-end pb-24 px-6 md:px-16 max-w-7xl mx-auto transform-gpu">
                <div className="max-w-4xl">
                    <p className="hero-elem text-accent font-mono text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                        Your Trusted Energy Partner
                    </p>
                    <h1 className="hero-elem text-5xl md:text-8xl font-heading font-bold tracking-tighter text-background mb-2 leading-[0.9]">
                        Sustainable energy is the
                    </h1>
                    <div className="hero-elem text-6xl md:text-9xl font-drama italic text-accent pr-16 leading-[0.8] mb-12">
                        Future.
                    </div>
                    <div className="hero-elem flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                        <button className="magnetic-btn bg-accent text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3">
                            Get a Free Quote <ChevronRight size={20} />
                        </button>
                        <p className="text-background/70 max-w-xs text-sm font-medium">
                            Empowering you to make the smart switch to solar power systems tailored for your complete independence.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ProtocolItem = ({ num, title, desc, icon: Icon, index }) => (
    <div className="h-screen w-full flex items-center justify-center sticky top-0 bg-background pt-20" style={{ zIndex: index }}>
        <div className="max-w-4xl w-full px-6 flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 w-full bg-primary/5 rounded-[3rem] aspect-square flex items-center justify-center relative overflow-hidden border border-primary/10 p-12">
                <Icon size={120} strokeWidth={1} className="text-primary opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center mix-blend-multiply">
                    <span className="font-mono text-[200px] font-bold text-accent/10">{num}</span>
                </div>
            </div>
            <div className="flex-1 w-full relative z-10">
                <span className="font-mono text-accent text-sm tracking-widest uppercase mb-4 block">Stage {num}</span>
                <h3 className="font-heading font-bold text-4xl text-primary mb-6">{title}</h3>
                <p className="text-dark/70 text-lg leading-relaxed">{desc}</p>
            </div>
        </div>
    </div>
);

const Home = () => {
    return (
        <main>
            <Hero />

            {/* Restored Cool System Things */}
            <section className="py-24 px-6 bg-background">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col gap-6">
                        <DiagnosticShuffler />
                        <div>
                            <h3 className="font-heading font-bold text-xl text-primary mb-2">Lower Energy Bills</h3>
                            <p className="text-dark/70 text-sm leading-relaxed">Solar power actively reduces or eliminates conventional electricity costs by creating a dedicated closed-loop generation system for your property.</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <TelemetryTypewriter />
                        <div>
                            <h3 className="font-heading font-bold text-xl text-primary mb-2">Energy Independence</h3>
                            <p className="text-dark/70 text-sm leading-relaxed">Sever the tether. Generate your own power matrix, reduce reliance on vulnerable national grids, and dictate your own economic terms.</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <CursorProtocolScheduler />
                        <div>
                            <h3 className="font-heading font-bold text-xl text-primary mb-2">A Sustainable Future</h3>
                            <p className="text-dark/70 text-sm leading-relaxed">Make an immediate, measurable impact. Transitioning to renewable infrastructure secures a clean energy legacy while increasing asset value.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solutions Grid */}
            <section id="solutions" className="py-24 px-6 bg-background relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20">
                        <h2 className="text-primary font-heading font-bold tracking-tight text-4xl md:text-5xl mb-6">
                            Our Professional <span className="font-drama italic font-normal text-accent">Solutions.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <Link to="/services/solar" className="flex flex-col gap-6 group">
                            <div className="overflow-hidden rounded-3xl h-48 relative border border-primary/20 bg-dark">
                                <img src="https://sunkeyenergy.co.uk/wp-content/uploads/2025/10/sk-solerpanal-installation-edited-e1761061942653.jpg?w=1024" alt="Solar Panels" className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent"></div>
                            </div>
                            <div>
                                <h3 className="font-heading font-bold text-xl text-primary mb-1">Solar Installation</h3>
                                <span className="text-accent text-xs font-mono uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all">View Service <ChevronRight size={12} /></span>
                            </div>
                        </Link>

                        <Link to="/services/battery" className="flex flex-col gap-6 group">
                            <div className="overflow-hidden rounded-3xl h-48 relative border border-primary/20 bg-dark">
                                <img src="https://sunkeyenergy.co.uk/wp-content/uploads/2025/02/adobestock_853409459.jpg?w=1024" alt="Battery Storage" className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent"></div>
                            </div>
                            <div>
                                <h3 className="font-heading font-bold text-xl text-primary mb-1">Battery Storage</h3>
                                <span className="text-accent text-xs font-mono uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all">View Service <ChevronRight size={12} /></span>
                            </div>
                        </Link>

                        <Link to="/services/ev" className="flex flex-col gap-6 group">
                            <div className="overflow-hidden rounded-3xl h-48 relative border border-primary/20 bg-dark">
                                <img src="https://sunkeyenergy.co.uk/wp-content/uploads/2025/02/adobestock_967334879.jpg?w=683" alt="EV Charging" className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent"></div>
                            </div>
                            <div>
                                <h3 className="font-heading font-bold text-xl text-primary mb-1">EV Charging</h3>
                                <span className="text-accent text-xs font-mono uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all">View Service <ChevronRight size={12} /></span>
                            </div>
                        </Link>

                        <Link to="/services/hrs" className="flex flex-col gap-6 group">
                            <div className="overflow-hidden rounded-3xl h-48 relative border border-primary/20 bg-dark">
                                <img src="https://sunkeyenergy.co.uk/wp-content/uploads/2025/02/adobestock_1152569868.jpg?w=1024" alt="Heat Recovery" className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent"></div>
                            </div>
                            <div>
                                <h3 className="font-heading font-bold text-xl text-primary mb-1">Heat Recovery</h3>
                                <span className="text-accent text-xs font-mono uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all">View Service <ChevronRight size={12} /></span>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            <section id="philosophy" className="relative py-40 overflow-hidden bg-primary text-background">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2127&auto=format&fit=crop"
                        alt="Organic texture"
                        className="w-full h-full object-cover opacity-10 mix-blend-overlay"
                    />
                </div>
                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-7xl font-heading font-bold tracking-tight leading-tight">
                        We focus on: <br />
                        <span className="font-drama italic text-accent font-normal text-6xl md:text-9xl">precision</span> <br />
                        energy independence.
                    </h2>
                </div>
            </section>

            <section id="protocol" className="relative pb-32">
                <ProtocolItem index={1} num="01" icon={Search} title="Diagnostic Consultation" desc="We analyse your current energy consumption, roof viability, and specific goals to architect a bespoke solar generation strategy." />
                <ProtocolItem index={2} num="02" icon={Wrench} title="Precision Integration" desc="Our engineers deploy top-tier photovoltaic panels and storage systems with surgical precision, ensuring aesthetic and structural integrity." />
                <ProtocolItem index={3} num="03" icon={Sun} title="System Activation" desc="Your personal micro-grid comes online. Monitor real-time telemetry and watch your reliance on external energy sources drop to zero." />
            </section>
        </main>
    );
};

export default Home;
