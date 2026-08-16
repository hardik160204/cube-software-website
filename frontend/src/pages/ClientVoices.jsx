import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Quote, ArrowRight, Building2, CheckCircle2 } from "lucide-react";
import { Button } from "../components/ui/button";
import Navbar from "../components/Navbar";
import { Footer } from "../components/HomeSections2";

const TESTIMONIALS = [
  {
    company: "Yatra Online",
    logoText: "YATRA",
    badge: "Travel & Hospitality",
    author: "Rajesh Kumar",
    role: "Head of Customer Operations",
    rating: 5,
    quote: "Cube Software transformed our high-volume booking support lines. Their predictive dialer and multi-level IVRS deployment cut our customer wait times down by over 45% during peak holiday booking surges.",
  },
  {
    company: "Fortis Healthcare",
    logoText: "FORTIS",
    badge: "Healthcare Services",
    author: "Dr. Ananya Sharma",
    role: "Director of Patient Experience",
    rating: 5,
    quote: "Patient appointment reminders and emergency helpline routing require absolute 99.9% uptime. Cube's Callisto Voice Logger and custom IVR integration gave our hospitals the reliability we desperately needed.",
  },
  {
    company: "Inox Leisure",
    logoText: "INOX",
    badge: "Entertainment & Cinema",
    author: "Vikram Mehta",
    role: "VP of IT & Infrastructure",
    rating: 5,
    quote: "Scaling our multi-city box office ticketing support across 10+ states was effortless with Cube's Cloud Contact Center. The supervisor wallboards give us complete real-time visibility.",
  },
  {
    company: "Tech Mahindra Business Services",
    logoText: "TECHM",
    badge: "Global BPO Floor",
    author: "Priya Sundaram",
    role: "Senior Operations Manager",
    rating: 5,
    quote: "Migration from our legacy analog system to Cube's SIP trunking and Auto Dialer was completely seamless. Our agents are now fully productive working remotely from anywhere in the country.",
  },
  {
    company: "Religare Finvest",
    logoText: "RELIGARE",
    badge: "Financial Services",
    author: "Amitabh Sen",
    role: "Chief Risk Officer",
    rating: 5,
    quote: "Compliance and tamper-proof audit trails are non-negotiable in financial lending. Cube's encrypted voice logging and secure database retrieval have made regulatory audits completely effortless for us.",
  },
  {
    company: "VLCC Wellness",
    logoText: "VLCC",
    badge: "Wellness & Retail",
    author: "Neha Kapoor",
    role: "Head of Digital Marketing",
    rating: 5,
    quote: "Our outbound promotional campaigns and lead conversions tripled within the first month of deploying Cube's smart predictive dialer engine. The ROI has been phenomenal.",
  },
];

export default function ClientVoices() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white text-slate-900 flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Header Section */}
      <section className="relative w-full pt-36 pb-20 bg-[#0A1F44] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44] via-[#0A1F44]/90 to-blue-950/60 z-0"></div>
        
        {/* Abstract background shapes */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-red-600/10 blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-bold tracking-[0.2em] uppercase mb-4">
              — Client Voices & Success Stories
            </span>
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight max-w-4xl mx-auto">
              Trusted by India's Leading <span className="text-blue-500">Enterprise Brands</span>
            </h1>
            <p className="mt-6 text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Discover how enterprises across travel, healthcare, finance, and BPO sectors scale their communication infrastructure with Cube Software.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid Section */}
      <section className="py-24 bg-[#FAFAFA] relative overflow-hidden flex-grow">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((item, index) => (
              <motion.div
                key={item.company}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_50px_rgba(37,99,235,0.12)] transition-all duration-300 flex flex-col justify-between relative group"
              >
                {/* Top Row: Company Badge & Quote Icon */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 font-heading font-black text-sm tracking-wider flex items-center justify-center border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                        {item.logoText.slice(0, 3)}
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors">
                          {item.company}
                        </h3>
                        <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-400">
                          {item.badge}
                        </span>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:text-blue-500 transition-colors">
                      <Quote size={20} />
                    </div>
                  </div>

                  {/* Star Rating */}
                  <div className="flex items-center gap-1 mb-4 text-amber-400">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>

                  {/* Quote Text */}
                  <p className="text-slate-600 text-[15px] leading-relaxed mb-8 italic">
                    "{item.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-heading font-bold text-slate-900 text-sm">
                      {item.author}
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {item.role}
                    </p>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <CheckCircle2 size={14} />
                  </div>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-20 bg-[#0A1F44] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2 className="font-heading font-black text-3xl sm:text-4xl tracking-tight mb-4">
            Ready to join our success stories?
          </h2>
          <p className="text-blue-200 max-w-xl mx-auto mb-8 text-base">
            Upgrade your enterprise communication stack with robust telephony solutions engineered for high-performance scale.
          </p>
          <Link to="/#contact">
            <Button className="bg-blue-600 hover:bg-blue-500 text-white px-9 h-14 rounded-xl font-bold shadow-xl transition-transform hover:-translate-y-0.5" size="lg">
              Book a Free Enterprise Demo <ArrowRight className="ml-2" size={18} />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}