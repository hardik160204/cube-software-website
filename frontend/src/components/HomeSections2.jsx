import React, { useState } from "react";
import { Link } from "react-router-dom";
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
import { INDUSTRIES, CLIENTS, TESTIMONIALS, FAQS, CONTACT_INFO } from "../mock";
import { SectionLabel, SectionTitle } from "./HomeSections";
import CubeLogo from "./CubeLogo";

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
  <section className="py-14 bg-slate-50 border-y border-slate-100 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8">
      <div className="text-center text-xs font-bold tracking-[0.25em] uppercase text-slate-400">
        Our Clientele &amp; Partners
      </div>
    </div>
    <div className="marquee-track-slow flex items-center gap-12 whitespace-nowrap">
      {[...CLIENTS, ...CLIENTS].map((c, i) => (
        <span
          key={i}
          className="font-heading font-extrabold text-xl tracking-wide text-slate-300 hover:text-blue-700 transition-colors cursor-default shrink-0"
        >
          {c}
        </span>
      ))}
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
    // MOCK: persist locally until backend is wired up
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
          <span onClick={() => go("/")} className="cursor-pointer shrink-0 flex items-center group">
            <img 
              src="/logo75.png" 
              alt="Cube Software Logo" 
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </span>
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
