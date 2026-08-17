import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, CheckCircle2, ChevronRight, ChevronLeft, 
  Mic, FileAudio, Search, HardDrive, Lock, Bell, 
  ShieldCheck, Plug, Headphones, BrainCircuit
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Button } from "../components/ui/button";
import Navbar from "../components/Navbar";
import { Footer } from "../components/HomeSections2";
import OurProducts from "../components/OurProducts";

// =========================================================================
// CALLISTO VOICE LOGGER SPECIFIC DATA
// =========================================================================
const PAGE_DATA = {
  title: "Callisto Voice Logger",
  tagline: "The ideal call recording solution — every conversation captured, compressed and searchable.",
  heroVideo: "/blue-voice.mp4", // <-- UPDATE THIS TO YOUR EXACT VIDEO FILE NAME IN THE PUBLIC FOLDER
  overviewImage: "/callisto-overview.png", // <-- ADDED FOR 2-COLUMN LAYOUT CONSISTENCY
  stats: [
    { value: "All", label: "Analog/PRI/SIP" },
    { value: "90%", label: "Storage Savings" },
    { value: "100%", label: "Call Capture" },
  ],
  overview: [
    "Callisto Voice Logger records every call across your organisation — analog lines, PRI trunks or SIP — with crystal clarity and minimal storage footprint. Recordings are indexed by date, extension, caller ID and disposition so any conversation is retrievable in seconds.",
    "Designed for compliance-heavy industries, Callisto supports multiple formats including VOX and MP3, tamper-evident archives, role-based playback permissions and automatic retention policies. It is the recording backbone trusted by banks, hospitals and contact centers for decades.",
  ],
  features: [
    { icon: Mic, title: "Multi-Protocol Capture", description: "Record Analog, PRI, E1/T1 and SIP simultaneously on one server." },
    { icon: FileAudio, title: "Multiple Formats", description: "VOX, MP3, WAV and more — tuned for quality vs. storage." },
    { icon: Search, title: "Instant Retrieval", description: "Search by number, extension, time, duration or custom tags." },
    { icon: HardDrive, title: "Minimal Storage", description: "Advanced compression stores years of audio on modest disks." },
    { icon: Lock, title: "Tamper-Proof Archive", description: "Checksummed, encrypted recordings with full audit logs." },
    { icon: Bell, title: "Live Monitoring & Alerts", description: "Listen live, flag calls and trigger alerts on keywords or silence." },
  ],
  benefits: [
    "Meet regulatory recording mandates effortlessly",
    "Resolve customer disputes with indisputable evidence",
    "Coach agents using real call examples",
    "Requires minimal storage space and hardware",
    "Scales from 4 to 1,000+ recording channels",
    "Integrates with dialer, CRM and quality tools",
  ],
  useCases: ["Banking & trading desks", "Emergency & helpline services", "Contact center QA", "Legal & compliance teams"],
  faqs: [
    { q: "What types of lines can Callisto Voice Logger record?", a: "Callisto can seamlessly record Analog lines, PRI trunks, E1/T1, and SIP trunks simultaneously on a single server without needing separate hardware." },
    { q: "Are the recordings secure and tamper-proof?", a: "Yes, all recordings are encrypted and checksummed to create a tamper-evident archive, making them fully compliant for legal, financial, and regulatory audits." },
    { q: "How much storage space do I need?", a: "Callisto uses advanced compression algorithms that reduce storage requirements by up to 90%, allowing you to store years of high-quality audio on standard, modest hard drives." },
    { q: "Can I search for a specific recording easily?", a: "Absolutely. Recordings are indexed by caller ID, extension, date, time, and custom tags, allowing you to retrieve any conversation in seconds." },
    { q: "Does it support live monitoring for QA teams?", a: "Yes, supervisors have the ability to monitor ongoing calls in real-time, flag specific conversations, and even receive alerts based on predefined criteria like silence or keywords." },
    { q: "Is it easy to integrate with my CRM or dialer?", a: "Yes, Callisto integrates smoothly with major CRMs, auto dialers, and PBX systems through our robust APIs, ensuring seamless workflows across your communications stack." },
  ],
};

const FEATURE_IMAGES = [
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80", 
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80", 
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80", 
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80", 
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80", 
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80", 
];

const ENTERPRISE_FEATURES = [
  { icon: ShieldCheck, title: "Enterprise Security", description: "Encrypted protocols, fraud monitoring and hardened infrastructure that protect every conversation your teams have." },
  { icon: Plug, title: "CRM Integration", description: "Plug into Salesforce, Zoho, Freshdesk, or custom CRMs for instant caller screen-pops." },
  { icon: Headphones, title: "24/7 Support", description: "Never skip a beat. Secure 24/7 dedicated support for your critical recording infrastructure." },
  { icon: BrainCircuit, title: "Smart Archiving", description: "Elevate your team with smart retention policies, easy exporting, and automated QA hooks." },
];

