import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Footer, SectionLabel, SectionTitle } from "../components/HomeSections2";
import { Button } from "../components/ui/button";
import { Network, Server, BarChart3, ShieldCheck, CheckCircle2, Globe, Cpu } from "lucide-react";

export default function TelecomIndustryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: Network,
      title: "Carrier-Grade SIP Trunking",
      desc: "Robust, high-capacity SIP trunks designed to handle thousands of concurrent calls with 99.99% uptime.",
      accent: "text-blue-600 bg-blue-50"
    },
    {
      icon: BarChart3,
      title: "Advanced Call Billing",
      desc: "Deploy sophisticated call billing software to track telecom resources, generate invoices, and manage tariffs accurately.",
      accent: "text-emerald-500 bg-emerald-50"
    },
    {
      icon: Server,
      title: "Custom IVRS Solutions",
      desc: "Build complex, multi-level IVR systems from scratch tailored perfectly to your network infrastructure.",
      accent: "text-indigo-500 bg-indigo-50"
    },
    {
      icon: ShieldCheck,
      title: "Regulatory Compliance",
      desc: "Home-grown software trusted since 1990, built to comply with stringent national telecom regulations and standards.",
      accent: "text-amber-500 bg-amber-50"
    }
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col font-sans">
      <Navbar />

      {/* =========================================================
          SECTION 1: HERO SECTION 
          ========================================================= */}
      <section className="relative w-full pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#0A1F44]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44] via-[#0A1F44] to-blue-900/40 z-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12">
          
          {/* Text Content - Left Side */}
          <div className="lg:w-1/2 shrink-0">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-bold tracking-wide uppercase mb-6">
              <Network size={16} /> Telecom
            </div>
            
            <div className="relative z-20">
              <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
                Carrier-Grade <br/><span className="text-blue-400">Infrastructure</span>
              </h1>
              <p className="text-lg text-blue-100 leading-relaxed mb-8 pr-4">
                Powering the backbone of modern communication. We provide telecom operators and ISPs with high-capacity routing, SIP trunking, and advanced billing software.
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
             <div className="relative w-full max-w-[500px]">
                <img 
                  src="/telecom-industry-page.svg" /* <-- Update with your Telecom graphic */
                  alt="Telecom Infrastructure" 
                  className="w-full h-auto object-contain drop-shadow-2xl relative z-10"
                  style={{
                  }}
                />
             </div>
          </div>
          
        </div>

        {/* Floating Animation Styles */}
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
            <SectionLabel>35+ Years of Telephony Excellence</SectionLabel>
            <SectionTitle>Engineered for massive scale</SectionTitle>
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
              Unmatched reliability for service providers.
            </h2>
            <ul className="space-y-4 mt-8">
              {[
                "High-Capacity SIP Trunking & PRI Lines",
                "Advanced Voice Logger Integrations",
                "Scalable Cloud PBX Architectures",
                "White-label Solutions for Resellers"
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
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
                  <Cpu size={24} className="text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Hardware Agnostic</h4>
                  <p className="text-slate-500 text-sm mt-1">Compatible with major PBX platforms like Asterisk, 3CX, Cisco, and Grandstream.</p>
                </div>
              </div>

              <div className="relative z-10 bg-white rounded-2xl p-6 shadow-lg border border-slate-100 flex items-start gap-4 ml-8">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Globe size={24} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Global Connectivity</h4>
                  <p className="text-slate-500 text-sm mt-1">Provide DID, toll-free, and vanity numbers across local and international markets seamlessly.</p>
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