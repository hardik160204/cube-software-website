import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Check, ArrowRight, ShieldCheck, Zap, Building2, 
  PhoneCall, Sparkles, HelpCircle, ChevronRight 
} from "lucide-react";
import { Button } from "../components/ui/button";
import Navbar from "../components/Navbar";
import { Footer } from "../components/HomeSections2";

const PRICING_TIERS = [
  {
    name: "Starter / Basic",
    description: "Ideal for small support teams and growing office desks looking for reliable cloud telephony.",
    monthlyPrice: 1999,
    yearlyPrice: 1599,
    highlight: false,
    badge: "",
    features: [
      "Inbound & Outbound Calling",
      "Callisto Voice Logger (Standard)",
      "Basic IVR & Auto Attendant",
      "Voicemail-to-Email Delivery",
      "Real-time Call Records (CDR)",
      "Standard Email Support",
    ],
  },
  {
    name: "Professional / Contact Center",
    description: "Engineered for high-volume call centers needing predictive dialing and CRM integration.",
    monthlyPrice: 2499,
    yearlyPrice: 1999,
    highlight: true,
    badge: "Most Popular",
    features: [
      "Everything in Starter, plus:",
      "Predictive / Progressive / Preview Dialer",
      "Skill-based Inbound ACD Routing",
      "Live Supervisor Monitoring & Barge-In",
      "CRM Connectors (Salesforce, Freshdesk)",
      "Screen Logger & Multi-PC Capture",
      "24/7 Priority Tech Support",
    ],
  },
  {
    name: "Enterprise Custom",
    description: "Custom-tailored telephony suites for multi-branch corporations, BPOs, and banks.",
    monthlyPrice: "Custom",
    yearlyPrice: "Custom",
    highlight: false,
    badge: "Scale Unlimited",
    features: [
      "Everything in Professional, plus:",
      "On-Premise, Hosted, or Hybrid Deployment",
      "Unlimited Channels & Concurrent Calls",
      "Custom IVR Database & ERP Integration",
      "Voice Logger InSync Multi-Site Sync",
      "Dedicated Account Manager & 99.9% SLA",
      "Custom Security & Compliance Audits",
    ],
  },
];

