import React from 'react';
import { GYM_DATA } from '../data/gymData';
import { Phone, MessageCircle, Navigation } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  return (
    <>
      {/* Mobile Fixed Bottom Action Bar (visible on sm/mobile) */}
      <aside aria-label="Quick Actions" className="fixed bottom-3 left-3 right-3 z-40 md:hidden">
        <div className="bg-[#0A0A0A]/95 backdrop-blur-md border border-zinc-800 rounded-sm p-1.5 shadow-2xl flex items-center justify-around gap-2">
          {/* Call Button */}
          <a
            id="mobile-float-call"
            href={GYM_DATA.telLink}
            className="flex-1 py-3 px-2 rounded-sm bg-zinc-900 border border-zinc-800 text-zinc-200 hover:text-white font-bold text-xs uppercase tracking-wider flex flex-col items-center justify-center gap-1 active:scale-95 transition-transform"
            aria-label="Call gym at 086516 92256"
          >
            <Phone className="w-4 h-4 text-[#F27D26]" />
            <span className="text-[10px] leading-none">Call</span>
          </a>

          {/* WhatsApp Button */}
          <a
            id="mobile-float-whatsapp"
            href={GYM_DATA.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-2 rounded-sm bg-zinc-900 border border-zinc-700 text-zinc-100 hover:text-white font-bold text-xs uppercase tracking-wider flex flex-col items-center justify-center gap-1 active:scale-95 transition-transform"
            aria-label="Chat on WhatsApp with One Edge Fitness"
          >
            <MessageCircle className="w-4 h-4 text-[#F27D26]" />
            <span className="text-[10px] leading-none">WhatsApp</span>
          </a>

          {/* Directions Button */}
          <a
            id="mobile-float-directions"
            href={GYM_DATA.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-2 rounded-sm bg-[#F27D26] hover:bg-orange-500 text-black font-bold text-xs uppercase tracking-wider flex flex-col items-center justify-center gap-1 active:scale-95 transition-transform"
            aria-label="Get directions to One Edge Fitness in Google Maps"
          >
            <Navigation className="w-4 h-4" />
            <span className="text-[10px] leading-none">Directions</span>
          </a>
        </div>
      </aside>

      {/* Desktop Floating Action Stack (visible on md+) */}
      <aside aria-label="Desktop Quick Actions" className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-2.5">
        {/* Directions Floating Button */}
        <a
          id="desktop-float-directions"
          href={GYM_DATA.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-3.5 py-2 rounded-sm bg-zinc-900/95 border border-zinc-800 hover:border-[#F27D26] text-white text-xs font-bold uppercase tracking-wider shadow-xl backdrop-blur-md hover:scale-105 transition-all"
        >
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap text-zinc-300 text-xs">
            Get Directions
          </span>
          <div className="w-7 h-7 rounded-sm bg-black/60 text-[#F27D26] flex items-center justify-center group-hover:bg-[#F27D26] group-hover:text-black transition-colors">
            <Navigation className="w-4 h-4" />
          </div>
        </a>

        {/* Call Floating Button */}
        <a
          id="desktop-float-call"
          href={GYM_DATA.telLink}
          className="group flex items-center gap-2.5 px-3.5 py-2 rounded-sm bg-zinc-900/95 border border-zinc-800 hover:border-[#F27D26] text-white text-xs font-bold uppercase tracking-wider shadow-xl backdrop-blur-md hover:scale-105 transition-all"
        >
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap text-zinc-300 text-xs">
            Call: {GYM_DATA.phoneDisplay}
          </span>
          <div className="w-7 h-7 rounded-sm bg-black/60 text-[#F27D26] flex items-center justify-center group-hover:bg-[#F27D26] group-hover:text-black transition-colors">
            <Phone className="w-4 h-4" />
          </div>
        </a>

        {/* WhatsApp Floating Button */}
        <a
          id="desktop-float-whatsapp"
          href={GYM_DATA.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-2.5 rounded-sm bg-[#F27D26] hover:bg-orange-500 text-black font-bold text-xs uppercase tracking-wider shadow-xl hover:scale-105 active:scale-95 transition-all"
        >
          <span className="text-xs font-bold tracking-wider">
            WhatsApp
          </span>
          <div className="w-6 h-6 rounded-sm bg-black/15 flex items-center justify-center">
            <MessageCircle className="w-4 h-4" />
          </div>
        </a>
      </aside>
    </>
  );
};
