import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Database, RefreshCw, Network, PhoneCall, UserCheck, 
  MousePointer, FileText, Monitor, Headset, Filter, 
  Layers, Key, GitMerge, Zap, Puzzle, Code, Settings, 
  ShieldCheck, Globe, Box, LifeBuoy, Link as LinkIcon 
} from "lucide-react";
import { Button } from "../components/ui/button";
import Navbar from "../components/Navbar";
import { Footer } from "../components/HomeSections2";

export default function CloudCrmIntegrationPage() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white text-slate-900 flex flex-col min-h-screen">
      
      {/* =========================================================
          SECTION 0: GLOBAL NAVBAR
          ========================================================= */}
      <Navbar />

{/* =========================================================
          SECTION 1: HERO SECTION 
          Description: Dark blue background (#0A1F44) with main 
          headlines and the static CRM Integration vector image.
          ========================================================= */}
      <section className="relative w-full pt-32 pb-20 lg:pt-40 lg:pb-12 overflow-hidden bg-[#0A1F44]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44] via-[#0A1F44] to-blue-900/40 z-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12">
          
          <div className="lg:w-1/2">
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              <span className="text-blue-400">CRM Integration</span>
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed mb-8 max-w-xl">
              Unify your communications and customer data. Connect your cloud telephony seamlessly with Salesforce, HubSpot, Zoho, and custom ERPs to empower your sales and support teams.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white px-8 h-12 rounded-md shadow-lg transition-transform hover:-translate-y-0.5">
                Explore Integrations
              </Button>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[500px]">
              {/* STATIC IMAGE PLACEHOLDER */}
              <img 
                src="/crm-integration-hero.svg" /* <-- Update this to your actual image filename */
                alt="CRM Integration" 
                className="w-full h-auto object-contain drop-shadow-2xl relative z-10 transition-transform lg:scale-105 lg:origin-right hover:scale-110 duration-700"
              />
            </div>
          </div>
          
        </div>
      </section>

