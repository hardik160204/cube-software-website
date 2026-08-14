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
  // NEW ICONS FOR MODULES SECTION
  Headset, Bot, MousePointerClick, History, LineChart, UserCheck, PhoneOff, Inbox
} from "lucide-react";
import { Button } from "../components/ui/button";
import Navbar from "../components/Navbar";
import { Footer } from "../components/HomeSections2";

// --- HARDCODED SERVICES DATA ---
const SERVICES = {
  "cloud-contact-center": {
    title: "Contact Center Solution",
    tagline: "Get results with a powerful inbound, outbound and blended cloud contact center solution with full call disposition.",
    heroImage: "https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&w=1920&q=80",
    stats: [
      { value: "3x", label: "Agent Productivity" },
      { value: "ACD/IVR/PD", label: "Complete Suite" },
      { value: "Hosted", label: "or On-Premise" },
    ],
    overview: [
      "Cloud Contact Center Solution is Cube Software's flagship contact-center engine — a complete suite covering inbound ACD, outbound predictive/progressive/preview dialing and blended operations. Agents see customer context before they speak; supervisors see everything in real time.",
      "Available for both international and domestic operations, on-premise or fully hosted, the platform ships with comprehensive modules including ACD, IVR, predictive dialing, call disposition, campaign management and quality monitoring — everything a modern contact center floor needs.",
    ],
    features: [
      { icon: "PhoneOutgoing", title: "Predictive Dialing", description: "AI-paced dialing keeps agents talking, not waiting — with answering-machine detection." },
      { icon: "PhoneIncoming", title: "Intelligent ACD", description: "Skill-based, priority and least-idle routing for inbound queues." },
      { icon: "ListChecks", title: "Call Disposition", description: "Custom disposition trees, callbacks and lead recycling per campaign." },
      { icon: "LayoutDashboard", title: "Supervisor Wallboards", description: "Live monitoring, whisper, barge-in and force-logout controls." },
      { icon: "Database", title: "Campaign & Lead Manager", description: "Upload, filter, dedupe and pace lead lists with DNC scrubbing." },
      { icon: "Plug", title: "CRM Screen-Pop", description: "Native connectors for Salesforce and custom CRMs." },
    ],
    benefits: [
      "Triple outbound connect rates with predictive pacing",
      "Blend inbound and outbound on the same agent pool",
      "Comprehensive suite — ACD, IVR, PD in one licence",
      "Deploy on-premise or hosted, domestic or international",
      "Full recording and disposition audit trail",
      "Scales from 5-seat teams to 1,000-seat BPO floors",
    ],
    specs: ["Predictive / progressive / preview modes", "AMD & DNC compliance", "Real-time & historical reports", "Multi-campaign management", "WebRTC agent console", "Open REST APIs"],
    useCases: ["BPO & KPO floors", "Telesales and collections", "Customer support desks", "Political & survey campaigns"],
  },

  "voice-logger": {
    title: "Callisto Voice Logger",
    tagline: "The ideal call recording solution — every conversation captured, compressed and searchable.",
    heroImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1920&q=80",
    stats: [
      { value: "Analog/PRI/SIP", label: "All Protocols" },
      { value: "90%", label: "Storage Savings" },
      { value: "100%", label: "Call Capture" },
    ],
    overview: [
      "Callisto Voice Logger records every call across your organisation — analog lines, PRI trunks or SIP — with crystal clarity and minimal storage footprint. Recordings are indexed by date, extension, caller ID and disposition so any conversation is retrievable in seconds.",
      "Designed for compliance-heavy industries, Callisto supports multiple formats including VOX and MP3, tamper-evident archives, role-based playback permissions and automatic retention policies. It is the recording backbone trusted by banks, hospitals and contact centers for decades.",
    ],
    features: [
      { icon: "Mic", title: "Multi-Protocol Capture", description: "Record Analog, PRI, E1/T1 and SIP simultaneously on one server." },
      { icon: "FileAudio", title: "Multiple Formats", description: "VOX, MP3, WAV and more — tuned for quality vs. storage." },
      { icon: "Search", title: "Instant Retrieval", description: "Search by number, extension, time, duration or custom tags." },
      { icon: "HardDrive", title: "Minimal Storage", description: "Advanced compression stores years of audio on modest disks." },
      { icon: "Lock", title: "Tamper-Proof Archive", description: "Checksummed, encrypted recordings with full audit logs." },
      { icon: "Bell", title: "Live Monitoring & Alerts", description: "Listen live, flag calls and trigger alerts on keywords or silence." },
    ],
    benefits: [
      "Meet regulatory recording mandates effortlessly",
      "Resolve customer disputes with indisputable evidence",
      "Coach agents using real call examples",
      "Requires minimal storage space and hardware",
      "Scales from 4 to 1,000+ recording channels",
      "Integrates with dialer, CRM and quality tools",
    ],
    specs: ["4–1000+ channel capacity", "VOX / MP3 / WAV output", "AES-encrypted storage", "Web-based playback console", "Screen-logger pairing", "Auto archive & purge policies"],
    useCases: ["Banking & trading desks", "Emergency & helpline services", "Contact center QA", "Legal & compliance teams"],
  },

  "call-billing": {
    title: "Call Billing Software",
    tagline: "Take command of telecom resources and costs across every office, hotel and facility.",
    heroImage: "https://images.unsplash.com/photo-1611125832047-1d7ad1e8e48f?auto=format&fit=crop&w=1920&q=80",
    stats: [
      { value: "30%", label: "Avg. Cost Recovery" },
      { value: "Any PBX", label: "CDR Compatible" },
      { value: "Auto", label: "Invoice Generation" },
    ],
    overview: [
      "Cube Telephone Billing System helps organisations manage telecom resources and costs at offices, factories, hotels, hospitals and housing societies. It collects call detail records from your PBX, applies your tariff plans and produces accurate, auditable bills — automatically.",
      "Spot misuse, allocate costs to departments or rooms, recover charges from guests and tenants, and negotiate better carrier deals armed with hard usage data. Budgets, alerts and scheduled reports keep finance in control without spreadsheets.",
    ],
    features: [
      { icon: "Receipt", title: "Automated Billing", description: "Generate department, room or tenant bills on any schedule." },
      { icon: "Percent", title: "Flexible Tariff Plans", description: "Carrier rates, markups, slabs and free-unit rules per extension." },
      { icon: "Building", title: "Multi-Site Consolidation", description: "Merge CDRs from every branch PBX into one billing view." },
      { icon: "AlertTriangle", title: "Misuse Detection", description: "Alerts on premium numbers, long calls and after-hours usage." },
      { icon: "FileSpreadsheet", title: "Rich Reporting", description: "Cost by department, trunk utilisation and trend analysis." },
      { icon: "Plug", title: "PBX Agnostic", description: "Parses CDRs from Avaya, Siemens, Cisco, Panasonic, NEC and more." },
    ],
    benefits: [
      "Recover telecom costs from guests, tenants and projects",
      "Slash bill-processing time from days to minutes",
      "Identify and eliminate telephone misuse",
      "Accurate budgeting with historical trend data",
      "Works with hotels' PMS for instant guest checkout",
      "Full audit trail for finance compliance",
    ],
    specs: ["Serial / IP CDR collection", "Multi-currency tariffs", "PMS integration (hotels)", "Scheduled email reports", "Unlimited extensions", "Export to Excel / PDF"],
    useCases: ["Hotels & resorts", "Hospitals & campuses", "Corporate offices & factories", "Housing societies"],
  },

  "screen-logger": {
    title: "Screen Logger",
    tagline: "Next-generation multi-PC screen recording over the network — see what your customers experienced.",
    heroImage: "https://images.unsplash.com/photo-1551739440-5dd934d3a94a?auto=format&fit=crop&w=1920&q=80",
    stats: [
      { value: "Multi-PC", label: "Network Recording" },
      { value: "Synced", label: "With Voice Logs" },
      { value: "Low", label: "Bandwidth Use" },
    ],
    overview: [
      "Cube Screen Logger is the industry's next-generation software solution for recording multiple PC screens across a network. Paired with the Callisto Voice Logger, it replays exactly what an agent saw and did while a call was in progress — the complete interaction, not just the audio.",
      "Quality teams use it to audit process compliance, trainers use it to build real-world coaching material, and security teams use it to investigate incidents. Recording is triggered automatically by call events or schedules, and consumes minimal bandwidth and storage.",
    ],
    features: [
      { icon: "MonitorPlay", title: "Multi-Screen Capture", description: "Record dozens of workstations simultaneously over LAN/WAN." },
      { icon: "Link2", title: "Voice-Screen Sync", description: "Replay screen video perfectly aligned with call audio." },
      { icon: "CalendarClock", title: "Event & Schedule Triggers", description: "Start recording on call connect, app launch or timetable." },
      { icon: "Gauge", title: "Efficient Codec", description: "Smart compression keeps bandwidth and disk usage tiny." },
      { icon: "Search", title: "Indexed Playback", description: "Find sessions by agent, time, call ID or campaign." },
      { icon: "Lock", title: "Access Controls", description: "Role-based playback rights with complete audit logging." },
    ],
    benefits: [
      "Audit the full interaction — voice plus screen",
      "Build powerful, real-example training libraries",
      "Prove process compliance to auditors and clients",
      "Deter data leakage on sensitive floors",
      "Minimal footprint on agent PCs",
      "Central web console for QA teams",
    ],
    specs: ["Windows agent capture", "Central storage server", "Motion-optimised compression", "Multi-monitor support", "Voice-logger pairing", "AD/LDAP authentication"],
    useCases: ["Contact center QA", "Banking process audits", "BPO client compliance", "Training & onboarding"],
  },

  "voice-mail": {
    title: "Cube Voice Mail",
    tagline: "Never miss a message — exchange, deliver and process voice messages automatically.",
    heroImage: "https://images.unsplash.com/photo-1592890288564-76628a30a657?auto=format&fit=crop&w=1920&q=80",
    stats: [
      { value: "24/7", label: "Message Capture" },
      { value: "Email", label: "Delivery Built-in" },
      { value: "Multi-Lang", label: "Prompts" },
    ],
    overview: [
      "Cube Voice Mail is a computer-based system that lets users and subscribers exchange personal voice messages, select and deliver voice information, and process transactions by phone. Every caller gets answered — even at 3 a.m. on a holiday.",
      "Personal greetings, password-protected mailboxes, message forwarding and voicemail-to-email keep teams responsive. Broadcast lists deliver announcements to hundreds of mailboxes at once, while IVR hooks let callers act on information, not just leave messages.",
    ],
    features: [
      { icon: "Voicemail", title: "Personal Mailboxes", description: "Private, PIN-protected boxes with custom greetings per user." },
      { icon: "Mail", title: "Voicemail-to-Email", description: "Messages arrive in inboxes as audio attachments instantly." },
      { icon: "Forward", title: "Forward & Broadcast", description: "Route messages to colleagues or blast announcements to groups." },
      { icon: "Clock", title: "Time-Based Greetings", description: "Different greetings for office hours, nights and holidays." },
      { icon: "Languages", title: "Multi-Language Prompts", description: "Serve callers in the language they prefer." },
      { icon: "Plug", title: "PBX Integration", description: "Message-waiting lamps and dial-in access on any major PBX." },
    ],
    benefits: [
      "Capture every after-hours and overflow call",
      "Respond faster with email-delivered messages",
      "Professional image with custom greetings",
      "Reduce receptionist load dramatically",
      "Process simple transactions without agents",
      "Scales to thousands of mailboxes",
    ],
    specs: ["Analog / PRI / SIP interfaces", "MP3/WAV attachments", "Web admin console", "Message retention policies", "MWI lamp support", "IVR transaction hooks"],
    useCases: ["Corporate reception overflow", "After-hours support lines", "Hotels & hospitals", "Employee broadcast systems"],
  },

  ivrs: {
    title: "IVRS Services",
    tagline: "Custom IVR solutions built from scratch with the latest software, database and telecom technologies.",
    heroImage: "https://images.unsplash.com/photo-1525598912003-663126343e1f?auto=format&fit=crop&w=1920&q=80",
    stats: [
      { value: "70%", label: "Calls Self-Served" },
      { value: "Custom", label: "Built for You" },
      { value: "DB-Live", label: "Data Integration" },
    ],
    overview: [
      "We build IVR solutions from the ground up using modern software, database technologies and telecom signalling methodologies — not cookie-cutter menus. Your IVR speaks to your actual databases, so callers hear live balances, order status and appointment slots, not canned messages.",
      "From simple auto-attendants to multi-level transactional IVRs with payment capture, outbound reminder blasts and speech input, Cube designs, records, deploys and maintains the entire flow — on-premise or hosted.",
    ],
    features: [
      { icon: "AudioLines", title: "Custom Call Flows", description: "Menus designed around your process — unlimited levels and branches." },
      { icon: "Database", title: "Live Database Lookups", description: "Read and write to SQL/ERP systems mid-call for real answers." },
      { icon: "MessageSquare", title: "Speech & DTMF Input", description: "Callers speak or key in choices — both handled natively." },
      { icon: "PhoneOutgoing", title: "Outbound IVR Blasts", description: "Automated reminders, alerts and surveys at scale." },
      { icon: "Languages", title: "Multi-Language Voice", description: "Professional prompt recording in the languages you need." },
      { icon: "BarChart3", title: "Flow Analytics", description: "See where callers drop, transfer or self-serve to keep improving." },
    ],
    benefits: [
      "Deflect up to 70% of routine calls from agents",
      "Serve customers 24/7 without extra headcount",
      "Consistent, professional caller experience",
      "Built from scratch — fits your exact process",
      "Integrates with dialer, CRM and billing systems",
      "Domestic and international deployment options",
    ],
    specs: ["Analog / PRI / SIP channels", "TTS & professional prompts", "SQL / REST integrations", "Payment gateway hooks", "Call-back scheduling", "Detailed flow reporting"],
    useCases: ["Bank balance & OTP lines", "Order & delivery status", "Appointment reminders", "Government helplines"],
  },

  "conference-bridge": {
    title: "Conference Bridge",
    tagline: "Full audio conferencing that integrates seamlessly with your existing telephony stack.",
    heroImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1920&q=80",
    stats: [
      { value: "100s", label: "Participants" },
      { value: "PIN", label: "Secured Rooms" },
      { value: "Rec", label: "Every Session" },
    ],
    overview: [
      "Cube Conference Bridge provides full audio conferencing as a software component that integrates with your PBX or SIP infrastructure. Host scheduled or ad-hoc conferences with hundreds of participants dialing in from anywhere — no per-minute fees to third-party services.",
      "Moderator controls, entry announcements, mute-all, lecture mode and automatic recording make it ideal for board meetings, investor calls, training sessions and daily stand-ups across branches.",
    ],
    features: [
      { icon: "Radio", title: "Unlimited Rooms", description: "Run many simultaneous conferences with individual PINs." },
      { icon: "UserCog", title: "Moderator Controls", description: "Mute, eject, lock room, lecture mode and roll call." },
      { icon: "CalendarClock", title: "Scheduled & Ad-hoc", description: "Book recurring calls or spin up a bridge instantly." },
      { icon: "Disc", title: "Auto Recording", description: "Every conference archived and shareable in one click." },
      { icon: "Bell", title: "Entry/Exit Tones", description: "Name announcements and participant count on join." },
      { icon: "Plug", title: "PBX/SIP Integration", description: "Slots into your existing Cube PBX or third-party system." },
    ],
    benefits: [
      "Eliminate recurring third-party conferencing fees",
      "Keep sensitive calls on your own infrastructure",
      "Join from any phone — no apps required",
      "Archive every meeting automatically",
      "Scales to hundreds of concurrent participants",
      "Works with existing DID numbers",
    ],
    specs: ["SIP / PRI dial-in", "PIN & host authentication", "MP3 session recording", "Web-based scheduling", "Talker detection", "CDR & attendance reports"],
    useCases: ["Board & investor calls", "Multi-branch stand-ups", "Training webinars (audio)", "Crisis coordination lines"],
  },

  "voice-logger-insync": {
    title: "Voice Logger InSync",
    tagline: "Centralise critical recording data from every location into one synchronised archive.",
    heroImage: "https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?auto=format&fit=crop&w=1920&q=80",
    stats: [
      { value: "Multi-Site", label: "Consolidation" },
      { value: "Auto", label: "Sync Engine" },
      { value: "1 View", label: "Central Search" },
    ],
    overview: [
      "Cube application products such as Voice Logger, Voice Mail, Fax Server and Call Accounting generate and store large volumes of critical data. When large corporates run these products at multiple locations, that data lives in silos — until InSync.",
      "Voice Logger InSync automatically replicates recordings and metadata from every branch to a central repository, giving head-office compliance and QA teams a single searchable window across the whole enterprise, with bandwidth-friendly scheduled synchronisation.",
    ],
    features: [
      { icon: "DatabaseZap", title: "Automated Replication", description: "Branch recordings sync to HQ on schedules you define." },
      { icon: "Search", title: "Central Search", description: "One query across every location, extension and date range." },
      { icon: "Gauge", title: "Bandwidth Throttling", description: "Off-peak sync windows protect branch connectivity." },
      { icon: "ShieldCheck", title: "Integrity Verification", description: "Checksums guarantee nothing is lost or altered in transit." },
      { icon: "Layers", title: "Multi-Product Support", description: "Syncs voice logs, voicemail, fax and accounting data." },
      { icon: "BarChart3", title: "Enterprise Dashboards", description: "Consolidated compliance and usage reporting for HQ." },
    ],
    benefits: [
      "Single source of truth for all branch recordings",
      "Faster compliance responses — no branch phone calls",
      "Disaster-proof: central copy survives branch failures",
      "Efficient use of WAN links with scheduled sync",
      "Uniform retention policy across the enterprise",
      "Scales with unlimited branch nodes",
    ],
    specs: ["Store-and-forward engine", "Delta synchronisation", "AES transport encryption", "Central web console", "Retention policy engine", "Branch health monitoring"],
    useCases: ["Multi-branch banks", "Insurance networks", "Retail chain call desks", "Government departments"],
  },
};