export default function CallistoVoiceLogger() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCardsToShow(1);
      else if (window.innerWidth < 1024) setCardsToShow(2);
      else setCardsToShow(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const totalFeatures = PAGE_DATA.features.length;
  const maxSlide = Math.max(0, totalFeatures - cardsToShow);

  if (currentSlide > maxSlide) setCurrentSlide(maxSlide);
  const prevSlide = () => setCurrentSlide((p) => Math.max(p - 1, 0));
  const nextSlide = () => setCurrentSlide((p) => Math.min(p + 1, maxSlide));

  return (
    <div className="bg-white text-slate-900 flex flex-col min-h-screen">
      <Navbar />

      {/* --- FULL-HEIGHT HERO SECTION --- */}
      <section className="relative w-full min-h-[100dvh] flex flex-col overflow-hidden bg-[#0A1F44]">
        
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-90"
        >
          <source src={PAGE_DATA.heroVideo} type="video/mp4" />
        </video>

        {/* Lighter Gradient Overlay to let the video shine through */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44]/90 via-[#0A1F44]/10 to-[#0A1F44]/2 z-10 pointer-events-none" />
        
        {/* Invisible Spacer to clear the fixed Navbar */}
        <div className="w-full h-24 lg:h-32 shrink-0 pointer-events-none z-10"></div>
        
        {/* Main Hero Content (Centered) */}
        <div className="relative z-20 flex-grow flex flex-col justify-center w-full max-w-7xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
          <nav className="flex items-center gap-1.5 text-xs text-blue-200 mb-6">
            <Link className="hover:text-white transition-colors" to="/">Home</Link>
            <ChevronRight size={13} />
            <span className="text-blue-300">Products</span>
            <ChevronRight size={13} />
            <span className="text-white font-semibold">{PAGE_DATA.title}</span>
          </nav>
          
          <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight max-w-4xl leading-[1.05] animate-fade-up">
            {PAGE_DATA.title}
          </h1>
          <p className="mt-5 text-lg text-blue-100 max-w-2xl leading-relaxed text-justify animate-fade-up">
            {PAGE_DATA.tagline}
          </p>
          
          <div className="mt-8 flex flex-wrap gap-4 animate-fade-up">
            <Link to="/#contact">
              <Button className="bg-blue-600 hover:bg-blue-500 text-white px-8 h-12 rounded-md shadow-lg transition-transform hover:-translate-y-0.5" size="lg">
                Book Demo
              </Button>
            </Link>
            <Link to="/#contact">
              <Button className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white px-8 h-12 rounded-md group" size="lg" variant="outline">
                Talk to Sales
                <ArrowRight className="ml-1 transition-transform group-hover:translate-x-1" size={16} />
              </Button>
            </Link>
          </div>
        </div>

        {/* --- BOTTOM STATS BAR --- */}
        <div className="relative z-30 w-full shrink-0 border-t border-white/10 bg-[#0A1F44]/40 backdrop-blur-md py-6 mt-auto">
          <div className="max-w-[1400px] mx-auto grid grid-cols-3 divide-x divide-white/10">
            {PAGE_DATA.stats.map((s, i) => (
              <div key={s.label} className="text-center px-2 sm:px-4">
                <div className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white mb-1 md:mb-2 drop-shadow-md">
                  {s.value}
                </div>
                <div className="font-bold tracking-[0.1em] sm:tracking-[0.15em] uppercase text-blue-200/80 text-[10px] sm:text-xs md:text-sm">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* --- TWO-COLUMN OVERVIEW SECTION --- */}
      <section className="py-24 bg-white overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-16 lg:gap-20 xl:gap-28 items-center">
          
          {/* LEFT COLUMN: Image Container */}
          <div className="relative order-2 lg:order-1 w-full flex items-center justify-center">
            <img 
              src={PAGE_DATA.overviewImage} 
              alt={`${PAGE_DATA.title} Overview`}
              className="w-full h-auto object-contain transition-transform duration-700 hover:scale-105 drop-shadow-xl rounded-xl"
            />
          </div>

          {/* RIGHT COLUMN: Text */}
          <div className="relative z-10 order-1 lg:order-2">
            <div className="text-blue-700 text-xs font-bold tracking-[0.2em] uppercase mb-4">— Overview</div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 leading-snug mb-6">
              The Intelligence Behind Modern <span className="text-blue-600">Call Recording</span>
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed text-justify">
              {PAGE_DATA.overview.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-10">
              <Link to="/#contact">
                <Button className="bg-[#0A1F44] hover:bg-blue-700 text-white px-8 h-14 text-base rounded-md shadow-lg transition-transform hover:-translate-y-1" size="lg">
                  Book A Demo
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </section>

      <section className="bg-slate-50 py-10 border-b border-slate-200 border-dashed">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-400">
          <p className="font-mono text-sm"></p>
        </div>
      </section>

      <section className="pt-24 pb-12 bg-[#FAFAFA] overflow-hidden relative">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-16 text-center"
          >
            <h2 className="font-heading font-black text-4xl sm:text-5xl tracking-tight text-slate-900 leading-tight">
              Everything {PAGE_DATA.title} gives your team
            </h2>
          </motion.div>

          <div className="relative w-full">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`absolute -left-2 sm:-left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                currentSlide === 0 ? "bg-white text-slate-300 shadow-sm cursor-not-allowed opacity-50" : "bg-blue-50 text-[#1f638b] hover:bg-[#1f638b] hover:text-white shadow-lg cursor-pointer"
              }`}
            >
              <ChevronLeft size={26} strokeWidth={2.5} />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentSlide === maxSlide}
              className={`absolute -right-2 sm:-right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                currentSlide === maxSlide ? "bg-white text-slate-300 shadow-sm cursor-not-allowed opacity-50" : "bg-blue-50 text-[#1f638b] hover:bg-[#1f638b] hover:text-white shadow-lg cursor-pointer"
              }`}
            >
              <ChevronRight size={26} strokeWidth={2.5} />
            </button>

            <div className="overflow-hidden px-2 py-6 mx-8 sm:mx-10">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * (100 / cardsToShow)}%)` }}
              >
                {PAGE_DATA.features.map((f, i) => {
                  const imageUrl = FEATURE_IMAGES[i % FEATURE_IMAGES.length];
                  return (
                    <div key={f.title} className="shrink-0 px-3 transition-all duration-500" style={{ width: `${100 / cardsToShow}%` }}>
                      <div className="bg-white rounded-[32px] p-5 border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] hover:-translate-y-3 transition-all duration-500 flex flex-col h-full group">
                        <div className="w-full h-48 overflow-hidden rounded-[20px] mb-5">
                          <img src={imageUrl} alt={f.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        </div>
                        <div className="flex flex-col flex-grow items-center text-center px-2">
                          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-3">
                            <f.icon size={18} />
                          </div>
                          <h3 className="font-heading font-bold text-xl text-slate-900 mb-2 group-hover:text-[#1f638b] transition-colors">{f.title}</h3>
                          <p className="text-[14px] text-slate-500 leading-relaxed mb-4">{f.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 pt-12 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-blue-700 text-xs font-bold tracking-[0.2em] uppercase mb-3">— Key Features</div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl tracking-tight text-slate-900 leading-tight max-w-3xl">
            Empowering business-critical communications with reliability and security.
          </h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ENTERPRISE_FEATURES.map((f, i) => {
              const accent = ["blue", "red", "amber", "blue"][i % 4];
              const accents = {
                blue: "bg-blue-50 text-blue-700 group-hover:bg-blue-700",
                red: "bg-red-50 text-red-600 group-hover:bg-red-600",
                amber: "bg-amber-50 text-amber-500 group-hover:bg-amber-500",
              };
              return (
                <div key={f.title} className="group bg-white rounded-2xl border border-slate-100 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 group-hover:text-white ${accents[accent]}`}>
                    <f.icon size={22} />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed text-justify">{f.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-14">
          <div>
            <div className="text-blue-700 text-xs font-bold tracking-[0.2em] uppercase mb-3">— Business Benefits</div>
            <h2 className="font-heading font-black text-3xl tracking-tight text-slate-900 leading-tight">
              Why businesses choose it
            </h2>
            <ul className="mt-8 space-y-4">
              {PAGE_DATA.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-slate-700 text-justify">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={14} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-blue-700 text-xs font-bold tracking-[0.2em] uppercase mb-3">— Use Cases</div>
            <h2 className="font-heading font-black text-3xl tracking-tight text-slate-900 leading-tight">
              Perfect for
            </h2>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {PAGE_DATA.useCases.map((u, i) => (
                <div key={u} className="rounded-xl border border-slate-200 bg-white p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <div className="font-heading font-black text-2xl text-blue-200">{String(i + 1).padStart(2, "0")}</div>
                  <div className="mt-2 font-semibold text-slate-800 text-sm text-justify">{u}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="text-blue-700 text-xs font-bold tracking-[0.2em] uppercase mb-4">— FAQ</div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900">Common Questions</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {PAGE_DATA.faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-slate-50 rounded-xl border border-slate-100 mb-3 px-6 shadow-sm data-[state=open]:shadow-md transition-shadow">
                <AccordionTrigger className="text-left font-heading font-bold text-slate-900 hover:text-blue-700 hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="bg-white py-10 border-y border-slate-200 border-dashed">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-400">
          <p className="font-mono text-sm"></p>
        </div>
      </section>

      <section className="py-16 bg-[#0A1F44]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight">
              Ready to deploy {PAGE_DATA.title}?
            </h2>
            <p className="mt-3 text-blue-200 max-w-xl text-justify">
              Talk to our telephony experts and get a tailored demo for your business within 24 hours.
            </p>
          </div>
          <Link className="shrink-0" to="/#contact">
            <Button className="bg-blue-600 hover:bg-blue-500 text-white px-9 h-12 rounded-md shadow-lg transition-transform hover:-translate-y-0.5" size="lg">
              Book a Free Demo <ArrowRight className="ml-1.5" size={16} />
            </Button>
          </Link>
        </div>
      </section>

      <OurProducts />

      <Footer/>
    </div>
  );
}