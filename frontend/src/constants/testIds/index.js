export * from './auth';
export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Cloud Contact Center Solution", href: "/services/cloud-contact-center" },
      { label: "India SIP Channels", href: "/services/sip-trunking" },
      { label: "Cloud Contact Centre", href: "/services/cloud-pbx" },
      { label: "Callisto Voice Logger", href: "/services/voice-logger" },
      { label: "CRM", href: "/services/crm" },
      { label: "Call Billing Software", href: "/services/call-billing" },
      { label: "Screen Logger", href: "/services/screen-logger" },
      { label: "Cube Voice Mail", href: "/services/voice-mail" },
      { label: "IVRS Services", href: "/services/ivrs" },
      { label: "Conference Bridge", href: "/services/conference-bridge" },
      { label: "Voice Logger InSync", href: "/services/voice-logger-insync" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" }, // <--- ADD THIS LINK
  { label: "Products", href: "#products" },
  { label: "Industries", href: "#industries" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export * from './home';