const SERVICE_ORDER = [
  "cloud-contact-center", "voice-logger", "call-billing", "screen-logger", "voice-mail", "ivrs", "conference-bridge", "voice-logger-insync",
];

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

          {/* Horizontally Scrolling Cards Container - ADDED items-stretch TO FIX ALIGNMENT */}
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
    <div className="bg-green text-slate-900">
      <Navbar/>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0A1F44]">
        
        {/* --- NEW VIDEO BACKGROUND --- */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-half object-cover z-11"
        >
          <source src="/contact-center-bg.mp4" type="video/mp4" />
        </video>

        {/* OVERLAY GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44]/55 via-[#0A1F44]/50 to-[#0A1F44]/25 z-10" />
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 pt-44 pb-24">
          <nav className="flex items-center gap-1.5 text-xs text-blue-200 mb-6">
            <Link className="hover:text-white transition-colors" to="/">Home</Link>
            <ChevronRight size={13} />
            <span className="text-blue-300">Services</span>
            <ChevronRight size={13} />
            <span className="text-white font-semibold">{service.title}</span>
          </nav>
          <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight max-w-4xl leading-[1.05] animate-fade-up">
            {service.title}
          </h1>
          <p className="mt-5 text-lg text-blue-100 max-w-2xl leading-relaxed text-justify animate-fade-up">{service.tagline}</p>
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
          
          {/* STATS BLOCK - LEFT ALIGNED */}
          <div className="mt-12 flex flex-wrap justify-start gap-0 divide-x divide-white/15 animate-fade-up w-full">
            {service.stats.map((s, i) => (
              <div key={s.label} className={`text-left ${i === 0 ? "pr-8" : "px-8"}`}>
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
            <h2 className="font-heading font-bold text-3xl sm:text-3xl text-slate-900 leading-snug mb-5">
              The Intelligence Behind Modern <span className="text-blue-600">{service.title}</span>
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
      <section className="pt-24 pb-12 bg-[#FAFAFA] overflow-hidden relative">
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
                          <p className="text-[14px] text-slate-500 leading-relaxed text-justify mb-4 line-clamp-3">
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

      {/* Migrated "Empowering business-critical..." Section */}
      <section className="pb-24 pt-12 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-blue-700 text-xs font-bold tracking-[0.2em] uppercase mb-3">— Key Features</div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl tracking-tight text-slate-900 leading-tight max-w-3xl">
            Empowering business-critical communications with reliability, security, and scalability.
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl text-justify">
            One unified platform for Voice, Screen-Recording, Chat, and CRM, built for enterprise-grade performance and scalability.
          </p>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ENTERPRISE_FEATURES.map((f, i) => {
              const Icon = ICONS[f.icon];
              const accent = ["blue", "red", "amber", "blue"][i % 4];
              const accents = {
                blue: "bg-blue-50 text-blue-700 group-hover:bg-blue-700",
                red: "bg-red-50 text-red-600 group-hover:bg-red-600",
                amber: "bg-amber-50 text-amber-500 group-hover:bg-amber-500",
              };
              
              return (
                <div key={f.title} className="group bg-white rounded-2xl border border-slate-100 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 group-hover:text-white ${accents[accent]}`}>
                    {Icon && <Icon size={22} />}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed text-justify">{f.description}</p>
                </div>
              );
            })}
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
                <li key={b} className="flex items-start gap-3 text-slate-700 text-justify">
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
                  <div className="mt-2 font-semibold text-slate-800 text-sm text-justify">{u}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- NEW SECTION: SCROLLING MODULES SPECIFIC TO CLOUD CONTACT CENTER --- */}
      {slug === "cloud-contact-center" && <ContactCenterModules />}

      {/* Cube Empowering Businesses Section */}
      <section className="py-24 bg-white overflow-hidden border-t border-slate-200">
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

      {/* CTA banner */}
      <section className="py-16 bg-[#0A1F44]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight">
              Ready to deploy {service.title}?
            </h2>
            <p className="mt-3 text-blue-200 max-w-xl text-justify">
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
              Our Products
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
                      <p className="text-sm text-slate-600 mb-6 line-clamp-3 leading-relaxed text-justify">
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