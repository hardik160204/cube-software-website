// Mock data for Cube Software website (frontend-only for now)
// All of this will later be served/persisted by the backend where relevant.

export const IMAGES = {
  hero: "/cspl2main.jpg",
  /* "https://images.unsplash.com/photo-1766066014237-00645c74e9c6?auto=format&fit=crop&w=900&q=80", */
  dashboard: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  globalNumbers: "https://images.unsplash.com/photo-1684610529682-553625a1ffed?auto=format&fit=crop&w=1200&q=80",
  team: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
};

export const CONTACT_INFO = {
  expertLine: "+91 120 405 7109",
  usTollFree: "+1 (1111) 1111-11111",
  india: "+91 120 405 7109",
  uk: "+44 1234 1111111",
  email: "sales@cube-software.com",
  usOffice: "USA",
  indiaOffice: "A-26, Ground Floor, Sector 63, Noida, Uttar Pradesh 201301, India",
};

export const HERO = {
  badge: "Enhancing Communication Capabilities.",
  //titleLines: ["Smart. Scalable.", "Secure Cloud.", "Telephony."],
  titleLines: ["Smarter Calls. Stronger Connections. Enterprise Telephony"],
  accentIndex: 1,
  subtitle:
    "Power your business communication with Cube Quick Call dialers, voice logging and CRM-integrated telephony — engineered by Cube Software for teams of every size.",
  stats: [
    { value: "35+", label: "Years of CTI" },
    { value: "80%", label: "Optimize Cost" },
    { value: "98.5%", label: "Uptime SLA" },
  ],
  localNumbers: [
    { flag: "\uD83C\uDDFA\uD83C\uDDF8", number: "+1 (111) 111-1111" },
    { flag: "\uD83C\uDDEC\uD83C\uDDE7", number: "+44 20 111 1111" },
    { flag: "\uD83C\uDDEE\uD83C\uDDF3", number: "+91 22 1111 1111" },
  ],
  tollFree: [
    { flag: "\uD83C\uDDFA\uD83C\uDDF8", number: "+1 (800) 123-4567" },
    { flag: "\uD83C\uDDE8\uD83C\uDDE6", number: "+1 (888) 123-4567" },
    { flag: "\uD83C\uDDE6\uD83C\uDDFA", number: "1800 123 4567" },
  ],
  agentCard: { name: "Quick Support", number: "+91 80 68694747" },
};

export const FEATURES = [
  {
    icon: "Cloud",
    title: "Cloud-Based PBX",
    slug: "cloud-pbx",
    description:
      "Robust, scalable and feature-rich hosted PBX that keeps your phone system in the cloud with minimum capital expenditure.",
  },
  {
    icon: "Globe",
    title: "Global SIP Trunking",
    slug: "sip-trunking",
    description:
      "Reliable, cost-effective SIP trunking that connects your VoIP infrastructure to customers across 100+ countries.",
  },
  {
    icon: "ShieldCheck",
    title: "Enterprise Security",
    description:
      "Encrypted protocols, fraud monitoring and hardened infrastructure that protect every conversation your teams have.",
  },
  {
    icon: "Plug",
    title: "CRM & API Integration",
    description:
      "Plug into Salesforce, Freshdesk and your own apps through clean, well-documented APIs.",
  },
  {
    icon: "Headphones",
    title: "24/7 Support",
    description:
      "Never skip a beat. Secure 24/7 dedicated support for your critical business communications.",
  },
  {
    icon: "BrainCircuit",
    title: "AI Call Management",
    description:
      "AI that listens, routes, and scores. Elevate your team with smart routing, sentiment analysis, and automated QA.",
  },
];

export const WHY_ITEMS = [
  {
    icon: "CircleDollarSign",
    title: "Cut Costs by 80%",
    description:
      "Upgrade to cloud telephony and leave expensive legacy hardware behind.",
  },
  {
    icon: "Zap",
    title: "Plug-and-Play Setup",
    description:
      "Instant setup. Zero headaches",
  },
  {
    icon: "Route",
    title: "AI-Powered Routing",
    description:
      "Distribute calls intelligently with routing engines tuned by three decades of telephony expertise.",
  },
  {
    icon: "Settings2",
    title: "Built to Customise",
    description:
      "Shape the platform around your workflows — from IVR trees to wallboards, everything is configurable.",
  },
];

