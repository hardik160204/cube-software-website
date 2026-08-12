// constants/testIds/ — central registry of data-testid values used by the
// end-to-end testing agent (qabot) to locate and interact with UI elements
// during automated tests. UI without testids cannot be automatically verified.
//
// Structure: each feature lives in its own file (auth.js, cart.js, ...) and
// is re-exported from here, so consumers can do a single import like
// `import { LOGIN, CART } from '@/constants/testIds'` (or relative).
//
// Adding a new feature:
//   1. Create constants/testIds/<feature>.js
//   2. Export named objects (e.g. `export const PROFILE = { ... }`)
//   3. Re-export here: `export * from './<feature>';`

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
  { label: "Products", href: "#products" },
  { label: "Industries", href: "#industries" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export * from './home';