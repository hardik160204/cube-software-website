import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  PhoneCall, Globe, Headset, CheckCircle2, ShoppingCart, 
  LifeBuoy, MessageSquare, Network, Smartphone, Star, 
  GitMerge, Mic, LineChart, Database, ShieldCheck, MapPin, 
  PhoneIncoming, Users
} from "lucide-react";
import { Button } from "../components/ui/button";
import Navbar from "../components/Navbar";
import { Footer } from "../components/HomeSections2";

export default function CloudTollFreeNumberPage() {
  
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
          headlines and the animated 1800 Vector graphic.
          ========================================================= */}
      <section className="relative w-full pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#0A1F44]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44] via-[#0A1F44] to-blue-900/40 z-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12">
          
          <div className="lg:w-1/2">
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              <br/><span className="text-blue-400">Toll Free Numbers</span>
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed mb-8 max-w-xl">
              Build a premium brand image and enhance customer satisfaction. Provide your callers with a free, memorable 1800 number integrated directly with our cloud telephony suite.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#10b981] hover:bg-[#059669] text-white px-8 h-12 rounded-full shadow-lg transition-transform hover:-translate-y-0.5 text-lg font-bold">
                Get Your 1800 Number
              </Button>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center relative">
            <div className="relative w-[350px] h-[350px] flex items-center justify-center">
               {/* Core Vector - 1800 Base */}
               <div className="absolute w-[280px] h-[280px] bg-slate-800 rounded-full border-4 border-slate-700 shadow-2xl flex items-center justify-center z-10">
                  <div className="w-[200px] h-[200px] bg-gradient-to-br from-blue-900 to-slate-900 rounded-full flex flex-col items-center justify-center border border-blue-500/30">
                     <PhoneCall size={50} className="text-blue-400 animate-pulse mb-3" />
                     <span className="text-white font-black text-3xl tracking-widest">1800</span>
                  </div>
               </div>
               
               {/* Floating Orbital Vectors */}
               <div className="absolute z-20 top-4 right-10 bg-green-500 p-4 rounded-full shadow-[0_0_30px_rgba(16,185,129,0.4)] animate-bounce" style={{ animationDuration: '3s' }}>
                  <Headset size={24} className="text-white" />
               </div>
               <div className="absolute z-20 bottom-10 left-4 bg-purple-500 p-4 rounded-full shadow-[0_0_30px_rgba(168,85,247,0.4)] animate-bounce" style={{ animationDuration: '4s' }}>
                  <Globe size={24} className="text-white" />
               </div>

               {/* Radiating Signal Rings */}
               <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 350 350">
                  <circle cx="175" cy="175" r="150" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="15 15" className="animate-[spin_10s_linear_infinite]" opacity="0.6" />
                  <circle cx="175" cy="175" r="110" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="10 10" opacity="0.4" className="animate-[spin_8s_linear_infinite_reverse]" />
               </svg>
            </div>
          </div>
        </div>
      </section>

