import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Calendar, MapPin, Wifi, Settings, TrendingUp } from "lucide-react";

// --- Helper component for the "spinning up and coming to a halt" effect ---
const AnimatedCounter = ({ end, suffix = "", decimals = 0 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const duration = 2500; // Animation duration in milliseconds (2.5 seconds)

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // easeOutQuart equation for a smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 4);
      
      setCount((end * easeOut).toFixed(decimals));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, decimals]);

  return <span>{count}{suffix}</span>;
};
// -------------------------------------------------------------------------------

const SLIDES = [
  {
    id: 1,
    videoSrc: "/new-cube.mp4",
    pill: "• Enhancing Communication Capabilities.",
    title: (
      <div className="flex flex-col items-center justify-center gap-4 sm:gap-6">
        <span className="block whitespace-normal md:whitespace-nowrap">
           Powering <span className="text-red-600">Customer Engagement </span>
        </span>
        <span className="block whitespace-normal md:whitespace-nowrap">
          Through Intelligent Communications
        </span>
      </div>
    ),
    subtitle: "Accelerate your team collaboration with powerful cloud dialing, comprehensive features, and SIP trunking solutions — engineered for high-performance enterprises.",
    /*
    buttons: (
      <div className="flex flex-wrap items-center justify-center gap-4 mt-6 sm:mt-8">
        <button
          type="button"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base px-8 py-3 rounded-full shadow-lg transition-transform hover:-translate-y-0.5 cursor-pointer"
        >
          Book Demo
        </button>
        <button
          type="button"
          className="bg-white hover:bg-slate-50 text-slate-900 font-semibold text-base px-8 py-3 rounded-full shadow-lg transition-transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
        >
          Talk to Our Sales Team <ArrowRight size={16} />
        </button>
      </div>
    ),
    */
    expect: true, // Shows the "What to Expect" row
  },
  {
    id: 2,
    videoSrc: "/new-cube.mp4",
    pill: "• Redefining Communication for the Modern World.",
    title: (
      <div className="flex flex-col items-center justify-center gap-4 sm:gap-6">
        <span className="block whitespace-normal md:whitespace-nowrap">
           Turn Your <span className="text-red-600">Call Center</span>
        </span>
        <span className="block whitespace-normal md:whitespace-nowrap">
          Into a Competitive Advantage
        </span>
      </div>
    ),
    subtitle: "Call center software that just works.Smart routing. Real-time insights. Zero infrastructure headaches. Built for teams who want to move fast and sound sharp.",
    /*
    buttons: (
      <div className="flex flex-wrap items-center justify-center gap-4 mt-6 sm:mt-8">
        <button
          type="button"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base px-8 py-3 rounded-full shadow-lg transition-transform hover:-translate-y-0.5 cursor-pointer"
        >
          Book Demo
        </button>
        <button
          type="button"
          className="bg-white hover:bg-slate-50 text-slate-900 font-semibold text-base px-8 py-3 rounded-full shadow-lg transition-transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
        >
          Talk to Our Sales Team <ArrowRight size={16} />
        </button>
      </div>
    ),
    */
    expect: false, // Hides the "What to Expect" row
  }
];

