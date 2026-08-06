import React from "react";
import { Link } from "react-router-dom";
import {
  Cloud, Globe, ShieldCheck, Plug, Headphones, BrainCircuit,
  CircleDollarSign, Zap, Route, Settings2, PhoneCall, Mic, Users,
  Receipt, MonitorPlay, Voicemail, AudioLines, Radio, DatabaseZap, ArrowRight,
} from "lucide-react";
import { Button } from "./ui/button";
import { FEATURES, WHY_ITEMS, PRODUCTS, IMAGES, MARQUEE_ITEMS } from "../mock";

const ICONS = {
  Cloud, Globe, ShieldCheck, Plug, Headphones, BrainCircuit,
  CircleDollarSign, Zap, Route, Settings2, PhoneCall, Mic, Users,
  Receipt, MonitorPlay, Voicemail, AudioLines, Radio, DatabaseZap,
};

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
        <Link
          to={link}
          className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-blue-700 hover:text-blue-800 group/link"
        >
          Read More <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
        </Link>
      )}
    </div>
  );
};

export const FeaturesSection = () => (
  <section id="features" className="py-20 lg:py-28 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <SectionLabel>Key Features</SectionLabel>
      <SectionTitle className="max-w-3xl">
        Empowering business-critical communications with reliability, security, and scalability.
      </SectionTitle>
      <p className="mt-4 text-slate-600 max-w-2xl">
        One unified platform for Voice, Screen-Recording, Chat, and CRM, built for enterprise-grade performance and scalability.
      </p>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* ADDED A FILTER HERE TO EXCLUDE "Cloud-Based PBX" AND "Global SIP Trunking" */}
        {FEATURES.filter(f => f.title !== "Cloud-Based PBX" && f.title !== "Global SIP Trunking").map((f, i) => (
          <FeatureCard
            key={f.title}
            {...f}
            accent={["blue", "red", "amber"][i % 3]}
            link={f.slug ? `/services/${f.slug}` : undefined}
          />
        ))}
      </div>
    </div>
  </section>
);

export const WhySection = () => (
  <section id="about" className="py-20 lg:py-28 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <SectionLabel>Why Cube Software</SectionLabel>
      <SectionTitle className="max-w-3xl">
        Built for the businesses redefining communication
      </SectionTitle>
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

export const ProductsSection = () => (
  <section id="products" className="py-20 lg:py-28 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <SectionLabel>Our Products</SectionLabel>
      <SectionTitle className="max-w-3xl">
        Designed for flawlessness. Built to perform
      </SectionTitle>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* ADDED A FILTER HERE TO EXCLUDE "CRM" */}
        {PRODUCTS.filter(p => !p.title.includes("CRM")).map((p, i) => (
          <FeatureCard
            key={p.title}
            {...p}
            accent={["blue", "red", "amber"][i % 3]}
            link={p.slug ? `/services/${p.slug}` : undefined}
          />
        ))}
      </div>
    </div>
  </section>
);

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