import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ChevronRight, Users, MessageCircle, BarChart,
  ArrowRight, CheckCircle2, ShieldCheck, Zap, Globe, Clock, Network,
  Database, Layers, PhoneMissed, PhoneForwarded, Megaphone, Bot,
  Headphones, PhoneCall, Mic, ClipboardList, TrendingDown, TrendingUp, Monitor
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Button } from "../components/ui/button";
import Navbar from "../components/Navbar";
import { Footer } from "../components/HomeSections2";

// =========================================================================
// PAGE CONTENT DATA
// =========================================================================

// 15 Small Service Cards Data
const CLOUD_SERVICES = [
  { icon: Mic, title: "IVR", desc: "Interactive Voice Response system for automated intelligent routing.", color: "blue" },
  { icon: PhoneMissed, title: "Missed Call Service", desc: "Engage customers easily with zero-cost missed call campaigns.", color: "blue" },
  { icon: PhoneForwarded, title: "Auto Dialer", desc: "Automate outbound calls to maximize your agents' talk time.", color: "blue" },
  { icon: Megaphone, title: "Bulk Voice Calls", desc: "Broadcast voice messages to thousands of customers instantly.", color: "blue" },
  { icon: MessageCircle, title: "Whatsapp Chat Bot", desc: "Automate customer support and notifications on WhatsApp 24/7.", color: "blue" },
  { icon: Bot, title: "Web Chat Bot", desc: "AI-powered web widget for instant visitor engagement and help.", color: "blue" },
  { icon: Users, title: "CRM Integration", desc: "Manage leads and customer interactions seamlessly in one place.", color: "blue" },
  { icon: Headphones, title: "Toll Free Number", desc: "Provide a free, professional contact method for your customers.", color: "blue" },
  { icon: PhoneCall, title: "Virtual Number", desc: "Localize your brand's presence with dedicated virtual numbers.", color: "blue" },
  { icon: Database, title: "Call Recording", desc: "Securely record and monitor business calls for quality assurance.", color: "blue" },
  { icon: Zap, title: "Click to Call", desc: "Enable instant calling directly from your website or mobile app.", color: "blue" },
  { icon: Network, title: "Smart Call Routing", desc: "Intelligent skill-based and time-based agent call routing.", color: "blue" },
  { icon: ShieldCheck, title: "Number Masking", desc: "Protect customer and agent privacy with secure number masking.", color: "blue" },
  { icon: BarChart, title: "Live Analytics", desc: "Real-time wallboards and detailed historical call reports.", color: "blue" },
  { icon: ClipboardList, title: "Quality Analysis", desc: "Evaluate interactions and monitor agent performance to maintain high service standards.", color: "blue" }
];

const BENEFITS_DATA = [
  { title: "Zero Hardware Costs", desc: "No bulky PBX hardware required. Operate entirely from the cloud with just a laptop and internet connection." },
  { title: "Work From Anywhere", desc: "Agents can log in and securely handle customer calls from the office, home, or anywhere in the world." },
  { title: "Rapid Scalability", desc: "Add or remove agent licenses instantly. Scale up during peak seasons without worrying about infrastructure." },
  { title: "99.99% Uptime Guarantee", desc: "Enterprise-grade infrastructure ensures your contact center is always online, secure, and ready to take calls." }
];

// USP Section Data
const USP_DATA = [
  {
    title: "IVR Service",
    icon: Mic,
    bullets: [
      "AI Integration",
      "Google, Amazon, IBM AI Integration",
      "Agent can see customer number on incoming call",
      "CRM/Third Part Integration",
      "Quick Customization Possible",
      "Chat Bot Integration",
      "Free Lead Management System",
      "Marketing Automation Integration"
    ]
  },
  {
    title: "Bulk Voice Calls",
    icon: Megaphone,
    bullets: [
      "Custom Reserved Caller ID",
      "Call Back Feature",
      "Wait till noise feature",
      "On Extension Lead",
      "On Answer SMS",
      "On Extension SMS",
      "2 Way (Incoming & Outgoing)"
    ]
  },
  {
    title: "Chat Bot",
    icon: Bot,
    bullets: [
      "Whatsapp and Web Support",
      "Super Easy to create and operate",
      "AI and Scripted bots",
      "Manual Agent Transfer Support",
      "Whatsapp Sharing between multiple Agents",
      "Internal Team communication inside chat",
      "Automatic Sales Agent Whatsapp Tracking",
      "Multi-Media support",
      "API Support"
    ]
  },
  {
    title: "Auto Dialer",
    icon: PhoneForwarded,
    bullets: [
      "App Based Dialler so no OTC",
      "Highly Scalable",
      "Inbound and Outbound call tracking",
      "Two Way Call Masking",
      "Configure call back on masked number",
      "Multiple policy assignment",
      "CRM Integrations"
    ]
  }
];

