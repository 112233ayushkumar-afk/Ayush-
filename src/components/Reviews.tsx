import React from 'react';
import { REVIEW_THEMES, GYM_DATA } from '../data/gymData';
import { Star, Award, CheckCircle2, ShieldCheck, Dumbbell, Target, Maximize2, Sparkles, ThumbsUp } from 'lucide-react';

export const Reviews: React.FC = () => {
  const getThemeIcon = (name: string) => {
    switch (name) {
      case 'Award':
        return <Award className="w-5 h-5 text-amber-400" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-emerald-400" />;
      case 'Dumbbell':
        return <Dumbbell className="w-5 h-5 text-amber-400" />;
      case 'Target':
        return <Target className="w-5 h-5 text-amber-400" />;
      case 'Maximize2':
        return <Maximize2 className="w-5 h-5 text-blue-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-amber-400" />;
      case 'ThumbsUp':
        return <ThumbsUp className="w-5 h-5 text-amber-400" />;
      default:
        return <Star className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="reviews" className="py-20 bg-[#0A0A0A] relative border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Rating Card */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#F27D26]" />
              <span className="text-[#F27D26] text-xs font-bold uppercase tracking-widest font-heading">
                Verified Member Feedback
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase font-heading tracking-tight">
              What <span className="text-[#F27D26]">Members Say</span>
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg mt-3 max-w-2xl">
              Highlights and recurring themes summarized from Google Reviews for One Edge Fitness in Buxar.
            </p>
          </div>

          {/* 5.0 Star Rating Badge Card */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-sm p-6 sm:p-7 flex flex-col sm:flex-row items-center gap-6 shadow-2xl shrink-0">
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-1 text-4xl sm:text-5xl font-black text-white font-heading">
                <span>5.0</span>
                <span className="text-[#F27D26]">★</span>
              </div>
              <div className="flex text-[#F27D26] mt-1 justify-center sm:justify-start">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#F27D26] text-[#F27D26]" />
                ))}
              </div>
            </div>

            <div className="h-12 w-px bg-zinc-800 hidden sm:block" />

            <div className="text-center sm:text-left">
              <div className="text-base font-bold text-white uppercase">36 Google Reviews</div>
              <div className="text-xs text-[#F27D26] font-bold">100% Top-Rated Fitness Center</div>
              <div className="text-xs text-zinc-400 mt-1">Sohani Patti, Buxar, Bihar</div>
            </div>
          </div>
        </div>

        {/* Summarized Feedback Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEW_THEMES.map((themeItem) => (
            <div
              key={themeItem.id}
              id={`review-theme-${themeItem.id}`}
              className="bg-zinc-900 border border-zinc-800 rounded-sm p-6 flex flex-col justify-between group hover:border-[#F27D26] shadow-xl transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-sm bg-black/60 border border-zinc-800 flex items-center justify-center text-[#F27D26]">
                    {getThemeIcon(themeItem.iconName)}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-sm bg-black/40 text-zinc-300 border border-zinc-800">
                    {themeItem.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 font-heading tracking-wide group-hover:text-[#F27D26] uppercase transition-colors">
                  {themeItem.theme}
                </h3>

                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                  {themeItem.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-zinc-800 flex items-center gap-1.5 text-xs text-zinc-400">
                <div className="flex text-[#F27D26] scale-90">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#F27D26] text-[#F27D26]" />
                  ))}
                </div>
                <span className="text-[11px] text-zinc-500">Google Review Summary</span>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Note Box */}
        <div className="mt-12 text-center">
          <p className="text-xs text-zinc-500 max-w-xl mx-auto">
            * Review highlights are derived directly from verified Google user feedback summaries for One Edge Fitness at Singrahi Pokhara, Near Bus Stand, Sohani Patti, Buxar.
          </p>
          <div className="mt-4">
            <a
              id="reviews-view-maps-btn"
              href={GYM_DATA.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F27D26] hover:text-orange-400 underline underline-offset-4"
            >
              <span>View Location & Reviews on Google Maps</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
