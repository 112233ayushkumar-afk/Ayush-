import React from 'react';
import { WHY_CHOOSE_ITEMS } from '../data/gymData';
import { Users, Dumbbell, Maximize2, Sparkles, ShieldCheck, Target, CheckCircle } from 'lucide-react';

export const WhyChoose: React.FC = () => {
  // Map icon names to Lucide icons
  const getIcon = (name: string) => {
    switch (name) {
      case 'Users':
        return <Users className="w-6 h-6" />;
      case 'Dumbbell':
        return <Dumbbell className="w-6 h-6" />;
      case 'Maximize2':
        return <Maximize2 className="w-6 h-6" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6" />;
      case 'Target':
        return <Target className="w-6 h-6" />;
      default:
        return <CheckCircle className="w-6 h-6" />;
    }
  };

  return (
    <section id="why-us" className="py-20 bg-[#050505] relative gym-grid-pattern border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#F27D26]" />
            <span className="text-[#F27D26] text-xs font-bold uppercase tracking-widest font-heading">
              Why Choose One Edge Fitness
            </span>
            <span className="w-4 h-[2px] bg-[#F27D26]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase font-heading tracking-tight">
            Built for Your <span className="text-[#F27D26]">Fitness Journey</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg mt-3">
            A premier athletic environment in Sohani Patti, Buxar combining quality gear, thoughtful trainers, and community encouragement.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_ITEMS.map((item, idx) => (
            <div
              key={item.id}
              id={`why-choose-card-${item.id}`}
              className="bg-zinc-900 border border-zinc-800 rounded-sm p-6 relative group hover:border-[#F27D26] transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Header with Icon and Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-sm bg-black/60 border border-zinc-800 text-[#F27D26] flex items-center justify-center group-hover:bg-[#F27D26] group-hover:text-black transition-all duration-300">
                    {getIcon(item.iconName)}
                  </div>
                  {item.highlightBadge && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm bg-black/40 border border-zinc-800 text-zinc-300">
                      {item.highlightBadge}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 font-heading tracking-wide group-hover:text-[#F27D26] transition-colors uppercase">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Subtle Index Accent */}
              <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-500">
                <span className="font-mono text-[#F27D26] font-bold">0{idx + 1}</span>
                <span className="text-zinc-400 group-hover:text-[#F27D26] transition-colors font-medium uppercase tracking-wider text-[11px]">One Edge Standard</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
