import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Footer, SectionLabel, SectionTitle } from "../components/HomeSections2";
import { Button } from "../components/ui/button";
import { HeartPulse, CalendarClock, PhoneCall, ShieldCheck, CheckCircle2, Stethoscope, Clock } from "lucide-react";

export default function HealthcareIndustryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: CalendarClock,
      title: "Automated Reminders",
      desc: "Send automated voice broadcasts and SMS to patients for upcoming appointments, reducing no-shows.",
      accent: "text-blue-600 bg-blue-50"
    },
    {
      icon: PhoneCall,
      title: "Emergency Routing",
      desc: "Prioritize critical calls with smart IVR menus that immediately route emergencies to on-call doctors.",
      accent: "text-red-500 bg-red-50"
    },
    {
      icon: ShieldCheck,
      title: "Patient Data Security",
      desc: "Ensure patient confidentiality with secure, encrypted call recording that meets healthcare compliance standards.",
      accent: "text-emerald-500 bg-emerald-50"
    },
    {
      icon: Stethoscope,
      title: "Tele-consultation",
      desc: "Enable doctors to securely connect with patients remotely using our integrated conference bridges.",
      accent: "text-indigo-500 bg-indigo-50"
    }
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col font-sans">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative w-full pt-32 pb-12 lg:pt-40 lg:pb-16 overflow-hidden bg-[#0A1F44]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44] via-[#0A1F44] to-blue-900/40 z-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-5/12 shrink-0">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-bold tracking-wide uppercase mb-6">
              <HeartPulse size={16} /> Healthcare Solutions
            </div>
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Patient-First <br/><span className="text-blue-400">Communication</span>
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed mb-8">
              Automate patient reminders, handle emergency routing, and manage hospital helpdesks seamlessly 24/7 with our reliable cloud telephony suite.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button className="bg-[#10b981] hover:bg-[#059669] text-white px-8 h-12 rounded-full shadow-lg transition-transform hover:-translate-y-0.5 text-lg font-bold">
                  Book a Demo
                </Button>
              </Link>
            </div>
          </div>

          <div className="lg:w-7/12 flex justify-center lg:justify-end relative">
             <div className="relative w-full max-w-[700px]">
                <img 
                  src="/healthcare-industry-vector.png" /* <-- Update with your Healthcare graphic */
                  alt="Healthcare Cloud Telephony" 
                  className="w-full h-auto object-contain drop-shadow-2xl relative z-10 transition-transform lg:scale-110 lg:origin-right"
                />
             </div>
          </div>
        </div>
      </section>

      {/* KEY CAPABILITIES */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel>Why Hospitals Choose Us</SectionLabel>
            <SectionTitle>Always on when lives depend on it</SectionTitle>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feat, idx) => (
              <div key={idx} className="bg-white border border-slate-100 rounded-3xl p-10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${feat.accent}`}>
                  <feat.icon size={32} strokeWidth={2} />
                </div>
                <h3 className="font-heading font-black text-2xl text-slate-900 mb-4">{feat.title}</h3>
                <p className="text-slate-600 leading-relaxed text-lg">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="font-heading font-black text-4xl sm:text-5xl text-slate-900 mb-6 leading-tight">
              Connect patients to care faster.
            </h2>
            <ul className="space-y-4 mt-8">
              {[
                "Centralized Helpdesk for Multiple Clinics",
                "Automated Lab Result Notifications",
                "Toll-Free Numbers for Emergency Lines",
                "Integration with Hospital Management Systems (HMS)"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-800 font-semibold text-lg">
                  <CheckCircle2 size={24} className="text-blue-600 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:w-1/2 w-full relative">
            <div className="bg-blue-50 rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-blue-100">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-200/50 rounded-full blur-3xl"></div>
              
              <div className="relative z-10 bg-white rounded-2xl p-6 shadow-lg border border-slate-100 flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Clock size={24} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">24/7 Availability</h4>
                  <p className="text-slate-500 text-sm mt-1">Smart IVRs ensure patients can get information or route to on-call staff after hours.</p>
                </div>
              </div>

              <div className="relative z-10 bg-white rounded-2xl p-6 shadow-lg border border-slate-100 flex items-start gap-4 ml-8">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                  <PhoneCall size={24} className="text-red-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Rapid Response</h4>
                  <p className="text-slate-500 text-sm mt-1">Dedicated priority queues for urgent medical inquiries and ambulance coordination.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}