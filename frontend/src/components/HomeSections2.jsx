import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Headset, Landmark, ConciergeBell, HeartPulse, TowerControl,
  MapPin, Phone, Mail, Send, CircleDollarSign, Zap, Route, Settings2,
  PhoneCall, Mic, Receipt, MonitorPlay, Voicemail, AudioLines, Radio, DatabaseZap, 
  ArrowRight, ChevronLeft, ChevronRight,
  Facebook, Linkedin, Instagram
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

// --- HARDCODED DATA ---
const CONTACT_INFO = {
  expertLine: "+91 120 405 7109",
  india: "+91 806 869 4440",
  email: "sales@cube-software.com",
  indiaOffice: "A-26, Ground Floor, Sector 63, Noida, Uttar Pradesh 201301, India",
};

const INDUSTRIES = [
  { icon: "Headset", title: "BPO – KPO", description: "High-volume dialing, logging and monitoring built for outsourcing floors of every size." },
  { icon: "Landmark", title: "Financial Services", description: "Compliant recording and secure telephony for banks, NBFCs and trading desks." },
  { icon: "ConciergeBell", title: "Hospitality", description: "Innovative desk solutions for hotels, event centres, cruise lines and travel brands." },
  { icon: "HeartPulse", title: "Healthcare", description: "Affordable patient-first communication suites for hospitals, labs and clinics." },
  { icon: "Building2", title: "Real Estate", description: "Dialer, voice logger and CRM bundles tuned for property sales teams." },
  { icon: "TowerControl", title: "Telecom", description: "Pioneers in telecom solutions since 1990 with home-grown software trusted worldwide." },
];

// Split the logos into Clients and Partners for the two-line marquee
const CLIENT_LOGOS = [
  '/1.jpg', '/2.png', '/4.png', '/5.jpeg', 
  '/6.png', '/7.png', '/upsc.png', '/cars24.png', '/yatra.png'
];

const PARTNER_LOGOS = [
  '/10.png', '/11.png', '/Avaya.jpeg', '/digiCon.png', 
  '/Fusion.png', '/Mitel.png', '/ABSIndia.png'
];

const FAQS = [
  { q: "What services does Cube Software provide?", a: "We offer a complete range of communication solutions including Cloud PBX, dialers (inbound/outbound/blended), voice loggers, screen loggers, IVRS, conference bridges, call billing software, voice mail systems, SIP trunking and CRM integrations." },
  { q: "Which Citys do you support?", a: "We provide numbers and voice solutions across the India Bangaluru, Mumbai, Delhi, Gurugram, Noida, Ahemdabad, Puna in India and many more regions. along with 140 & 160 Lines as well." },
  { q: "Can I get local and toll-free numbers?", a: "We provide local, national, international DID, toll-free, and vanity numbers to meet your business and market requirements." },
  { q: "How quickly can numbers be activated?", a: "Most numbers are activated within minutes after verification and payment. Some states may require documentation based on local telecom regulations." },
  { q: "Do you support call forwarding and IVR?", a: "Yes. Our platform supports IVR menus, smart call routing, call forwarding, time-based routing, ring groups, voicemail, call recording and auto attendants." },
  { q: "Can your services work with my existing dialers or PBX?", a: "Yes. Our SIP trunking and VoIP solutions are compatible with most major PBX platforms including Asterisk, FreePBX, 3CX, Grandstream and Cisco systems." },
  { q: "Do you provide CRM integrations?", a: "Yes. We integrate with popular CRMs and tools including custimized CRM, Salesforce, Freshdesk and custom applications through our APIs & CTI Connectors." },
  { q: "Is your platform suitable for call centers?", a: "Yes. Our platform is built for BPOs, call centers, support teams, sales teams, and remote workforces, delivering high-quality calls, intelligent routing, and enterprise-grade scalability" },
  { q: "How do I get started?", a: "Getting started is easy. Contact our sales team or request a demo through our website. Our experts will help you choose the right solution based on your business needs, call volume, and future growth." },
];

const WHY_ITEMS = [
  { icon: "CircleDollarSign", title: "Cut Costs by 80%", description: "Upgrade to cloud telephony and leave expensive legacy hardware behind." },
  { icon: "Zap", title: "Plug-and-Play Setup", description: "Instant setup. Zero headaches" },
  { icon: "Route", title: "AI-Powered Routing", description: "Distribute calls intelligently with routing engines tuned by three decades of telephony expertise." },
  { icon: "Settings2", title: "Built to Customise", description: "Shape the platform around your workflows — from IVR trees to wallboards, everything is configurable." },
];

const MARQUEE_ITEMS = [
  "Voice Without Limits.", "Connect More. Pay Less.", "35+ Years of Telephony Excellence.",
  "Enterprise Features. Small Business Pricing.", "Simply Better Telephony.",
];

