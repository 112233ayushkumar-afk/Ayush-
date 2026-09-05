import React, { useState } from 'react';
import { FACILITIES_ITEMS } from '../data/gymData';
import { Zap, Flame, Dumbbell, Activity, Maximize2, Shield, HeartHandshake, Sparkles, Check } from 'lucide-react';

export const Facilities: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Equipment', 'Space', 'Training', 'Environment'];

  const filteredFacilities = selectedCategory === 'All'
    ? FACILITIES_ITEMS
    : FACILITIES_ITEMS.filter((item) => item.category === selectedCategory);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Zap':
        return <Zap className="w-6 h-6" />;
      case 'Flame':
        return <Flame className="w-6 h-6" />;
      case 'Dumbbell':
        return <Dumbbell className="w-6 h-6" />;
      case 'Activity':
        return <Activity className="w-6 h-6" />;
      case 'Maximize2':
        return <Maximize2 className="w-6 h-6" />;
      case 'Shield':
        return <Shield className="w-6 h-6" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6" />;
      default:
        return <Dumbbell className="w-6 h-6" />;
    }
  };

  return (
    <section id="facilities" className="py-20 bg-[#0A0A0A] relative border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#F27D26]" />
              <span className="text-[#F27D26] text-xs font-bold uppercase tracking-widest font-heading">
                Gym Equipment & Facilities
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase font-heading tracking-tight">
              Our <span className="text-[#F27D26]">Facilities</span>
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg mt-3">
              Designed with a wide variety of quality machines, spacious layouts, and clean workout zones in Sohani Patti, Buxar.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`facility-filter-${cat.toLowerCase()}`}
                onClick={() => setSelectedCategory(cat)}
                type="button"
                className={`px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#F27D26] text-black shadow-sm'
                    : 'bg-zinc-900 text-zinc-300 hover:bg-zinc-800 hover:text-white border border-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 8 Facilities Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredFacilities.map((item) => (
            <div
              key={item.id}
              id={`facility-card-${item.id}`}
              className="bg-zinc-900 border border-zinc-800 rounded-sm p-6 relative group hover:border-[#F27D26] transition-all flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Category & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-sm bg-black/60 border border-zinc-800 text-[#F27D26] flex items-center justify-center group-hover:bg-[#F27D26] group-hover:text-black transition-all">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-sm bg-black/40 text-zinc-400 border border-zinc-800">
                    {item.category}
                  </span>
                </div>

                {/* Facility Name */}
                <h3 className="text-lg font-bold text-white mb-2 font-heading tracking-wide group-hover:text-[#F27D26] transition-colors uppercase">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Status footer */}
              <div className="mt-5 pt-3 border-t border-zinc-800 flex items-center gap-2 text-xs text-[#F27D26] font-medium">
                <span className="w-2 h-2 bg-[#F27D26] shrink-0" />
                <span className="uppercase text-[11px] font-bold tracking-wider">Available for all members</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Facility Note Banner */}
        <div className="mt-12 p-6 rounded-sm bg-zinc-900 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-zinc-300 text-center sm:text-left">
            <span className="font-bold text-white uppercase tracking-wide">Looking for specific equipment or training setup?</span>
            <span className="block sm:inline sm:ml-2 text-zinc-400">
              Visit our gym near Bus Stand, Sohani Patti or contact our trainers for any questions.
            </span>
          </div>
          <a
            id="facility-ask-btn"
            href="#contact"
            className="shrink-0 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-black bg-[#F27D26] hover:bg-orange-500 rounded-sm shadow-sm transition-colors"
          >
            Visit Gym
          </a>
        </div>

      </div>
    </section>
  );
};
