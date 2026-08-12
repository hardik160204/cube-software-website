import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Phone, ChevronDown, Menu, X, LogIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";

// --- NAVIGATION DATA RESTRUCTURED EXACTLY TO YOUR NEEDS ---
const MENU_ITEMS = [
  { label: "Home", href: "#home" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Contact Center Solution", href: "/services/cloud-contact-center" },
      { label: "Auto Dialer", href: "/services/auto-dialer" },
      { label: "IVRS Services", href: "/services/ivrs" },
    ],
  },
  {
    label: "Products",
    href: "#products",
    children: [
      { label: "Callisto Voice Logger", href: "/services/voice-logger" },
      { label: "Call Billing Software", href: "/services/call-billing" },
      { label: "Screen Logger", href: "/services/screen-logger" },
      { label: "Cube Voice Mail", href: "/services/voice-mail" },
      { label: "Conference Bridge", href: "/services/conference-bridge" },
      { label: "Voice Logger InSync", href: "/services/voice-logger-insync" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Industries", href: "#industries" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const CONTACT_INFO = {
  expertLine: "+91 120 405 7109",
};

const Navbar = ({ onBookDemo }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null); // State for our new hover dropdowns
  
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href) => {
    setMobileOpen(false);
    setHoveredMenu(null); // Close dropdowns on navigation
    if (href.startsWith("/")) {
      navigate(href);
      return;
    }
    if (location.pathname === "/") {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/" + href);
    }
  };

  const bookDemo = () => {
    setMobileOpen(false);
    if (onBookDemo && location.pathname === "/") onBookDemo();
    else go("#contact");
  };

  const isActive = (link) => {
    if (link.href === "/about") return location.pathname === "/about";
    if (link.href === "/pricing") return location.pathname === "/pricing";
    if (link.label === "Services") return location.pathname.startsWith("/services");
    if (link.href === "#home") return location.pathname === "/";
    return false;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      
      {/* PERFECTED MARQUEE CSS */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 30s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
          .marquee-group {
            display: flex;
            align-items: center;
            gap: 2rem;
            padding-right: 2rem;
          }
        `}
      </style>

      {/* Top utility bar */}
      <div className="bg-[#0A1F44] text-white text-xs sm:text-sm h-10 flex items-center overflow-hidden">
        <div className="animate-marquee">
          {[1, 2, 3, 4].map((index) => (
            <span key={index} className="marquee-group">
              <span className="font-semibold tracking-wide whitespace-nowrap">Voice Without Limits.</span>
              <span className="text-yellow-400 text-lg leading-none">•</span>
              <span className="font-semibold tracking-wide whitespace-nowrap">Connect More. Pay Less.</span>
              <span className="text-yellow-400 text-lg leading-none">•</span>
              <span className="font-semibold tracking-wide whitespace-nowrap">35+ Years of Telephony Excellence</span>
              <span className="text-yellow-400 text-lg leading-none">•</span>
              <span className="font-semibold tracking-wide whitespace-nowrap">Enterprise Features. Small Business Pricing.</span>
              <span className="text-yellow-400 text-lg leading-none">•</span>
            </span>
          ))}
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white"
        } border-b border-slate-100`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 flex items-center justify-between h-20">
          
          {/* 1. LOGO */}
          <span onClick={() => go("/")} className="cursor-pointer shrink-0 flex items-center group mr-2 xl:mr-4">
            <img 
              src="/logo75.png" 
              alt="Cube Software Logo" 
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </span>

          {/* 2. CENTER LINKS (Fitted perfectly with smart text sizing and gaps) */}
          <div className="hidden lg:flex flex-1 justify-center items-center gap-1 xl:gap-4">
            {MENU_ITEMS.map((link) =>
              link.children ? (
                // --- CUSTOM HOVER DROPDOWN FOR SERVICES & PRODUCTS ---
                <div
                  key={link.label}
                  className="relative h-20 flex items-center"
                  onMouseEnter={() => setHoveredMenu(link.label)}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  <button
                    onClick={() => go(link.href)}
                    className={`px-2 xl:px-3 py-2 text-[13px] xl:text-[14px] font-bold rounded-md flex items-center gap-1 transition-colors whitespace-nowrap ${
                      isActive(link) || hoveredMenu === link.label ? "text-blue-700" : "text-slate-700 hover:text-blue-700"
                    }`}
                  >
                    {link.label} 
                    <ChevronDown 
                      size={14} 
                      className={`mt-0.5 transition-transform duration-300 ${hoveredMenu === link.label ? "rotate-180" : ""}`} 
                    />
                  </button>

                  <AnimatePresence>
                    {hoveredMenu === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-20 left-0 w-64 bg-white border border-slate-100 shadow-[0_20px_40px_rgba(0,0,0,0.1)] rounded-2xl overflow-hidden flex flex-col py-3 z-50"
                      >
                        {link.children.map((c) => (
                          <button
                            key={c.label}
                            onClick={() => go(c.href)}
                            className="text-left px-5 py-3 text-[14px] font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                          >
                            {c.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                // --- STANDARD LINKS ---
                <button
                  key={link.label}
                  onClick={() => go(link.href)}
                  className={`px-2 xl:px-3 py-2 text-[13px] xl:text-[14px] font-bold rounded-md transition-colors whitespace-nowrap ${
                    isActive(link) ? "text-blue-700" : "text-slate-700 hover:text-blue-700"
                  }`}
                >
                  {link.label}
                </button>
              )
            )}
          </div>

          {/* 3. RIGHT: CTA & ACTIONS */}
          <div className="hidden lg:flex items-center shrink-0 gap-3 xl:gap-5 ml-2">
            <a 
              href={`tel:${CONTACT_INFO.expertLine.replace(/\s/g, "")}`} 
              className="flex items-center gap-2 text-[13px] xl:text-[14px] font-bold text-slate-700 hover:text-blue-700 transition-colors whitespace-nowrap"
            >
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                <Phone size={14} className="text-blue-600" />
              </div>
              <span className="hidden xl:inline">{CONTACT_INFO.expertLine}</span>
            </a>

            <div className="w-px h-5 bg-slate-200"></div>

            <button 
              onClick={() => go("/login")}
              className="flex items-center gap-1.5 text-[13px] xl:text-[14px] font-bold text-slate-700 hover:text-blue-700 transition-colors outline-none whitespace-nowrap"
            >
              <LogIn size={16} className="text-blue-600" />
              Login
            </button>

            <Button
              onClick={bookDemo}
              className="ml-1 xl:ml-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-5 xl:px-6 py-4 xl:py-5 text-[13px] xl:text-[14px] font-bold transition-transform hover:-translate-y-0.5 whitespace-nowrap shadow-md shadow-blue-600/20"
            >
              Book Demo
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-slate-700 shrink-0"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* --- MOBILE DROPDOWN --- */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 shadow-2xl max-h-[80vh] overflow-y-auto">
            <div className="px-4 py-4 flex flex-col gap-2">
              
              {MENU_ITEMS.map((link) =>
                link.children ? (
                  <div key={link.label} className="mb-2">
                    <div className="px-3 pt-2 pb-2 text-xs font-bold uppercase tracking-widest text-blue-600/70">
                      {link.label}
                    </div>
                    <div className="space-y-1">
                      {link.children.map((c) => (
                        <button
                          key={c.label}
                          onClick={() => go(c.href)}
                          className="w-full text-left px-5 py-2.5 text-[15px] font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors"
                        >
                          {c.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <button
                    key={link.label}
                    onClick={() => go(link.href)}
                    className="text-left px-3 py-3 text-[15px] font-bold text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors"
                  >
                    {link.label}
                  </button>
                )
              )}

              <div className="h-px bg-slate-100 my-2"></div>

              <a 
                href={`tel:${CONTACT_INFO.expertLine.replace(/\s/g, "")}`} 
                className="flex items-center gap-3 text-left px-3 py-3 text-[15px] font-bold text-slate-800 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                  <Phone size={14} className="text-blue-600" />
                </div>
                {CONTACT_INFO.expertLine}
              </a>

              <button 
                onClick={() => go("/login")}
                className="flex items-center gap-3 text-left px-3 py-3 text-[15px] font-bold text-slate-800 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center">
                  <LogIn size={14} className="text-slate-600" />
                </div>
                Customer Portal Login
              </button>

              <Button onClick={bookDemo} className="mt-4 mb-4 bg-blue-600 hover:bg-blue-700 text-white py-6 rounded-xl font-bold shadow-lg shadow-blue-600/20">
                Book Demo
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;