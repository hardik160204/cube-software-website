// Detailed content for every service/product page

export const SERVICES = {
  "quick-call-dialer": {
    title: "Quick Call Dialer",
    tagline: "Get results with a powerful inbound, outbound and blended dialer with full call disposition.",
    heroImage: "https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&w=1920&q=80",
    stats: [
      { value: "3x", label: "Agent Productivity" },
      { value: "ACD/IVR/PD", label: "Complete Suite" },
      { value: "Hosted", label: "or On-Premise" },
    ],
    overview: [
      "Quick Call Dialer is Cube Software's flagship contact-center engine — a complete suite covering inbound ACD, outbound predictive/progressive/preview dialing and blended operations. Agents see customer context before they speak; supervisors see everything in real time.",
      "Available for both international and domestic operations, on-premise or fully hosted, the dialer ships with comprehensive modules including ACD, IVR, predictive dialing, call disposition, campaign management and quality monitoring — everything a modern contact center floor needs.",
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

export const SERVICE_ORDER = [
  "quick-call-dialer", "voice-logger", "call-billing", "screen-logger", "voice-mail", "ivrs", "conference-bridge", "voice-logger-insync",
];

export const ABOUT_IMAGE = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80";