{/* =========================================================
          CRM INTEGRATION SECTION
          ========================================================= */}
      <section className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* LEFT SIDE: The new SVG Image */}
          <div className="lg:w-1/2 flex justify-center w-full relative">
            {/* Optional subtle background glow to make the SVG pop */}
            <div className="absolute inset-0 bg-blue-50 rounded-full blur-3xl opacity-50 transform scale-75 pointer-events-none"></div>
            
            <img 
              src="/crm-integration-illustration.svg" /* <-- Update this to your actual SVG filename */
              alt="CRM Integration Telephony" 
              className="w-full max-w-[550px] h-auto object-contain relative z-10 transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* RIGHT SIDE: Text Content */}
          <div className="lg:w-1/2 w-full text-left">
            <h2 className="font-heading font-black text-4xl sm:text-5xl text-slate-900 leading-tight mb-8">
              Bridge the Gap Between <span className="text-blue-600">Calls</span> <br />
              <span className="text-blue-600 relative inline-block">
                & Data
              </span>
            </h2>
            
            <div className="space-y-6 text-[17px] text-slate-600 leading-relaxed">
              <p>
                CRM Integration connects your cloud telephony platform directly into your Customer Relationship Management software. Instead of agents manually toggling between a dialer and a database, everything happens in one unified interface.
              </p>
              <p>
                Every incoming call automatically fetches the caller's profile, every outgoing call can be made with a single click, and all call logs and recordings are instantly pushed back into the customer's CRM record.
              </p>
            </div>
          </div>

        </div>
      </section>
      {/* =========================================================
          SECTION 3: HOW DO BUSINESSES USE IT? 
          Description: Light blue background grid with 6 cards
          showing the main business use cases.
          ========================================================= */}
      <section className="py-20 bg-blue-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-blue-900 mb-4">
              How do <span className="text-blue-600">businesses</span> use CRM Sync?
            </h2>
            <div className="w-12 h-1 bg-green-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: MousePointer, title: "Click-to-Call", desc: "Eliminate manual dialing errors. Agents simply click a phone icon inside Salesforce or Zoho to instantly dial the customer." },
              { icon: Monitor, title: "Incoming Screen Pops", desc: "When a customer calls, their CRM profile instantly pops up on the agent's screen, providing full context before they say 'Hello'." },
              { icon: FileText, title: "Automated Call Logging", desc: "Say goodbye to manual data entry. Call duration, timestamps, and agent notes are automatically logged into the CRM." },
              { icon: Headset, title: "Helpdesk Ticket Creation", desc: "For support teams, a missed call or a specific IVR input can automatically generate a new ticket in Zendesk or Freshdesk." },
              { icon: Database, title: "Call Recording Sync", desc: "Access call recordings directly from the CRM timeline. Managers can review agent performance without switching platforms." },
              { icon: Filter, title: "Intelligent Call Routing", desc: "Query the CRM in real-time. If the caller is marked as 'VIP' or has an 'Open Ticket', route them directly to their dedicated account manager." }
            ].map((card, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <card.icon size={24} />
                  </div>
                  <h3 className="font-bold text-lg text-slate-800">{card.title}</h3>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 4: HOW IT WORKS 
          Description: Solid blue gradient background mapping the
          3-step process of integrating a CRM.
          ========================================================= */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-white mb-4">
              How It Works
            </h2>
            <div className="w-12 h-1 bg-green-400 rounded-full mx-auto"></div>
          </div>

          <div className="space-y-12">
            {[
              { step: 1, title: "Authenticate & Connect", desc: "Select your CRM from our marketplace and authenticate via OAuth or secure API keys with just a few clicks." },
              { step: 2, title: "Map Workflows & Triggers", desc: "Define what happens during a call. Choose to auto-create leads on missed calls or push call recordings upon completion." },
              { step: 3, title: "Real-Time Synchronization", desc: "Go live. Your agents can now work entirely inside the CRM interface while our cloud servers handle the telephony infrastructure in the background." }
            ].map((item, i) => (
              <div key={i} className={`flex flex-col ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 lg:gap-16`}>
                <div className="w-full md:w-1/2 flex justify-center">
                   <div className="w-48 h-48 bg-white/10 rounded-full flex items-center justify-center border-4 border-white/20 backdrop-blur-sm">
                      {i === 0 ? <Key size={64} className="text-white opacity-80" /> : i === 1 ? <GitMerge size={64} className="text-white opacity-80" /> : <Zap size={64} className="text-white opacity-80" />}
                   </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 bg-white text-blue-600 font-black rounded-full flex items-center justify-center text-xl shrink-0">
                        {item.step}
                      </div>
                      <h3 className="font-bold text-xl text-white">{item.title}</h3>
                    </div>
                    <p className="text-blue-100 leading-relaxed ml-14">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 5: KEY FEATURES
          Description: White background grid with 6 borderless 
          icons highlighting enterprise CRM features.
          ========================================================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-700 mb-4">
            Why choose our <span className="text-blue-600">Integration Architecture?</span>
          </h2>
          <div className="w-12 h-1 bg-green-500 rounded-full mx-auto mb-20"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 text-left">
            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <Puzzle size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Zero-Code Setup</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Connect natively to top CRMs like Salesforce, Zoho, and HubSpot without needing a developer to write a single line of code.
              </p>
            </div>

            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <Code size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Custom Webhooks</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Using a proprietary, in-house CRM? We provide robust webhooks and REST APIs to push real-time call events directly to your endpoint.
              </p>
            </div>

            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <Layers size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Bi-Directional Sync</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Information flows both ways. Telephony events update the CRM, while CRM data (like lead owner) dictates how telephony routes the call.
              </p>
            </div>

            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <Settings size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Custom Parameter Passing</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Pass customized fields, tags, and campaign identifiers from your dialer directly into specific custom fields within your CRM framework.
              </p>
            </div>

            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <ShieldCheck size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Enterprise Security</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                We utilize SSL/TLS encryption for all data transit between your CRM and our cloud telephony servers to ensure maximum data protection.
              </p>
            </div>

            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <Globe size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Browser Agnostic</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Our lightweight CTI (Computer Telephony Integration) pop-ups work perfectly across Chrome, Firefox, Edge, and Safari without heavy plugins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 6: SUPPORTED PLATFORMS
          Description: Grey background featuring the 3 core 
          integration types.
          ========================================================= */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-800 mb-4">
              Supported <span className="text-blue-600">Architectures</span>
            </h2>
            <div className="w-12 h-1 bg-green-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform cursor-pointer border border-slate-100 group">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <Box size={32} className="text-blue-600 group-hover:text-white" />
                </div>
                <h3 className="font-bold text-2xl text-slate-800 mb-4">Sales CRMs</h3>
                <p className="text-slate-600 leading-relaxed">
                  Native plug-and-play apps available for industry leaders including Salesforce, HubSpot, Zoho CRM, Pipedrive, and LeadSquared.
                </p>
             </div>

             <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform cursor-pointer border border-slate-100 group">
                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500 transition-colors">
                  <LifeBuoy size={32} className="text-green-600 group-hover:text-white" />
                </div>
                <h3 className="font-bold text-2xl text-slate-800 mb-4">Helpdesk Software</h3>
                <p className="text-slate-600 leading-relaxed">
                  Enhance your customer support. Deep integrations available for Zendesk, Freshdesk, Kapture, and Zoho Desk to automate ticket creation.
                </p>
             </div>

             <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform cursor-pointer border border-slate-100 group">
                <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
                  <Code size={32} className="text-purple-600 group-hover:text-white" />
                </div>
                <h3 className="font-bold text-2xl text-slate-800 mb-4">Custom ERP / APIs</h3>
                <p className="text-slate-600 leading-relaxed">
                  Have a proprietary software? Use our comprehensive developer documentation, REST APIs, and Webhooks to build your own seamless CTI integration.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 7: CALL TO ACTION (CTA)
          Description: Dark blue finishing block. End of Component.
          ========================================================= */}
      <section className="py-20 bg-[#0A1F44] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-white mb-6">
            Ready to unify your sales ecosystem?
          </h2>
          <p className="text-blue-200 text-lg mb-10 max-w-2xl mx-auto">
            Stop losing data between tabs. Integrate your cloud telephony with your CRM today to boost agent efficiency and capture every interaction.
          </p>
          <Button className="bg-[#10b981] hover:bg-[#059669] text-white px-10 h-14 rounded-full shadow-lg text-lg font-bold">
            Connect Your CRM Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}