// FACTS Section Data
const FACTS_DATA = [
  {
    icon: TrendingDown,
    stat: "75%",
    title: "Reduced Cost",
    desc: "More than 75% of Enterprises that adopt cloud telephony, accept that it reduces IT cost"
  },
  {
    icon: TrendingUp,
    stat: "95%",
    title: "High Availability",
    desc: "95% of businesses report that service availability improved since moving to the cloud"
  },
  {
    icon: Monitor,
    stat: "92%",
    title: "High Scalability",
    desc: "Enables operations more efficient - accelerating growth. In other words, it readily provides safety to your systems - even if your load increases."
  }
];

const FAQ_DATA = [
  { q: "Do I need physical servers to use the Cloud Contact Center?", a: "No, absolutely not! Cube Cloud Contact Center is 100% cloud-hosted. All you need is a computer, a headset, and an active internet connection to start making and receiving calls." },
  { q: "Can I keep my existing business phone numbers?", a: "Yes. We provide seamless number porting. You can bring your existing toll-free, local, or mobile numbers to our platform with zero downtime." },
  { q: "How long does it take to set up?", a: "Standard setups are incredibly fast. We can typically deploy your cloud contact center, configure your IVR, and train your agents within 24 to 48 hours." },
  { q: "Is the platform secure and compliant?", a: "Yes. Our infrastructure follows strict data protection guidelines. Call recordings and customer data are encrypted, ensuring compliance with major industry standards." },
  { q: "Can my agents work remotely?", a: "Yes, our solution is designed for hybrid and remote work. Agents can log in via their web browser from anywhere in the world while supervisors monitor them in real-time." }
];

// --- TRUSTED BY LOGOS ---
const CLIENT_LOGOS = [
  '/1.jpg', '/2.png', '/4.png', '/5.jpeg', 
  '/6.png', '/7.png', '/upsc.png', '/cars24.png', '/Yatra.png'
];
const PARTNER_LOGOS = [
  '/10.png', '/11.png', '/Avaya.jpeg', '/DigiCon.png', 
  '/Fusion.png', '/Mitel.png', '/ABSIndia.png'
];

