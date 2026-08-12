import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Headset, Landmark, ConciergeBell, HeartPulse, Building2, TowerControl,
  Star, MapPin, Phone, Mail, Send,
} from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import { SectionLabel, SectionTitle } from "./HomeSections";

// --- HARDCODED MOCK DATA ---
const CONTACT_INFO = {
  expertLine: "+91 120 405 7109",
  usTollFree: "+1 (1111) 1111-11111",
  india: "+91 120 405 7109",
  uk: "+44 1234 1111111",
  email: "sales@cube-software.com",
  usOffice: "USA",
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

const LOGOS = [
  '/1.jpg', '/2.png', '/4.png', '/5.jpeg',
  '/6.png', '/7.png', '/upsc.png', '/cars24.png', '/10.png', '/11.png'
];

const TESTIMONIALS = [
  { quote: "Cube Software transformed our business communications, improving efficiency while significantly reducing operational costs.", name: "ABC.", role: "COO, Fintech Startup" },
  { quote: "Migration from our other dialer was seamless. Our agents are now productive from anywhere in the country.", name: "XYZ.", role: "Head of Contact Center" },
  { quote: "The dialer deployment and CRM integration have been flawless — and the 24/7 support team is outstanding.", name: "", role: "IT Director, Hospitality Group" },
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

const IND_ICONS = { Headset, Landmark, ConciergeBell, HeartPulse, Building2, TowerControl };

export const IndustriesSection = () => (
  <section id="industries" className="py-20 lg:py-28 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <SectionLabel>Industries We Serve</SectionLabel>
      <SectionTitle className="max-w-3xl">Our products are designed to perform at every arena</SectionTitle>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {INDUSTRIES.map((ind, i) => {
          const Icon = IND_ICONS[ind.icon];
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
  <section className="py-14 border-y border-slate-100 bg-slate-50 overflow-hidden relative">
    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8">
      <div className="text-center text-xs font-bold tracking-[0.25em] uppercase text-slate-400">
        Our Clientele & Partners
      </div>
    </div>
    
    <div className="flex w-max">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 40, repeat: Infinity }}
        className="flex items-center gap-16 px-8"
      >
        {[...LOGOS, ...LOGOS].map((logoPath, idx) => (
          <div
            key={idx}
            className="w-32 h-12 relative flex items-center justify-center shrink-0 hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <img
              src={logoPath}
              alt={`Client Logo ${(idx % 10) + 1}`}
              className="max-w-full max-h-full object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
                if (e.target.nextElementSibling) {
                  e.target.nextElementSibling.classList.remove('hidden');
                }
              }}
            />
            <span className="hidden absolute inset-0 flex items-center justify-center text-sm font-bold text-slate-400 text-center">
              Logo {(idx % 10) + 1}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export const TestimonialsSection = () => (
  <section className="py-20 lg:py-28 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <SectionLabel>Client Voices</SectionLabel>
      <SectionTitle>Success Stories from Our Clients</SectionTitle>
      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t) => (
          <div key={t.name} className="bg-slate-50 rounded-2xl border border-slate-100 p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="flex gap-1 mb-5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-slate-700 italic leading-relaxed">“{t.quote}”</p>
            <div className="mt-6 font-heading font-bold text-slate-900">{t.name}</div>
            <div className="text-sm text-slate-500">{t.role}</div>
          </div>
        ))}
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
            <AccordionTrigger className="text-left font-heading font-bold text-slate-900 hover:text-blue-700 hover:no-underline py-5">
              {f.q}
            </AccordionTrigger>
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
      const existing = JSON.parse(localStorage.getItem("cube_inquiries") || "[]");
      existing.push({ ...form, date: new Date().toISOString() });
      localStorage.setItem("cube_inquiries", JSON.stringify(existing));
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
          <p className="mt-4 text-slate-600 max-w-lg">
            Book a demo or ask us anything — our telephony experts respond within one business day.
          </p>
          <div className="mt-10 space-y-6">
            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0"><MapPin size={20} /></div>
              <div>
                <div className="font-heading font-bold text-slate-900 text-sm">India Office</div>
                <div className="text-sm text-slate-600">{CONTACT_INFO.indiaOffice}</div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0"><MapPin size={20} /></div>
              <div>
                <div className="font-heading font-bold text-slate-900 text-sm">US Office</div>
                <div className="text-sm text-slate-600">{CONTACT_INFO.usOffice}</div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center shrink-0"><Phone size={20} /></div>
              <div>
                <div className="font-heading font-bold text-slate-900 text-sm">Phone</div>
                <div className="text-sm text-slate-600">India: {CONTACT_INFO.india} · US: {CONTACT_INFO.usTollFree}</div>
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
          <Textarea
            placeholder="Tell us about your requirements *"
            value={form.message}
            onChange={set("message")}
            className="bg-white mt-4 min-h-32"
          />
          <Button
            type="submit"
            disabled={submitting}
            className="mt-5 w-full bg-blue-700 hover:bg-blue-800 text-white h-12 text-base rounded-md transition-transform hover:-translate-y-0.5"
          >
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
        {/* 1. LEFT: LOGO SECTION */}
          <Link to="/" className="cursor-pointer shrink-0 flex items-center group">
            <img
              src="/logo75.png"
              alt="Cube Software Logo"
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
        <p className="mt-5 text-sm leading-relaxed text-slate-400 text-justify">
          Designing Computer Telephony Integration software for 35+ years — trusted by enterprises
          across the globe for dialers, voice logging, Screen recording, IVR with our cloud telephony.
        </p>
      </div>
      <div>
        <div className="font-heading font-bold text-white text-sm tracking-wider uppercase mb-4">Products</div>
        <ul className="space-y-2.5 text-sm">
          {[
            { l: "Quick Call Dialer", s: "quick-call-dialer" },
            { l: "Callisto Voice Logger", s: "voice-logger" },
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
          <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
          {[
            { l: "Industries", h: "/#industries" },
            { l: "Client Voices", h: "/#home" },
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
          <li className="flex gap-2"><MapPin size={15} className="mt-0.5 shrink-0 text-blue-400" /> {CONTACT_INFO.usOffice}</li>
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