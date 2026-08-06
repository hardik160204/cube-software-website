import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Phone, ChevronDown, Menu, X, LogIn } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { CONTACT_INFO } from "../mock";
import { NAV_LINKS } from "@/constants/testIds";

const Navbar = ({ onBookDemo }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href) => {
    setMobileOpen(false);
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
    if (link.label === "Services") return location.pathname.startsWith("/services");
    if (link.href === "#home") return location.pathname === "/";
    return false;
  };

  // Filter out "India SIP Channels" and "CRM" from the dropdown dynamically
  const displayNavLinks = NAV_LINKS.map((link) => {
    if (link.label === "Services" && link.children) {
      return {
        ...link,
        children: link.children.filter(
          (c) => c.label !== "India SIP Channels" && c.label !== "CRM"
        ),
      };
    }
    return link;
  });

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
            padding-right: 2rem; /* Ensure gap exists between the end of one group and start of the next */
          }
        `}
      </style>

      {/* Top utility bar - Seamless Continuous Marquee */}
      <div className="bg-[#0A1F44] text-white text-xs sm:text-sm h-10 flex items-center overflow-hidden">
        <div className="animate-marquee">
          {/* Render 4 groups to ensure it never runs out of text on ultrawide screens */}
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
              <span className="font-semibold tracking-wide whitespace-nowrap">Simply Better Telephony.</span>
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
          
          {/* 1. LEFT: LOGO SECTION */}
          <span onClick={() => go("/")} className="cursor-pointer shrink-0 flex items-center group">
            <img 
              src="/logo75.png" 
              alt="Cube Software Logo" 
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </span>

          {/* 2. CENTER: NAVIGATION LINKS (Using displayNavLinks) */}
          <div className="hidden lg:flex flex-1 justify-center items-center gap-2 xl:gap-4">
            {displayNavLinks.map((link) =>
              link.children ? (
                <DropdownMenu key={link.label}>
                  <DropdownMenuTrigger
                    className={`px-3 py-2 text-[15px] font-semibold rounded-md flex items-center gap-1.5 outline-none transition-colors whitespace-nowrap ${
                      isActive(link) ? "text-blue-700" : "text-slate-700 hover:text-blue-700"
                    }`}
                  >
                    {link.label} <ChevronDown size={14} className="mt-0.5" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white max-h-96 overflow-y-auto rounded-xl shadow-lg border-slate-100">
                    {link.children.map((c) => (
                      <DropdownMenuItem
                        key={c.label}
                        className="cursor-pointer font-medium text-slate-700 focus:bg-blue-50 focus:text-blue-700"
                        onClick={() => go(c.href)}
                      >
                        {c.label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <button
                  key={link.label}
                  onClick={() => go(link.href)}
                  className={`px-3 py-2 text-[15px] font-semibold rounded-md transition-colors whitespace-nowrap ${
                    isActive(link) ? "text-blue-700" : "text-slate-700 hover:text-blue-700"
                  }`}
                >
                  {link.label}
                </button>
              )
            )}
          </div>

          {/* 3. RIGHT: CTA & ACTIONS */}
          <div className="hidden lg:flex items-center shrink-0 gap-4 xl:gap-5">
            {/* Phone Number */}
            <a 
              href={`tel:${CONTACT_INFO.expertLine.replace(/\s/g, "")}`} 
              className="flex items-center gap-2 text-[15px] font-bold text-slate-700 hover:text-blue-700 transition-colors whitespace-nowrap"
            >
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                <Phone size={14} className="text-blue-600" />
              </div>
              <span>{CONTACT_INFO.expertLine}</span>
            </a>

            {/* Vertical Divider */}
            <div className="w-px h-6 bg-slate-200"></div>

            {/* Login Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1.5 text-[15px] font-semibold text-slate-700 hover:text-blue-700 transition-colors outline-none whitespace-nowrap">
                <LogIn size={16} className="text-blue-600" />
                Login <ChevronDown size={14} className="text-slate-400" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white rounded-xl shadow-lg border-slate-100 mt-2">
                <DropdownMenuItem className="cursor-pointer font-medium focus:bg-blue-50 focus:text-blue-700">Customer Portal Login</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Demo Button */}
            <Button
              onClick={bookDemo}
              className="ml-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 py-5 font-bold transition-transform hover:-translate-y-0.5 whitespace-nowrap shadow-md shadow-blue-600/20"
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

        {/* Mobile menu dropdown */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 shadow-2xl max-h-[80vh] overflow-y-auto">
            <div className="px-4 py-4 flex flex-col gap-2">
              
              {displayNavLinks.map((link) =>
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
                    className="text-left px-3 py-3 text-[15px] font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors"
                  >
                    {link.label}
                  </button>
                )
              )}

              <div className="h-px bg-slate-100 my-2"></div>

              {/* Mobile Phone */}
              <a 
                href={`tel:${CONTACT_INFO.expertLine.replace(/\s/g, "")}`} 
                className="flex items-center gap-3 text-left px-3 py-3 text-[15px] font-bold text-slate-800 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                  <Phone size={14} className="text-blue-600" />
                </div>
                {CONTACT_INFO.expertLine}
              </a>

              {/* Mobile Login Links */}
              <div className="px-3 pt-4 pb-2 text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                <LogIn size={14} /> Login Portals
              </div>
              <button className="w-full text-left px-5 py-2.5 text-[15px] font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                Customer Portal Login
              </button>

              <Button onClick={bookDemo} className="mt-6 mb-4 bg-blue-600 hover:bg-blue-700 text-white py-6 rounded-xl font-bold shadow-lg shadow-blue-600/20">
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