export default function CubeCloudCCS() {
  
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white text-slate-900 flex flex-col min-h-screen">
      <Navbar />

      {/* =========================================================
          HERO SECTION (Left Aligned Layout matching Image 1)
          ========================================================= */}
      <section className="relative w-full min-h-[100dvh] flex flex-col overflow-hidden bg-[#0A1F44]">
        
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
        >
          <source src="/cube-main.mp4" type="video/mp4" />
        </video>

        {/* Gradient Overlay to ensure text readability (Left to Right) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44]/90 via-[#0A1F44]/40 to-[#0A1F44]/10 z-10 pointer-events-none" />
        
        {/* Invisible Spacer to clear the fixed Navbar */}
        <div className="w-full h-24 lg:h-32 shrink-0 pointer-events-none z-10"></div>
        
        {/* Main Hero Content (Left-Aligned) */}
        <div className="relative z-20 flex-grow flex flex-col justify-center w-full max-w-7xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
          
          <nav className="flex items-center gap-1.5 text-xs text-blue-200 mb-6 animate-fade-up">
            <Link className="hover:text-white transition-colors" to="/">Home</Link>
            <ChevronRight size={13} />
            <span className="text-blue-300">Services</span>
            <ChevronRight size={13} />
            <span className="text-white font-semibold">Cloud Contact Center</span>
          </nav>
          
          {/* Main Headline */}
          <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-6">
            Transform Customer Experience 
            <br className="hidden sm:block" />
            <span className="text-red-600">with an All-in-One Cloud Solution</span>
          </h1>
          <p className="mt-5 text-lg text-blue-100 max-w-2xl leading-relaxed animate-fade-up animate-delay-100">
            Accelerate your team collaboration with powerful cloud dialing, comprehensive features, 
            and SIP trunking solutions — engineered for high-performance enterprises.
          </p>
          
          <div className="mt-8 flex flex-wrap gap-4 animate-fade-up animate-delay-200">
            <Link to="/#contact">
              <Button className="bg-blue-600 hover:bg-blue-500 text-white px-8 h-12 rounded-md shadow-lg transition-transform hover:-translate-y-0.5" size="lg">
                Book Demo
              </Button>
            </Link>
            <Link to="/#contact">
              <Button className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white px-8 h-12 rounded-md group" size="lg" variant="outline">
                Talk to Sales
                <ArrowRight className="ml-1 transition-transform group-hover:translate-x-1" size={16} />
              </Button>
            </Link>
          </div>
          
        </div>

        {/* --- BOTTOM STATS BAR --- */}
        <div className="relative z-30 w-full shrink-0 border-t border-white/10 bg-[#0A1F44]/40 backdrop-blur-md py-6 mt-auto">
          <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-8 divide-x divide-white/10">
            <div className="text-center px-2 sm:px-4">
              <div className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white mb-1 md:mb-2 drop-shadow-md">
                35+
              </div>
              <div className="font-bold tracking-[0.1em] sm:tracking-[0.15em] uppercase text-blue-200/80 text-[10px] sm:text-xs md:text-sm">
                Years of Innovation
              </div>
            </div>
            <div className="text-center px-2 sm:px-4">
              <div className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white mb-1 md:mb-2 drop-shadow-md">
                10+
              </div>
              <div className="font-bold tracking-[0.1em] sm:tracking-[0.15em] uppercase text-blue-200/80 text-[10px] sm:text-xs md:text-sm">
                Countries
              </div>
            </div>
            <div className="text-center px-2 sm:px-4 hidden md:block">
              <div className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white mb-1 md:mb-2 drop-shadow-md">
                5000+
              </div>
              <div className="font-bold tracking-[0.1em] sm:tracking-[0.15em] uppercase text-blue-200/80 text-[10px] sm:text-xs md:text-sm">
                Active Users
              </div>
            </div>
            <div className="text-center px-2 sm:px-4 hidden md:block">
              <div className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white mb-1 md:mb-2 drop-shadow-md">
                99.9%
              </div>
              <div className="font-bold tracking-[0.1em] sm:tracking-[0.15em] uppercase text-blue-200/80 text-[10px] sm:text-xs md:text-sm">
                Uptime Guarantee
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TWO-LINE TRUSTED BY MARQUEE SECTION
          ========================================================= */}
      <section className="py-16 bg-white border-b border-slate-100 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 text-center">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900">
            Cloud Communications Trusted by Leading Businesses Across the Globe
          </h2>
        </div>
        
        {/* Side fade gradients for smooth sliding effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
        <div className="flex flex-col gap-10 sm:gap-14">
          {/* Row 1: Clients moving Left */}
          <div className="flex w-max">
            <motion.div 
              animate={{ x: ["0%", "-50%"] }} 
              transition={{ ease: "linear", duration: 35, repeat: Infinity }} 
              className="flex items-center gap-16 sm:gap-24 px-8"
            >
              {[...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logoPath, idx) => (
                <div key={idx} className="w-28 h-12 sm:w-40 sm:h-16 relative flex items-center justify-center shrink-0 hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <img src={logoPath} alt="Client Logo" className="max-w-full max-h-full object-contain" />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 2: Partners moving Right */}
          <div className="flex w-max">
            <motion.div 
              animate={{ x: ["-50%", "0%"] }} 
              transition={{ ease: "linear", duration: 40, repeat: Infinity }} 
              className="flex items-center gap-16 sm:gap-24 px-8"
            >
              {[...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS].map((logoPath, idx) => (
                <div key={idx} className="w-28 h-12 sm:w-40 sm:h-16 relative flex items-center justify-center shrink-0 hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <img src={logoPath} alt="Partner Logo" className="max-w-full max-h-full object-contain" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BENEFITS SECTION
          ========================================================= */}
      <section className="pt-24 pb-10 bg-white border-b border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          <div className="lg:col-span-5">
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-tight mb-6">
              Why Choose Cube Cloud Telephony?
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-10 text-justify">
              Traditional PBX systems drag you down with heavy maintenance, physical limitations, and high upfront costs. Step into the future of scalable communications.
            </p>
            
            <div className="space-y-6">
              {BENEFITS_DATA.map((benefit, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 text-slate-900">{benefit.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" 
              alt="Cloud Call Center Analytics" 
              className="rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 w-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* =========================================================
          15 SERVICES GRID SECTION (Small 5-Column Cards)
          ========================================================= */}
      <section className="pt-12 pb-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 leading-tight mb-4">
              Cloud Contact Center <span className="text-blue-600">Services</span>
            </h2>
            <p className="text-lg text-slate-500">We provide an end-to-end solution to our users.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {CLOUD_SERVICES.map((service, i) => {
              const colorStyles = {
                blue: { bg: "bg-blue-50", text: "text-blue-500", dash: "bg-blue-500" }
              };

              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: (i % 5) * 0.1 }}
                  className="bg-white p-7 rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 text-left flex flex-col h-full hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 relative z-20 cursor-pointer group"
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shrink-0 transition-transform duration-300 group-hover:scale-110 ${colorStyles[service.color].bg} ${colorStyles[service.color].text}`}>
                    <service.icon size={26} strokeWidth={2.5} />
                  </div>
                  <h3 className="font-heading font-bold text-[17px] text-slate-900 mb-4 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-[13.5px] text-slate-500 leading-relaxed mb-8">
                    {service.desc}
                  </p>
                  <div className={`mt-auto w-8 h-[3px] rounded-full transition-all duration-300 group-hover:w-12 ${colorStyles[service.color].dash}`} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          USP SECTION (Smart Features)
          ========================================================= */}
      <section className="pt-12 pb-24 bg-white border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-4">
              Our <span className="text-blue-600">USP</span>
            </h2>
            <p className="text-lg text-slate-500 relative inline-block">
              Here are few smart features
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-8 h-1 bg-blue-600 rounded-full"></span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {USP_DATA.map((usp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 flex flex-col h-full cursor-pointer"
              >
                <div className="flex items-center gap-3 text-blue-600 mb-6 pb-6 border-b border-slate-100">
                  <usp.icon size={28} strokeWidth={2} />
                  <h3 className="font-heading font-bold text-xl text-slate-900">{usp.title}</h3>
                </div>
                
                <ul className="space-y-4 flex-grow">
                  {usp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[14.5px] text-slate-600">
                      <span className="w-2 h-2 bg-blue-500 mt-1.5 shrink-0 rounded-sm"></span>
                      <span className="leading-snug">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FACTS SECTION (Redesigned Business Security)
          ========================================================= */}
      <section className="pt-12 pb-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="bg-blue-600 rounded-[2.5rem] p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
            
            {/* Decorative background elements inside the blue container */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none -mr-40 -mt-40" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400/20 rounded-full blur-[80px] pointer-events-none -ml-20 -mb-20" />

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
              
              {/* Left Content (Text) */}
              <div className="lg:col-span-4">
                <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold tracking-widest uppercase mb-6 border border-white/20">
                  Business Security
                </div>
                <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-6">
                  Enhance Your <br/>Operations
                </h2>
                <p className="text-[16px] text-blue-100 leading-relaxed">
                  94% of Managers state their business security and workflow efficiency have drastically improved after migrating to robust <strong className="text-white">cloud telephony services.</strong>
                </p>
              </div>

              {/* Right Cards (Grid) */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                {FACTS_DATA.map((fact, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full cursor-pointer group border-0"
                  >
                    {/* Top colored header section of the card */}
                    <div className="bg-blue-50 p-6 flex flex-col gap-4 border-b border-blue-100/50">
                      <div className="w-12 h-12 rounded-xl bg-white text-blue-600 shadow-sm flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
                        <fact.icon size={26} strokeWidth={2.5} />
                      </div>
                      <h3 className="font-heading font-black text-4xl text-blue-600">
                        {fact.stat}
                      </h3>
                    </div>
                    
                    {/* Bottom white body section of the card */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h4 className="font-bold text-[16px] text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {fact.title}
                      </h4>
                      <p className="text-[13px] text-slate-500 leading-relaxed flex-grow">
                        {fact.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

{/* =========================================================
          FAQ SECTION
          ========================================================= */}
      <section className="pt-12 pb-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="text-blue-700 text-xs font-bold tracking-[0.2em] uppercase mb-4">— Knowledge Base</div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {FAQ_DATA.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-slate-50 rounded-xl border border-slate-100 mb-3 px-6 shadow-sm data-[state=open]:shadow-md transition-shadow">
                <AccordionTrigger className="text-left font-heading font-bold text-slate-900 hover:text-blue-700 hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

{/* =========================================================
          BOTTOM CTA (Redesigned with Spacing & Working Image)
          ========================================================= */}
      <section className="py-16 md:py-24 bg-[#0a3170] mt-16 mb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Left Side: 3D Bot Illustration */}
            <div className="w-full lg:w-1/2 flex justify-center relative">
              {/* Optional glow effect behind the bot */}
              <div className="absolute inset-0 bg-blue-400/20 blur-[80px] rounded-full w-[300px] h-[300px] m-auto pointer-events-none z-0"></div>
              
              {/* External Image URL added so it renders immediately */}
              <img 
                src="https://cdn-icons-png.flaticon.com/512/8649/8649605.png" 
                alt="AI Cloud Bot Illustration" 
                className="relative z-10 w-full max-w-[400px] object-contain drop-shadow-2xl hover:-translate-y-2 transition-transform duration-500"
              />
            </div>

            {/* Right Side: Text, Tags, and Green Button */}
            <div className="w-full lg:w-1/2 text-center lg:text-left relative z-10">
              
              <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
                Ready to Upgrade Your <br className="hidden lg:block"/> Support Center?
              </h2>
              
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
                To All Your Customers
              </h3>
              
              <p className="text-blue-100 text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                Connect with our experts today. We will assess your call volume and set up a customized cloud environment for your team. Give your brand a better outlook by using professional cloud services.
              </p>

              {/* Feature Tags matching the reference image */}
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8 max-w-xl mx-auto lg:mx-0">
                <span className="bg-blue-600/80 hover:bg-blue-500 transition-colors border border-blue-400/30 text-white text-[13px] px-3 py-1.5 shadow-sm rounded-sm">Unlimited Channels</span>
                <span className="bg-blue-600/80 hover:bg-blue-500 transition-colors border border-blue-400/30 text-white text-[13px] px-3 py-1.5 shadow-sm rounded-sm">Multi level IVR</span>
                <span className="bg-blue-600/80 hover:bg-blue-500 transition-colors border border-blue-400/30 text-white text-[13px] px-3 py-1.5 shadow-sm rounded-sm">Unlimited Users</span>
                <span className="bg-blue-600/80 hover:bg-blue-500 transition-colors border border-blue-400/30 text-white text-[13px] px-3 py-1.5 shadow-sm rounded-sm">API integration</span>
                <span className="bg-blue-600/80 hover:bg-blue-500 transition-colors border border-blue-400/30 text-white text-[13px] px-3 py-1.5 shadow-sm rounded-sm">Real Time Notification</span>
              </div>

              {/* Green Button matching the reference */}
              <Link to="/#contact" className="inline-block">
                <Button className="bg-[#f5f6f8] hover:bg-[#1762a3] text-blue px-10 h-12 text-[15px] rounded-full shadow-[0_8px_20px_rgba(28,192,89,0.3)] transition-transform hover:-translate-y-1 font-bold tracking-wide">
                  Book a Free Demo
                </Button>
              </Link>
              
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}