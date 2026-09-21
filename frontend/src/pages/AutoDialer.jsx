import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, CheckCircle2, ChevronRight, ChevronLeft, ChevronDown,
  PhoneOutgoing, Bot, ListChecks, BarChart3, ShieldCheck, 
  Headphones, BrainCircuit, PlayCircle, FastForward, Plug,
  PhoneCall, AlertTriangle, UserCog, Clock, Users,
  ShoppingBag, ShoppingCart, Landmark, Cloud, Building, HeartPulse, Building2, Zap,
  Phone, PhoneOff, TrendingUp, Circle
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Button } from "../components/ui/button";
import Navbar from "../components/Navbar";
import { Footer } from "../components/HomeSections2";
import OurProducts from "../components/OurProducts";

// =========================================================================
// AUTO DIALER SPECIFIC DATA
// =========================================================================
const PAGE_DATA = {
  title: "Auto Dialer",
  tagline: "Maximize agent talk time and campaign ROI with an intelligent predictive, progressive, and preview dialing engine.",
  heroVideo: "/auto-dialer-bg.mp4", 
  overviewImage: "/auto-dialer-overview.png", 
  stats: [
    { value: "300%", label: "Talk Time Increase" },
    { value: "AI", label: "Machine Detection" },
    { value: "10k+", label: "Concurrent Calls" },
  ],
  overview: [
    "Cube Auto Dialer is an enterprise-grade outbound dialing solution designed to eliminate agent idle time, increase connect rates, and drive massive campaign ROI. By automatically filtering out busy signals, voicemails, and disconnected numbers, your agents only spend time talking to live customers.",
    "Whether you need the aggressive pacing of a Predictive Dialer, the strict compliance of a Progressive Dialer, or the high-touch context of a Preview Dialer, our platform adapts to your specific campaign needs in real-time."
  ],
  features: [
    { icon: FastForward, title: "Predictive Dialing", description: "AI algorithm predicts agent availability and dials ahead to eliminate wait times." },
    { icon: PlayCircle, title: "Progressive & Preview", description: "Dial one-to-one or let agents review customer details before initiating the call." },
    { icon: Bot, title: "Smart AMD", description: "Advanced Answering Machine Detection filters out non-human pickups instantly." },
    { icon: ShieldCheck, title: "DNC Compliance", description: "Automatic Do-Not-Call list scrubbing ensures strict regulatory compliance." },
    { icon: ListChecks, title: "Campaign Management", description: "Upload leads, manage multiple campaigns, and set custom dialing rules on the fly." },
    { icon: BarChart3, title: "Real-Time Analytics", description: "Live supervisor wallboards tracking agent performance, drops, and connect rates." },
  ],
  faqs: [
    { q: "What is the difference between Predictive, Progressive, and Preview dialing?", a: "Predictive dialing uses AI to dial ahead based on agent availability. Progressive dials one call per available agent to ensure zero dropped calls. Preview allows the agent to review the customer's information before initiating the call themselves." },
    { q: "Does the dialer detect answering machines automatically?", a: "Yes. Our Smart Answering Machine Detection (AMD) instantly filters out voicemails, busy signals, and disconnected numbers, ensuring your agents only spend their time speaking to live humans." },
    { q: "How does the Auto Dialer handle Do-Not-Call (DNC) lists?", a: "The system features automated DNC list scrubbing. You can upload local or national DNC registries, and the dialer will automatically block outgoing calls to those numbers, ensuring strict regulatory compliance." },
    { q: "Can I integrate the dialer with my existing CRM?", a: "Absolutely. Our Auto Dialer offers native integrations and APIs for popular platforms like Salesforce, Zoho, and Freshdesk. When a call connects, the customer's details will instantly 'pop' on the agent's screen." },
    { q: "Can I run multiple campaigns at the same time?", a: "Yes, our Campaign Management module allows supervisors to upload different lead lists, set custom dialing rules, and run multiple concurrent campaigns while monitoring everything through real-time wallboards." },
    { q: "Is the dialer suitable for both small teams and large BPOs?", a: "Yes, the architecture is highly scalable. It can easily accommodate a 5-seat local telesales team or scale up to handle over 10,000 concurrent calls for a massive enterprise BPO floor." },
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

// --- PRODUCTIVITY BENEFITS DATA (UPDATED WITH COLORS) ---
const PRODUCTIVITY_BENEFITS = [
  { 
    icon: Clock, 
    title: "Maximized Connect Rates", 
    desc: "Our intelligent routing instantly connects live prospects to available agents.",
    color: "blue" // For conditional styling
  },
  { 
    icon: PhoneOutgoing, 
    title: "Accelerated Outreach", 
    desc: "Eradicate manual dialing completely. Automate your outbound flow to easily handle massive daily call volumes.",
    color: "green"
  },
  { 
    icon: ShieldCheck, 
    title: "Enhanced Brand Trust", 
    desc: "Deliver a professional, consistent calling experience that improves answer rates and builds customer credibility.",
    color: "purple"
  },
  { 
    icon: Zap, 
    title: "Error-Free Operations", 
    desc: "Automated call routing, instant CRM logging, and smart workflows eliminate repetitive human mistakes.",
    color: "amber"
  },
  { 
    icon: Users, 
    title: "Peak Agent Efficiency", 
    desc: "Keep your team focused and motivated with seamless screen-pops, automated pacing, and zero wait times.",
    color: "teal"
  },
];

// --- TRUSTED BY LOGOS ---
const CLIENT_LOGOS = [
  '/1.jpg', '/2.png', '/4.png', '/5.jpeg', 
  '/6.png', '/7.png', '/upsc.png', '/cars24.png', '/Yatra.png'
];
const PARTNER_LOGOS = [
  '/10.png', '/11.png', '/Avaya.jpeg', '/DigiCon.png', 
  '/Fusion.png', '/Mitel.png', '/ABSIndia.png'
];

// --- DIALER TYPES ---
const DIALER_TYPES = [
  {
    title: "Predictive Dialer",
    description: "Businesses looking to boost agent time for high-volume outreach choose a predictive dialer. It is a type of auto dialer software solution that connects multiple numbers to the agent only when a call is answered. A predictive dialer software solution is ideal for large organizations or businesses, as it reduces idle time, boosts connect rates, and helps your team reach more prospects without increasing team size.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80",
    reverse: false
  },
  {
    title: "Power Dialer",
    description: "A power dialer is designed for businesses that focus on sales teams, where agents automatically call numbers one by one from a predefined list. This is an auto dialer software that helps agents stay in control while eliminating manual dialing. Power dialer software solution is perfect for follow-ups and warm leads, assisting teams to maintain call quality, stay compliant, and increase daily call output with consistent performance.",
    image: "https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&w=800&q=80",
    reverse: true
  },
  {
    title: "Progressive Dialer",
    description: "The progressive dialer automatically dials the following number only when your agents are available. This advanced auto dialer software balances efficiency and control, making it ideal for business, especially customer support and service campaigns. Teams get better clarity with a progressive dialer software solution in conversation, with fewer dropped calls, and improved customer experience without overwhelming callers or agents.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80",
    reverse: false
  },
  {
    title: "Preview Dialer",
    description: "Preview Dialer is an auto dialer software solution that gives agents time to review customer details before making a call. An agent can prepare personalized conversations and handle high-value leads with confidence. The preview dialer software is best suited for relationship-driven call management, improving call quality while maintaining a steady outreach.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    reverse: true
  }
];

// --- DIFFERENCE (USE CASES) DATA ---
const DIFFERENCE_DATA = [
  {
    title: "Auto dialer in Sales Teams",
    content: "Your sales team can connect with more customers faster by using an automatic dialer solution that eliminates manual dialing. It helps reduce idle time, allowing your sales agents to focus on conversations that boost conversion.",
    image1: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80",
    image2: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Auto dialer in Lead Qualification",
    content: "Quickly filter through large lists of prospects to identify high-quality leads. Our automated dialing software ensures your qualification team speaks only to engaged prospects, dropping unproductive numbers instantly.",
    image1: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80",
    image2: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Auto Dialer in Customer Support",
    content: "Enhance proactive customer service by automatically reaching out to customers for follow-ups, ticket resolutions, and feedback collection without manual intervention.",
    image1: "https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&w=800&q=80",
    image2: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Auto Dialer in Collections & Payment Reminders",
    content: "Increase recovery rates with automated payment reminders and collection calls. The dialer intelligently paces outreach while maintaining compliance with debt collection regulations.",
    image1: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    image2: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Auto dialer in Telemarketing & Surveys",
    content: "Run high-volume telemarketing and survey campaigns efficiently. Connect instantly with participants, record responses, and view real-time analytics to measure campaign success.",
    image1: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    image2: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
  }
];

// --- INDUSTRIES POWERED DATA ---
const INDUSTRIES_POWERED_DATA = [
  { icon: ShoppingBag, title: "Marketplace" },
  { icon: ShoppingCart, title: "E-commerce" },
  { icon: Landmark, title: "Fintech" },
  { icon: Cloud, title: "SaaS Companies" },
  { icon: Building, title: "Hospitality Management" },
  { icon: HeartPulse, title: "Healthcare" },
  { icon: Building2, title: "Real Estate" },
  { icon: Headphones, title: "Telecommunications" },
];


export default function AutoDialer() {
  const [activeDifferenceTab, setActiveDifferenceTab] = useState(0);
  
  // State for Industries Carousel
  const [currentIndSlide, setCurrentIndSlide] = useState(0);
  const [indCardsToShow, setIndCardsToShow] = useState(4);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Responsive logic for Industries Carousel
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setIndCardsToShow(1);
      else if (window.innerWidth < 1024) setIndCardsToShow(2);
      else if (window.innerWidth < 1280) setIndCardsToShow(3);
      else setIndCardsToShow(4);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndSlide = Math.max(0, INDUSTRIES_POWERED_DATA.length - indCardsToShow);
  const prevIndSlide = () => setCurrentIndSlide((p) => Math.max(p - 1, 0));
  const nextIndSlide = () => setCurrentIndSlide((p) => Math.min(p + 1, maxIndSlide));

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
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
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
            <span className="text-blue-300">Services</span>
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

      {/* --- TWO-LINE TRUSTED BY MARQUEE --- */}
      <section className="py-16 bg-white border-b border-slate-100 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 text-center">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900">
            Cloud Communications Trusted by Leading Businesses Across the Globe
          </h2>
        </div>
        
        {/* Side fade gradients for smooth sliding effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
        <div className="flex flex-col gap-10 sm:gap-14">
          {/* Row 1: Clients moving Left */}
          <div className="flex w-max">
            <motion.div 
              animate={{ x: ["0%", "-50%"] }} 
              transition={{ ease: "linear", duration: 35, repeat: Infinity }} 
              className="flex items-center gap-16 sm:gap-24 px-8"
            >
              {[...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logoPath, idx) => (
                <div key={idx} className="w-28 h-12 sm:w-40 sm:h-16 relative flex items-center justify-center shrink-0 hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <img src={logoPath} alt="Client Logo" className="max-w-full max-h-full object-contain" />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 2: Partners moving Right */}
          <div className="flex w-max">
            <motion.div 
              animate={{ x: ["-50%", "0%"] }} 
              transition={{ ease: "linear", duration: 40, repeat: Infinity }} 
              className="flex items-center gap-16 sm:gap-24 px-8"
            >
              {[...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS].map((logoPath, idx) => (
                <div key={idx} className="w-28 h-12 sm:w-40 sm:h-16 relative flex items-center justify-center shrink-0 hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <img src={logoPath} alt="Partner Logo" className="max-w-full max-h-full object-contain" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- REBUILT TWO-COLUMN OVERVIEW SECTION --- */}
      <section className="py-24 bg-white overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-16 lg:gap-20 xl:gap-28 items-center">
          
          {/* LEFT COLUMN: Image */}
          <div className="relative order-2 lg:order-1 w-full rounded-3xl overflow-hidden shadow-2xl bg-white flex items-center justify-center">
            <img 
              src={PAGE_DATA.overviewImage} 
              alt={`${PAGE_DATA.title} Overview`}
              className="w-full h-auto max-h-[600px] object-contain transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* RIGHT COLUMN: Text */}
          <div className="relative z-10 order-1 lg:order-2">
            <div className="text-blue-700 text-xs font-bold tracking-[0.2em] uppercase mb-4">— Overview</div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 leading-snug mb-6">
              The Intelligence Behind Modern <span className="text-blue-600">Auto Dialing</span>
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

{/* --- PRODUCTIVITY BENEFITS & ROUTING DIAGRAM SECTION --- */}
      <section className="py-24 bg-[#F8FAFC] border-b border-slate-200 relative overflow-hidden">
        
        {/* Subtle background glow effects */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[100px] opacity-60 pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[80px] opacity-70 pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
          
          {/* Section Header */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 font-bold text-sm mb-6 border border-blue-100 shadow-sm">
              <Zap size={16} className="text-blue-600 fill-blue-600" /> Advanced AutoDialer
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 leading-tight mb-5">
              Experience Real-Time Productivity Gains with <br className="hidden sm:block" />
              <span className="text-blue-600">Advanced AutoDialer</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Automate your outbound calling, connect faster, and empower your agents <br className="hidden sm:block"/> to handle more conversations — all in real time.
            </p>
          </div>

          {/* --- ROUTING DIAGRAM GRAPHIC COMPONENT --- */}
          <div className="w-full flex justify-center mb-24 mt-12 relative">
            
            {/* DESKTOP LAYOUT (Flexbox guarantees no overlap) */}
            <div className="hidden lg:flex w-full max-w-[1150px] items-center justify-between">
              
              {/* 1. Left Pills Column (Fixed Width) */}
              <div className="flex flex-col gap-5 w-[260px] z-20 shrink-0">
                {/* Pill 1 */}
                <div className="flex items-center gap-4 bg-white p-3 pr-6 rounded-2xl shadow-sm border border-slate-100">
                  <div className="w-11 h-11 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-[14px] font-bold text-slate-800 leading-tight">Dialing...</div>
                    <div className="text-[12px] text-slate-400 font-medium mt-0.5">+91 98765 43210</div>
                  </div>
                </div>
                {/* Pill 2 */}
                <div className="flex items-center gap-4 bg-white p-3 pr-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-50">
                  <div className="w-11 h-11 rounded-full bg-teal-500 text-white flex items-center justify-center shrink-0">
                    <PhoneCall size={18} />
                  </div>
                  <div>
                    <div className="text-[14px] font-bold text-slate-800 leading-tight">Connected</div>
                    <div className="text-[12px] text-slate-400 font-medium mt-0.5">+91 87654 32109</div>
                  </div>
                </div>
                {/* Pill 3 */}
                <div className="flex items-center gap-4 bg-white p-3 pr-6 rounded-2xl shadow-sm border border-slate-100">
                  <div className="w-11 h-11 rounded-full bg-blue-500 text-white flex items-center justify-center shrink-0">
                    <PhoneOutgoing size={18} />
                  </div>
                  <div>
                    <div className="text-[14px] font-bold text-slate-800 leading-tight">Talking</div>
                    <div className="text-[12px] text-slate-400 font-medium mt-0.5">+91 76543 21098</div>
                  </div>
                </div>
                {/* Pill 4 */}
                <div className="flex items-center gap-4 bg-white p-3 pr-6 rounded-2xl shadow-sm border border-slate-100 opacity-70">
                  <div className="w-11 h-11 rounded-full bg-slate-400 text-white flex items-center justify-center shrink-0">
                    <PhoneOff size={18} />
                  </div>
                  <div>
                    <div className="text-[14px] font-bold text-slate-800 leading-tight">Next Call</div>
                    <div className="text-[12px] text-slate-400 font-medium mt-0.5">+91 65432 10987</div>
                  </div>
                </div>
              </div>

              {/* 2. Connecting Lines (Fills gap seamlessly) */}
              <div className="w-[100px] xl:w-[130px] h-[280px] z-10 shrink-0">
                <svg width="100%" height="100%" viewBox="0 0 100 280" fill="none" preserveAspectRatio="none">
                  <path d="M0 30 C 50 30, 50 140, 100 140" stroke="#93C5FD" strokeWidth="2" strokeDasharray="4 4" />
                  <path d="M0 105 C 50 105, 50 140, 100 140" stroke="#93C5FD" strokeWidth="2" />
                  <path d="M0 175 C 50 175, 50 140, 100 140" stroke="#93C5FD" strokeWidth="2" />
                  <path d="M0 250 C 50 250, 50 140, 100 140" stroke="#93C5FD" strokeWidth="2" strokeDasharray="4 4" />
                </svg>
              </div>

              {/* 3. Center Node (AutoDialer) */}
              <div className="flex flex-col items-center z-20 shrink-0 w-[160px]">
                <div className="w-32 h-32 bg-blue-50/80 rounded-full flex items-center justify-center">
                  <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center shadow-inner">
                    <div className="w-[72px] h-[72px] bg-blue-600 rounded-full flex items-center justify-center text-white shadow-[0_10px_25px_rgba(37,99,235,0.4)]">
                      <Phone size={32} className="fill-white" />
                    </div>
                  </div>
                </div>
                <h3 className="font-heading font-black text-slate-800 text-lg mt-4">AutoDialer</h3>
                <p className="text-[12px] font-medium text-slate-500">Intelligent • Fast • Scalable</p>
              </div>

              {/* 4. Arrow Right */}
              <div className="w-[50px] flex justify-center text-blue-400 shrink-0">
                <ArrowRight size={28} strokeWidth={2} />
              </div>

              {/* 5. Dashboard + Agent Image Container */}
              <div className="flex flex-1 items-center relative z-20 max-w-[500px]">
                {/* Dashboard */}
                <div className="bg-white rounded-[20px] shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-slate-100 p-5 w-[320px] z-30 shrink-0">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span className="font-bold text-[12px] text-slate-800">Live Agent Dashboard</span>
                  </div>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 mb-5 pb-5 border-b border-slate-50">
                    <div>
                      <div className="text-[10px] text-slate-400 font-medium mb-1">Calls Today</div>
                      <div className="font-bold text-slate-800 text-base leading-none mb-1">642</div>
                      <div className="text-[9px] font-bold text-emerald-500 flex items-center gap-0.5"><TrendingUp size={9} /> +32%</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 font-medium mb-1">Connected</div>
                      <div className="font-bold text-slate-800 text-base leading-none mb-1">587</div>
                      <div className="text-[9px] font-bold text-emerald-500 flex items-center gap-0.5"><TrendingUp size={9} /> +28%</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 font-medium mb-1">Talk Time</div>
                      <div className="font-bold text-slate-800 text-base leading-none mb-1">8h 24m</div>
                      <div className="text-[9px] font-bold text-emerald-500 flex items-center gap-0.5"><TrendingUp size={9} /> +41%</div>
                    </div>
                  </div>

                  <div className="text-[11px] font-bold text-slate-800 mb-3">Live Calls</div>
                  
                  {/* List Items */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-[10px]">RS</div>
                        <div>
                          <div className="text-[11px] font-bold text-slate-800 leading-none mb-1">Rahul Sharma</div>
                          <div className="text-[9px] text-slate-400">+91 98765</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-[10px] text-slate-500 font-mono">02:34</div>
                        <div className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-600 text-[9px] font-bold w-[60px] text-center">Connected</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-[10px]">PM</div>
                        <div>
                          <div className="text-[11px] font-bold text-slate-800 leading-none mb-1">Priya Mehta</div>
                          <div className="text-[9px] text-slate-400">+91 87654</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-[10px] text-slate-500 font-mono">01:12</div>
                        <div className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-600 text-[9px] font-bold w-[60px] text-center">Connected</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-[10px]">AV</div>
                        <div>
                          <div className="text-[11px] font-bold text-slate-800 leading-none mb-1">Amit Verma</div>
                          <div className="text-[9px] text-slate-400">+91 76543</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-[10px] text-blue-600 font-bold font-mono">00:48</div>
                        <div className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-600 text-[9px] font-bold w-[60px] text-center">Talking</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Agent Image */}
                <div className="relative w-[240px] h-[260px] -ml-8 mt-6 z-10 shrink-0 flex items-end">
                  <div className="absolute inset-0 bg-blue-200 rounded-t-full shadow-inner opacity-80 z-0 overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-200 rounded-full mix-blend-multiply blur-xl translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&q=80" 
                    alt="Happy Call Center Agent" 
                    className="w-full h-[95%] object-cover object-top rounded-t-full z-10 relative"
                  />
                  
                  {/* Floating Badge */}
                  <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-2 flex items-center gap-2 border border-slate-50 z-30">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center shadow-sm">
                      <TrendingUp size={16} strokeWidth={2.5} />
                    </div>
                    <span className="text-[11px] font-black text-slate-800 leading-tight pr-1">
                      More Calls<br/>Handled
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* MOBILE LAYOUT (Stacking to prevent broken lines) */}
            <div className="flex lg:hidden flex-col items-center gap-10 w-full">
               {/* Center Node First on Mobile */}
               <div className="flex flex-col items-center z-20">
                <div className="w-32 h-32 bg-blue-50/80 rounded-full flex items-center justify-center">
                  <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center shadow-inner">
                    <div className="w-[72px] h-[72px] bg-blue-600 rounded-full flex items-center justify-center text-white shadow-[0_10px_25px_rgba(37,99,235,0.4)]">
                      <Phone size={32} className="fill-white" />
                    </div>
                  </div>
                </div>
                <h3 className="font-heading font-black text-slate-800 text-lg mt-4">AutoDialer</h3>
              </div>
              
              {/* Dashboard Mockup */}
              <div className="bg-white rounded-[20px] shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-slate-100 p-5 w-full max-w-[320px] z-30">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span className="font-bold text-[12px] text-slate-800">Live Agent Dashboard</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mb-5 pb-5 border-b border-slate-50">
                    <div>
                      <div className="font-bold text-slate-800 text-base leading-none mb-1">642</div>
                      <div className="text-[10px] text-slate-400 font-medium">Calls Today</div>
                    </div>
                    <div>
                      <div className="font-bold text-slate-800 text-base leading-none mb-1">587</div>
                      <div className="text-[10px] text-slate-400 font-medium">Connected</div>
                    </div>
                    <div>
                      <div className="font-bold text-slate-800 text-base leading-none mb-1">8h 24m</div>
                      <div className="text-[10px] text-slate-400 font-medium">Talk Time</div>
                    </div>
                  </div>
              </div>
            </div>
            
          </div>

          {/* --- BENEFIT CARDS (BOTTOM ROW) --- */}
          <div className="max-w-[1400px] mx-auto relative z-10 mt-10 lg:mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {PRODUCTIVITY_BENEFITS.map((b, i) => {
                const colorStyles = {
                  blue: { bg: "bg-blue-50", text: "text-blue-500", dash: "bg-blue-500" },
                  green: { bg: "bg-emerald-50", text: "text-emerald-500", dash: "bg-emerald-500" },
                  purple: { bg: "bg-purple-50", text: "text-purple-500", dash: "bg-purple-500" },
                  amber: { bg: "bg-amber-50", text: "text-amber-500", dash: "bg-amber-500" },
                  teal: { bg: "bg-teal-50", text: "text-teal-500", dash: "bg-teal-500" },
                };

                return (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="bg-white p-7 rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 text-left flex flex-col h-full hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300 relative z-20"
                  >
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shrink-0 ${colorStyles[b.color].bg} ${colorStyles[b.color].text}`}>
                      <b.icon size={26} strokeWidth={2.5} />
                    </div>
                    <h3 className="font-heading font-bold text-[17px] text-slate-900 mb-4 leading-snug">
                      {b.title}
                    </h3>
                    <p className="text-[13.5px] text-slate-500 leading-relaxed mb-8">
                      {b.desc}
                    </p>
                    <div className={`mt-auto w-8 h-[3px] rounded-full ${colorStyles[b.color].dash}`} />
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* --- GRID FEATURES SECTION --- */}
      <section className="pt-24 pb-24 bg-[#FAFAFA] overflow-hidden relative border-b border-slate-200">
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

          <div className="relative w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PAGE_DATA.features.map((f, i) => {
                const imageUrl = FEATURE_IMAGES[i % FEATURE_IMAGES.length];
                return (
                  <div key={f.title} className="bg-white rounded-[32px] p-5 border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] hover:-translate-y-3 transition-all duration-500 flex flex-col h-full group">
                    <div className="w-full h-48 overflow-hidden rounded-[20px] mb-5 shrink-0">
                      <img src={imageUrl} alt={f.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <div className="flex flex-col flex-grow items-center text-center px-2">
                      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-3 shrink-0">
                        <f.icon size={18} />
                      </div>
                      <h3 className="font-heading font-bold text-xl text-slate-900 mb-2 group-hover:text-[#1f638b] transition-colors">{f.title}</h3>
                      <p className="text-[14px] text-slate-500 leading-relaxed mb-4">{f.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* --- DIALER TYPES (PREDICTIVE, POWER, PROGRESSIVE, PREVIEW) SECTION --- */}
      <section className="py-24 bg-white overflow-hidden border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-tight">
              Power Your Outreach with <span className="text-blue-600">Auto Call Dialer Softwares</span> That Matches Your Business Needs
            </h2>
          </div>

          <div className="space-y-24">
            {DIALER_TYPES.map((dialer, index) => (
              <div key={index} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Image Column */}
                <div className={`relative w-full rounded-3xl overflow-hidden shadow-lg bg-slate-50 flex items-center justify-center p-4 lg:p-8 ${dialer.reverse ? 'lg:order-2' : 'lg:order-1'}`}>
                  <img src={dialer.image} alt={dialer.title} className="w-full h-auto max-h-[450px] object-cover rounded-2xl shadow-sm" />
                </div>

                {/* Text Column */}
                <div className={`${dialer.reverse ? 'lg:order-1' : 'lg:order-2'}`}>
                  <h3 className="font-heading font-black text-3xl sm:text-4xl text-slate-900 mb-6">
                    {dialer.title}
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed text-justify mb-8">
                    {dialer.description}
                  </p>
                  <Link to="/#contact">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-12 text-base rounded-md shadow-lg transition-transform hover:-translate-y-0.5">
                      Schedule Demo <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- DIFFERENCE ACCORDION SECTION --- */}
      <section className="py-24 bg-white overflow-hidden border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-tight">
              See Where You Can Make a Difference with Our <span className="text-blue-600">Advanced Automated Dialer Software</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Column: Custom Interactive Accordion */}
            <div className="space-y-2">
              {DIFFERENCE_DATA.map((item, index) => {
                const isActive = activeDifferenceTab === index;
                return (
                  <div key={index} className="border-b border-slate-200">
                    <button
                      onClick={() => setActiveDifferenceTab(isActive ? null : index)}
                      className="w-full flex items-center justify-between py-5 sm:py-6 text-left focus:outline-none group"
                    >
                      <h3 className={`font-heading font-bold text-xl sm:text-2xl transition-colors duration-300 pr-8 ${isActive ? "text-blue-600" : "text-slate-800 group-hover:text-blue-600"}`}>
                        {item.title}
                      </h3>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${isActive ? "bg-blue-50 text-blue-600" : "bg-slate-50 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600"}`}>
                        <ChevronDown className={`transition-transform duration-300 ${isActive ? "rotate-180" : ""}`} size={20} />
                      </div>
                    </button>
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="text-slate-600 text-base sm:text-lg leading-relaxed pb-6 pr-8 text-justify">
                            {item.content}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Dynamic Image Composition */}
            <div className="relative w-full h-[450px] sm:h-[550px] hidden lg:block mt-10 lg:mt-0">
              
              {/* Decorative Dot Grid - Top Left */}
              <div className="absolute top-12 left-6 w-24 h-24 grid grid-cols-5 gap-3 opacity-30 z-0">
                {[...Array(20)].map((_, i) => <div key={`dot1-${i}`} className="w-2.5 h-2.5 rounded-full bg-blue-600" />)}
              </div>
              
              {/* Decorative Dot Grid - Bottom Right */}
              <div className="absolute bottom-4 right-4 w-24 h-24 grid grid-cols-5 gap-3 opacity-30 z-20">
                {[...Array(20)].map((_, i) => <div key={`dot2-${i}`} className="w-2.5 h-2.5 rounded-full bg-blue-600" />)}
              </div>

              {/* Main Image (Top Right) */}
              <AnimatePresence mode="wait">
                {activeDifferenceTab !== null && (
                  <motion.div 
                    key={`img1-${activeDifferenceTab}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="absolute right-8 top-0 w-[65%] h-[400px] z-10"
                  >
                    {/* Thick Blue Frame Offset */}
                    <div className="absolute inset-0 border-[6px] border-blue-600 translate-x-6 translate-y-6 rounded-sm z-0" />
                    <img 
                      src={DIFFERENCE_DATA[activeDifferenceTab].image1} 
                      alt="Dialer Use Case" 
                      className="absolute inset-0 w-full h-full object-cover shadow-xl rounded-sm z-10 bg-white" 
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Overlapping Secondary Image (Bottom Left) */}
              <AnimatePresence mode="wait">
                {activeDifferenceTab !== null && (
                  <motion.div
                    key={`img2-${activeDifferenceTab}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="absolute left-6 bottom-8 w-[60%] h-[280px] z-20 shadow-2xl border-[6px] border-white bg-slate-100 rounded-sm"
                  >
                    <img 
                      src={DIFFERENCE_DATA[activeDifferenceTab].image2} 
                      alt="Dialer Agent" 
                      className="w-full h-full object-cover" 
                    />
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>
        </div>
      </section>

      {/* --- INDUSTRIES POWERED SECTION (NEW) --- */}
      <section className="py-24 bg-white overflow-hidden border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-tight">
              Industries We Are Powering with <span className="text-blue-600">Automatic Dialer Solutions</span>
            </h2>
          </motion.div>

          <div className="relative w-full px-12 sm:px-16">
            {/* Carousel Controls */}
            <button
              onClick={prevIndSlide}
              disabled={currentIndSlide === 0}
              className={`absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center transition-all duration-300 z-10 ${
                currentIndSlide === 0 ? "bg-white text-slate-300 cursor-not-allowed opacity-50" : "bg-white text-blue-600 hover:bg-blue-50 hover:border-blue-200 shadow-md cursor-pointer"
              }`}
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={nextIndSlide}
              disabled={currentIndSlide === maxIndSlide}
              className={`absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center transition-all duration-300 z-10 ${
                currentIndSlide === maxIndSlide ? "bg-white text-slate-300 cursor-not-allowed opacity-50" : "bg-white text-blue-600 hover:bg-blue-50 hover:border-blue-200 shadow-md cursor-pointer"
              }`}
            >
              <ChevronRight size={24} />
            </button>

            {/* Carousel Track */}
            <div className="overflow-hidden py-4">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndSlide * (100 / indCardsToShow)}%)` }}
              >
                {INDUSTRIES_POWERED_DATA.map((ind, i) => (
                  <div key={i} className="shrink-0 px-3 transition-all duration-500" style={{ width: `${100 / indCardsToShow}%` }}>
                    <div className="bg-white rounded-[24px] p-8 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:border-blue-100 transition-all duration-300 flex flex-col items-center h-[280px] group">
                      
                      <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <ind.icon size={32} strokeWidth={2} />
                      </div>
                      
                      <h3 className="font-heading font-bold text-xl text-slate-900 mb-auto group-hover:text-blue-600 transition-colors">
                        {ind.title}
                      </h3>
                      
                      <Link to="/#contact" className="w-full mt-6">
                        <Button variant="outline" className="w-full rounded-full border-blue-200 text-blue-600 hover:bg-blue-50 hover:text-blue-800 hover:border-blue-300 transition-all font-bold group/btn">
                          Schedule Demo 
                          <ArrowRight size={16} className="ml-2 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </Link>

                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Dots */}
            <div className="flex items-center justify-center gap-2 mt-10">
              {Array.from({ length: maxIndSlide + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${currentIndSlide === idx ? "w-6 bg-blue-600" : "w-2 bg-slate-200 hover:bg-blue-300"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="text-blue-700 text-xs font-bold tracking-[0.2em] uppercase mb-4">— FAQ</div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900">Common Questions</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {PAGE_DATA.faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-white rounded-xl border border-slate-100 mb-3 px-6 shadow-sm data-[state=open]:shadow-md transition-shadow">
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

      {/* --- CTA: NEED MORE THAN AN AUTO DIALER --- */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
          <div className="relative rounded-[2rem] overflow-visible bg-gradient-to-r from-blue-700 to-[#0ea5e9] shadow-2xl flex flex-col lg:flex-row items-center">
            
            {/* Decorative background blur */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
            
            {/* Text Content */}
            <div className="p-10 sm:p-14 lg:w-3/5 relative z-10">
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-5 leading-tight">
                Need More Than Just an Auto Dialer?
              </h2>
              <p className="text-blue-50 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
                Auto Dialer is only one part of a modern contact center. If you're planning to manage inbound calls, outbound campaigns, AI automation, omnichannel support and customer engagement from one platform, explore our Call Center Solutions in India.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/#contact">
                  <Button className="bg-[#F97316] hover:bg-[#ea580c] text-white px-8 h-12 rounded-full font-bold shadow-lg transition-transform hover:-translate-y-0.5 border-none">
                    Schedule Demo <ArrowRight className="ml-2" size={16} />
                  </Button>
                </Link>
                <Link to="/services/cloud-contact-center">
                  <Button variant="outline" className="border border-white/40 bg-transparent hover:bg-white/10 text-white px-8 h-12 rounded-full font-bold transition-colors">
                    Read More <ArrowRight className="ml-2" size={16} />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Image Box */}
            <div className="relative w-full lg:w-2/5 flex justify-center lg:justify-end items-end pt-10 lg:pt-0 pr-0 lg:pr-12 z-10">
              {/* Note: Replace this placeholder image src with your actual 3D agent character image path (e.g., "/agent-3d.png") */}
              <img 
                src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&w=600&q=80" 
                alt="Call Center Agent" 
                className="w-[85%] max-w-[350px] lg:max-w-[400px] h-auto object-cover rounded-t-2xl lg:rounded-none lg:object-contain translate-y-0 lg:translate-y-6"
              />
            </div>

          </div>
        </div>
      </section>

      <OurProducts />

      <Footer/>
    </div>
  );
}