import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

import Navbar from "../components/Navbar";
import CubeHeroSlider from "../components/CubeHeroSlider";

import { WhySection } from "../components/HomeSections"; 
import { ClientsSection, IndustriesSection, FAQSection, Footer } from "../components/HomeSections2";
import ContactSection from "../components/ContactSection";
import OurProducts from "../components/OurProducts"; 

// --- HOMEPAGE TESTIMONIALS DATA (WITH LOGOS) ---
const TESTIMONIALS = [
  {
    company: "Yatra Online",
    logo: "/yatra.png",
    badge: "Travel & Hospitality",
    author: "Rajesh Kumar",
    role: "Head of Customer Operations",
    rating: 5,
    quote: "Cube Software transformed our high-volume booking support lines. Their predictive dialer and multi-level IVRS deployment cut our customer wait times down by over 45% during peak holiday booking surges. The support from the team has been extraordinary.",
  },
  {
    company: "Fortis Healthcare",
    logo: "/1.jpg", 
    badge: "Healthcare Services",
    author: "Dr. Ananya Sharma",
    role: "Director of Patient Experience",
    rating: 5,
    quote: "Patient appointment reminders and emergency helpline routing require absolute 99.9% uptime. Cube's Callisto Voice Logger and custom IVR integration gave our hospitals the reliability we desperately needed. It has completely streamlined our internal operations.",
  },
  {
    company: "Inox Leisure",
    logo: "/2.png", 
    badge: "Entertainment & Cinema",
    author: "Vikram Mehta",
    role: "VP of IT & Infrastructure",
    rating: 5,
    quote: "Scaling our multi-city box office ticketing support across 10+ states was effortless with Cube's Cloud Contact Center. The supervisor wallboards give us complete real-time visibility, allowing us to respond to customer inquiries faster than ever before.",
  },
  {
    company: "Tech Mahindra",
    logo: "/4.png", 
    badge: "Global BPO Floor",
    author: "Priya Sundaram",
    role: "Senior Operations Manager",
    rating: 5,
    quote: "Migration from our legacy analog system to Cube's SIP trunking and Auto Dialer was completely seamless. Our agents are now fully productive working remotely from anywhere in the country, guaranteeing our clients the best possible engagement.",
  },
  {
    company: "Religare Finvest",
    logo: "/5.jpeg", 
    badge: "Financial Services",
    author: "Amitabh Sen",
    role: "Chief Risk Officer",
    rating: 5,
    quote: "Compliance and tamper-proof audit trails are non-negotiable in financial lending. Cube's encrypted voice logging and secure database retrieval have made regulatory audits completely effortless for us. A highly secure and dependable solution.",
  },
  {
    company: "VLCC Wellness",
    logo: "/6.png", 
    badge: "Wellness & Retail",
    author: "Neha Kapoor",
    role: "Head of Digital Marketing",
    rating: 5,
    quote: "Our outbound promotional campaigns and lead conversions tripled within the first month of deploying Cube's smart predictive dialer engine. The ROI has been phenomenal, and the data analytics module allows us to track performance efficiently.",
  },
];

// --- 3D OVERLAPPING CAROUSEL COMPONENT ---
const ClientVoicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = TESTIMONIALS.length;

  // Manual navigation
  const next = () => setActiveIndex((prev) => (prev + 1) % total);
  const prev = () => setActiveIndex((prev) => (prev - 1 + total) % total);

  // Auto-play interval
  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-[54px] tracking-tight text-slate-900 leading-tight">
            Testimonials
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full max-w-6xl mx-auto h-[600px] sm:h-[550px] flex items-center justify-center mt-12">
          
          {/* Navigation Arrows */}
          <button 
            onClick={prev} 
            className="absolute left-2 sm:left-4 z-40 w-12 h-12 rounded-full bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] flex items-center justify-center text-slate-700 hover:text-[#1f638b] hover:scale-110 transition-all duration-300"
          > 
            <ChevronLeft size={28} strokeWidth={2.5} /> 
          </button>
          
          <button 
            onClick={next} 
            className="absolute right-2 sm:right-4 z-40 w-12 h-12 rounded-full bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] flex items-center justify-center text-slate-700 hover:text-[#1f638b] hover:scale-110 transition-all duration-300"
          > 
            <ChevronRight size={28} strokeWidth={2.5} /> 
          </button>

          {/* Cards Stack */}
          {TESTIMONIALS.map((item, index) => {
            // Calculate dynamic offset so the carousel loops infinitely
            let diff = index - activeIndex;
            if (diff > total / 2) diff -= total;
            if (diff < -total / 2) diff += total;

            // Mathematical positioning for the 3D overlapping effect
            let x = 0;
            let scale = 1;
            let zIndex = 30;
            let opacity = 1;

            if (diff === 0) { 
              x = "0%"; scale = 1; zIndex = 30; opacity = 1; 
            } else if (diff === 1) { 
              x = "65%"; scale = 0.85; zIndex = 20; opacity = 0.6; 
            } else if (diff === -1) { 
              x = "-65%"; scale = 0.85; zIndex = 20; opacity = 0.6; 
            } else if (diff === 2) { 
              x = "115%"; scale = 0.7; zIndex = 10; opacity = 0.2; 
            } else if (diff === -2) { 
              x = "-115%"; scale = 0.7; zIndex = 10; opacity = 0.2; 
            } else { 
              x = "0%"; scale = 0.5; zIndex = 0; opacity = 0; 
            }

            return (
              <motion.div
                key={item.company}
                initial={false}
                animate={{ x, scale, zIndex, opacity }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} // Ultra-smooth spring curve
                onClick={() => setActiveIndex(index)}
                className={`absolute w-[320px] sm:w-[420px] h-[480px] bg-white border border-slate-200 flex flex-col items-center text-center p-8 sm:p-10 cursor-pointer rounded-sm ${
                  diff === 0 
                    ? "shadow-[0_20px_60px_rgba(0,0,0,0.15)]" 
                    : "shadow-md hover:opacity-90"
                }`}
              >
                {/* Floating Orange Quote Badge */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg border-4 border-white">
                  <Quote size={20} fill="currentColor" strokeWidth={1} />
                </div>

                {/* Company Logo Centered */}
                <div className="h-16 flex items-center justify-center mt-6 mb-6 w-full">
                  <img 
                    src={item.logo} 
                    alt={item.company} 
                    className="max-h-full max-w-[140px] object-contain" 
                  />
                </div>

                {/* Quote Text */}
                <p className="text-slate-700 text-[14px] leading-relaxed mb-6 line-clamp-6">
                  "{item.quote}"
                </p>

                {/* Fixed Bottom Elements (Stars, Author, Company) */}
                <div className="mt-auto flex flex-col items-center w-full">
                  <div className="flex items-center gap-1 mb-4 text-amber-400">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} size={20} fill="currentColor" />
                    ))}
                  </div>
                  <h4 className="font-heading font-bold text-blue-900 text-lg">
                    {item.company}
                  </h4>
                  <p className="text-xs font-semibold text-blue-600 mt-1">
                    {item.author}
                  </p>
                </div>

              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
};


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
      
      {/* --- NEW 3D OVERLAPPING CAROUSEL --- */}
      <ClientVoicesSection />
      
      <IndustriesSection />
      <FAQSection />
      
      <ContactSection /> 
      
      <Footer />
    </div>
  );
};

export default Home;