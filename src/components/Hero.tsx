import React from 'react';
import { GYM_DATA } from '../data/gymData';
import { Star, Phone, MessageCircle, Navigation, ArrowRight, ShieldCheck, Clock, MapPin } from 'lucide-react';
import heroImg from '../assets/images/gym_hero_interior_1788640778818.jpg';

interface HeroProps {
  onJoinClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onJoinClick }) => {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#050505]">
      {/* Background Image with Deep Dark Overlay & Professional Polish Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="One Edge Fitness Gym Interior"
          className="w-full h-full object-cover object-center filter brightness-[0.35] contrast-125"
          referrerPolicy="no-referrer"
        />
        {/* Architectural gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/85 to-[#050505]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#F27D26]/10 via-transparent to-black/80" />
      </div>

      {/* Subtle Geometric Graphic Accent from Design HTML */}
      <div className="absolute -bottom-12 -right-12 opacity-10 pointer-events-none hidden md:block">
        <div className="w-96 h-96 border-[24px] border-[#F27D26] rounded-full" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-6 sm:mt-10">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
          <div className="bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 flex items-center gap-2 shadow-sm">
            <span className="text-[#F27D26] text-xs font-bold flex items-center gap-1">
              ⭐ 5.0 Rating
            </span>
            <span className="w-1 h-1 bg-zinc-600 rounded-full" />
            <span className="text-zinc-300 text-[10px] uppercase font-bold text-nowrap">36 Reviews</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 bg-white/5 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-zinc-400 text-xs font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-[#F27D26] shrink-0" />
            <span>Modern Equipment • Supportive Trainers • Spacious Environment</span>
          </div>
        </div>

        {/* Hindi & English Brand Typography */}
        <div className="mb-4">
          <p className="text-[#F27D26] font-bold tracking-widest uppercase text-xs sm:text-sm font-heading mb-1">
            {GYM_DATA.hindiName}
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white font-heading leading-none">
            ONE EDGE <span className="text-[#F27D26]">FITNESS</span>
          </h1>
        </div>

        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tight text-zinc-100 mb-4 font-heading">
          Your Strength. Your Fitness. <span className="text-[#F27D26]">Your Edge.</span>
        </h2>

        {/* Supporting text in theme's italicized high-contrast treatment */}
        <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-8 font-medium italic leading-relaxed">
          “{GYM_DATA.tagline}”
        </p>

        {/* Status Callouts */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10 text-xs font-semibold">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-zinc-900/90 border border-zinc-800 text-zinc-200">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-green-500 font-bold">Opens at 5:00 AM</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-zinc-900/90 border border-zinc-800 text-zinc-300">
            <MapPin className="w-3.5 h-3.5 text-[#F27D26]" />
            <span>SINGRAHI POKHARA, Near Bus Stand, Sohani Patti, Buxar</span>
          </div>
        </div>

        {/* CTA Buttons - Professional Polish Treatment */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-3xl mx-auto">
          {/* Join Now */}
          <button
            id="hero-cta-join"
            onClick={onJoinClick}
            type="button"
            className="w-full sm:w-auto bg-[#F27D26] hover:bg-orange-500 text-black font-bold px-8 py-3.5 rounded-sm text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#F27D26]/20"
          >
            <span>Join Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Call Now */}
          <a
            id="hero-cta-call"
            href={GYM_DATA.telLink}
            className="w-full sm:w-auto bg-white text-black font-bold px-8 py-3.5 rounded-sm text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors shadow-md"
          >
            <Phone className="w-4 h-4 text-black" />
            <span>Call Now</span>
          </a>

          {/* WhatsApp Us */}
          <a
            id="hero-cta-whatsapp"
            href={GYM_DATA.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto border border-zinc-600 hover:border-white text-zinc-100 font-bold px-8 py-3.5 rounded-sm text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2 bg-black/40"
          >
            <MessageCircle className="w-4 h-4 text-[#F27D26]" />
            <span>WhatsApp Us</span>
          </a>

          {/* Get Directions */}
          <a
            id="hero-cta-directions"
            href={GYM_DATA.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto border border-zinc-800 hover:border-zinc-500 text-zinc-300 hover:text-white font-bold px-6 py-3.5 rounded-sm text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2 bg-zinc-900/60"
          >
            <Navigation className="w-4 h-4 text-[#F27D26]" />
            <span>Get Directions</span>
          </a>
        </div>
      </div>
    </section>
  );
};
