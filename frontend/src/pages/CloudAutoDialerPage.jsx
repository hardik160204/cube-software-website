import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  PhoneForwarded, Zap, Users, BarChart, Database, Headset, 
  Play, CheckCircle2, TrendingUp, Clock, PhoneCall, ShieldCheck,
  Network, Mic, Globe, Maximize, Landmark
} from "lucide-react";
import { Button } from "../components/ui/button";
import Navbar from "../components/Navbar";
import { Footer } from "../components/HomeSections2";
// Footer import removed to fix the layout overlap issue

export default function CloudAutoDialerPage() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white text-slate-900 flex flex-col min-h-screen">
      <Navbar />

{/* =========================================================
          1. HERO SECTION (Dark Blue Theme & Image Placeholder)
          ========================================================= */}
      <section className="relative w-full pt-32 pb-20 lg:pt-40 lg:pb-12 overflow-hidden bg-[#0A1F44]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44] via-[#0A1F44] to-blue-900/40 z-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12">
          
          <div className="lg:w-1/2">
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Smart Cloud <br/><span className="text-blue-400">Auto Dialer</span>
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed mb-8 max-w-xl">
              Automate outbound calls and maximize your agents' talk time. Eliminate manual dialing, detect voicemails, and boost your sales team's productivity.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white px-8 h-12 rounded-md shadow-lg transition-transform hover:-translate-y-0.5">
                Start Free Trial
              </Button>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center lg:justify-end relative">
             {/* 
               Cleaned up container for the transparent PNG or image placeholder. 
               All spinning and bouncing animations are removed.
             */}
             <div className="relative w-full max-w-[550px]">
                <img 
                  src="/auto-dialer-hero.png" // <-- UPDATE THIS to your actual image file path/name
                  alt="Auto Dialer Illustration" 
                  className="w-full h-auto object-contain drop-shadow-2xl relative z-10"
                />
             </div>
          </div>
          
        </div>
      </section>

