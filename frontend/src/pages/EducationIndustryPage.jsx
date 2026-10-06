import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Footer, SectionLabel, SectionTitle } from "../components/HomeSections2";
import { Button } from "../components/ui/button";
import { BookOpen, Bell, Headphones, PhoneCall, CheckCircle2, GraduationCap, Database } from "lucide-react";

export default function EducationIndustryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: Bell,
      title: "Automated Notifications",
      desc: "Send instant voice and SMS alerts to parents regarding fee deadlines, attendance, exams, and emergency closures.",
      accent: "text-blue-600 bg-blue-50"
    },
    {
      icon: Headphones,
      title: "Admissions Helpdesk",
      desc: "Equip your counselors with a cloud contact center to efficiently handle high volumes of admission inquiries.",
      accent: "text-emerald-500 bg-emerald-50"
    },
    {
      icon: PhoneCall,
      title: "Self-Service IVR",
      desc: "Allow students to check exam dates, download forms, or route to specific departments without human intervention.",
      accent: "text-indigo-500 bg-indigo-50"
    },
    {
      icon: Database,
      title: "EdTech CRM Integration",
      desc: "Sync calls directly with your student database so counselors have complete academic history during calls.",
      accent: "text-amber-500 bg-amber-50"
    }
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col font-sans">
      <Navbar />

      <section className="relative w-full pt-32 pb-12 lg:pt-40 lg:pb-16 overflow-hidden bg-[#0A1F44]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44] via-[#0A1F44] to-blue-900/40 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-5/12 shrink-0">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-bold tracking-wide uppercase mb-6">
              <BookOpen size={16} /> Education & EdTech
            </div>
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Streamline Campus <br/><span className="text-blue-400">Communication</span>
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed mb-8">
              Connect students, parents, and faculty effortlessly. Automate critical updates, scale your admissions helpdesk, and improve enrollment rates.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white px-8 h-12 rounded-md shadow-lg transition-transform hover:-translate-y-0.5">
                  Book a Demo
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:w-7/12 flex justify-center lg:justify-end relative">
             <div className="relative w-full max-w-[700px]">
                <img 
                  src="/education-industry.svg" /* <-- Add your image */
                  alt="Education Cloud Telephony" 
                  className="w-full h-auto object-contain drop-shadow-2xl relative z-10 transition-transform lg:scale-110 lg:origin-right"
                />
             </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel>Why Institutions Choose Us</SectionLabel>
            <SectionTitle>Enhance student engagement and support</SectionTitle>
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

      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="font-heading font-black text-4xl sm:text-5xl text-slate-900 mb-6 leading-tight">
              Boost your enrollment conversions.
            </h2>
            <ul className="space-y-4 mt-8">
              {[
                "Predictive Dialers for Course Promotions",
                "Toll-Free Numbers for Prospective Students",
                "Call Recording for Quality Assurance",
                "Seamless Integration with Campus ERPs"
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
                  <GraduationCap size={24} className="text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Admissions Campaigns</h4>
                  <p className="text-slate-500 text-sm mt-1">Use auto-dialers to follow up on website leads and increase your total student intake.</p>
                </div>
              </div>
              <div className="relative z-10 bg-white rounded-2xl p-6 shadow-lg border border-slate-100 flex items-start gap-4 ml-8">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Bell size={24} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Parent Updates</h4>
                  <p className="text-slate-500 text-sm mt-1">Automatically push attendance alerts and fee reminders directly to parents' phones.</p>
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