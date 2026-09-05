import React, { useState } from 'react';
import { GYM_DATA } from '../data/gymData';
import { Phone, MessageCircle, Send, CheckCircle2, AlertCircle, Sparkles, Dumbbell, User, HelpCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    fitnessGoal: 'General Fitness',
    message: '',
  });

  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);

  const fitnessGoals = [
    'General Fitness',
    'Weight Loss',
    'Muscle Building',
    'Strength Training',
    'Endurance & Stamina',
    'Healthy Lifestyle',
    'Other / General Enquiry',
  ];

  const validate = () => {
    const newErrors: { name?: string; phone?: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    const cleanPhone = formData.phone.replace(/[\s-]/g, '');
    if (!cleanPhone) {
      newErrors.phone = 'Please enter your contact phone number.';
    } else if (!/^[6-9]\d{9}$/.test(cleanPhone) && !/^\d{10,11}$/.test(cleanPhone)) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      setSubmittedData({ ...formData });
    }
  };

  // Build direct WhatsApp link with prefilled enquiry message
  const getWhatsAppEnquiryLink = () => {
    const data = submittedData || formData;
    const text = encodeURIComponent(
      `Hello One Edge Fitness, my name is ${data.name || 'Visitor'}. ` +
      `Phone: ${data.phone || 'Provided'}. ` +
      `Fitness Goal: ${data.fitnessGoal}. ` +
      (data.message ? `Message: ${data.message}` : `I want to know more about gym membership and training.`)
    );
    return `https://wa.me/918651692256?text=${text}`;
  };

  return (
    <section id="contact" className="py-20 bg-[#050505] relative gym-grid-pattern border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#F27D26]" />
            <span className="text-[#F27D26] text-xs font-bold uppercase tracking-widest font-heading">
              Get In Touch
            </span>
            <span className="w-4 h-[2px] bg-[#F27D26]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase font-heading tracking-tight">
            Contact <span className="text-[#F27D26]">One Edge Fitness</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg mt-3">
            Have questions about machines, timings, or membership? Call us, drop a WhatsApp message, or send your enquiry below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Details & Quick Action Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone / WhatsApp Display Card */}
            <div className="bg-zinc-900 rounded-sm p-7 border border-zinc-800 shadow-xl space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-sm bg-black/60 border border-zinc-800 flex items-center justify-center text-[#F27D26]">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-zinc-500 font-bold">
                    Direct Contact
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white font-heading">
                    {GYM_DATA.phoneDisplay}
                  </div>
                </div>
              </div>

              <p className="text-zinc-300 text-sm leading-relaxed">
                Connect directly with the gym team for membership enquiries, morning batches, and equipment guidance.
              </p>

              {/* Required Direct Buttons: Call Now, WhatsApp Now */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  id="contact-call-now-btn"
                  href={GYM_DATA.telLink}
                  className="py-3.5 px-4 rounded-sm bg-[#F27D26] hover:bg-orange-500 text-black font-bold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>

                <a
                  id="contact-whatsapp-now-btn"
                  href={GYM_DATA.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-4 rounded-sm bg-zinc-900 hover:bg-zinc-800 text-zinc-100 hover:text-white font-bold text-xs uppercase tracking-wider border border-zinc-700 shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#F27D26]" />
                  <span>WhatsApp Now</span>
                </a>
              </div>
            </div>

            {/* Quick Summary Pill */}
            <div className="bg-zinc-900 rounded-sm p-6 border border-zinc-800 space-y-3">
              <div className="text-sm font-bold text-white flex items-center gap-2 uppercase">
                <Sparkles className="w-4 h-4 text-[#F27D26]" />
                <span>Visit Us In Person</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Singrahi Pokhara, Near Bus Stand, Sohani Patti, Buxar, Bihar – 802101
              </p>
              <div className="text-xs text-[#F27D26] font-bold uppercase pt-1">
                Open from 5:00 AM • Supportive Trainers Available
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-zinc-900 rounded-sm p-7 sm:p-9 border border-zinc-800 shadow-2xl">
              
              {!isSubmitted ? (
                <div>
                  <div className="mb-6">
                    <h3 className="text-2xl font-black text-white uppercase font-heading tracking-wide">
                      Send an Enquiry
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm mt-1">
                      Fill in your details below and our team will get back to you with membership and training information.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} noValidate className="space-y-4">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="enquiry-name" className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <div className="relative">
                        <input
                          id="enquiry-name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value });
                            if (errors.name) setErrors({ ...errors, name: undefined });
                          }}
                          placeholder="e.g. Rahul Sharma"
                          className={`w-full px-4 py-3 rounded-sm bg-black/40 border text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#F27D26] transition-all ${
                            errors.name ? 'border-rose-500/70' : 'border-zinc-800'
                          }`}
                        />
                      </div>
                      {errors.name && (
                        <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Phone Field */}
                    <div>
                      <label htmlFor="enquiry-phone" className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                        Phone / WhatsApp Number *
                      </label>
                      <div className="relative">
                        <input
                          id="enquiry-phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => {
                            setFormData({ ...formData, phone: e.target.value });
                            if (errors.phone) setErrors({ ...errors, phone: undefined });
                          }}
                          placeholder="e.g. 9876543210"
                          className={`w-full px-4 py-3 rounded-sm bg-black/40 border text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#F27D26] transition-all ${
                            errors.phone ? 'border-rose-500/70' : 'border-zinc-800'
                          }`}
                        />
                      </div>
                      {errors.phone && (
                        <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    {/* Fitness Goal Dropdown */}
                    <div>
                      <label htmlFor="enquiry-goal" className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                        Your Primary Fitness Goal
                      </label>
                      <select
                        id="enquiry-goal"
                        value={formData.fitnessGoal}
                        onChange={(e) => setFormData({ ...formData, fitnessGoal: e.target.value })}
                        className="w-full px-4 py-3 rounded-sm bg-black/40 border border-zinc-800 text-sm text-white focus:outline-none focus:border-[#F27D26] transition-all"
                      >
                        {fitnessGoals.map((goal) => (
                          <option key={goal} value={goal} className="bg-zinc-900 text-white">
                            {goal}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message Field */}
                    <div>
                      <label htmlFor="enquiry-message" className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                        Message / Questions (Optional)
                      </label>
                      <textarea
                        id="enquiry-message"
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Ask about batch timings, equipment, or affordable plans..."
                        className="w-full px-4 py-3 rounded-sm bg-black/40 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#F27D26] transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        id="enquiry-submit-btn"
                        type="submit"
                        className="w-full py-4 px-6 rounded-sm bg-[#F27D26] hover:bg-orange-500 text-black font-bold text-sm uppercase tracking-wider shadow-md active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                      >
                        <Send className="w-4 h-4" />
                        <span>Submit Enquiry</span>
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                /* Success Confirmation State */
                <div id="enquiry-success-state" className="py-8 text-center space-y-5 animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 rounded-sm bg-black/60 border border-zinc-800 text-[#F27D26] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-2xl font-black text-white uppercase font-heading">
                      Enquiry Received!
                    </h4>
                    <p className="text-sm text-zinc-300 max-w-md mx-auto">
                      Thank you, <span className="font-bold text-white">{submittedData?.name}</span>. We have recorded your interest in <span className="text-[#F27D26] font-bold">{submittedData?.fitnessGoal}</span>.
                    </p>
                  </div>

                  {/* Immediate WhatsApp Connect Button */}
                  <div className="p-4 rounded-sm bg-black/40 border border-zinc-800 max-w-md mx-auto text-left space-y-3">
                    <div className="text-xs font-bold uppercase text-[#F27D26]">
                      Want an instant reply from our team?
                    </div>
                    <a
                      id="enquiry-success-whatsapp-btn"
                      href={getWhatsAppEnquiryLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-4 rounded-sm bg-[#F27D26] hover:bg-orange-500 text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send via WhatsApp Now</span>
                    </a>
                  </div>

                  <div>
                    <button
                      id="enquiry-reset-btn"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', phone: '', fitnessGoal: 'General Fitness', message: '' });
                      }}
                      type="button"
                      className="text-xs text-zinc-400 hover:text-white uppercase font-bold underline underline-offset-4"
                    >
                      Submit another enquiry
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