{/* =========================================================
          2. WHAT IS AN AUTO DIALER? 
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
              src="/outbound-campaign-illustration.svg" /* <-- Update this to your actual SVG filename */
              alt="Auto Dialer System" 
              className="w-full max-w-[550px] h-auto object-contain relative z-10 transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* RIGHT SIDE: Text Content */}
          <div className="lg:w-1/2 w-full text-left">
            <h2 className="font-heading font-black text-4xl sm:text-5xl text-blue-800 leading-tight mb-8 relative inline-block">
              Supercharge your <br />
              <span className="text-blue-600">
                Outbound Campaigns
              </span>
              {/* Green underline accent */}
              <span className="absolute -bottom-3 left-0 w-16 h-1.5 bg-emerald-500 rounded-full"></span>
            </h2>
            
            <div className="space-y-6 text-[17px] text-slate-600 leading-relaxed mt-4">
              <p>
                An auto dialer is an automated software system that dials phone numbers from a compiled list. Once the call is answered, the system either plays a recorded message or connects the call to a live agent.
              </p>
              <p>
                By filtering out busy signals, voicemails, and disconnected numbers, auto dialers ensure your agents spend their time doing what they do best: talking to real prospects.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          3. HOW DO BUSINESSES USE AUTO DIALERS? 
          ========================================================= */}
      <section className="py-20 bg-blue-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-blue-900 mb-4">
              How do <span className="text-blue-600">businesses</span> use Auto Dialers?
            </h2>
            <div className="w-12 h-1 bg-green-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: BarChart, title: "Boost Agent Productivity", desc: "Automate the dialing process to eliminate manual errors and keep your agents on the line with actual prospects instead of listening to dial tones." },
              { icon: Database, title: "Lead Management Sync", desc: "Instantly update customer profiles in your CRM based on call outcomes, ensuring your database remains accurate without manual entry." },
              { icon: Users, title: "Scalable Telemarketing", desc: "Easily scale your outbound campaigns up or down based on your business needs without investing in physical infrastructure." },
              { icon: Clock, title: "Time Zone Routing", desc: "Automatically schedule outbound calls based on the specific time zones of your prospects to remain compliant with calling regulations." },
              { icon: CheckCircle2, title: "Instant Callbacks", desc: "Configure immediate automated callbacks for abandoned calls or missed connections to ensure zero missed opportunities." },
              { icon: ShieldCheck, title: "Secure Calling", desc: "Protect your brand identity and customer privacy with secure, encrypted two-way call masking features during outbound campaigns." }
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
          4. HOW IT WORKS 
          ========================================================= */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-white mb-4">
              How It Works
            </h2>
            <div className="w-12 h-1 bg-green-400 rounded-full mx-auto"></div>
          </div>

          <div className="space-y-12 lg:space-y-24">
            {[
              { 
                step: 1, 
                title: "Upload Contact Lists", 
                desc: "Easily upload your target contact lists or sync them directly from your existing CRM database.",
                image: "/auto-dialer-how-it-works-1.png" 
              },
              { 
                step: 2, 
                title: "System Dials Automatically", 
                desc: "The predictive algorithm dials numbers in the background, filtering out voicemails and busy signals.",
                image: "/auto-dialer-how-it-works-2.png" // Update with your actual second vector image name
              },
              { 
                step: 3, 
                title: "Instant Agent Connection", 
                desc: "The moment a live customer answers, the call is instantly routed to an available agent with the customer's data on screen.",
                image: "/auto-dialer-how-it-works-3.png" // Update with your actual third vector image name
              }
            ].map((item, i) => (
              <div key={i} className={`flex flex-col ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 lg:gap-16`}>
                
                {/* IMAGE CONTAINER - Completely transparent, no box, no background */}
                <div className="w-full md:w-1/2 flex justify-center items-center">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    /* Let the transparent vector sit naturally. Added a subtle drop shadow to make the vector pop against the blue */
                    className="w-48 sm:w-64 md:w-72 h-auto object-contain transition-transform duration-700 hover:scale-105 drop-shadow-xl"
                  />
                </div>

                {/* TEXT CONTAINER */}
                <div className="w-full md:w-1/2">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 sm:p-10 border border-white/20 shadow-xl hover:bg-white/15 transition-colors">
                    <div className="flex items-center gap-5 mb-4">
                      <div className="w-12 h-12 bg-white text-blue-600 font-black rounded-full flex items-center justify-center text-2xl shrink-0 shadow-md">
                        {item.step}
                      </div>
                      <h3 className="font-bold text-2xl text-white">{item.title}</h3>
                    </div>
                    <p className="text-blue-100 text-lg leading-relaxed ml-[68px]">
                      {item.desc}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>
      {/* =========================================================
          NEW SECTION: WHY IS AN AUTO DIALER ESSENTIAL
          ========================================================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-700 mb-4">
            Why is an Auto Dialer essential <span className="text-blue-600">for your Business?</span>
          </h2>
          <div className="w-12 h-1 bg-green-500 rounded-full mx-auto mb-20"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 text-left">
            
            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <Network size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Smart call routing</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Systems can be used to smartly route your calls in a time-based and team-based manner.
              </p>
            </div>

            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <Mic size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Sound professional</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Every customer gets a prime user experience with clear audio and zero connection delays.
              </p>
            </div>

            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <PhoneForwarded size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Route calls with ease</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Instantly connect connected calls to the most appropriate agent based on skill tracking.
              </p>
            </div>

            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <Globe size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Support remote working</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Work in any region without worry with our cloud-hosted dialing platform.
              </p>
            </div>

            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <Maximize size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Scale with ease</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Our platform comes with a choice of adding/removing agents at the click of a button. Scale your outbound volume without any worries!
              </p>
            </div>

            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <BarChart size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Reports and analytics</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Real-time agent-wise reporting, call durations, and detailed outbound analytics.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          5. TYPES OF DIALERS
          ========================================================= */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-800 mb-4">
              Advanced <span className="text-blue-600">Dialing Modes</span>
            </h2>
            <div className="w-12 h-1 bg-green-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform cursor-pointer border border-slate-100 group">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <Zap size={32} className="text-blue-600 group-hover:text-white" />
                </div>
                <h3 className="font-bold text-2xl text-slate-800 mb-4">Predictive Dialer</h3>
                <p className="text-slate-600 leading-relaxed">
                  Uses intelligent algorithms to predict when an agent will be free, dialing multiple numbers simultaneously to ensure an agent is immediately connected to the next live caller.
                </p>
             </div>

             <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform cursor-pointer border border-slate-100 group">
                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500 transition-colors">
                  <Play size={32} className="text-green-600 group-hover:text-white" />
                </div>
                <h3 className="font-bold text-2xl text-slate-800 mb-4">Progressive Dialer</h3>
                <p className="text-slate-600 leading-relaxed">
                  Dials one number per available agent. It only initiates a call when an agent is fully ready to take it, reducing abandoned calls to zero while maintaining a steady pace.
                </p>
             </div>

             <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform cursor-pointer border border-slate-100 group">
                <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
                  <Database size={32} className="text-purple-600 group-hover:text-white" />
                </div>
                <h3 className="font-bold text-2xl text-slate-800 mb-4">Preview Dialer</h3>
                <p className="text-slate-600 leading-relaxed">
                  Displays customer CRM data on the screen before the call is placed. Agents can review the context and manually choose when to initiate the dial, perfect for high-value sales.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          6. CTA SECTION (Dark Blue)
          ========================================================= */}
      <section className="py-20 bg-[#0A1F44] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-white mb-6">
            Ready to multiply your agent's talk time?
          </h2>
          <p className="text-blue-200 text-lg mb-10 max-w-2xl mx-auto">
            Stop dialing manually. Let our smart algorithms connect your team directly to live answers and close more deals.
          </p>
          <Button className="bg-[#10b981] hover:bg-[#059669] text-white px-10 h-14 rounded-full shadow-lg text-lg font-bold">
            Get a Free Demo Today
          </Button>
        </div>
      </section>
      <Footer />

    </div>
  );
}