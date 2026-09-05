import React from 'react';
import { TRAINING_SECTION, GYM_DATA } from '../data/gymData';
import { UserCheck, LifeBuoy, Compass, Lightbulb, CheckCircle2, MessageCircle, Phone } from 'lucide-react';

export const Training: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'UserCheck':
        return <UserCheck className="w-6 h-6" />;
      case 'LifeBuoy':
        return <LifeBuoy className="w-6 h-6" />;
      case 'Compass':
        return <Compass className="w-6 h-6" />;
      case 'Lightbulb':
        return <Lightbulb className="w-6 h-6" />;
      default:
        return <CheckCircle2 className="w-6 h-6" />;
    }
  };

  return (
    <section id="training" className="py-20 bg-[#050505] relative gym-grid-pattern border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#F27D26]" />
            <span className="text-[#F27D26] text-xs font-bold uppercase tracking-widest font-heading">
              Training & Support
            </span>
            <span className="w-4 h-[2px] bg-[#F27D26]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase font-heading tracking-tight">
            Train Smarter. <span className="text-[#F27D26]">Get Stronger.</span>
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg mt-4 leading-relaxed">
            At One Edge Fitness, our trainers are supportive and provide individual attention and useful training tips to help you build confidence, maintain proper technique, and work steadily toward your personal fitness goals.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRAINING_SECTION.pillars.map((pillar, index) => (
            <div
              key={pillar.id}
              id={`training-pillar-${pillar.id}`}
              className="bg-zinc-900 border border-zinc-800 rounded-sm p-6 relative group hover:border-[#F27D26] transition-all flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Icon header */}
                <div className="w-12 h-12 rounded-sm bg-black/60 border border-zinc-800 text-[#F27D26] flex items-center justify-center mb-5 group-hover:bg-[#F27D26] group-hover:text-black transition-all">
                  {getIcon(pillar.iconName)}
                </div>

                <div className="text-[11px] font-mono font-bold text-[#F27D26] mb-1">
                  PILLAR 0{index + 1}
                </div>

                {/* Pillar Title */}
                <h3 className="text-xl font-bold text-white mb-2.5 font-heading tracking-wide group-hover:text-[#F27D26] transition-colors uppercase">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-300 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom tag */}
              <div className="mt-6 pt-3 border-t border-zinc-800 flex items-center gap-2 text-xs text-zinc-400">
                <span className="w-1.5 h-1.5 bg-[#F27D26] shrink-0" />
                <span className="uppercase text-[11px] font-semibold text-zinc-300">Knowledgeable Guidance</span>
              </div>
            </div>
          ))}
        </div>

        {/* Motivational Callout Box */}
        <div className="mt-14 rounded-sm bg-[#0A0A0A] border border-zinc-800 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-lg sm:text-xl font-black uppercase text-white font-heading tracking-wide">
              Ready to begin your training at One Edge Fitness?
            </div>
            <p className="text-zinc-400 text-sm max-w-xl">
              Connect directly with the gym team to learn about daily workout timings, trainer availability, and beginner support.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              id="training-call-action"
              href={GYM_DATA.telLink}
              className="px-5 py-2.5 rounded-sm bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-wider border border-zinc-700 flex items-center gap-2 transition-all"
            >
              <Phone className="w-4 h-4 text-[#F27D26]" />
              <span>Call: {GYM_DATA.phoneDisplay}</span>
            </a>
            <a
              id="training-whatsapp-action"
              href={GYM_DATA.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-sm bg-[#F27D26] hover:bg-orange-500 text-black font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Trainer</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
