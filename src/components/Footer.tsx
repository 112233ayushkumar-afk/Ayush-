import React from 'react';
import { GYM_DATA } from '../data/gymData';
import { Dumbbell, Star, MapPin, Phone, MessageCircle, Navigation, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    onNavigate(id);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] border-t border-zinc-800 pt-16 pb-28 md:pb-16 text-zinc-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-zinc-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-[#F27D26] text-black flex items-center justify-center font-bold shadow-md">
                <Dumbbell className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white uppercase font-heading tracking-wider">
                  ONE EDGE <span className="text-[#F27D26]">FITNESS</span>
                </h3>
                <span className="text-xs text-[#F27D26] font-bold">
                  {GYM_DATA.hindiName}
                </span>
              </div>
            </div>

            {/* Exact Tagline */}
            <p className="text-zinc-300 text-sm leading-relaxed max-w-sm">
              “{GYM_DATA.tagline}”
            </p>

            {/* Rating Callout */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-black/60 border border-zinc-800 text-xs">
              <div className="flex text-[#F27D26]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#F27D26] text-[#F27D26]" />
                ))}
              </div>
              <span className="font-bold text-white uppercase tracking-wider">5.0 Rating</span>
              <span className="text-zinc-600">|</span>
              <span className="text-[#F27D26] font-bold">36 Reviews</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-200">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    id={`footer-link-${link.name.toLowerCase()}`}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-zinc-400 hover:text-[#F27D26] transition-colors text-sm flex items-center gap-2 font-medium"
                  >
                    <span className="w-1.5 h-1.5 bg-[#F27D26]" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Location Info */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-200">
              Gym Location & Phone
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F27D26] shrink-0 mt-0.5" />
                <div className="text-zinc-300">
                  <span className="font-bold text-white block uppercase text-xs">Location:</span>
                  Singrahi Pokhara, Near Bus Stand, Sohani Patti, Buxar, Bihar – 802101
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F27D26] shrink-0" />
                <div className="text-zinc-300">
                  <span className="font-bold text-white mr-1.5 uppercase text-xs">Phone:</span>
                  <a href={GYM_DATA.telLink} className="text-[#F27D26] hover:underline font-bold">
                    {GYM_DATA.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#F27D26] shrink-0" />
                <div className="text-zinc-300">
                  <span className="font-bold text-white mr-1.5 uppercase text-xs">WhatsApp:</span>
                  <a
                    href={GYM_DATA.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F27D26] hover:underline font-bold"
                  >
                    086516 92256
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2">
              <a
                id="footer-maps-link"
                href={GYM_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-sm bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-[#F27D26]" />
                <span>Google Maps</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar with copyright and back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © 2026 One Edge Fitness. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-zinc-400">
              One Edge Fitness (वन एज फिटनेस) • Sohani Patti, Buxar
            </span>
            <button
              id="footer-back-to-top"
              onClick={scrollToTop}
              type="button"
              className="p-2 rounded-sm bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-[#F27D26] transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
