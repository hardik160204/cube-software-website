import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Footer, SectionLabel, SectionTitle } from "../components/HomeSections2";
import { Button } from "../components/ui/button";
import { Building, PhoneForwarded, Database, Mic, ShieldCheck, CheckCircle2, Home, TrendingUp } from "lucide-react";

export default function RealEstateIndustryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: PhoneForwarded,
      title: "Predictive Lead Dialing",
      desc: "Connect your sales team to interested property buyers faster with automated outbound dialing campaigns.",
      accent: "text-blue-600 bg-blue-50"
    },
    {
      icon: Database,
      title: "Real Estate CRM Sync",
      desc: "Integrate directly with your property CRM to display buyer preferences and budget history on the agent's screen.",
      accent: "text-emerald-500 bg-emerald-50"
    },
    {
      icon: ShieldCheck,
      title: "Virtual Campaign Numbers",
      desc: "Assign unique virtual numbers to different property ads (billboards, digital) to accurately track marketing ROI.",
      accent: "text-indigo-500 bg-indigo-50"
    },
    {
      icon: Mic,
      title: "Dispute Resolution",
      desc: "Record 100% of calls to maintain a verifiable log of negotiations, offers, and client agreements.",
      accent: "text-amber-500 bg-amber-50"
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
              <Building size={16} /> Real Estate
            </div>
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Accelerate Property <br/><span className="text-blue-400">Sales</span>
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed mb-8">
              Empower your real estate brokers with smart dialers, CRM integrations, and campaign tracking to close deals faster and manage site visits effortlessly.
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
                  src="/real-estate-industry-vector.png" /* <-- Update with your Real Estate graphic */
                  alt="Real Estate Cloud Telephony" 
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
            <SectionLabel>Why Top Developers Choose Us</SectionLabel>
            <SectionTitle>Turn inquiries into successful site visits</SectionTitle>
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
              Manage multi-project campaigns easily.
            </h2>
            <ul className="space-y-4 mt-8">
              {[
                "Automated Follow-ups for Stale Leads",
                "Site Visit Scheduling & Reminders",
                "Project-Specific IVR Routing",
                "Multi-Branch Broker Coordination"
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
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <TrendingUp size={24} className="text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Campaign Tracking</h4>
                  <p className="text-slate-500 text-sm mt-1">Track exactly which Facebook or Billboard ad generated the incoming call.</p>
                </div>
              </div>

              <div className="relative z-10 bg-white rounded-2xl p-6 shadow-lg border border-slate-100 flex items-start gap-4 ml-8">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Home size={24} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Site Visit Routing</h4>
                  <p className="text-slate-500 text-sm mt-1">Automatically connect buyers to the site manager nearest to the property location.</p>
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