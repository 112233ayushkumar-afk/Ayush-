import React from 'react';
import { GYM_DATA } from '../data/gymData';
import { Sparkles, Check, Phone, MessageCircle, ArrowRight, ShieldCheck, Dumbbell, Users } from 'lucide-react';

interface MembershipProps {
  onContactClick: () => void;
}

export const Membership: React.FC<MembershipProps> = ({ onContactClick }) => {
  const planInclusions = [
    'Access to Modern Gym Machines & Selectorized Stations',
    'Free Weights & Barbell Strength Zone',
    'Cardio Equipment for Stamina & Conditioning',
    'Supportive Trainer Guidance & Workout Tips',
    'Spacious & Well-Ventilated Workout Environment',
    'Clean, Hygienic & Disciplined Atmosphere',
    'Morning & Evening Session Flexibility',
    'Assistance on Proper Form & Safe Posture',
  ];

  return (
    <section id="membership" className="py-20 bg-[#050505] relative gym-grid-pattern border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#F27D26]" />
            <span className="text-[#F27D26] text-xs font-bold uppercase tracking-widest font-heading">
              Simple & Transparent
            </span>
            <span className="w-4 h-[2px] bg-[#F27D26]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase font-heading tracking-tight">
            Affordable <span className="text-[#F27D26]">Membership Plans</span>
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg mt-3">
            Get a premium workout experience with affordable membership options.
          </p>
        </div>

        {/* Highlighted Membership Value Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-zinc-900 border border-zinc-800 rounded-sm p-8 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              {/* Left Column */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-black/50 border border-zinc-800 text-[#F27D26] text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-[#F27D26]" />
                  <span>One Edge Fitness Pass</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black uppercase text-white font-heading tracking-wide">
                  Complete Gym Access & Trainer Support
                </h3>

                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  We believe fitness should be accessible to everyone in Buxar. Our memberships are structured to provide maximum value with full access to modern machines, cardio, and free weights, paired with knowledgeable guidance.
                </p>

                {/* Features List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {planInclusions.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <span className="w-1.5 h-1.5 bg-[#F27D26] shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Pricing Transparency & CTAs */}
              <div className="lg:col-span-5 bg-black/60 backdrop-blur-md rounded-sm p-6 border border-zinc-800 text-center space-y-5">
                <div className="space-y-1">
                  <div className="text-xs uppercase tracking-widest text-[#F27D26] font-bold">
                    Pricing Transparency
                  </div>
                  <div className="text-xl sm:text-2xl font-black uppercase text-white font-heading">
                    Affordable Rates
                  </div>
                  <p className="text-xs text-zinc-400">
                    Contact the gym directly for the latest monthly, quarterly, and annual plan details.
                  </p>
                </div>

                <div className="p-3.5 rounded-sm bg-zinc-900 border border-zinc-800 text-xs text-zinc-200 space-y-1">
                  <div className="font-bold flex items-center justify-center gap-1.5 text-white uppercase">
                    <ShieldCheck className="w-4 h-4 text-[#F27D26]" />
                    <span>No Hidden Fees • Flexible Plans</span>
                  </div>
                  <div className="text-zinc-400 text-[11px]">
                    Special rates for students and early joiners
                  </div>
                </div>

                {/* Primary & Secondary CTAs */}
                <div className="space-y-2.5 pt-2">
                  <button
                    id="membership-contact-cta"
                    onClick={onContactClick}
                    type="button"
                    className="w-full py-3.5 px-4 rounded-sm bg-[#F27D26] hover:bg-orange-500 text-black font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <span>Contact For Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    id="membership-whatsapp-cta"
                    href={GYM_DATA.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-sm bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white font-bold text-xs uppercase tracking-wider border border-zinc-700 transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-[#F27D26]" />
                    <span>WhatsApp for Membership</span>
                  </a>

                  <a
                    id="membership-call-cta"
                    href={GYM_DATA.telLink}
                    className="w-full py-2.5 px-4 rounded-sm bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white font-bold text-xs uppercase tracking-wider border border-zinc-800 transition-all flex items-center justify-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#F27D26]" />
                    <span>Call: {GYM_DATA.phoneDisplay}</span>
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
