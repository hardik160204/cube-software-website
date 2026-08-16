import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Quote, ArrowRight, CheckCircle2 } from "lucide-react";

import Navbar from "../components/Navbar";
import CubeHeroSlider from "../components/CubeHeroSlider";

import { WhySection } from "../components/HomeSections"; 
import { ClientsSection, IndustriesSection, FAQSection, Footer } from "../components/HomeSections2";
import ContactSection from "../components/ContactSection";
import OurProducts from "../components/OurProducts"; 
import { Button } from "../components/ui/button";

// --- HOMEPAGE PREVIEW DATA ---
const PREVIEW_TESTIMONIALS = [
  {
    company: "Yatra Online",
    logoText: "YATRA",
    badge: "Travel & Hospitality",
    author: "Rajesh Kumar",
    role: "Head of Customer Ops",
    rating: 5,
    quote: "Cube Software transformed our high-volume booking support lines. Their predictive dialer and IVRS cut wait times by over 45%.",
  },
  {
    company: "Fortis Healthcare",
    logoText: "FORTIS",
    badge: "Healthcare Services",
    author: "Dr. Ananya Sharma",
    role: "Director of Patient Experience",
    rating: 5,
    quote: "Emergency helpline routing requires absolute 99.9% uptime. Cube gave our hospitals the reliability we desperately needed.",
  },
  {
    company: "Inox Leisure",
    logoText: "INOX",
    badge: "Entertainment & Cinema",
    author: "Vikram Mehta",
    role: "VP of IT & Infrastructure",
    rating: 5,
    quote: "Scaling our multi-city box office ticketing support across 10+ states was effortless with Cube's Cloud Contact Center.",
  }
];

// --- THE PREVIEW COMPONENT ---
const ClientVoicesPreview = () => (
  <section className="py-24 bg-[#FAFAFA] relative overflow-hidden border-t border-slate-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-16">
        <div className="text-blue-700 text-xs font-bold tracking-[0.2em] uppercase mb-4">— Client Voices</div>
        <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 leading-tight">
          Success Stories
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {PREVIEW_TESTIMONIALS.map((item, index) => (
          <motion.div
            key={item.company}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_50px_rgba(37,99,235,0.12)] transition-all duration-300 flex flex-col justify-between group"
          >
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

              <div className="flex items-center gap-1 mb-4 text-amber-400">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="text-slate-600 text-[15px] leading-relaxed mb-8 italic">
                "{item.quote}"
              </p>
            </div>

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

      {/* Button to full page */}
      <div className="mt-14 flex justify-center">
        <Link to="/client-voices">
          <Button className="bg-[#0A1F44] hover:bg-blue-700 text-white px-8 h-14 text-base rounded-md shadow-lg transition-transform hover:-translate-y-1">
            Read All Success Stories <ArrowRight className="ml-2" size={18} />
          </Button>
        </Link>
      </div>
    </div>
  </section>
);


const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white text-slate-900">
      <Navbar onBookDemo={scrollToContact} />

      <CubeHeroSlider onBookDemo={scrollToContact} />
      
      <ClientsSection />
      
      <WhySection />

      {/* Grid Component */}
      <OurProducts /> 
      
      {/* --- NEW PREVIEW COMPONENT ADDED HERE --- */}
      <ClientVoicesPreview />
      
      <IndustriesSection />
      <FAQSection />
      
      <ContactSection /> 
      
      <Footer />
    </div>
  );
};

export default Home;