const PRICING_FAQS = [
  {
    q: "Can we switch between monthly and annual plans?",
    a: "Yes! You can upgrade, downgrade, or switch from monthly to annual billing at any time through your customer portal.",
  },
  {
    q: "Are there any hidden setup or license fees?",
    a: "No hidden charges. All license fees, standard support, and platform updates are included transparently in your quoted pricing.",
  },
  {
    q: "Do you offer on-premise hardware deployments?",
    a: "Yes. In addition to our cloud suite, Cube Software supports full on-premise server deployment for banking and high-security enterprises.",
  },
  {
    q: "How does the 24/7 support SLA work?",
    a: "Our professional and enterprise tiers include dedicated 24/7 technical hotline access and guaranteed response windows for critical line events.",
  },
];

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white text-slate-900 min-h-screen flex flex-col justify-between">
      <Navbar />

      <main>
        {/* --- HERO SECTION --- */}
        <section className="relative overflow-hidden bg-[#0A1F44] pt-44 pb-20 text-white">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44]/95 via-[#0A1F44]/85 to-[#0A1F44]/70 z-10" />
          
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <nav className="flex items-center justify-center gap-1.5 text-xs text-blue-200 mb-6">
              <Link className="hover:text-white transition-colors" to="/">Home</Link>
              <ChevronRight size={13} />
              <span className="text-white font-semibold">Pricing</span>
            </nav>

            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-200 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
              <Sparkles size={14} className="text-amber-400" />
              Simple, Predictable Telephony Plans
            </span>

            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight max-w-4xl mx-auto leading-tight">
              Enterprise Telephony Sized for Your Scale
            </h1>

            <p className="mt-5 text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed text-center">
              Choose the plan that fits your business needs. Upgrade or scale your agent seats seamlessly with zero operational downtime.
            </p>

            {/* Billing Toggle */}
            <div className="mt-10 flex items-center justify-center gap-4">
              <span className={`text-sm font-semibold ${!isYearly ? "text-white" : "text-slate-400"}`}>
                Monthly Billing
              </span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className="w-14 h-8 bg-blue-600 rounded-full p-1 transition-colors duration-300 relative focus:outline-none shadow-inner"
                aria-label="Toggle Billing Interval"
              >
                <motion.div
                  animate={{ x: isYearly ? 24 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="w-6 h-6 bg-white rounded-full shadow-md"
                />
              </button>
              <span className={`text-sm font-semibold flex items-center gap-2 ${isYearly ? "text-white" : "text-slate-400"}`}>
                Annual Billing
                <span className="bg-amber-400 text-slate-900 text-[11px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Save 20%
                </span>
              </span>
            </div>
          </div>
        </section>

        {/* --- PRICING CARDS --- */}
        <section className="py-20 bg-slate-50 relative -mt-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-3 gap-8 items-stretch">
              {PRICING_TIERS.map((tier) => {
                const price = typeof tier.monthlyPrice === "number"
                  ? isYearly ? tier.yearlyPrice : tier.monthlyPrice
                  : tier.monthlyPrice;

                return (
                  <div
                    key={tier.name}
                    className={`relative rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between ${
                      tier.highlight
                        ? "bg-white border-2 border-blue-600 shadow-2xl scale-105 z-20"
                        : "bg-white border border-slate-200 shadow-sm hover:shadow-xl z-10"
                    }`}
                  >
                    {tier.badge && (
                      <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-md">
                        {tier.badge}
                      </span>
                    )}

                    <div>
                      <h3 className="font-heading font-bold text-2xl text-slate-900">{tier.name}</h3>
                      <p className="mt-3 text-sm text-slate-600 leading-relaxed text-justify">
                        {tier.description}
                      </p>

                      <div className="mt-6 mb-8 pb-6 border-b border-slate-100">
                        {typeof price === "number" ? (
                          <div className="flex items-baseline gap-1">
                            <span className="text-4xl font-black text-slate-900">Rs. {price}</span>
                            <span className="text-sm font-semibold text-slate-500">/ seat / month</span>
                          </div>
                        ) : (
                          <div className="text-3xl font-black text-slate-900">Custom Quote</div>
                        )}
                      </div>

                      <div className="space-y-3.5">
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Included Capabilities</div>
                        {tier.features.map((feature) => (
                          <div key={feature} className="flex items-start gap-3 text-sm text-slate-700 text-justify">
                            <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                              <Check size={13} strokeWidth={3} />
                            </div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-10 pt-4">
                      <Link to="/#contact">
                        <Button
                          className={`w-full h-12 text-base rounded-xl font-bold transition-transform hover:-translate-y-0.5 ${
                            tier.highlight
                              ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/30"
                              : "bg-slate-900 hover:bg-slate-800 text-white"
                          }`}
                        >
                          {typeof price === "number" ? "Get Started" : "Contact Sales"}
                        </Button>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* --- ENTERPRISE TRUST BANNER --- */}
        <section className="py-16 bg-white border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4">
                <ShieldCheck size={24} />
              </div>
              <h4 className="font-heading font-bold text-lg text-slate-900">100% Encrypted & Compliant</h4>
              <p className="mt-2 text-sm text-slate-600 text-justify">
                Enterprise security standards protecting sensitive banking, healthcare, and corporate call archives.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center mx-auto mb-4">
                <Zap size={24} />
              </div>
              <h4 className="font-heading font-bold text-lg text-slate-900">Zero Downtime Migration</h4>
              <p className="mt-2 text-sm text-slate-600 text-justify">
                Our telephony experts assist in porting numbers and configuring agent trunks with no system interruption.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <Building2 size={24} />
              </div>
              <h4 className="font-heading font-bold text-lg text-slate-900">On-Premise or Cloud</h4>
              <p className="mt-2 text-sm text-slate-600 text-justify">
                Flexible hosting options tailored directly to your IT team's architecture requirements.
              </p>
            </div>
          </div>
        </section>

        {/* --- PRICING FAQ SECTION --- */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <span className="text-blue-700 text-xs font-bold tracking-widest uppercase mb-2 block">— Billing & Plans</span>
              <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-4">
              {PRICING_FAQS.map((faq, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                  <h3 className="font-heading font-bold text-lg text-slate-900 flex items-center gap-2 mb-2">
                    <HelpCircle size={18} className="text-blue-600 shrink-0" />
                    {faq.q}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed text-justify pl-6">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- CTA BANNER --- */}
        <section className="py-16 bg-[#0A1F44] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-heading font-black text-3xl sm:text-4xl">Need a custom quote for your contact center?</h2>
              <p className="mt-3 text-blue-200 max-w-xl text-justify">
                Talk to our senior telephony architects for a customized breakdown according to your trunk lines and agent seats.
              </p>
            </div>
            <Link to="/#contact" className="shrink-0">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white px-9 h-12 rounded-xl font-bold shadow-lg transition-transform hover:-translate-y-0.5">
                Talk to Sales <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}