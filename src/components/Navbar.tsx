import React, { useState, useEffect } from 'react';
import { GYM_DATA } from '../data/gymData';
import { Phone, MessageCircle, Menu, X, Dumbbell, Star, MapPin } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Training', href: '#training' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    onNavigate(targetId);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-zinc-800 shadow-2xl py-3'
          : 'bg-[#0A0A0A]/90 backdrop-blur-sm border-b border-zinc-800/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            id="nav-logo"
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-3.5 group focus:outline-none"
          >
            <div className="w-10 h-10 bg-[#F27D26] rounded-sm flex items-center justify-center font-black text-black text-2xl shadow-md group-hover:bg-orange-500 transition-colors">
              O
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-black uppercase leading-none tracking-tight text-white font-heading">
                One Edge <span className="text-[#F27D26]">Fitness</span>
              </span>
              <p className="text-[10px] text-zinc-500 font-medium tracking-widest uppercase mt-0.5">
                {GYM_DATA.hindiName} • Buxar
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium uppercase tracking-wide text-zinc-400">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="hover:text-[#F27D26] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Items */}
          <div className="hidden md:flex items-center gap-3">
            <div className="hidden xl:flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-xs">
              <span className="text-[#F27D26] font-bold flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-[#F27D26] text-[#F27D26]" />
                5.0 Rating
              </span>
              <span className="w-1 h-1 bg-zinc-600 rounded-full" />
              <span className="text-zinc-400 text-[10px] uppercase font-bold text-nowrap">36 Reviews</span>
            </div>

            <a
              id="nav-call-button"
              href={GYM_DATA.telLink}
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-zinc-200 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-sm flex items-center gap-2 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#F27D26]" />
              <span>{GYM_DATA.phoneDisplay}</span>
            </a>

            <a
              id="nav-join-button"
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="bg-[#F27D26] text-black font-bold px-6 py-2 rounded-sm text-xs uppercase tracking-wider transition-all hover:bg-orange-500 shadow-sm"
            >
              Join Now
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              id="nav-mobile-call-icon"
              href={GYM_DATA.telLink}
              className="p-2 rounded-sm bg-zinc-900 text-[#F27D26] border border-zinc-800 hover:bg-zinc-800"
              aria-label="Call gym"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              id="nav-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-sm text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0A0A] border-b border-zinc-800 px-4 pt-3 pb-6 space-y-4 mt-3 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800 text-xs">
            <span className="text-[#F27D26] flex items-center gap-1 font-bold">
              <Star className="w-3.5 h-3.5 fill-[#F27D26] text-[#F27D26]" /> 5.0 Rating (36 Reviews)
            </span>
            <span className="text-green-500 font-bold flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Opens at 5:00 AM
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 py-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`mobile-nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-300 hover:text-[#F27D26] hover:bg-zinc-900 rounded-sm border border-transparent hover:border-zinc-800"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-zinc-800 space-y-3">
            <div className="text-xs text-zinc-400 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#F27D26] shrink-0" />
              <span className="truncate">Near Bus Stand, Sohani Patti, Buxar</span>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                id="mobile-nav-whatsapp"
                href={GYM_DATA.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-sm bg-zinc-900 border border-zinc-700 text-zinc-200 hover:text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#F27D26]" />
                <span>WhatsApp</span>
              </a>
              <a
                id="mobile-nav-call"
                href={GYM_DATA.telLink}
                className="w-full py-2.5 px-3 rounded-sm bg-zinc-900 border border-zinc-700 text-zinc-200 hover:text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#F27D26]" />
                <span>Call Gym</span>
              </a>
            </div>

            <a
              id="mobile-nav-join"
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="w-full py-3 rounded-sm bg-[#F27D26] hover:bg-orange-500 text-black font-bold text-center text-xs uppercase tracking-wider block transition-colors"
            >
              Join Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
