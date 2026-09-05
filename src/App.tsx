/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { WhyChoose } from './components/WhyChoose';
import { Facilities } from './components/Facilities';
import { Training } from './components/Training';
import { Reviews } from './components/Reviews';
import { Membership } from './components/Membership';
import { LocationHours } from './components/LocationHours';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const scrollToSection = useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 flex flex-col relative selection:bg-[#F27D26] selection:text-black font-sans">
      {/* Sticky Responsive Navigation Bar */}
      <Navbar onNavigate={scrollToSection} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onJoinClick={() => scrollToSection('contact')} />

        {/* About Section */}
        <About onLearnMore={() => scrollToSection('facilities')} />

        {/* Why Choose One Edge Fitness */}
        <WhyChoose />

        {/* Gym Facilities */}
        <Facilities />

        {/* Training Section */}
        <Training />

        {/* Reviews Section */}
        <Reviews />

        {/* Membership Section */}
        <Membership onContactClick={() => scrollToSection('contact')} />

        {/* Location & Opening Hours */}
        <LocationHours />

        {/* Contact & Enquiry Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Floating Quick Action Buttons (Call, WhatsApp, Directions) */}
      <FloatingActions />
    </div>
  );
}
