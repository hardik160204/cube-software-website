import React from "react";
import { MapPin, Phone, Clock, Building, Send, ShieldCheck } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Top Grid: Info & Form - Changed to items-stretch so both columns match height */}
        <div className="grid lg:grid-cols-2 gap-16 items-stretch">
          
          {/* LEFT COLUMN: Contact Information */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="text-blue-700 text-sm font-bold tracking-widest uppercase mb-4">
                — Contact Us
              </div>
              <h2 className="font-heading font-black text-4xl sm:text-5xl text-slate-900 leading-[1.1] tracking-tight mb-4">
                Let's build your <br className="hidden sm:block" />
                communication stack
              </h2>
              <p className="text-slate-600 text-lg mb-10 max-w-md leading-relaxed">
                Book a demo or ask us anything — our telephony experts respond within one business day.
              </p>
            </div>

            <div className="space-y-6">
              {/* India Office */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 mt-1">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">India Office</h4>
                  <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                    A-26, Ground Floor, Sector 63, Noida,<br />
                    Uttar Pradesh 201301, India
                  </p>
                </div>
              </div>

              {/* Registered Office */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0 mt-1">
                  <Building size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Registered Office</h4>
                  <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                    E-44/3, Ground Floor,<br />
                    Okhla Industrial Area, Phase-II,<br />
                    New Delhi-110020, India
                  </p>
                </div>
              </div>

              {/* US Office */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-500 shrink-0 mt-1">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">US Office</h4>
                  <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                    USA
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 shrink-0 mt-1">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Phone</h4>
                  <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                    India: +91 120 405 7109<br />
                    US: +1 (111) 111-1111
                  </p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 mt-1">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Office Hours</h4>
                  <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                    Monday – Friday: 9:30 AM to 8:00 PM (IST)<br />
                    Saturday: 9:30 AM to 4:30 PM (IST)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Contact Form */}
          {/* Added h-full and flex flex-col to force it to stretch exactly to the left column's height */}
          <div className="bg-slate-50/80 border border-slate-100 p-6 sm:p-8 rounded-[2rem] shadow-xl shadow-slate-200/40 h-full flex flex-col">
            <form className="flex flex-col gap-5 h-full">
              
              {/* Row 1: Name & Email */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <input 
                    type="text" 
                    placeholder="Full name *" 
                    required
                    className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-sm placeholder:text-slate-400 text-slate-800 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all shadow-sm"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Work email *" 
                    required
                    className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-sm placeholder:text-slate-400 text-slate-800 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all shadow-sm"
                  />
                </div>
              </div>

              {/* Row 2: Phone & Company */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <input 
                    type="tel" 
                    placeholder="Phone number *" 
                    required
                    className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-sm placeholder:text-slate-400 text-slate-800 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all shadow-sm"
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Company" 
                    className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-sm placeholder:text-slate-400 text-slate-800 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all shadow-sm"
                  />
                </div>
              </div>

              {/* NEW Row 3: Job Title & Website */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <input 
                    type="text" 
                    placeholder="Job Title" 
                    className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-sm placeholder:text-slate-400 text-slate-800 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all shadow-sm"
                  />
                </div>
                <div>
                  <input 
                    type="url" 
                    placeholder="Company Website" 
                    className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-sm placeholder:text-slate-400 text-slate-800 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all shadow-sm"
                  />
                </div>
              </div>

              {/* Row 4: Interest & Size */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <select 
                    required
                    className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-600 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all shadow-sm appearance-none cursor-pointer"
                  >
                    <option value="" disabled selected hidden>Interested in... *</option>
                    <option value="cloud-contact-center">Cloud Contact Center</option>
                    <option value="voice-logger">Voice Logger</option>
                    <option value="call-billing">Call Billing Software</option>
                    <option value="ivrs">IVRS Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <select 
                    className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-600 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all shadow-sm appearance-none cursor-pointer"
                  >
                    <option value="" disabled selected hidden>Number of Users</option>
                    <option value="1-10">1 - 10 Users</option>
                    <option value="11-50">11 - 50 Users</option>
                    <option value="51-200">51 - 200 Users</option>
                    <option value="201+">200+ Users</option>
                  </select>
                </div>
              </div>

              {/* Textarea wrapped in flex-grow so it perfectly fills any remaining space */}
              <div className="flex-grow flex flex-col">
                <textarea 
                  placeholder="Tell us about your requirements *" 
                  required
                  className="w-full flex-grow px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-sm placeholder:text-slate-400 text-slate-800 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all shadow-sm resize-none"
                ></textarea>
              </div>

              {/* Bottom: Button & Badge */}
              <div className="mt-2 shrink-0">
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  Send Message <Send size={18} />
                </button>
                <div className="flex items-center justify-center gap-1.5 mt-3 text-slate-500">
                  <ShieldCheck size={14} className="text-emerald-500" />
                  <span className="text-xs font-medium">Your information is secure and confidential.</span>
                </div>
              </div>

            </form>
          </div>

        </div>

        {/* BOTTOM SECTION: Google Maps Embed */}
        <div className="mt-20 w-full h-[400px] sm:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100">
          <iframe 
            src="https://maps.google.com/maps?q=A-26,%20Sector%2063,%20Noida,%20Uttar%20Pradesh%20201301&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Cube Software Noida Office Map"
          ></iframe>
        </div>

      </div>
    </section>
  );
}