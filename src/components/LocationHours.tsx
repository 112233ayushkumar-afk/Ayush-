import React from 'react';
import { GYM_DATA } from '../data/gymData';
import { MapPin, Navigation, Phone, MessageCircle, Clock, Calendar, ShieldCheck, ExternalLink } from 'lucide-react';

export const LocationHours: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-[#0A0A0A] relative border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#F27D26]" />
            <span className="text-[#F27D26] text-xs font-bold uppercase tracking-widest font-heading">
              Location & Hours
            </span>
            <span className="w-4 h-[2px] bg-[#F27D26]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase font-heading tracking-tight">
            Find Us in <span className="text-[#F27D26]">Sohani Patti, Buxar</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg mt-3">
            Conveniently situated near the Bus Stand for quick and easy access from across Buxar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Address Card & Opening Hours */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            {/* Primary Address Card */}
            <div className="bg-zinc-900 rounded-sm p-7 border border-zinc-800 shadow-xl space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-sm bg-black/60 border border-zinc-800 flex items-center justify-center text-[#F27D26] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-[#F27D26] font-heading">
                    {GYM_DATA.hindiName}
                  </span>
                  <h3 className="text-2xl font-black text-white uppercase font-heading tracking-wide">
                    {GYM_DATA.name}
                  </h3>
                </div>
              </div>

              {/* Exact Address formatted */}
              <div className="p-4 rounded-sm bg-black/40 border border-zinc-800 space-y-2">
                <div className="text-xs uppercase tracking-widest text-zinc-500 font-bold">
                  Physical Address
                </div>
                <p className="text-base text-zinc-100 font-medium leading-relaxed">
                  SINGRAHI POKHARA, Near Bus Stand, Sohani Patti, Buxar, Bihar – 802101
                </p>
                <div className="flex items-center gap-2 pt-1 text-xs text-[#F27D26]">
                  <ShieldCheck className="w-4 h-4 text-[#F27D26] shrink-0" />
                  <span className="font-semibold">Prominent Landmark: Near Bus Stand</span>
                </div>
              </div>

              {/* Action Buttons: Get Directions, Call Gym, WhatsApp */}
              <div className="space-y-2.5 pt-1">
                <a
                  id="location-get-directions-btn"
                  href={GYM_DATA.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-sm bg-[#F27D26] hover:bg-orange-500 text-black font-bold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    id="location-call-btn"
                    href={GYM_DATA.telLink}
                    className="py-3 px-3 rounded-sm bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-wider border border-zinc-800 transition-all flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-[#F27D26]" />
                    <span>Call Gym</span>
                  </a>

                  <a
                    id="location-whatsapp-btn"
                    href={GYM_DATA.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-3 rounded-sm bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white font-bold text-xs uppercase tracking-wider border border-zinc-700 transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-[#F27D26]" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div id="opening-hours-card" className="bg-zinc-900 rounded-sm p-6 border border-zinc-800 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-sm bg-black/60 border border-zinc-800 flex items-center justify-center text-green-500">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-black uppercase text-white font-heading">
                      Opening Hours
                    </h4>
                    <span className="text-xs text-green-500 font-bold">Daily Early Start</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs uppercase px-2.5 py-1 rounded-sm bg-black/40 border border-zinc-800 text-green-400 font-bold">
                    Early Sessions
                  </span>
                </div>
              </div>

              {/* Exact requirement: Opens at 5:00 AM */}
              <div className="p-4 rounded-sm bg-black/40 border border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Calendar className="w-4 h-4 text-[#F27D26]" />
                  <span className="text-sm font-bold uppercase text-white">Daily Workout Schedule</span>
                </div>
                <span className="text-sm font-black text-[#F27D26] font-heading">
                  Opens at 5:00 AM
                </span>
              </div>

              {/* Exact requirement for schedule notice */}
              <div className="p-3 rounded-sm bg-black/30 border border-zinc-800 text-xs text-zinc-300">
                <span className="text-[#F27D26] font-bold">Note: </span>
                Contact the gym for complete opening-hour details.
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Embed & Interactive Card */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-zinc-900 rounded-sm overflow-hidden border border-zinc-800 shadow-xl flex-1 flex flex-col">
              
              {/* Map Top Bar */}
              <div className="p-4 bg-black/60 border-b border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="font-bold uppercase text-white">Google Maps Pin</span>
                  <span className="text-zinc-600">•</span>
                  <span>Sohani Patti, Buxar</span>
                </div>

                <a
                  id="map-external-open-btn"
                  href={GYM_DATA.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#F27D26] hover:text-orange-400 font-bold uppercase tracking-wider flex items-center gap-1"
                >
                  <span>Open in Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Embedded Google Maps iFrame with fallback */}
              <div className="relative flex-1 min-h-[360px] sm:min-h-[420px] w-full bg-black">
                <iframe
                  title="One Edge Fitness Location Map"
                  src={GYM_DATA.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  className="w-full h-full border-0 filter contrast-125 opacity-90 hover:opacity-100 transition-opacity"
                  loading="lazy"
                  allowFullScreen={false}
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Floating Map Action Pill */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#0A0A0A]/95 backdrop-blur-md border border-zinc-800 p-3 rounded-sm shadow-2xl flex items-center justify-between gap-4">
                  <div className="text-xs">
                    <div className="font-bold text-white uppercase">One Edge Fitness</div>
                    <div className="text-zinc-400">Near Bus Stand, Sohani Patti</div>
                  </div>
                  <a
                    id="map-overlay-directions"
                    href={GYM_DATA.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-sm bg-[#F27D26] hover:bg-orange-500 text-black text-xs font-bold uppercase tracking-wider shrink-0 flex items-center gap-1.5 transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Navigate</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
