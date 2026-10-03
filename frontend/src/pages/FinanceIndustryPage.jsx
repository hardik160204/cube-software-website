import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Footer, SectionLabel, SectionTitle } from "../components/HomeSections2";
import { Button } from "../components/ui/button";
import { ShieldCheck, Landmark, Lock, PhoneCall, Headphones, FileText, CheckCircle2 } from "lucide-react";

export default function FinanceIndustryPage() {
  useEffect(() => {
    // Ensure the page loads at the top
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: ShieldCheck,
      title: "100% Regulatory Compliance",
      desc: "Tamper-proof call recording and encrypted voice logging to meet strict RBI and financial telecom regulations.",
      accent: "text-emerald-500 bg-emerald-50"
    },
    {
      icon: PhoneCall,
      title: "Automated Debt Collection",
      desc: "Deploy smart outbound auto-dialers and IVRs to automate payment reminders and boost collection rates effortlessly.",
      accent: "text-blue-600 bg-blue-50"
    },
    {
      icon: Lock,
      title: "Secure SIP Trunking",
      desc: "Enterprise-grade encrypted lines ensuring that highly sensitive customer data and transactions remain totally secure.",
      accent: "text-indigo-500 bg-indigo-50"
    },
    {
      icon: Headphones,
      title: "Centralized Support Floors",
      desc: "Manage customer support across multiple branches and cities from a single, unified cloud dashboard.",
      accent: "text-amber-500 bg-amber-50"
    }
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col font-sans">
      <Navbar />

      {/* =========================================================
          SECTION 1: HERO SECTION 
          Description: Dark blue background (#0A1F44) with main 
          headlines and the static image placeholder.
          ========================================================= */}
      <section className="relative w-full pt-32 pb-12 lg:pt-40 lg:pb-16 overflow-hidden bg-[#0A1F44]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44] via-[#0A1F44] to-blue-900/40 z-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12">
          
          <div className="lg:w-5/12 shrink-0">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-bold tracking-wide uppercase mb-6">
              <Landmark size={16} /> Financial Services
            </div>
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Secure Cloud Voice <br/><span className="text-blue-400">for Banking & NBFCs</span>
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed mb-8">
              Deliver flawless customer experiences while maintaining absolute regulatory compliance. Cube Software provides encrypted logging, automated collections, and secure cloud PBX for modern financial institutions.
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
                {/* STANDARD STATIC IMAGE PLACEHOLDER */}
                <img 
                  src="/finance-industry-vector.png" // <-- UPDATE THIS to your actual image file path/name
                  alt="Financial Services Cloud Telephony" 
                  className="w-full h-auto object-contain drop-shadow-2xl relative z-10 transition-transform lg:scale-110 lg:origin-right"
                />
             </div>
          </div>
          
        </div>
      </section>

      {/* =========================================================
          SECTION 2: KEY CAPABILITIES
          ========================================================= */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel>Why Financial Institutions Trust Us</SectionLabel>
            <SectionTitle>Enterprise-grade security meets limitless scalability</SectionTitle>
            <p className="text-slate-600 mt-6 text-lg leading-relaxed">
              We understand that the financial sector cannot compromise on reliability. Our stack is engineered specifically for the high-stakes demands of banks, insurance firms, and trading floors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feat, idx) => (
              <div key={idx} className="bg-white border border-slate-100 rounded-3xl p-10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${feat.accent}`}>
                  <feat.icon size={32} strokeWidth={2} />
                </div>
                <h3 className="font-heading font-black text-2xl text-slate-900 mb-4">{feat.title}</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 3: USE CASES (BENTO GRID STYLE)
          ========================================================= */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2">
            <h2 className="font-heading font-black text-4xl sm:text-5xl text-slate-900 mb-6 leading-tight">
              Streamline your financial workflows.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              From resolving customer disputes using verifiable voice logs to accelerating EMI collections without expanding your manual workforce, our platform is built for operational efficiency.
            </p>
            <ul className="space-y-4">
              {[
                "100% Secure Call Recording & Archiving",
                "Automated EMI & Credit Card Payment Reminders",
                "Priority VIP Routing for Wealth Management Clients",
                "Multi-Branch Unified Communication Systems"
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
              {/* Decorative background element */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-200/50 rounded-full blur-3xl"></div>
              
              <div className="relative z-10 bg-white rounded-2xl p-6 shadow-lg border border-slate-100 flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <FileText size={24} className="text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Dispute Resolution</h4>
                  <p className="text-slate-500 text-sm mt-1">Retrieve encrypted recordings of customer trading instructions instantly.</p>
                </div>
              </div>

              <div className="relative z-10 bg-white rounded-2xl p-6 shadow-lg border border-slate-100 flex items-start gap-4 ml-8">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                  <PhoneCall size={24} className="text-amber-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Predictive Collections</h4>
                  <p className="text-slate-500 text-sm mt-1">Automatically dial overdue accounts and connect them to live recovery agents.</p>
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