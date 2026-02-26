import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const NoiseOverlay = () => (
    <svg className="noise-overlay" xmlns="http://www.w3.org/2000/svg">
        <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
);

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Solutions', href: isHome ? '#solutions' : '/#solutions' },
        { name: 'Philosophy', href: isHome ? '#philosophy' : '/#philosophy' },
        { name: 'Protocol', href: isHome ? '#protocol' : '/#protocol' },
    ];

    // Determine the theme
    // White text only on home page when not scrolled.
    // Otherwise, use dark (primary/moss) text.
    const useWhiteTheme = isHome && !isScrolled;

    return (
        <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 ease-in-out w-[90%] max-w-4xl rounded-[2rem] px-6 py-4 flex items-center justify-between ${isScrolled
            ? 'bg-background/80 backdrop-blur-xl border border-primary/10 shadow-lg text-primary'
            : `bg-transparent ${useWhiteTheme ? 'text-white' : 'text-primary'}`
            }`}>
            <Link to="/" className="flex items-center">
                <img
                    src="/logo.png"
                    alt="Sun Key Energy"
                    className={`h-8 object-contain transition-all duration-500 ${useWhiteTheme
                        ? 'brightness-0 invert drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]'
                        : 'brightness-100 drop-shadow-sm'
                        }`}
                />
            </Link>

            <div className="hidden md:flex items-center gap-8">
                {navItems.map((item) => (
                    item.href.startsWith('#') ? (
                        <a
                            key={item.name}
                            href={item.href}
                            className={`text-sm font-medium tracking-wide transition-colors hover:-translate-y-[1px] ${useWhiteTheme
                                ? 'text-white/80 hover:text-white'
                                : 'text-primary/70 hover:text-primary'
                                }`}
                        >
                            {item.name}
                        </a>
                    ) : (
                        <Link
                            key={item.name}
                            to={item.href}
                            className={`text-sm font-medium tracking-wide transition-colors hover:-translate-y-[1px] ${useWhiteTheme
                                ? 'text-white/80 hover:text-white'
                                : 'text-primary/70 hover:text-primary'
                                }`}
                        >
                            {item.name}
                        </Link>
                    )
                ))}
            </div>

            <div className="hidden md:block">
                <button className={`magnetic-btn px-6 py-2.5 rounded-full text-sm font-bold transition-all ${useWhiteTheme
                    ? 'bg-white text-dark hover:bg-white/90'
                    : 'bg-primary text-white hover:bg-dark'
                    }`}>
                    Get a Free Quote
                </button>
            </div>

            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? (
                    <X size={24} className={useWhiteTheme ? 'text-white' : 'text-primary'} />
                ) : (
                    <Menu size={24} className={useWhiteTheme ? 'text-white' : 'text-primary'} />
                )}
            </button>

            {mobileMenuOpen && (
                <div className="absolute top-full left-0 mt-4 w-full bg-background rounded-3xl p-6 shadow-xl border border-primary/10 flex flex-col gap-4 text-center md:hidden">
                    {navItems.map(item => (
                        item.href.startsWith('#') ?
                            <a key={item.name} href={item.href} onClick={() => setMobileMenuOpen(false)} className="text-dark font-medium py-2">{item.name}</a> :
                            <Link key={item.name} to={item.href} onClick={() => setMobileMenuOpen(false)} className="text-dark font-medium py-2">{item.name}</Link>
                    ))}
                    <button className="bg-primary text-white px-6 py-3 rounded-full font-bold w-full mt-2">Get a Free Quote</button>
                </div>
            )}
        </nav>
    );
};

export const Footer = () => (
    <footer className="bg-[#111] text-background rounded-t-[4rem] pt-24 pb-12 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
            <img
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop"
                alt="Texture"
                className="w-full h-full object-cover opacity-5 mix-blend-luminosity"
            />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
                <div className="lg:col-span-2">
                    <div className="mb-6">
                        <Link to="/">
                            <img src="/logo.png" alt="Sun Key Energy" className="h-10 object-contain drop-shadow-md bg-white/10 p-2 rounded-xl" />
                        </Link>
                    </div>
                    <p className="text-background/50 max-w-sm mb-8">
                        Your Trusted Partner in Sustainable Energy Solutions.
                    </p>
                    <div className="flex items-center gap-3 px-4 py-2 border border-white/10 rounded-full w-fit bg-white/5">
                        <span className="w-2 h-2 rounded-full bg-[#00FF66] animate-pulse"></span>
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[#00FF66]">Systems Operational</span>
                    </div>
                </div>

                <div>
                    <h4 className="font-heading font-bold mb-6 text-white text-lg">Solutions</h4>
                    <ul className="space-y-4">
                        <li><Link to="/services/solar" className="text-background/50 hover:text-white transition-colors text-sm">Solar Panel Installation</Link></li>
                        <li><Link to="/services/battery" className="text-background/50 hover:text-white transition-colors text-sm">Battery Storage Solutions</Link></li>
                        <li><Link to="/services/ev" className="text-background/50 hover:text-white transition-colors text-sm">EV Charging Points</Link></li>
                        <li><Link to="/services/hrs" className="text-background/50 hover:text-white transition-colors text-sm">Heat Recovery Systems</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-heading font-bold mb-6 text-white text-lg">Contact</h4>
                    <ul className="space-y-4 text-sm text-background/50">
                        <li>01303 627 436</li>
                        <li>info@sunkeyenergy.co.uk</li>
                    </ul>
                </div>
            </div>

            <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-background/40 font-mono">
                <p>© 2026 Sun Key Energy Ltd. All rights reserved.</p>
                <div className="flex gap-6">
                    <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>
);
