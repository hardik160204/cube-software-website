import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Footer } from "../components/HomeSections2";
import { MapPin, Phone, Clock, Building, Send, ShieldCheck } from "lucide-react";
import { toast } from "sonner";

export default function ContactPage() {
  const [form, setForm] = useState({ 
    name: "", email: "", phone: "", company: "", 
    jobTitle: "", website: "", interest: "", users: "", message: "" 
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.interest || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Thank you! Our team will connect with you promptly.");
      setForm({ 
        name: "", email: "", phone: "", company: "", 
        jobTitle: "", website: "", interest: "", users: "", message: "" 
      });
      setSubmitting(false);
    }, 1000);
  };

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  return (
    <div className="bg-white min-h-screen flex flex-col font-sans">
      <Navbar />

      {/* =======================================================
          SECTION 1: HERO (FORM & MAP SIDE-BY-SIDE)
          Matches the layout from the dark green screenshot but 
          uses Cube's dark blue theme.
          ======================================================= */}
      <section className="pt-32 pb-20 bg-[#0A1F44] min-h-[90vh] flex items-center relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3"></div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 w-full relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch pt-10">
          
          {/* LEFT: Contact Form */}
          <div className="flex flex-col justify-center">
            <h1 className="font-heading font-black text-5xl sm:text-6xl text-white mb-8 tracking-tight">
              Get in touch
            </h1>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full max-w-2xl">
              
              {/* Row 1: Name & Email */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-blue-100 mb-2 block">Full Name *</label>
                  <input 
                    type="text" 
                    required
                    value={form.name}
                    onChange={set("name")}
                    className="w-full px-5 py-3.5 bg-white/5 border border-blue-400/30 rounded-xl text-base text-white placeholder:text-blue-200/40 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all shadow-sm"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-blue-100 mb-2 block">Work Email *</label>
                  <input 
                    type="email" 
                    required
                    value={form.email}
                    onChange={set("email")}
                    className="w-full px-5 py-3.5 bg-white/5 border border-blue-400/30 rounded-xl text-base text-white placeholder:text-blue-200/40 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all shadow-sm"
                  />
                </div>
              </div>

              {/* Row 2: Phone & Company */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-blue-100 mb-2 block">Phone Number *</label>
                  <input 
                    type="tel" 
                    required
                    value={form.phone}
                    onChange={set("phone")}
                    className="w-full px-5 py-3.5 bg-white/5 border border-blue-400/30 rounded-xl text-base text-white placeholder:text-blue-200/40 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all shadow-sm"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-blue-100 mb-2 block">Company Name</label>
                  <input 
                    type="text" 
                    value={form.company}
                    onChange={set("company")}
                    className="w-full px-5 py-3.5 bg-white/5 border border-blue-400/30 rounded-xl text-base text-white placeholder:text-blue-200/40 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all shadow-sm"
                  />
                </div>
              </div>

              {/* Row 3: Job Title & Website */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-blue-100 mb-2 block">Job Title</label>
                  <input 
                    type="text" 
                    value={form.jobTitle}
                    onChange={set("jobTitle")}
                    className="w-full px-5 py-3.5 bg-white/5 border border-blue-400/30 rounded-xl text-base text-white placeholder:text-blue-200/40 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all shadow-sm"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-blue-100 mb-2 block">Company Website</label>
                  <input 
                    type="url" 
                    value={form.website}
                    onChange={set("website")}
                    className="w-full px-5 py-3.5 bg-white/5 border border-blue-400/30 rounded-xl text-base text-white placeholder:text-blue-200/40 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all shadow-sm"
                  />
                </div>
              </div>

              {/* Row 4: Interest & Users */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-blue-100 mb-2 block">Interested In *</label>
                  <select 
                    required
                    value={form.interest}
                    onChange={set("interest")}
                    className="w-full px-5 py-3.5 bg-white/5 border border-blue-400/30 rounded-xl text-base text-white focus:outline-none focus:border-blue-400 focus:bg-[#0A1F44] transition-all shadow-sm cursor-pointer [&>option]:bg-[#0A1F44] [&>option]:text-white"
                  >
                    <option value="" disabled hidden>Select Solution...</option>
                    <option value="cloud-contact-center">Cloud Contact Center</option>
                    <option value="voice-logger">Voice Logger</option>
                    <option value="call-billing">Call Billing Software</option>
                    <option value="ivrs">IVRS Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-blue-100 mb-2 block">Number of Users</label>
                  <select 
                    value={form.users}
                    onChange={set("users")}
                    className="w-full px-5 py-3.5 bg-white/5 border border-blue-400/30 rounded-xl text-base text-white focus:outline-none focus:border-blue-400 focus:bg-[#0A1F44] transition-all shadow-sm cursor-pointer [&>option]:bg-[#0A1F44] [&>option]:text-white"
                  >
                    <option value="" disabled hidden>Select Size...</option>
                    <option value="1-10">1 - 10 Users</option>
                    <option value="11-50">11 - 50 Users</option>
                    <option value="51-200">51 - 200 Users</option>
                    <option value="201+">200+ Users</option>
                  </select>
                </div>
              </div>

              {/* Textarea */}
              <div>
                <label className="text-sm font-medium text-blue-100 mb-2 block">Message *</label>
                <textarea 
                  required
                  value={form.message}
                  onChange={set("message")}
                  className="w-full px-5 py-3.5 bg-white/5 border border-blue-400/30 rounded-xl text-base text-white placeholder:text-blue-200/40 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all shadow-sm resize-none min-h-[120px]"
                ></textarea>
              </div>

              {/* Bottom: Button & Badge */}
              <div className="mt-2 flex flex-col sm:flex-row items-center gap-6">
                <button 
                  type="submit" 
                  disabled={submitting}
                  className="w-full sm:w-auto px-10 bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-3 text-lg border border-blue-500"
                >
                  {submitting ? "Sending..." : "Send Message"} <Send size={20} />
                </button>
                <div className="flex items-center gap-2 text-blue-200/70">
                  <ShieldCheck size={16} className="text-emerald-400" />
                  <span className="text-sm font-medium">Secure and confidential.</span>
                </div>
              </div>

            </form>
          </div>

          {/* RIGHT: Map Container */}
          <div className="w-full h-[500px] lg:h-auto rounded-[2rem] overflow-hidden shadow-2xl relative border border-white/10">
            <iframe 
              title="Cube Software Noida Office Map"
              src="https://maps.google.com/maps?q=Cube%20Software%20Pvt.%20Ltd.,%20Sector%2063,%20Noida&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              className="w-full h-full absolute inset-0 border-0" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </section>

      {/* =======================================================
          SECTION 2: OUR OFFICES & INFO 
          Combines the card layout and list items from the references.
          ======================================================= */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-black text-4xl sm:text-5xl text-slate-900 tracking-tight">
              Our Offices
            </h2>
          </div>
          
          {/* Top Row: Office Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            
            {/* Corporate Office - Blue Card */}
            <div className="bg-blue-500 text-white rounded-3xl shadow-xl shadow-blue-500/20 p-10 flex flex-col items-center transform hover:-translate-y-1 transition-transform">
              <div className="bg-white/20 p-4 rounded-full mb-6">
                <MapPin size={40} className="text-white" strokeWidth={2} />
              </div>
              <h3 className="font-bold text-3xl mb-4">Corporate Office</h3>
              <p className="text-blue-50 text-center text-lg leading-relaxed">
                A-26, Ground Floor, Sector 63,<br />
                Noida, Uttar Pradesh 201301,<br />
                India
              </p>
            </div>

            {/* Registered Office - White Card */}
            <div className="bg-white border border-slate-100 rounded-3xl shadow-xl shadow-slate-200/50 p-10 flex flex-col items-center transform hover:-translate-y-1 transition-transform">
              <div className="bg-indigo-50 p-4 rounded-full mb-6">
                <Building size={40} className="text-indigo-500" strokeWidth={2} />
              </div>
              <h3 className="font-bold text-3xl text-slate-900 mb-4">Registered Office</h3>
              <p className="text-slate-600 text-center text-lg leading-relaxed">
                E-44/3, Ground Floor,<br />
                Okhla Industrial Area, Phase-II,<br />
                New Delhi-110020, India
              </p>
            </div>

          </div>

          {/* Bottom Row: Additional Contact Info List */}
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Phone List Item */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-md flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center shrink-0">
                <Phone size={28} className="text-amber-500" strokeWidth={2} />
              </div>
              <div>
                <h4 className="font-bold text-xl text-slate-900 mb-1">Phone</h4>
                <p className="text-slate-600 text-[15px]">India: +91 806 869 4440</p>
              </div>
            </div>

            {/* Hours List Item */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-md flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                <Clock size={28} className="text-emerald-500" strokeWidth={2} />
              </div>
              <div>
                <h4 className="font-bold text-xl text-slate-900 mb-1">Office Hours</h4>
                <p className="text-slate-600 text-[15px] leading-snug">
                  Mon – Fri: 9:30 AM to 8:00 PM (IST)<br/>
                  Saturday: 9:30 AM to 4:30 PM (IST)
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}