export default function CubeHeroSlider({ onBookDemo }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  // Auto-slide every 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === 0 ? 1 : 0));
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  // Listen for scroll to physically collapse the stats bar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev === 0 ? 1 : 0));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? 1 : 0));

  return (
    <>
      {/* ========================================= */}
      {/* 1. THE MAIN HERO SLIDER                   */}
      {/* ========================================= */}
      {/* h-[100dvh] strictly locks the height to the viewport so the bottom bar cannot be pushed off-screen */}
      <div className="relative w-full h-[100dvh] flex flex-col overflow-hidden bg-[#0A1F44]">
        
        {/* CONTINUOUS WAVE BACKGROUND VIDEO FOR BOTH SLIDES */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/new-cube.mp4" type="video/mp4" />
        </video>
        
        {/* Dark gradient overlay blending seamlessly into the #061229 section below */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1F44]/90 via-[#0A1F44]/40 to-[#061229] z-0 pointer-events-none"></div>

        {/* NAVIGATION ARROWS */}
        <button 
          type="button"
          onClick={prevSlide}
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all cursor-pointer border border-white/10"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          type="button"
          onClick={nextSlide}
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all cursor-pointer border border-white/10"
          aria-label="Next Slide"
        >
          <ChevronRight size={24} />
        </button>

        {/* INVISIBLE TOP SPACER */}
        <div className="w-full h-16 lg:h-24 shrink-0 pointer-events-none z-10"></div>

        {/* SLIDER MAIN CONTENT */}
        <div className="relative z-20 flex-grow flex flex-col items-center justify-center w-full max-w-[1400px] mx-auto px-6 sm:px-12 pb-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-center w-full"
            >
              {/* Pill - ONLY render if the slide actually has pill text */}
              {SLIDES[currentIndex].pill && (
                <div className="inline-block px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[11px] sm:text-xs font-bold tracking-widest uppercase mb-4 sm:mb-6 shadow-lg">
                  {SLIDES[currentIndex].pill}
                </div>
              )}

              {/* Headline - strictly 2 lines */}
              {SLIDES[currentIndex].title && (
                <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[58px] text-white leading-[1.15] tracking-tight drop-shadow-lg mb-4 sm:mb-6 w-full mx-auto">
                  {SLIDES[currentIndex].title}
                </h1>
              )}

              {/* Subtitle */}
              {SLIDES[currentIndex].subtitle && (
                <div className="text-base sm:text-lg text-blue-100/90 leading-relaxed max-w-3xl mx-auto font-medium">
                  {SLIDES[currentIndex].subtitle}
                </div>
              )}

              {/* Buttons (Currently commented out in SLIDES data) */}
              {SLIDES[currentIndex].buttons}

              {/* What to Expect (Slide 1 Only) */}
              {SLIDES[currentIndex].expect && (
                <div className="mt-6 sm:mt-8 animate-fade-up">
                  <div className="text-white/80 text-[13px] font-bold tracking-[0.2em] uppercase mb-3">
                    What to <span className="text-red-600">Expect</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-white/50 mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                    <span className="w-1 h-1 rounded-full bg-white/30"></span>
                    <span className="w-1 h-1 rounded-full bg-white/30"></span>
                  </div>
                  
                  <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                    <div className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white/5 border border-white/10 text-white text-xs sm:text-sm backdrop-blur-md">
                      <Wifi size={16} className="text-red-600" /> Live Product Demos
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white/5 border border-white/10 text-white text-xs sm:text-sm backdrop-blur-md">
                      <Settings size={16} className="text-red-600" /> Cost Optimized 
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white/5 border border-white/10 text-white text-xs sm:text-sm backdrop-blur-md">
                      <TrendingUp size={16} className="text-red-600" /> Revenue Opportunities
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* THE COLLAPSING 35+ BRIDGE */}
        <div 
          className={`relative z-30 w-full shrink-0 overflow-hidden transition-all duration-700 ease-in-out border-white/10 ${
            scrolled 
              ? "max-h-0 opacity-0 border-t-0 py-0" 
              : "max-h-[250px] opacity-100 border-t py-4 sm:py-6 bg-[#061229]"
          }`}
        >
          <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            
            <div className="text-center px-2 sm:px-4 pb-4 md:pb-0">
              <div className="font-heading font-black text-3xl sm:text-4xl text-white mb-1 drop-shadow-md">
                <AnimatedCounter end={35} suffix="+" />
              </div>
              <div className="font-semibold tracking-wider uppercase text-blue-200/80 text-xs sm:text-sm">
                 Years of Innovation
              </div>
            </div>
            
            <div className="text-center px-2 sm:px-4 pb-4 md:pb-0">
              <div className="font-heading font-black text-3xl sm:text-4xl text-white mb-1 drop-shadow-md">
                <AnimatedCounter end={10} suffix="+" />
              </div>
              <div className="font-semibold tracking-wider uppercase text-blue-200/80 text-xs sm:text-sm">
                Countries
              </div>
            </div>
            
            <div className="text-center px-2 sm:px-4">
              <div className="font-heading font-black text-3xl sm:text-4xl text-white mb-1 drop-shadow-md">
                <AnimatedCounter end={5000} suffix="+" />
              </div>
              <div className="font-semibold tracking-wider uppercase text-blue-200/80 text-xs sm:text-sm">
                Active Users
              </div>
            </div>
            
            <div className="text-center px-2 sm:px-4">
              <div className="font-heading font-black text-3xl sm:text-4xl text-white mb-1 drop-shadow-md">
                <AnimatedCounter end={99.5} decimals={1} suffix="%" />
              </div>
              <div className="font-semibold tracking-wider uppercase text-blue-200/80 text-xs sm:text-sm">
                Uptime SLA
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* ========================================= */}
      {/* 2. THE EXTENDED WORLD MAP SECTION         */}
      {/* ========================================= */}
      <div className="relative w-full py-24 sm:py-32 overflow-hidden bg-[#061229]">
        
        {/* THE WORLD MAP VIDEO BACKGROUND */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-80 mix-blend-screen"
        >
          <source src="/world-map.mp4" type="video/mp4" />
        </video>
        
        {/* Seamless blending gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#061229] via-transparent to-[#0A1F44] z-0 pointer-events-none"></div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-12 text-center">
          <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white mb-12 sm:mb-20 drop-shadow-lg tracking-tight">
            Redefining <br></br><span className="text-red-600">C</span>ommunication<span className="text-red-600"> T</span>hrough <span className="text-red-600"> I</span>nnovation
          </h2>

          {/* 4 Large Glassmorphism Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] py-16 px-8 flex flex-col items-center justify-center hover:-translate-y-2 transition-all duration-500 shadow-2xl hover:bg-white/10 hover:border-blue-500/30 group cursor-default">
              <div className="font-heading font-black text-6xl sm:text-7xl text-white mb-4 group-hover:text-blue-400 transition-colors drop-shadow-md">
                <AnimatedCounter end={35} suffix="+" />
              </div>
              <div className="text-blue-100/80 text-lg sm:text-xl font-medium tracking-wide">Years of Innovation</div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] py-16 px-8 flex flex-col items-center justify-center hover:-translate-y-2 transition-all duration-500 shadow-2xl hover:bg-white/10 hover:border-blue-500/30 group cursor-default">
              <div className="font-heading font-black text-6xl sm:text-7xl text-white mb-4 group-hover:text-blue-400 transition-colors drop-shadow-md">
                <AnimatedCounter end={5000} suffix="+" />
              </div>
              <div className="text-blue-100/80 text-lg sm:text-xl font-medium tracking-wide">Active Users</div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] py-16 px-8 flex flex-col items-center justify-center hover:-translate-y-2 transition-all duration-500 shadow-2xl hover:bg-white/10 hover:border-blue-500/30 group cursor-default">
              <div className="font-heading font-black text-6xl sm:text-7xl text-white mb-4 group-hover:text-blue-400 transition-colors drop-shadow-md">
                <AnimatedCounter end={10} suffix="+" />
              </div>
              <div className="text-blue-100/80 text-lg sm:text-xl font-medium tracking-wide">Countries</div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] py-16 px-8 flex flex-col items-center justify-center hover:-translate-y-2 transition-all duration-500 shadow-2xl hover:bg-white/10 hover:border-blue-500/30 group cursor-default">
              <div className="font-heading font-black text-6xl sm:text-7xl text-white mb-4 group-hover:text-blue-400 transition-colors drop-shadow-md">
                <AnimatedCounter end={99.5} decimals={1} suffix="%" />
              </div>
              <div className="text-blue-100/80 text-lg sm:text-xl font-medium tracking-wide">Uptime SLA</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}