// Fallback dummy icon for Building2 since it was removed to prevent errors
const Building2 = ({ size, className }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>;


const ICONS = {
  Headset, Landmark, ConciergeBell, HeartPulse, Building2, TowerControl,
  CircleDollarSign, Zap, Route, Settings2, PhoneCall, Mic, Receipt, MonitorPlay, 
  Voicemail, AudioLines, Radio, DatabaseZap
};

// --- DATA FOR THE NEW SERVICES CAROUSEL ---
const CAROUSEL_DATA = [
  {
    id: "cloud-contact-center",
    title: "Contact Center Solution",
    desc: "Get results with a powerful inbound, outbound and blended cloud contact center solution with full call disposition.",
    image: "https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "voice-logger",
    title: "Callisto Voice Logger",
    desc: "The ideal call recording solution — every conversation captured, compressed and searchable.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "call-billing",
    title: "Call Billing Software",
    desc: "Take command of telecom resources and costs across every office, hotel and facility.",
    image: "https://images.unsplash.com/photo-1611125832047-1d7ad1e8e48f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "screen-logger",
    title: "Screen Logger",
    desc: "Next-generation multi-PC screen recording over the network — see what your customers experienced.",
    image: "https://images.unsplash.com/photo-1551739440-5dd934d3a94a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ivrs",
    title: "IVRS Services",
    desc: "Custom IVR solutions built from scratch with the latest software, database and telecom technologies.",
    image: "https://images.unsplash.com/photo-1525598912003-663126343e1f?auto=format&fit=crop&w=800&q=80"
  }
];

// --- COMPONENTS ---
export const SectionLabel = ({ children }) => (
  <div className="text-blue-700 text-xs font-bold tracking-[0.2em] uppercase mb-3">— {children}</div>
);

export const SectionTitle = ({ children, className = "" }) => (
  <h2 className={`font-heading font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 leading-tight ${className}`}>
    {children}
  </h2>
);

const FeatureCard = ({ icon, title, description, accent = "blue", link }) => {
  const Icon = ICONS[icon];
  const accents = {
    blue: "bg-blue-50 text-blue-700 group-hover:bg-blue-700",
    red: "bg-red-50 text-red-600 group-hover:bg-red-600",
    amber: "bg-amber-50 text-amber-500 group-hover:bg-amber-500",
  };
  return (
    <div className="group bg-white rounded-2xl border border-slate-100 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 group-hover:text-white ${accents[accent]}`}>
        {Icon && <Icon size={22} />}
      </div>
      <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
      {link && (
        <Link to={link} className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-blue-700 hover:text-blue-800 group/link">
          Read More <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
        </Link>
      )}
    </div>
  );
};

export const WhySection = () => (
  <section id="about" className="py-20 lg:py-28 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <SectionLabel>Why Cube Software</SectionLabel>
      <SectionTitle className="max-w-3xl">Built for the businesses redefining communication</SectionTitle>
      <p className="mt-4 text-slate-600 max-w-2xl">
        For over 35+ years we have engineered Computer Telephony Integration software that works
        seamlessly with the communication stacks of leading international telecom vendors.
      </p>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {WHY_ITEMS.map((w, i) => (
          <FeatureCard key={w.title} {...w} accent={["blue", "red", "amber", "blue"][i]} />
        ))}
      </div>
    </div>
  </section>
);

// --- THE NEW CAROUSEL SECTION ---
export const ProductsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const maxIndex = Math.max(0, CAROUSEL_DATA.length - cardsToShow);

  const prevSlide = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));
  const nextSlide = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));

  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-16">
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-slate-900 tracking-tight">
            Our Services
          </h2>
        </div>

        <div className="relative">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`absolute -left-2 sm:-left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
              currentIndex === 0 
                ? "bg-white text-slate-300 shadow-sm cursor-not-allowed opacity-50" 
                : "bg-white text-[#1f638b] hover:bg-[#1f638b] hover:text-white shadow-xl cursor-pointer"
            }`}
            aria-label="Previous"
          >
            <ChevronLeft size={24} strokeWidth={2.5} />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
            className={`absolute -right-2 sm:-right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
              currentIndex === maxIndex 
                ? "bg-white text-slate-300 shadow-sm cursor-not-allowed opacity-50" 
                : "bg-white text-[#1f638b] hover:bg-[#1f638b] hover:text-white shadow-xl cursor-pointer"
            }`}
            aria-label="Next"
          >
            <ChevronRight size={24} strokeWidth={2.5} />
          </button>

          <div className="overflow-hidden px-4 py-8 mx-6 sm:mx-10">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
            >
              {CAROUSEL_DATA.map((item) => (
                <div 
                  key={item.id}
                  className="shrink-0 px-4 transition-all duration-500"
                  style={{ width: `${100 / cardsToShow}%` }}
                >
                  <div className="bg-white rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 flex flex-col h-full overflow-hidden group">
                    
                    <div className="w-full h-56 overflow-hidden relative">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                    </div>
                    
                    <div className="p-8 flex flex-col flex-grow items-center text-center">
                      <h3 className="font-heading font-bold text-xl text-slate-900 mb-4 group-hover:text-[#1f638b] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-[14px] text-slate-500 leading-relaxed mb-8 flex-grow">
                        {item.desc}
                      </p>
                      <Link to={`/services/${item.id}`} className="w-full mt-auto">
                        <button className="w-full bg-[#1f638b] hover:bg-[#13425e] text-white py-3.5 rounded-xl font-bold shadow-md transition-colors text-[15px]">
                          Learn More
                        </button>
                      </Link>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export const MarqueeBanner = () => (
  <section className="py-10 bg-[#0A1F44] overflow-hidden">
    <div className="marquee-track flex items-center gap-16 whitespace-nowrap">
      {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
        <span key={i} className="flex items-center gap-16">
          <span className="font-heading font-black text-2xl sm:text-3xl text-white/90">{item}</span>
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shrink-0" />
        </span>
      ))}
    </div>
  </section>
);

export const IndustriesSection = () => (
  <section id="industries" className="py-20 lg:py-28 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <SectionLabel>Industries We Serve</SectionLabel>
      <SectionTitle className="max-w-3xl">Our products are designed to perform at every arena</SectionTitle>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {INDUSTRIES.map((ind, i) => {
          const Icon = ICONS[ind.icon];
          const colors = ["text-blue-700 bg-blue-50", "text-red-600 bg-red-50", "text-amber-500 bg-amber-50"];
          return (
            <div key={ind.title} className="group flex gap-5 p-6 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className={`w-12 h-12 shrink-0 rounded-xl flex items-center justify-center ${colors[i % 3]}`}>
                {Icon && <Icon size={22} />}
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-slate-900">{ind.title}</h3>
                <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{ind.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export const ClientsSection = () => (
  <section className="py-16 lg:py-24 border-y border-slate-100 bg-[#FAFAFA] overflow-hidden relative">
    {/* Side fade gradients for smooth scrolling effect */}
    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 text-center">
      <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900">Trusted By</h2>
    </div>

    <div className="flex flex-col gap-12 sm:gap-16">
      {/* Row 1: Clientele moving Left */}
      <div className="flex w-max">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ ease: "linear", duration: 35, repeat: Infinity }} 
          className="flex items-center gap-16 sm:gap-24 px-8"
        >
          {[...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logoPath, idx) => (
            <div key={idx} className="w-32 h-14 sm:w-40 sm:h-16 relative flex items-center justify-center shrink-0 hover:scale-105 transition-transform duration-300 cursor-pointer">
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
            <div key={idx} className="w-32 h-14 sm:w-40 sm:h-16 relative flex items-center justify-center shrink-0 hover:scale-105 transition-transform duration-300 cursor-pointer">
              <img src={logoPath} alt="Partner Logo" className="max-w-full max-h-full object-contain" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);



export const FAQSection = () => (
  <section id="faq" className="py-20 lg:py-28 bg-slate-50">
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <SectionLabel>FAQ</SectionLabel>
      <SectionTitle>Frequently Asked Questions</SectionTitle>
      <Accordion type="single" collapsible className="mt-10">
        {FAQS.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-white rounded-xl border border-slate-100 mb-3 px-6 shadow-sm data-[state=open]:shadow-md transition-shadow">
            <AccordionTrigger className="text-left font-heading font-bold text-slate-900 hover:text-blue-700 hover:no-underline py-5">{f.q}</AccordionTrigger>
            <AccordionContent className="text-slate-600 leading-relaxed pb-5">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in your name, email and message.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Thank you! Our team will reach out within 24 hours.");
      setForm({ name: "", email: "", phone: "", company: "", message: "" });
      setSubmitting(false);
    }, 700);
  };

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-14">
        <div>
          <SectionLabel>Contact Us</SectionLabel>
          <SectionTitle>Let’s build your communication stack</SectionTitle>
          <p className="mt-4 text-slate-600 max-w-lg">Book a demo or ask us anything — our telephony experts respond within one business day.</p>
          <div className="mt-10 space-y-6">
            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0"><MapPin size={20} /></div>
              <div>
                <div className="font-heading font-bold text-slate-900 text-sm">India Office</div>
                <div className="text-sm text-slate-600">{CONTACT_INFO.indiaOffice}</div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center shrink-0"><Phone size={20} /></div>
              <div>
                <div className="font-heading font-bold text-slate-900 text-sm">Phone</div>
                <div className="text-sm text-slate-600">India: {CONTACT_INFO.india}</div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0"><Mail size={20} /></div>
              <div>
                <div className="font-heading font-bold text-slate-900 text-sm">Email</div>
                <div className="text-sm text-slate-600">{CONTACT_INFO.email}</div>
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="bg-slate-50 rounded-2xl border border-slate-100 p-8 shadow-sm self-start">
          <div className="grid sm:grid-cols-2 gap-4">
            <Input placeholder="Full name *" value={form.name} onChange={set("name")} className="bg-white h-11" />
            <Input type="email" placeholder="Work email *" value={form.email} onChange={set("email")} className="bg-white h-11" />
            <Input placeholder="Phone number *" value={form.phone} onChange={set("phone")} className="bg-white h-11" />
            <Input placeholder="Company" value={form.company} onChange={set("company")} className="bg-white h-11" />
          </div>
          <Textarea placeholder="Tell us about your requirements *" value={form.message} onChange={set("message")} className="bg-white mt-4 min-h-32" />
          <Button type="submit" disabled={submitting} className="mt-5 w-full bg-blue-700 hover:bg-blue-800 text-white h-12 text-base rounded-md transition-transform hover:-translate-y-0.5">
            {submitting ? "Sending..." : (<span className="flex items-center gap-2">Send Message <Send size={16} /></span>)}
          </Button>
        </form>
      </div>
    </section>
  );
};

export const Footer = () => (
  <footer className="bg-[#0A1F44] text-slate-300">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
      <div>
        <Link to="/" className="cursor-pointer shrink-0 flex items-center group">
          <img src="/logo-77.png" alt="Cube Software Logo" className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
        </Link>
        <p className="mt-5 text-sm leading-relaxed text-slate-400 text-justify">
          Designing Computer Telephony Integration software for 35+ years — trusted by enterprises
          across the globe for dialers, voice logging, Screen recording, IVR with our cloud telephony.
        </p>
        
        {/* --- SOCIAL MEDIA ICONS --- */}
        <div className="flex items-center gap-4 mt-6">
          <a href="https://www.facebook.com/CSPLNOIDA/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300">
            <Facebook size={18} />
          </a>
          <a href="https://www.linkedin.com/company/cube-software-private-limited-cspl-/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-blue-500 hover:text-white transition-all duration-300">
            <Linkedin size={18} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-pink-600 hover:text-white transition-all duration-300">
            <Instagram size={18} />
          </a>
        </div>
      </div>
      
      <div>
        <div className="font-heading font-bold text-white text-sm tracking-wider uppercase mb-4">Products</div>
        <ul className="space-y-2.5 text-sm">
          {[
            { l: "Quick Call Dialer", s: "auto-dialer" },
            { l: "Callisto Voice Logger", s: "callisto-voice-logger" },
            { l: "IVRS Services", s: "ivrs" },
            { l: "Conference Bridge", s: "conference-bridge" },
            { l: "Call Billing Software", s: "call-billing" },
          ].map((x) => (
            <li key={x.l}><Link to={`/services/${x.s}`} className="hover:text-white transition-colors">{x.l}</Link></li>
          ))}
        </ul>
      </div>
      <div>
        <div className="font-heading font-bold text-white text-sm tracking-wider uppercase mb-4">Company</div>
        <ul className="space-y-2.5 text-sm">
          <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
          <li><Link to="/client-voices" className="hover:text-white transition-colors">Client Voices</Link></li>
          {[
            { l: "Industries", h: "/#industries" },
            { l: "FAQ", h: "/#faq" },
            { l: "Contact", h: "/#contact" },
          ].map((x) => (
            <li key={x.l}><a href={x.h} className="hover:text-white transition-colors">{x.l}</a></li>
          ))}
        </ul>
      </div>
      <div>
        <div className="font-heading font-bold text-white text-sm tracking-wider uppercase mb-4">Reach Us</div>
        <ul className="space-y-3 text-sm text-slate-400">
          <li className="flex gap-2"><MapPin size={15} className="mt-0.5 shrink-0 text-blue-400" /> {CONTACT_INFO.indiaOffice}</li>
          <li className="flex gap-2"><Phone size={15} className="mt-0.5 shrink-0 text-blue-400" /> {CONTACT_INFO.india}</li>
          <li className="flex gap-2"><Mail size={15} className="mt-0.5 shrink-0 text-blue-400" /> {CONTACT_INFO.email}</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
        <span>© {new Date().getFullYear()} Cube Software Pvt. Ltd. All rights reserved.</span>
        <span>Smart. Scalable. Secure Cloud Telephony.</span>
      </div>
    </div>
  </footer>
);