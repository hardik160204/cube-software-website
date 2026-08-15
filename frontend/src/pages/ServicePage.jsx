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
  AtSign, Laptop, Briefcase, Phone, AppWindow, Headphones, BrainCircuit,
  Headset, Bot, MousePointerClick, History, LineChart, UserCheck, PhoneOff, Inbox
} from "lucide-react";
import { Button } from "../components/ui/button";
import Navbar from "../components/Navbar";
import { Footer } from "../components/HomeSections2";

// --- HARDCODED SERVICES DATA ---
// All services have been successfully migrated to their own standalone pages!
const SERVICES = {};

const SERVICE_ORDER = [];

const FEATURE_IMAGES = [
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80", 
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80", 
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80", 
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80", 
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80", 
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80", 
];

const ENTERPRISE_FEATURES = [
  { icon: "ShieldCheck", title: "Enterprise Security", description: "Encrypted protocols, fraud monitoring and hardened infrastructure that protect every conversation your teams have." },
  { icon: "Plug", title: "CRM & API Integration", description: "Plug into Salesforce, Freshdesk and your own apps through clean, well-documented APIs." },
  { icon: "Headphones", title: "24/7 Support", description: "Never skip a beat. Secure 24/7 dedicated support for your critical business communications." },
  { icon: "BrainCircuit", title: "AI Call Management", description: "AI that listens, routes, and scores. Elevate your team with smart routing, sentiment analysis, and automated QA." },
];

const ICONS = {
  Cloud, Globe, ShieldCheck, Plug, Headphones, BrainCircuit,
  PhoneOutgoing, PhoneIncoming, ListChecks, LayoutDashboard, Database,
  Mic, FileAudio, Search, HardDrive, Lock, Bell, Receipt, Percent, Building,
  AlertTriangle, FileSpreadsheet, MonitorPlay, Link2, CalendarClock, Gauge,
  Voicemail, Mail, Forward, Clock, Languages, AudioLines, MessageSquare,
  Radio, UserCog, Disc, DatabaseZap, Layers
};

// Fallback dummy icons to prevent breaking if Lucide lacks exact names
const FileText = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>;
const Settings = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>;

// --- NEW MODULES DATA ---
const MODULES_DATA = [
  {
    id: "inbound",
    iconColor: "text-orange-500",
    icon: Headset,
    title: "Inbound Communication",
    items: [
      { text: "Multi-level IVR for structured call handling", icon: GitBranch },
      { text: "Toll-free numbers and virtual numbers for customer access", icon: Phone },
      { text: "Missed call services with automated response workflows", icon: PhoneOff },
      { text: "Skill-based routing, queue management, and call recordings", icon: LineChart },
      { text: "Sticky agent routing for repeat callers", icon: UserCheck },
      { text: "Softphone for browser-based call handling", icon: Mic }
    ]
  },
  {
    id: "outbound",
    iconColor: "text-blue-600",
    icon: Megaphone,
    title: "Outbound Communication & Campaigns",
    items: [
      { text: "Auto dialer with predictive, progressive, and preview dialing", icon: PhoneOutgoing },
      { text: "Click-to-call from CRM and business applications", icon: MousePointerClick },
      { text: "Voice broadcast for bulk outbound communication", icon: Radio },
      { text: "Campaign management with retry and follow-up logic", icon: BarChart3 },
      { text: "Lead distribution and outbound workflow control", icon: Users },
      { text: "True caller integration for verified outbound identity", icon: ShieldCheck }
    ]
  },
  {
    id: "messaging",
    iconColor: "text-emerald-500",
    icon: MessageSquare,
    title: "Messaging & Omnichannel Interaction Handling",
    items: [
      { text: "SMS and RCS-based customer communication", icon: MessageSquare },
      { text: "WhatsApp Business API for conversational messaging", icon: MessageSquare },
      { text: "Unified inbox for managing chat and messaging channels", icon: Inbox },
      { text: "Conversation history and context tracking across channels", icon: History },
      { text: "Template-based messaging and quick replies", icon: FileText },
      { text: "Cross-channel interaction visibility for agents", icon: Globe }
    ]
  },
  {
    id: "ai",
    iconColor: "text-amber-500",
    icon: Bot,
    title: "Artificial Intelligence & Automation",
    items: [
      { text: "AI voice bot for automated inbound interactions", icon: Mic },
      { text: "AI-powered call transcription and summarization", icon: FileAudio },
      { text: "Post-call analysis with conversation insights and trends", icon: LineChart },
      { text: "Workflow automation for routing, follow-ups, and task triggers", icon: Settings },
      { text: "Rule-based interaction handling and escalation logic", icon: GitBranch },
      { text: "Performance insights for agents and contact center operations", icon: BarChart3 }
    ]
  }
];

// --- NEW COMPONENT: SCROLLING MODULES SECTION ---
const ContactCenterModules = () => {
  return (
    <section className="py-24 bg-[#FAFAFA] border-t border-slate-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-start">
          
          {/* Sticky Left Title */}
          <div className="lg:w-[35%] lg:sticky lg:top-32 shrink-0 z-10">
            <h2 className="font-heading font-black text-4xl sm:text-5xl text-slate-900 leading-[1.15] tracking-tight">
              Contact Center Modules for End-to-End Business Communication
            </h2>
          </div>

          {/* Horizontally Scrolling Cards Container */}
          <div className="lg:w-[65%] flex items-stretch overflow-x-auto gap-6 pb-12 pt-4 px-4 -mx-4 lg:px-4 lg:-mx-4 snap-x snap-mandatory [scrollbar-width:thin] [scrollbar-color:#cbd5e1_transparent] [&::-webkit-scrollbar]:h-2.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-thumb]:rounded-full">
            
            {MODULES_DATA.map((module, index) => (
              <div 
                key={module.id} 
                className="min-w-[320px] max-w-[320px] md:min-w-[400px] md:max-w-[400px] shrink-0 snap-center bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-shadow duration-300"
              >
                {/* Icon Header */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-slate-50 ${module.iconColor}`}>
                  <module.icon strokeWidth={2} size={28} />
                </div>
                
                {/* Title */}
                <h3 className="font-heading font-bold text-[22px] text-slate-900 mb-8 leading-snug">
                  {module.title}
                </h3>
                
                {/* List Items */}
                <ul className="flex flex-col gap-5 flex-grow">
                  {module.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`mt-0.5 shrink-0 ${module.iconColor}`}>
                        <item.icon size={18} strokeWidth={2.5} />
                      </div>
                      <span className="text-[15px] text-slate-600 font-medium leading-relaxed">
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            
            {/* Empty padding element so the last card can scroll fully into view */}
            <div className="min-w-[20px] shrink-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};


const ServicePage = () => {
  const { slug } = useParams();
  const service = SERVICES[slug];
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

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

  // If the service isn't found (because they've all been migrated), safely redirect to home
  if (!service) return <Navigate replace to="/"/>;

  const totalFeatures = service.features?.length || 0;
  const maxSlide = Math.max(0, totalFeatures - cardsToShow);

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
      
      {/* 
        This is kept purely as a fallback shell in case any orphaned routes exist. 
        It will immediately redirect via the Navigate tag above because 'SERVICES' is empty.
      */}
      
      <Footer/>
    </div>
  );
};

export default ServicePage;