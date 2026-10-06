import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Footer, SectionLabel, SectionTitle } from "../components/HomeSections2";
import { Button } from "../components/ui/button";
import { Headset, PhoneForwarded, Mic, Activity, Database, CheckCircle2, Users, BarChart } from "lucide-react";

export default function BPOIndustryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: PhoneForwarded,
      title: "Predictive Auto-Dialing",
      desc: "Eliminate manual dialing. Our algorithms filter out voicemails and busy signals to keep agents talking.",
      accent: "text-blue-600 bg-blue-50"
    },
    {
      icon: Activity,
      title: "Real-Time Monitoring",
      desc: "Live supervisor wallboards to barge-in, whisper, and monitor agent performance across campaigns.",
      accent: "text-emerald-500 bg-emerald-50"
    },
    {
      icon: Mic,
      title: "100% Call Recording",
      desc: "Automatically log and compress all calls for quality assurance, training, and compliance purposes.",
      accent: "text-indigo-500 bg-indigo-50"
    },
    {
      icon: Database,
      title: "Seamless CRM Sync",
      desc: "Integrate directly with your existing CRM so agents have customer data on-screen before they even say hello.",
      accent: "text-amber-500 bg-amber-50"
    }
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col font-sans">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative w-full pt-32 pb-20 lg:pt-40 lg:pb-12 overflow-hidden bg-[#0A1F44]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44] via-[#0A1F44] to-blue-900/40 z-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12">
          
          {/* Text Content - Left Side */}
          <div className="lg:w-1/2 shrink-0">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-bold tracking-wide uppercase mb-6">
              <Headset size={16} /> BPO & Call Centers
            </div>
            
            <div className="relative z-20">
              <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
                Maximize Agent <br/><span className="text-blue-400">Productivity</span>
              </h1>
              <p className="text-lg text-blue-100 leading-relaxed mb-8 pr-4">
                Handle massive call volumes efficiently with advanced predictive dialers, voice logging, and real-time monitoring built for outsourcing floors of every size.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white px-8 h-12 rounded-md shadow-lg transition-transform hover:-translate-y-0.5">
                    Book a Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* SVG Image - Right Side */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end relative mt-12 lg:mt-0">
             {/* Reduced max-width to make it smaller as requested */}
             <div className="relative w-full max-w-[420px]">
                <img 
                  src="/bpo-call-center-page.svg"
                  alt="BPO Cloud Telephony Live Monitor" 
                  className="w-full h-auto object-contain drop-shadow-2xl relative z-10"
                  style={{
                  }}
                />
             </div>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{__html: `
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
        `}} />
      </section>

      {/* KEY CAPABILITIES */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel>Why BPOs Trust Cube Software</SectionLabel>
            <SectionTitle>Engineered for high-volume performance</SectionTitle>
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
              Scale your operations without the hardware limits.
            </h2>
            <ul className="space-y-4 mt-8">
              {[
                "Inbound, Outbound & Blended Campaigns",
                "Automated Skill-Based Call Routing",
                "Remote Agent & WFH Support",
                "Detailed Shift & Campaign Analytics"
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
                  <Users size={24} className="text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Lead Generation</h4>
                  <p className="text-slate-500 text-sm mt-1">Connect faster with prospects using intelligent auto-dialing engines.</p>
                </div>
              </div>

              <div className="relative z-10 bg-white rounded-2xl p-6 shadow-lg border border-slate-100 flex items-start gap-4 ml-8">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <BarChart size={24} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Quality Assurance</h4>
                  <p className="text-slate-500 text-sm mt-1">Review live calls and logs to ensure agents meet compliance and quality scores.</p>
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