{/* =========================================================
          SECTION 2: WHAT IS A TOLL FREE NUMBER? 
          Description: White background, split layout with SVG graphic
          on the left and descriptive text on the right.
          ========================================================= */}
      <section className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* LEFT SIDE: The new SVG Image */}
          <div className="lg:w-1/2 flex justify-center w-full relative">
            {/* Subtle background glow to make the SVG pop */}
            <div className="absolute inset-0 bg-blue-50 rounded-full blur-3xl opacity-50 transform scale-75 pointer-events-none"></div>
            
            <img 
              src="/toll-free-illustration.svg" /* <-- Update this to your actual SVG filename */
              alt="Toll-Free Number Connectivity" 
              className="w-full max-w-[550px] h-auto object-contain relative z-10 transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* RIGHT SIDE: Text Content */}
          <div className="lg:w-1/2 w-full text-left">
            <h2 className="font-heading font-black text-4xl sm:text-5xl text-slate-900 leading-tight mb-8 relative inline-block">
              Empower Callers with <br />
              <span className="text-blue-600">
                Free Connectivity
              </span>
              {/* Green underline accent */}
              <span className="absolute -bottom-3 left-0 w-16 h-1.5 bg-emerald-500 rounded-full"></span>
            </h2>
            
            <div className="space-y-6 text-[17px] text-slate-600 leading-relaxed mt-4">
              <p>
                A Toll-Free Number (typically starting with 1800) allows your customers to call your business without being charged for the call. The cost of the connection is borne entirely by your business.
              </p>
              <p>
                Offering a toll-free number removes the friction of call charges, significantly increasing incoming queries. It portrays your company as an established, customer-centric enterprise with a reliable national presence.
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
              How do <span className="text-blue-600">businesses</span> use Toll Free Numbers?
            </h2>
            <div className="w-12 h-1 bg-green-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Headset, title: "24/7 Customer Support", desc: "Provide a unified national helpline for technical support, grievances, and queries. Route calls to different branches based on time and location." },
              { icon: LineChart, title: "Marketing Campaigns", desc: "Publish different toll-free numbers on billboards, print ads, and TV to accurately track the ROI and lead volume of each specific campaign." },
              { icon: ShoppingCart, title: "Order Booking Lines", desc: "Make it effortless for customers to place orders over the phone. Free calling encourages impulsive inquiries and boosts telesales." },
              { icon: LifeBuoy, title: "Centralized Helpdesks", desc: "Consolidate multiple regional phone numbers into one memorable 1800 number, drastically simplifying how clients reach your organization." },
              { icon: MessageSquare, title: "Feedback Collection", desc: "Encourage customers to leave feedback or participate in automated IVR surveys by ensuring the call costs them absolutely nothing." },
              { icon: Users, title: "Remote Work Enablement", desc: "A single toll-free number can mask the personal mobile numbers of your remote agents, projecting a cohesive corporate identity." }
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
          3-step process of Toll Free calling.
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
              { step: 1, title: "Customer Dials 1800-XXX", desc: "The customer dials your memorable toll-free number from any mobile or landline network nationwide at absolutely zero cost." },
              { step: 2, title: "Cloud IVR Greets Caller", desc: "The call hits our secure cloud telephony servers where a custom, professional IVR greeting welcomes the caller immediately." },
              { step: 3, title: "Smart Routing Connects", desc: "Based on the caller's input (Press 1 for Sales, 2 for Support), the system routes the call to the mobile or desktop of the right agent." }
            ].map((item, i) => (
              <div key={i} className={`flex flex-col ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 lg:gap-16`}>
                <div className="w-full md:w-1/2 flex justify-center">
                   <div className="w-48 h-48 bg-white/10 rounded-full flex items-center justify-center border-4 border-white/20 backdrop-blur-sm">
                      {i === 0 ? <Smartphone size={64} className="text-white opacity-80" /> : i === 1 ? <Mic size={64} className="text-white opacity-80" /> : <Headset size={64} className="text-white opacity-80" />}
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
          icons highlighting enterprise Toll Free features.
          ========================================================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-700 mb-4">
            Why choose our <span className="text-blue-600">Toll Free Solution?</span>
          </h2>
          <div className="w-12 h-1 bg-green-500 rounded-full mx-auto mb-20"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 text-left">
            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <Star size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Vanity Numbers</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Choose a number that spells your brand name (e.g., 1800-XXX-PIZZA), making it exponentially easier for customers to memorize.
              </p>
            </div>

            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <GitMerge size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Advanced Call Routing</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Route calls sequentially, simultaneously, or based on geography and time zones to ensure no incoming query goes unanswered.
              </p>
            </div>

            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <Mic size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Built-in IVR System</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Every toll-free number comes with a multi-level Interactive Voice Response system to greet customers and qualify leads automatically.
              </p>
            </div>

            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <LineChart size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Real-Time Analytics</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Access a live dashboard detailing call volumes, missed calls, average hold times, and agent performance metrics.
              </p>
            </div>

            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <Database size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">CRM Integration</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Sync your toll-free traffic directly into Salesforce, Zoho, or HubSpot. Auto-generate tickets and log call recordings natively.
              </p>
            </div>

            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <ShieldCheck size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">High Availability</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Hosted on enterprise-grade cloud architecture guaranteeing 99.9% uptime. Handle thousands of concurrent callers without infrastructure limits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 6: TYPES OF NUMBERS
          Description: Grey background featuring the 3 core types 
          of Toll-Free deployments.
          ========================================================= */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-800 mb-4">
              Types of <span className="text-blue-600">Toll Free Numbers</span>
            </h2>
            <div className="w-12 h-1 bg-green-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform cursor-pointer border border-slate-100 group">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <MapPin size={32} className="text-blue-600 group-hover:text-white" />
                </div>
                <h3 className="font-bold text-2xl text-slate-800 mb-4">Domestic Toll Free</h3>
                <p className="text-slate-600 leading-relaxed">
                  The standard 1800 number applicable within your native country. Perfect for nationwide brands looking to consolidate local offices into one helpline.
                </p>
             </div>

             <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform cursor-pointer border border-slate-100 group">
                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500 transition-colors">
                  <Globe size={32} className="text-green-600 group-hover:text-white" />
                </div>
                <h3 className="font-bold text-2xl text-slate-800 mb-4">International Toll Free (ITFS)</h3>
                <p className="text-slate-600 leading-relaxed">
                  Provide a toll-free number specific to another country. A customer in the US can call an ITFS number for free, and it seamlessly routes to your call center in India.
                </p>
             </div>

             <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform cursor-pointer border border-slate-100 group">
                <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
                  <Network size={32} className="text-purple-600 group-hover:text-white" />
                </div>
                <h3 className="font-bold text-2xl text-slate-800 mb-4">Universal Freephone (UIFN)</h3>
                <p className="text-slate-600 leading-relaxed">
                  A single, unified 800 number that works across multiple countries globally. Ideal for large multinational corporations offering consistent global support.
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
            Ready to build a premium brand image?
          </h2>
          <p className="text-blue-200 text-lg mb-10 max-w-2xl mx-auto">
            Remove call charges for your customers and watch your inbound inquiries multiply. Get your custom 1800 number live today.
          </p>
          <Button className="bg-[#10b981] hover:bg-[#059669] text-white px-10 h-14 rounded-full shadow-lg text-lg font-bold">
            Search Available Numbers
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}