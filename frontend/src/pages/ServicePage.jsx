import React, { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, CheckCircle2, ChevronRight, ChevronLeft, Cloud, Smartphone, GitBranch, AudioLines,
  BarChart3, ShieldCheck, Globe, Gauge, Plug, Landmark, Activity, PhoneOutgoing,
  PhoneIncoming, ListChecks, LayoutDashboard, Database, Mic, FileAudio, Search,
  HardDrive, Lock, Bell, Users, PhoneCall, KanbanSquare, Workflow, Megaphone,
  Receipt, Percent, Building, AlertTriangle, FileSpreadsheet, MonitorPlay, Link2,
  CalendarClock, Voicemail, Mail, Forward, Clock, Languages, MessageSquare,
  Radio, UserCog, Disc, DatabaseZap, Layers, Sparkles,
  AtSign, Laptop, Briefcase, Phone, AppWindow 
} from "lucide-react";
import { Button } from "../components/ui/button";
import Navbar from "../components/Navbar";
import { Footer } from "../components/HomeSections2";
import { SERVICES, SERVICE_ORDER } from "../servicesData";

const FEATURE_IMAGES = [
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80", 
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80", 
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80", 
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80", 
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80", 
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80", 
];

const ServicePage = () => {
  const { slug } = useParams();
  const service = SERVICES[slug];
  
  // Carousel State
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  // Responsive Carousel Logic
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCardsToShow(1);
      else if (window.innerWidth < 1024) setCardsToShow(2);
      else setCardsToShow(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) return <Navigate replace to="/"/>;

  // Max slides calculation
  const totalFeatures = service.features?.length || 0;
  const maxSlide = Math.max(0, totalFeatures - cardsToShow);

  // Ensure current slide doesn't break when resizing window
  if (currentSlide > maxSlide) {
    setCurrentSlide(maxSlide);
  }

  const prevSlide = () => setCurrentSlide((p) => Math.max(p - 1, 0));
  const nextSlide = () => setCurrentSlide((p) => Math.min(p + 1, maxSlide));

  const networkNodes = [
    { id: 'satellite', Icon: Radio, x: -280, y: -160, path: "M -80 -60 L -140 -60 L -280 -160", dashed: false },
    { id: 'browser', Icon: AppWindow, x: -140, y: -240, path: "M -80 -60 L -140 -240", dashed: false },
    { id: 'email', Icon: AtSign, x: 0, y: -290, path: "M 0 -80 L 0 -290", dashed: false },
    { id: 'laptop', Icon: Laptop, x: 140, y: -240, path: "M 80 -60 L 140 -240", dashed: false },
    { id: 'users', Icon: Users, x: 280, y: -140, path: "M 100 -60 L 140 -100 L 280 -140", dashed: true },
    { id: 'phoneOut', Icon: PhoneOutgoing, x: 300, y: 20, path: "M 100 -20 L 300 20", dashed: true },
    { id: 'lockRight', Icon: Lock, x: 200, y: 160, path: "M 80 60 L 200 160", dashed: true },
    { id: 'phoneRecRight', Icon: Phone, x: 340, y: 160, path: "M 200 160 L 340 160", dashed: true }, 
    { id: 'briefcase', Icon: Briefcase, x: 240, y: 280, path: "M 100 160 L 140 280 L 240 280", dashed: false },
    { id: 'lockBottomLeft', Icon: Lock, x: -100, y: 310, path: "M -100 160 L -100 310", dashed: true },
    { id: 'globe', Icon: Globe, x: -180, y: 200, path: "M -80 60 L -180 200", dashed: false },
    { id: 'lockFarLeft', Icon: Lock, x: -300, y: 260, path: "M -180 200 L -300 260", dashed: true }, 
    { id: 'phoneIn', Icon: PhoneIncoming, x: -320, y: -20, path: "M -100 0 L -320 -20", dashed: false },
    { id: 'lockMidLeft', Icon: Lock, x: -280, y: 100, path: "M -100 30 L -280 100", dashed: false },
  ];

  return (
    <div className="bg-white text-slate-900">
      <Navbar/>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${service.heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44]/95 via-[#0A1F44]/85 to-[#0A1F44]/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-44 pb-24">
          <nav className="flex items-center gap-1.5 text-xs text-blue-200 mb-6">
            <Link className="hover:text-white transition-colors" to="/">Home</Link>
            <ChevronRight size={13} />
            <span className="text-blue-300">Services</span>
            <ChevronRight size={13} />
            <span className="text-white font-semibold">{service.title}</span>
          </nav>
          <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight max-w-3xl leading-[1.05] animate-fade-up">
            {service.title}
          </h1>
          <p className="mt-5 text-lg text-blue-100 max-w-2xl leading-relaxed animate-fade-up">{service.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-4 animate-fade-up">
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
          <div className="mt-12 flex flex-wrap gap-0 divide-x divide-white/15">
            {service.stats.map((s, i) => (
              <div key={s.label} className={i === 0 ? "pr-8" : "px-8"}>
                <div className="font-heading font-black text-2xl sm:text-3xl text-white">{s.value}</div>
                <div className="text-[11px] font-semibold tracking-wider uppercase text-blue-200 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-16 lg:gap-20 xl:gap-28 items-center">
          <div className="relative z-10 order-1 lg:order-2 lg:pl-8 xl:pl-12">
            <div className="text-blue-700 text-xs font-bold tracking-[0.2em] uppercase mb-4">— Overview</div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 leading-snug mb-5">
              The Engine Powering <span className="text-blue-600">{service.title}</span>
            </h2>
            <div className="space-y-4">
              {service.overview.map((p, i) => (
                <p key={i} className="text-slate-600 leading-relaxed text-justify">
                  {p}
                </p>
              ))}
            </div>
            <div className="mt-10">
              <Link to="/#contact">
                <Button className="bg-[#0A1F44] hover:bg-blue-700 text-white px-8 h-14 text-base rounded-md shadow-lg transition-transform hover:-translate-y-1" size="lg">
                  Book A Demo
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative h-[600px] sm:h-[700px] flex items-center justify-center order-2 lg:order-1 w-full mt-10 lg:mt-0">
            <div className="relative flex items-center justify-center scale-[0.45] sm:scale-75 lg:scale-85 xl:scale-95 w-full h-full">
              <div className="absolute z-0 pointer-events-none mt-16">
                <svg width="450" height="300" viewBox="0 0 450 300" className="overflow-visible">
                  <motion.path 
                    d="M 120 180 Q 50 180 50 120 Q 50 60 110 50 Q 130 -10 225 -10 Q 320 -10 340 50 Q 400 60 400 120 Q 400 180 330 180 L 120 180 Z" 
                    fill="none" 
                    stroke="#2563eb" 
                    strokeWidth="14" 
                    strokeLinejoin="round"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.g 
                    stroke="#2563eb" 
                    strokeWidth="12" 
                    fill="#2563eb"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <path d="M 160 180 L 160 220 L 125 220" fill="none" />
                    <circle cx="125" cy="220" r="24" />
                    <path d="M 225 180 L 225 260" fill="none" />
                    <circle cx="225" cy="260" r="24" />
                    <path d="M 290 180 L 290 220 L 325 220" fill="none" />
                    <circle cx="325" cy="220" r="24" />
                  </motion.g>
                </svg>
              </div>

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <svg className="absolute w-[1000px] h-[1000px] overflow-visible" viewBox="-500 -500 1000 1000">
                  {networkNodes.map((node, i) => (
                    <g key={`line-group-${i}`}>
                      <path 
                        d={node.path}
                        fill="none"
                        stroke="#93c5fd" 
                        strokeWidth="2"
                        strokeDasharray={node.dashed ? "6 6" : "none"}
                        opacity="0.4"
                      />
                      <motion.path 
                        d={node.path}
                        fill="none"
                        stroke="#3b82f6" 
                        strokeWidth="5" 
                        initial={{ opacity: 0.1 }}
                        animate={{ opacity: [0.1, 0.7, 0.1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.15 }}
                      />
                      <motion.path 
                        d={node.path}
                        fill="none"
                        stroke="#1e40af" 
                        strokeWidth="4" 
                        strokeDasharray="8 32"
                        animate={{ strokeDashoffset: [0, -40] }}
                        transition={{ duration: 1.2 + (i % 2) * 0.5, repeat: Infinity, ease: "linear" }}
                      />
                    </g>
                  ))}
                </svg>
              </div>

              <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                <div className="relative w-[380px] h-[480px] mt-16 ml-[60px] pointer-events-auto">
                  <motion.div
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-full h-full flex items-end justify-center"
                  >
                    <img 
                      src="/transparent-person.png" 
                      alt="Support Professional" 
                      className="max-w-full max-h-full object-contain drop-shadow-2xl"
                    />
                  </motion.div>
                </div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
                {networkNodes.map((node, i) => (
                  <motion.div
                    key={`icon-${i}`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1, x: node.x, y: node.y }}
                    transition={{ duration: 0.6, delay: i * 0.1, type: "spring", bounce: 0.4 }}
                    className="absolute"
                  >
                    <motion.div
                      animate={{ y: [-8, 8, -8] }}
                      transition={{ duration: 3 + (i * 0.3), repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                      className="w-[72px] h-[72px] rounded-full bg-white shadow-xl border-[2px] border-blue-500 flex items-center justify-center relative group"
                    >
                      <node.Icon className="w-8 h-8 text-[#0A1F44]" strokeWidth={1.5} />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Carousel */}
      <section className="py-24 bg-[#FAFAFA] overflow-hidden relative">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-16 text-center"
          >
            <h2 className="font-heading font-black text-4xl sm:text-5xl tracking-tight text-slate-900 leading-tight">
              Everything {service.title} gives your team
            </h2>
          </motion.div>

          <div className="relative w-full">
            
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`absolute -left-2 sm:-left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                currentSlide === 0 
                  ? "bg-white text-slate-300 shadow-sm cursor-not-allowed opacity-50" 
                  : "bg-blue-50 text-[#1f638b] hover:bg-[#1f638b] hover:text-white shadow-lg cursor-pointer"
              }`}
              aria-label="Previous Slide"
            >
              <ChevronLeft size={26} strokeWidth={2.5} />
            </button>

            <button
              onClick={nextSlide}
              disabled={currentSlide === maxSlide}
              className={`absolute -right-2 sm:-right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                currentSlide === maxSlide 
                  ? "bg-white text-slate-300 shadow-sm cursor-not-allowed opacity-50" 
                  : "bg-blue-50 text-[#1f638b] hover:bg-[#1f638b] hover:text-white shadow-lg cursor-pointer"
              }`}
              aria-label="Next Slide"
            >
              <ChevronRight size={26} strokeWidth={2.5} />
            </button>

            <div className="overflow-hidden px-2 py-6 mx-8 sm:mx-10">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * (100 / cardsToShow)}%)` }}
              >
                {service.features.map((f, i) => {
                  const imageUrl = FEATURE_IMAGES[i % FEATURE_IMAGES.length];

                  return (
                    <div 
                      key={f.title}
                      className="shrink-0 px-3 transition-all duration-500"
                      style={{ width: `${100 / cardsToShow}%` }}
                    >
                      <div className="bg-white rounded-[32px] p-5 border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] hover:-translate-y-3 transition-all duration-500 flex flex-col h-full group">
                        
                        <div className="w-full h-48 overflow-hidden rounded-[20px] mb-5">
                          <img 
                            src={imageUrl} 
                            alt={f.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                          />
                        </div>
                        
                        <div className="flex flex-col flex-grow items-center text-center px-2">
                          <h3 className="font-heading font-bold text-xl text-slate-900 mb-3 group-hover:text-[#1f638b] transition-colors">
                            {f.title}
                          </h3>
                          <p className="text-[14px] text-slate-500 leading-relaxed mb-4 line-clamp-3">
                            {f.description}
                          </p>
                        </div>

                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="flex justify-center items-center gap-2 mt-4">
              {Array.from({ length: maxSlide + 1 }).map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setCurrentSlide(dotIdx)}
                  className={`h-2.5 rounded-full transition-all duration-500 ${
                    currentSlide === dotIdx 
                      ? "w-8 bg-[#1f638b]" 
                      : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                />
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Cube Empowering Businesses Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="order-1 lg:order-1 lg:pr-8">
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900 leading-tight mb-6">
              Cube Software: Empowering Businesses with <span className="text-blue-600">{service.title}</span>
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed text-justify">
                Introducing Cube Software's revolutionary unified omnichannel solution for {service.title} — the ultimate breakthrough in business communication. Say goodbye to operational hassles and embrace a seamless experience that allows you to focus entirely on your customers.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed text-justify">
                This cutting-edge technology empowers your team to provide exceptional customer service, vastly improve agent productivity, and effortlessly explore new growth opportunities across your entire contact center operation.
              </p>
            </div>
            <div className="mt-8">
              <Link to="/#contact">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-12 rounded-md shadow-md transition-colors">
                  Discover {service.title}
                </Button>
              </Link>
            </div>
          </div>

          {/* UPDATED: Changed h-[500px] w-[90%] to w-full aspect-video to stop image cropping */}
          <div className="relative w-full aspect-video flex items-center justify-center order-2 lg:order-2 mt-10 lg:mt-0">
            <div className="absolute inset-0 bg-blue-600 rounded-tr-[120px] rounded-bl-[120px] rounded-tl-3xl rounded-br-3xl transform rotate-3 opacity-90 shadow-2xl"></div>
            <div className="absolute inset-0 bg-blue-400 rounded-tr-[120px] rounded-bl-[120px] rounded-tl-3xl rounded-br-3xl transform -rotate-3 opacity-30"></div>

            <div className="relative w-full h-full overflow-hidden rounded-tr-[120px] rounded-bl-[120px] rounded-tl-3xl rounded-br-3xl border-[6px] border-white shadow-inner">
              <img
                src="/cube-image-g.png"
                alt="Cube Customer Support Agent"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-8 -right-4 lg:-right-8 bg-white py-3 px-5 rounded-2xl shadow-xl flex items-center gap-3 z-20 border border-slate-100"
            >
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                <MessageSquare size={20} />
              </div>
              <div className="text-[13px] font-bold text-slate-800 leading-tight">
                Hi! How can I assist<br/><span className="font-semibold text-slate-500">you today?</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [6, -6, 6] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-10 -left-4 lg:-left-8 bg-white py-3 px-5 rounded-2xl shadow-xl flex items-center gap-3 z-20 border border-slate-100"
            >
              <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 shrink-0">
                <PhoneCall size={20} />
              </div>
              <div className="text-[13px] font-bold text-slate-800 leading-tight">
                We are happy<br/><span className="font-semibold text-slate-500">to help you.</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 left-8 bg-amber-400 py-3 px-5 rounded-xl shadow-lg z-20 border-2 border-white"
            >
              <div className="text-sm font-black text-slate-900 text-center leading-tight">
                Premium Cloud<br/>Solutions
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Benefits + Use cases */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-14">
          <div>
            <div className="text-blue-700 text-xs font-bold tracking-[0.2em] uppercase mb-3">— Business Benefits</div>
            <h2 className="font-heading font-black text-3xl tracking-tight text-slate-900 leading-tight">
              Why businesses choose it
            </h2>
            <ul className="mt-8 space-y-4">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-slate-700">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={14} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-blue-700 text-xs font-bold tracking-[0.2em] uppercase mb-3">— Use Cases</div>
            <h2 className="font-heading font-black text-3xl tracking-tight text-slate-900 leading-tight">
              Perfect for
            </h2>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {service.useCases.map((u, i) => (
                <div key={u} className="rounded-xl border border-slate-200 bg-white p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <div className="font-heading font-black text-2xl text-blue-200">{String(i + 1).padStart(2, "0")}</div>
                  <div className="mt-2 font-semibold text-slate-800 text-sm">{u}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-16 bg-[#0A1F44]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight">
              Ready to deploy {service.title}?
            </h2>
            <p className="mt-3 text-blue-200 max-w-xl">
              Talk to our telephony experts and get a tailored demo for your business within 24 hours.
            </p>
          </div>
          <Link className="shrink-0" to="/#contact">
            <Button className="bg-blue-600 hover:bg-blue-500 text-white px-9 h-12 rounded-md shadow-lg transition-transform hover:-translate-y-0.5" size="lg">
              Book a Free Demo <ArrowRight className="ml-1.5" size={16} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Explore Other Services Grid */}
      <section className="py-24 bg-white overflow-hidden border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-14"
          >
            <h2 className="font-heading font-black text-4xl sm:text-5xl tracking-tight text-slate-900">
              Our Services
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICE_ORDER.filter(key => {
              const title = SERVICES[key]?.title || "";
              return !title.includes("SIP Trunking") && !title.includes("CRM") && !title.includes("Cloud PBX");
            }).map((key, i) => {
              const srv = SERVICES[key];
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                  className="bg-white rounded-[20px] border border-slate-100 shadow-[0_4px_24px_rgba(0,0,0,0.06)] p-5 flex flex-col justify-between group hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-500 cursor-pointer"
                >
                  <div>
                    <div className="w-full h-[200px] overflow-hidden rounded-xl mb-6 relative border border-slate-50">
                      <img 
                        src={srv.heroImage} 
                        alt={srv.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                    </div>
                    
                    <div className="flex flex-col items-center text-center px-2">
                      <h3 className="font-heading font-bold text-xl text-slate-900 mb-3 transition-colors group-hover:text-[#1f638b]">
                        {srv.title}
                      </h3>
                      <p className="text-sm text-slate-600 mb-6 line-clamp-3 leading-relaxed">
                        {srv.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="w-full flex justify-center pt-2">
                    <Link to={`/services/${key}`}>
                      <Button className="bg-[#1f638b] hover:bg-[#13425e] text-white px-8 h-10 rounded-lg shadow-sm transition-colors font-medium">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default ServicePage;