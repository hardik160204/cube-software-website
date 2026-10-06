import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Footer, SectionLabel, SectionTitle } from "../components/HomeSections2";
import { Button } from "../components/ui/button";
import { Flag, Megaphone, PhoneForwarded, BarChart3, CheckCircle2, Users, Mic } from "lucide-react";

export default function ElectionIndustryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: Megaphone,
      title: "Voter Voice Broadcasting",
      desc: "Send personalized, pre-recorded messages from the candidate directly to millions of voters in their local language.",
      accent: "text-blue-600 bg-blue-50"
    },
    {
      icon: BarChart3,
      title: "Automated Polling & Surveys",
      desc: "Conduct large-scale automated IVR surveys to gauge voter sentiment, collect feedback, and track campaign performance.",
      accent: "text-emerald-500 bg-emerald-50"
    },
    {
      icon: Users,
      title: "Volunteer Coordination",
      desc: "Use cloud contact centers to manage thousands of campaign volunteers for remote phone-banking and voter outreach.",
      accent: "text-indigo-500 bg-indigo-50"
    },
    {
      icon: PhoneForwarded,
      title: "Supporter Registration",
      desc: "Deploy missed call numbers on campaign banners so voters can easily pledge support and subscribe to updates.",
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
              <Flag size={16} /> Election Campaigns
            </div>
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Mobilize Your <br/><span className="text-blue-400">Voter Base</span>
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed mb-8">
              Reach millions instantly. Run targeted voice broadcasts, conduct automated polling, and coordinate massive phone-banking efforts for your political campaigns.
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
                  src="/voter-outreach-hero.svg" /* <-- Add your image */
                  alt="Election Campaign Telephony" 
                  className="w-full h-auto object-contain drop-shadow-2xl relative z-10 transition-transform lg:scale-110 lg:origin-right"
                />
             </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel>Why Political Strategists Use Cube</SectionLabel>
            <SectionTitle>Scale your political outreach effortlessly</SectionTitle>
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
              Connect directly with the electorate.
            </h2>
            <ul className="space-y-4 mt-8">
              {[
                "High-Speed Predictive Dialers for Phone Banking",
                "Regional Language IVR Menus",
                "Rally Invitation & Reminder Broadcasts",
                "Real-Time Campaign Analytics Dashboard"
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
                  <Mic size={24} className="text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Personalized Messaging</h4>
                  <p className="text-slate-500 text-sm mt-1">Deliver high-quality recorded messages from the candidate to specific voter demographics.</p>
                </div>
              </div>
              <div className="relative z-10 bg-white rounded-2xl p-6 shadow-lg border border-slate-100 flex items-start gap-4 ml-8">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <BarChart3 size={24} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Survey Analytics</h4>
                  <p className="text-slate-500 text-sm mt-1">Instantly gather and analyze keypad inputs from voters to adjust your campaign strategy.</p>
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