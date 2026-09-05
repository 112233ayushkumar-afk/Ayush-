import React, { useState, useEffect } from 'react';
import { GYM_DATA, ABOUT_TEXT } from '../data/gymData';
import { Award, Dumbbell, Users, HeartHandshake, MapPin, Clock, ArrowRight, ExternalLink, Maximize2, X, Sparkles, Star } from 'lucide-react';
import facilityImg from '../assets/images/gym_facility_zone_1788640793299.jpg';
import googleMapsPhoto from '../assets/images/one_edge_google_maps_actual.jpg';

interface AboutProps {
  onLearnMore?: () => void;
}

export const About: React.FC<AboutProps> = ({ onLearnMore }) => {
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  const galleryImages = [
    {
      id: 'google-maps-session',
      title: 'Actual Gym Session & Workout Floor',
      subtitle: 'Verified Photo from One Edge Fitness Google Maps Listing',
      badge: 'Google Maps Verified Photo',
      src: googleMapsPhoto,
      alt: 'One Edge Fitness gym workout session and floor in Buxar from Google Maps listing',
      sourceUrl: GYM_DATA.googleMapsUrl,
      tag: 'Live Session & Floor',
      isGoogleMaps: true,
    },
    {
      id: 'facility-zone',
      title: 'Modern Equipment & Spacious Layout',
      subtitle: 'Wide Variety of Machines, Cardio & Free Weights',
      badge: 'Facility Overview',
      src: facilityImg,
      alt: 'One Edge Fitness modern equipment and workout facility in Buxar',
      sourceUrl: null,
      tag: 'Facility Zone',
      isGoogleMaps: false,
    },
  ];

  const currentImg = galleryImages[activeImageIndex];

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsLightboxOpen(false);
      }
    };
    if (isLightboxOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen]);

  return (
    <section id="about" className="py-20 bg-[#0A0A0A] relative border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Showcase featuring Google Maps Photo */}
          <div className="lg:col-span-6">
            <div className="relative">
              {/* Main Active Image Box */}
              <div 
                id="about-visual-container"
                onClick={() => setIsLightboxOpen(true)}
                className="relative rounded-sm overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-950 group cursor-pointer transition-all hover:border-[#F27D26]"
              >
                <img
                  src={currentImg.src}
                  alt={currentImg.alt}
                  className="w-full h-[420px] sm:h-[480px] object-cover object-center filter brightness-95 contrast-105 group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent opacity-90 pointer-events-none" />

                {/* Top Badge: Verified on Google Maps */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-black/85 backdrop-blur-md border border-zinc-700 text-[#F27D26] text-xs font-bold uppercase tracking-wider shadow-lg">
                    <Sparkles className="w-3.5 h-3.5 text-[#F27D26]" />
                    <span>{currentImg.badge}</span>
                  </div>
                </div>

                {/* Top Right: Fullscreen / Expand Trigger */}
                <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsLightboxOpen(true);
                    }}
                    className="w-8 h-8 rounded-sm bg-black/80 backdrop-blur-md border border-zinc-700 text-zinc-300 hover:text-white hover:border-[#F27D26] flex items-center justify-center transition-colors shadow-lg"
                    aria-label="Expand photo"
                    title="Click to zoom in"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Overlay Stat Pill */}
                <div className="absolute bottom-4 left-4 right-4 z-10 bg-[#0A0A0A]/95 backdrop-blur-md border border-zinc-800 rounded-sm p-4 shadow-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-sm bg-[#F27D26]/10 border border-[#F27D26]/30 flex items-center justify-center text-[#F27D26] shrink-0">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm sm:text-base font-bold text-white uppercase font-heading">
                          {currentImg.title}
                        </div>
                        <div className="text-xs text-zinc-400 flex items-center gap-1.5 mt-0.5">
                          <span>{currentImg.subtitle}</span>
                        </div>
                      </div>
                    </div>

                    {currentImg.sourceUrl && (
                      <a
                        href={currentImg.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-[11px] font-bold uppercase text-[#F27D26] shrink-0 transition-colors self-start sm:self-auto"
                      >
                        <span>View on Maps</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Floating Location Badge */}
              <div className="hidden sm:flex items-center gap-2 absolute -top-3.5 -right-3.5 bg-zinc-900 border border-zinc-800 rounded-sm py-1.5 px-3 shadow-xl text-xs text-zinc-300 z-20">
                <MapPin className="w-3.5 h-3.5 text-[#F27D26]" />
                <span>Sohani Patti, Buxar (Near Bus Stand)</span>
              </div>
            </div>

            {/* Photo Selector Strip */}
            <div className="grid grid-cols-2 gap-3 mt-3">
              {galleryImages.map((item, idx) => {
                const isActive = activeImageIndex === idx;
                return (
                  <button
                    key={item.id}
                    id={`about-photo-toggle-${idx}`}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`p-2.5 rounded-sm border text-left flex items-center gap-3 transition-all ${
                      isActive
                        ? 'bg-zinc-900 border-[#F27D26] shadow-md ring-1 ring-[#F27D26]/40'
                        : 'bg-black/60 border-zinc-800 hover:border-zinc-700 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={item.src}
                      alt={item.tag}
                      className="w-12 h-12 rounded-sm object-cover shrink-0 border border-zinc-800"
                      referrerPolicy="no-referrer"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-bold text-white uppercase truncate flex items-center gap-1.5">
                        {item.isGoogleMaps && <span className="w-2 h-2 bg-[#F27D26] rounded-full shrink-0" />}
                        <span className="truncate">{item.tag}</span>
                      </div>
                      <div className="text-[11px] text-zinc-400 truncate mt-0.5">
                        {item.isGoogleMaps ? 'Google Maps Photo' : 'Facility Equipment'}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Google Maps link reminder */}
            <div className="mt-3 flex items-center justify-between text-xs text-zinc-400 px-1">
              <span className="flex items-center gap-1 text-zinc-500">
                <Star className="w-3 h-3 fill-[#F27D26] text-[#F27D26]" />
                <span>5.0 Rating • 36 Google Reviews</span>
              </span>
              <a
                href={GYM_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F27D26] hover:underline flex items-center gap-1 font-bold uppercase text-[11px]"
              >
                <span>Google Maps Profile</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-4 h-[2px] bg-[#F27D26]" />
                <span className="text-xs sm:text-sm uppercase tracking-widest font-bold text-[#F27D26] font-heading">
                  About Our Gym • {GYM_DATA.hindiName}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase font-heading tracking-tight">
                A Modern & Spacious Fitness Center in Buxar
              </h2>
            </div>

            {/* Verbatim narrative */}
            <div className="space-y-4 text-zinc-300 text-base sm:text-lg leading-relaxed font-normal">
              <p className="border-l-2 border-[#F27D26] pl-4 py-0.5 text-zinc-200">
                {ABOUT_TEXT.p1}
              </p>
              <p>
                {ABOUT_TEXT.p2}
              </p>
              <p className="text-zinc-200 font-medium">
                {ABOUT_TEXT.p3}
              </p>
            </div>

            {/* Key Pillars */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-black/40 border border-zinc-800 p-3.5 rounded-sm flex items-start gap-3">
                <Users className="w-5 h-5 text-[#F27D26] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-white uppercase">Supportive Trainers</div>
                  <div className="text-xs text-zinc-400 mt-0.5">Individual guidance & personal attention</div>
                </div>
              </div>

              <div className="bg-black/40 border border-zinc-800 p-3.5 rounded-sm flex items-start gap-3">
                <Dumbbell className="w-5 h-5 text-[#F27D26] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-white uppercase">Modern Equipment</div>
                  <div className="text-xs text-zinc-400 mt-0.5">Machines, cardio & free weights</div>
                </div>
              </div>

              <div className="bg-black/40 border border-zinc-800 p-3.5 rounded-sm flex items-start gap-3">
                <Clock className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-white uppercase">Early 5:00 AM Open</div>
                  <div className="text-xs text-zinc-400 mt-0.5">Early morning fitness routines</div>
                </div>
              </div>

              <div className="bg-black/40 border border-zinc-800 p-3.5 rounded-sm flex items-start gap-3">
                <HeartHandshake className="w-5 h-5 text-[#F27D26] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-white uppercase">Affordable Plans</div>
                  <div className="text-xs text-zinc-400 mt-0.5">Quality fitness within budget</div>
                </div>
              </div>
            </div>

            {/* Quick Action & Opening Status */}
            <div className="pt-4 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase text-zinc-500 block mb-1 tracking-wider">Opening Status</span>
                <span className="text-sm font-bold text-green-500 flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Opens at 5:00 AM Daily
                </span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  id="about-contact-btn"
                  href="#contact"
                  className="bg-[#F27D26] text-black font-bold px-6 py-2.5 rounded-sm text-xs uppercase tracking-wider transition-all hover:bg-orange-500 shadow-sm flex items-center gap-2"
                >
                  <span>Inquire Membership</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  id="about-whatsapp-btn"
                  href={GYM_DATA.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-sm border border-zinc-700 hover:border-white text-zinc-200 hover:text-white text-xs uppercase font-bold tracking-wider flex items-center gap-2 transition-all bg-zinc-900"
                >
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {isLightboxOpen && (
        <div 
          id="photo-lightbox-modal"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-6"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Top Bar */}
          <div 
            className="w-full max-w-5xl flex items-center justify-between mb-4 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-zinc-900 border border-zinc-800 text-[#F27D26] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                {currentImg.badge}
              </span>
              <span className="text-white font-bold text-sm hidden sm:inline uppercase">
                {currentImg.title}
              </span>
            </div>

            <div className="flex items-center gap-3">
              {currentImg.sourceUrl && (
                <a
                  href={currentImg.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-sm bg-[#F27D26] hover:bg-orange-500 text-black text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                className="w-9 h-9 rounded-sm bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white flex items-center justify-center transition-colors"
                aria-label="Close photo preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Large Image Container */}
          <div 
            className="relative max-w-5xl max-h-[82vh] rounded-sm overflow-hidden border border-zinc-800 bg-black shadow-2xl flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentImg.src}
              alt={currentImg.alt}
              className="max-w-full max-h-[80vh] object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Subtitle & Caption */}
          <div 
            className="mt-3 text-center text-xs text-zinc-400 max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-white font-medium">{currentImg.title}</span> • {currentImg.subtitle}
          </div>
        </div>
      )}
    </section>
  );
};