export const PRODUCTS = [
  {
    icon: "PhoneCall",
    title: "Quick Call Dialer",
    slug: "quick-call-dialer",
    description:
      "Inbound, outbound and blended dialers with ACD, IVR and predictive dialing — on-premise or hosted.",
  },
  {
    icon: "Mic",
    title: "Callisto Voice Logger",
    slug: "voice-logger",
    description:
      "Full-featured call recording across Analog, PRI and SIP with minimal storage and multiple formats.",
  },
  {
    icon: "Receipt",
    title: "Call Billing Software",
    slug: "call-billing",
    description:
      "Manage telecom resources and costs across offices, hotels, hospitals and housing societies.",
  },
  {
    icon: "MonitorPlay",
    title: "Screen Logger",
    slug: "screen-logger",
    description:
      "Next-generation multi-PC screen recording over the network for quality and compliance teams.",
  },
  {
    icon: "Voicemail",
    title: "Cube Voice Mail",
    slug: "voice-mail",
    description:
      "Exchange voice messages, deliver voice information and process transactions automatically.",
  },
  {
    icon: "AudioLines",
    title: "IVRS Services",
    slug: "ivrs",
    description:
      "Custom IVR built from scratch with modern software, databases and telecom signalling.",
  },
  {
    icon: "Radio",
    title: "Conference Bridge",
    slug: "conference-bridge",
    description:
      "Full audio conferencing that integrates seamlessly with your existing telephony stack.",
  },
  {
    icon: "DatabaseZap",
    title: "Voice Logger InSync",
    slug: "voice-logger-insync",
    description:
      "Centralise critical recording data from multiple locations into one synchronised archive.",
  },
];

export const INDUSTRIES = [
  {
    icon: "Headset",
    title: "BPO – KPO",
    description:
      "High-volume dialing, logging and monitoring built for outsourcing floors of every size.",
  },
  {
    icon: "Landmark",
    title: "Financial Services",
    description:
      "Compliant recording and secure telephony for banks, NBFCs and trading desks.",
  },
  {
    icon: "ConciergeBell",
    title: "Hospitality",
    description:
      "Innovative desk solutions for hotels, event centres, cruise lines and travel brands.",
  },
  {
    icon: "HeartPulse",
    title: "Healthcare",
    description:
      "Affordable patient-first communication suites for hospitals, labs and clinics.",
  },
  {
    icon: "Building2",
    title: "Real Estate",
    description:
      "Dialer, voice logger and CRM bundles tuned for property sales teams.",
  },
  {
    icon: "TowerControl",
    title: "Telecom",
    description:
      "Pioneers in telecom solutions since 1990 with home-grown software trusted worldwide.",
  },
];

export const CLIENTS = [
  "SIEMENS", "AVAYA", "MITEL", "NTPC", "KOTAK", "DLF", "FORTIS",
  "EASEMYTRIP", "EXTRAMARKS", "CORAL TELECOM", "FIDELITY", "IFFCO",
  "RELIANCE", "ARVATO", "HUDA", "BATRA GROUP",
];

export const TESTIMONIALS = [
  {
    quote:
      "Cube Software transformed our business communications, improving efficiency while significantly reducing operational costs.",
    name: "ABC.",
    role: "COO, Fintech Startup",
  },
  {
    quote:
      "Migration from our other dialer was seamless. Our agents are now productive from anywhere in the country.",
    name: "XYZ.",
    role: "Head of Contact Center",
  },
  {
    quote:
      "The dialer deployment and CRM integration have been flawless — and the 24/7 support team is outstanding.",
    name: "",
    role: "IT Director, Hospitality Group",
  },
];

export const FAQS = [
  {
    q: "What services does Cube Software provide?",
    a: "We offer a complete range of communication solutions including Cloud PBX, dialers (inbound/outbound/blended), voice loggers, screen loggers, IVRS, conference bridges, call billing software, voice mail systems, SIP trunking and CRM integrations.",
  },
  {
    q: "Which Citys do you support?",
    a: "We provide numbers and voice solutions across the India Bangaluru, Mumbai, Delhi, Gurugram, Noida, Ahemdabad, Puna in India and many more regions. along with 140 & 160 Lines as well.",
  },
  {
    q: "Can I get local and toll-free numbers?",
    a: "We provide local, national, international DID, toll-free, and vanity numbers to meet your business and market requirements.",
  },
  {
    q: "How quickly can numbers be activated?",
    a: "Most numbers are activated within minutes after verification and payment. Some states may require documentation based on local telecom regulations.",
  },
  {
    q: "Do you support call forwarding and IVR?",
    a: "Yes. Our platform supports IVR menus, smart call routing, call forwarding, time-based routing, ring groups, voicemail, call recording and auto attendants.",
  },
  {
    q: "Can your services work with my existing dialers or PBX?",
    a: "Yes. Our SIP trunking and VoIP solutions are compatible with most major PBX platforms including Asterisk, FreePBX, 3CX, Grandstream and Cisco systems.",
  },
  {
    q: "Do you provide CRM integrations?",
    a: "Yes. We integrate with popular CRMs and tools including custimized CRM, Salesforce, Freshdesk and custom applications through our APIs & CTI Connectors.",
  },
  {
    q: "Is your platform suitable for call centers?",
    a: "Yes. Our platform is built for BPOs, call centers, support teams, sales teams, and remote workforces, delivering high-quality calls, intelligent routing, and enterprise-grade scalability",
  },
   {
    q: "How do I get started?",
    a: "Getting started is easy. Contact our sales team or request a demo through our website. Our experts will help you choose the right solution based on your business needs, call volume, and future growth.",
  },
];

export const MARQUEE_ITEMS = [
  "Voice Without Limits.",
  "Connect More. Pay Less.",
  "35+ Years of Telephony Excellence.",
  "Enterprise Features. Small Business Pricing.",
  "Simply Better Telephony.",
];