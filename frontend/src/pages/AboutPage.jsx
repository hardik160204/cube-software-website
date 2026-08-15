import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, ChevronRight, Award, Target, Eye, HeartHandshake,
  CalendarDays, Users, Globe2, Package, CheckCircle2,
} from "lucide-react";
import { Button } from "../components/ui/button";
import Navbar from "../components/Navbar";
import { Footer, ClientsSection } from "../components/HomeSections2";

// --- HARDCODED IMAGES ---
const ABOUT_IMAGE = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80";
const IMAGES = {
  team: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
};

const MILESTONES = [
  { year: "1990", text: "Cube Software is founded, pioneering Computer Telephony Integration in India." },
  { year: "1998", text: "Callisto Voice Logger launches, becoming a recording standard for hotels, banks and helplines." },
  { year: "2005", text: "Quick Call Dialer powers some of the country's largest BPO floors." },
  { year: "2012", text: "Enterprise rollouts with international telecom vendors across multiple continents." },
  { year: "2018", text: "Cloud-hosted telephony suite debuts — dialer and logger without hardware." },
  { year: "2026", text: "AI-powered routing, transcription and analytics join the platform." },
];

const VALUES = [
  { icon: Award, title: "Engineering Excellence", text: "Home-grown software refined over three decades of real-world telecom deployments." },
  { icon: HeartHandshake, title: "Customer Obsession", text: "24/7 support and long-term partnerships — many clients have stayed with us for 20+ years." },
  { icon: Target, title: "Practical Innovation", text: "We adopt new technology when it solves real problems, from CTI cards to cloud and AI." },
  { icon: Eye, title: "Transparency", text: "Clear pricing, honest timelines and solutions sized to what you actually need." },
];

const STATS = [
  { value: "35+", label: "Years in Business" },
  { value: "5,000+", label: "Deployments" },
  { value: "10+", label: "Countries Reached" },
  { value: "20+", label: "Product Lines" },
];

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white text-slate-900 flex flex-col min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative w-full h-[100dvh] min-h-[700px] flex flex-col overflow-hidden bg-[#0A1F44]">
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center z-0 opacity-40" 
          style={{ backgroundImage: `url(${ABOUT_IMAGE})` }} 
        />
        
        {/* Dark gradient overlay blending seamlessly */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1F44]/90 via-[#0A1F44]/60 to-[#0A1F44] z-0 pointer-events-none" />
        
        {/* INVISIBLE TOP SPACER (Pushes content safely below the fixed Navbar) */}
        <div className="w-full h-24 lg:h-32 shrink-0 pointer-events-none z-10"></div>

        {/* HERO MAIN CONTENT */}
        <div className="relative z-20 flex-grow flex flex-col justify-center w-full max-w-7xl mx-auto px-4 sm:px-6 pb-8 sm:pb-12">
          
          <nav className="flex items-center gap-1.5 text-xs text-blue-200 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={13} />
            <span className="text-white font-semibold">About Us</span>
          </nav>
          
          <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight max-w-3xl leading-[1.05] animate-fade-up">
            35+ Years of Telephony, Engineered with Passion
          </h1>
          
          <p className="mt-5 text-lg text-blue-100 max-w-2xl leading-relaxed animate-fade-up">
            At Cube Software we have been designing Computer Telephony Integration software for over
            three decades — deploying products that work seamlessly with the communication solutions
            of the world's leading telecom vendors.
          </p>
          
          <div className="mt-8 animate-fade-up">
            <Link to="/#contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white px-8 h-12 rounded-md shadow-lg transition-transform hover:-translate-y-0.5">
                Work With Us <ArrowRight size={16} className="ml-1.5" />
              </Button>
            </Link>
          </div>
          
        </div>

        {/* BOTTOM STATS BAR (Anchored safely at the bottom of the hero) */}
        <div className="relative z-30 w-full shrink-0 border-t border-white/10 bg-[#0A1F44]/40 backdrop-blur-sm py-4 sm:py-6 mt-auto">
          <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {STATS.map((s, i) => (
              <div key={s.label} className={`text-center px-2 sm:px-4 ${i < 2 ? "pb-4 md:pb-0" : ""}`}>
                <div className="font-heading font-black text-3xl sm:text-4xl text-white mb-1 drop-shadow-md">
                  {s.value}
                </div>
                <div className="font-semibold tracking-wider uppercase text-blue-200/80 text-xs sm:text-sm">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="text-blue-700 text-xs font-bold tracking-[0.2em] uppercase mb-3">— Our Story</div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl tracking-tight text-slate-900 leading-tight">
              From CTI pioneers to cloud telephony partners
            </h2>
            <p className="mt-5 text-slate-600 leading-relaxed text-justify">
              Founded in 1990, Cube Software began building Computer Telephony Integration solutions
              when the discipline was still in its infancy. Over the years we have shipped a large
              family of products — dialers, voice loggers, IVR systems, voice mail, billing and
              conferencing — that integrate seamlessly with equipment from most international
              telecom vendors.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed text-justify">
              Today that same engineering DNA powers our cloud-hosted telephony suite, serving BPOs,
              banks, hospitals, hotels, real-estate firms and government departments. Our clientele
              includes some of the most recognised names in industry — and many have partnered with
              us for over two decades.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Home-grown products, built and supported in-house",
                "Compatible with all CTI enabled Pabx for e.g Avaya, Siemens, Mitel, Cisco and more",
                "On-premise, hosted and hybrid deployment models",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-slate-700 text-sm">
                  <CheckCircle2 size={16} className="text-blue-600 mt-0.5 shrink-0" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-100 to-amber-50 rounded-3xl rotate-1" />
            <img
              src={IMAGES.team}
              alt="Cube Software team"
              className="relative rounded-2xl shadow-2xl border border-slate-100 w-full object-cover aspect-[4/3]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-blue-700 text-xs font-bold tracking-[0.2em] uppercase mb-3">— Milestones</div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl tracking-tight text-slate-900">Three decades of firsts</h2>
          <div className="mt-12 relative">
            <div className="absolute left-[26px] top-2 bottom-2 w-px bg-blue-200" />
            <div className="space-y-8">
              {MILESTONES.map((m) => (
                <div key={m.year} className="relative flex gap-6 items-start">
                  <div className="w-[52px] h-[52px] rounded-full bg-white border-2 border-blue-600 text-blue-700 font-heading font-black text-xs flex items-center justify-center shrink-0 z-10 shadow-sm">
                    {m.year}
                  </div>
                  <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm flex-1 hover:shadow-md transition-shadow">
                    <p className="text-slate-700 text-sm leading-relaxed">{m.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-blue-700 text-xs font-bold tracking-[0.2em] uppercase mb-3">— Our Values</div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl tracking-tight text-slate-900">What we stand for</h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => {
              const accents = ["bg-blue-50 text-blue-700", "bg-red-50 text-red-600", "bg-amber-50 text-amber-500", "bg-blue-50 text-blue-700"];
              return (
                <div key={v.title} className="bg-white rounded-2xl border border-slate-100 p-7 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${accents[i]}`}>
                    <v.icon size={22} />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-slate-900 mb-1.5">{v.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{v.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ClientsSection />

      {/* CTA */}
      <section className="py-16 bg-[#0A1F44]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight">
              Let's build your communication stack together
            </h2>
            <p className="mt-3 text-blue-200 max-w-xl">
              Three decades of telephony expertise, one conversation away.
            </p>
          </div>
          <Link to="/#contact" className="shrink-0">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white px-9 h-12 rounded-md shadow-lg transition-transform hover:-translate-y-0.5">
              Contact Us <ArrowRight size={16} className="ml-1.5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;