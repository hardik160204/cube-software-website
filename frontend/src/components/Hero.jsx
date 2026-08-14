import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, MapPin, PhoneCall, Mic, Phone, Mail,
  MessageCircle, Facebook, Twitter, Linkedin, Instagram
} from "lucide-react";
import { Button } from "./ui/button";

// --- HARDCODED MOCK DATA ---
const IMAGES = {
  hero: "/hero-image.jpg",
  dashboard: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  globalNumbers: "https://images.unsplash.com/photo-1684610529682-553625a1ffed?auto=format&fit=crop&w=1200&q=80",
  team: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
};

const HERO = {
  badge: "Enhancing Communication Capabilities.",
  titleLines: ["Smarter Calls. Stronger Connections. Enterprise Telephony"],
  accentIndex: 1,
  subtitle:
    "Power your business communication with Cube Quick Call dialers, voice logging and CRM-integrated telephony — engineered by Cube Software for teams of every size.",
  stats: [
    { value: "35+", label: "Years of CTI" },
    { value: "80%", label: "Optimize Cost" },
    { value: "98.5%", label: "Uptime SLA" },
  ],
  localNumbers: [
    { flag: "🇺🇸", number: "+1 (111) 111-1111" },
    { flag: "🇬🇧", number: "+44 20 111 1111" },
    { flag: "🇮🇳", number: "+91 22 1111 1111" },
  ],
  tollFree: [
    { flag: "🇺🇸", number: "+1 (800) 123-4567" },
    { flag: "🇨🇦", number: "+1 (888) 123-4567" },
    { flag: "🇦🇺", number: "1800 123 4567" },
  ],
  agentCard: { name: "Quick Support", number: "+91 80 68694747" },
};

// --- FLOATING CARDS ---
const NumberCard = () => (
  <div className="absolute -top-6 -left-2 md:-top-10 md:-left-12 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl shadow-blue-900/10 border border-slate-100 p-5 hidden md:flex gap-6 animate-float z-40">
    <div>
      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 mb-3">
        <MapPin size={14} className="text-blue-600" /> Local Numbers
      </div>
      <ul className="space-y-2">
        {HERO.localNumbers.map((n) => (
          <li key={n.number} className="text-xs font-medium text-slate-600 whitespace-nowrap">
            <span className="mr-1.5">{n.flag}</span>{n.number}
          </li>
        ))}
      </ul>
    </div>
    <div className="border-l border-slate-100 pl-6">
      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 mb-3">
        <PhoneCall size={14} className="text-red-500" /> Toll-Free
      </div>
      <ul className="space-y-2">
        {HERO.tollFree.map((n) => (
          <li key={n.number} className="text-xs font-medium text-slate-600 whitespace-nowrap">
            <span className="mr-1.5">{n.flag}</span>{n.number}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const AgentCard = () => (
  <div className="absolute top-16 -right-2 md:top-24 md:-right-12 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl shadow-blue-900/10 border border-slate-100 p-5 w-52 hidden lg:block animate-float-delayed z-40">
    <div className="text-sm font-bold text-slate-800">{HERO.agentCard.name}</div>
    <div className="text-xs font-medium text-slate-500 mb-4 mt-0.5">{HERO.agentCard.number}</div>
    <div className="flex gap-2.5">
      <span className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center transition-colors hover:bg-blue-100 cursor-pointer">
        <Mic size={16} />
      </span>
      <span className="w-9 h-9 rounded-full bg-blue-700 text-white flex items-center justify-center shadow-md transition-colors hover:bg-blue-800 cursor-pointer">
        <Phone size={16} />
      </span>
      <span className="w-9 h-9 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center transition-colors hover:bg-amber-100 cursor-pointer">
        <Mail size={16} />
      </span>
    </div>
  </div>
);

// --- VIDEO BACKGROUND & FLOATING ICONS FLOW ---
const OmnichannelFlow = () => {
  /* 
    4 Background images are commented out as requested.
    The video /cubemain.mp4 is now embedded as the active background.
  */

  /* 
    Social nodes (floating icons) are commented out per your request.
  */

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-slate-900">
      
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          src="/cubemain.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-half object-cover object-center opacity-60"
        />
      </div>

      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-400/40 rounded-full blur-[120px] z-10"
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-indigo-400/30 rounded-full blur-[150px] z-10"
      />
    </div>
  );
};

// --- MAIN HERO COMPONENT ---
const Hero = ({ onBookDemo, onGetStarted }) => {
  return (
    <section id="home" className="relative overflow-hidden pt-40 pb-24 lg:pt-48">
      
      <OmnichannelFlow />

      <div className="relative z-30 max-w-5xl mx-auto px-4 sm:px-6 text-center animate-fade-up">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-white/90 backdrop-blur-md text-blue-700 text-[11px] font-bold tracking-[0.15em] uppercase mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          {HERO.badge}
        </span>

        <h1 className="font-heading font-black text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight text-slate-900 bg-white/70 backdrop-blur-md rounded-3xl py-4 inline-block px-8 border border-white/60 shadow-xl shadow-slate-200/40">
          Quick Call.{" "}
          <span className="relative inline-block text-red-700">
            Cloud
            <svg className="absolute -bottom-2 left-0 w-full" height="20" viewBox="0 0 200 10" preserveAspectRatio="none">
              <path d="M2 8 Q 100 -2 198 7" stroke="#1D4ED8" strokeWidth="4" fill="none" strokeLinecap="round" />
            </svg>
          </span>
          <br />
          Telephony.
        </h1>

        <p className="mt-6 text-lg text-slate-800 max-w-2xl mx-auto leading-relaxed font-semibold bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-white/60 shadow-sm">
          Accelerate your team collaboration with powerful cloud dialing, comprehensive features, and SIP trunking solutions — engineered for high-performance enterprises.
        </p>

        <div className="mt-9 flex flex-wrap gap-4 justify-center relative z-20">
          <Button
            onClick={onBookDemo}
            size="lg"
            className="bg-blue-700 hover:bg-blue-800 text-white px-9 h-12 text-base rounded-full shadow-lg shadow-blue-700/30 transition-transform hover:-translate-y-0.5"
          >
            Book Demo
          </Button>
          <Button
            onClick={onGetStarted}
            size="lg"
            variant="outline"
            className="border-slate-300 text-slate-800 hover:bg-white hover:border-blue-700 hover:text-blue-700 px-9 h-12 text-base rounded-full group bg-white/90 backdrop-blur-sm shadow-sm"
          >
            Get Started
            <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>

      <div className="relative z-30 max-w-6xl mx-auto px-4 sm:px-6 mt-20 animate-fade-up-delayed">
        <div className="relative">
          
          <NumberCard />
          <AgentCard />

          {/* Restored Image Container Below */}
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-slate-200 relative z-10 bg-white">
            <img
              src={IMAGES.hero}
              alt="Customer support team at work"
              className="w-full object-cover h-64 sm:h-80 lg:h-[450px] object-[center_30%]"
              loading="eager"
            />
          </div>

          <div className="relative sm:absolute sm:-bottom-10 sm:left-1/2 sm:-translate-x-1/2 mt-6 sm:mt-0 bg-white rounded-2xl shadow-xl border border-slate-100 px-8 py-6 flex flex-wrap justify-center gap-x-12 gap-y-4 z-30">
            {HERO.stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-heading font-black text-3xl text-blue-700">{s.value}</div>
                <div className="text-[11px] font-semibold tracking-wider uppercase text-slate-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden sm:block h-14" />
      </div>
    </section>
  );
};

export default Hero;