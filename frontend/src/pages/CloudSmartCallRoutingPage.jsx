import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  GitMerge, PhoneCall, MapPin, Clock, Star, 
  Users, Network, Headset, Zap, CheckCircle2, 
  BarChart, Globe, Calendar, RefreshCw, Filter, ShieldCheck, Database
} from "lucide-react";
import { Button } from "../components/ui/button";
import Navbar from "../components/Navbar";
import { Footer } from "../components/HomeSections2";

export default function CloudSmartCallRoutingPage() {
  
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
          headlines and the animated Routing vector graphic.
          ========================================================= */}
      <section className="relative w-full pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#0A1F44]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44] via-[#0A1F44] to-blue-900/40 z-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12">
          
          <div className="lg:w-1/2">
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Intelligent <br/><span className="text-blue-400">Call Routing</span>
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed mb-8 max-w-xl">
              Connect every caller to the right agent, at the right time, every single time. Reduce hold times, boost first-call resolution, and deliver a seamless customer experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#10b981] hover:bg-[#059669] text-white px-8 h-12 rounded-full shadow-lg transition-transform hover:-translate-y-0.5 text-lg font-bold">
                Optimize Your Routing
              </Button>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center relative">
            <div className="relative w-[350px] h-[350px] flex items-center justify-center">
               {/* Core Vector - Routing Base */}
               <div className="absolute w-[280px] h-[280px] bg-slate-800 rounded-full border-4 border-slate-700 shadow-2xl flex items-center justify-center z-10">
                  <div className="w-[200px] h-[200px] bg-gradient-to-br from-blue-900 to-slate-900 rounded-full flex flex-col items-center justify-center border border-blue-500/30">
                     <GitMerge size={80} className="text-[#10b981] animate-pulse" />
                  </div>
               </div>
               
               {/* Floating Orbital Vectors */}
               <div className="absolute z-20 top-4 right-10 bg-blue-500 p-4 rounded-full shadow-[0_0_30px_rgba(59,130,246,0.4)] animate-bounce" style={{ animationDuration: '3s' }}>
                  <Headset size={24} className="text-white" />
               </div>
               <div className="absolute z-20 bottom-10 left-4 bg-purple-500 p-4 rounded-full shadow-[0_0_30px_rgba(168,85,247,0.4)] animate-bounce" style={{ animationDuration: '4s' }}>
                  <Clock size={24} className="text-white" />
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
          SECTION 2: WHAT IS SMART CALL ROUTING? 
          Description: White background, split layout with 4 square
          feature blocks on the left and descriptive text on the right.
          ========================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="aspect-square max-h-[400px] bg-blue-50 rounded-full shadow-inner overflow-hidden relative flex items-center justify-center border-8 border-slate-50">
               <div className="grid grid-cols-2 gap-4 p-8 w-full h-full">
                 <div className="bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300">
                    <Filter size={40} className="mb-2" />
                    <span className="font-bold text-sm mt-2">Filter</span>
                 </div>
                 <div className="bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-green-500 hover:bg-green-500 hover:text-white transition-colors duration-300">
                    <GitMerge size={40} className="mb-2" />
                    <span className="font-bold text-sm mt-2">Distribute</span>
                 </div>
                 <div className="bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-slate-400 hover:bg-slate-700 hover:text-white transition-colors duration-300">
                    <Star size={40} className="mb-2" />
                    <span className="font-bold text-sm mt-2">Prioritize</span>
                 </div>
                 <div className="bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-purple-400 hover:bg-purple-500 hover:text-white transition-colors duration-300">
                    <Headset size={40} className="mb-2" />
                    <span className="font-bold text-sm mt-2">Connect</span>
                 </div>
               </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-800 mb-6 relative inline-block">
              End the Frustration of <span className="text-blue-600">Call Transfers</span>
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-green-500 rounded-full"></span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Smart Call Routing (Automatic Call Distribution) is an advanced cloud telephony engine that analyzes incoming calls and instantly routes them to the most appropriate agent or department based on predefined business rules.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Instead of placing callers in endless generic queues or bouncing them between departments, the system uses data like caller ID, time of day, IVR input, and agent skill levels to ensure a perfect match on the very first try.
            </p>
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
              How do <span className="text-blue-600">businesses</span> use Smart Routing?
            </h2>
            <div className="w-12 h-1 bg-green-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Star, title: "VIP Caller Prioritization", desc: "Instantly recognize high-value clients via caller ID and jump them to the front of the queue, connecting them to premium account managers." },
              { icon: MapPin, title: "Regional Support", desc: "Automatically detect the caller's area code and route them to an agent in their specific region or an agent who speaks their local language." },
              { icon: Clock, title: "After-Hours Management", desc: "When your primary office closes, seamlessly route calls to a secondary global office, an outsourced call center, or a voicemail system." },
              { icon: Users, title: "Equitable Load Balancing", desc: "Distribute incoming calls evenly among your sales team (Round Robin) to ensure fair lead distribution and prevent agent burnout." },
              { icon: CheckCircle2, title: "Sticky Routing", desc: "If a customer drops a call and dials back, route them directly to the exact same agent they were just speaking with to maintain continuity." },
              { icon: ShieldCheck, title: "Disaster Recovery", desc: "If a localized outage hits a specific branch, instantly reroute all traffic to a backup facility without the customer ever noticing a delay." }
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
          3-step process of Call Routing.
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
              { step: 1, title: "Call Analysis", desc: "When a call arrives, the system instantly analyzes the caller ID, time of day, geographic location, and any inputs provided via the IVR." },
              { step: 2, title: "Rule Evaluation", desc: "The engine cross-references this data with your customized business logic (e.g., 'If caller is from NY and it is 2 PM, look for English Tech Support')." },
              { step: 3, title: "Agent Bridging", desc: "The call is seamlessly bridged to the most qualified available agent. If no one is available, fallback rules (like voicemail) are triggered." }
            ].map((item, i) => (
              <div key={i} className={`flex flex-col ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 lg:gap-16`}>
                <div className="w-full md:w-1/2 flex justify-center">
                   <div className="w-48 h-48 bg-white/10 rounded-full flex items-center justify-center border-4 border-white/20 backdrop-blur-sm">
                      {i === 0 ? <PhoneCall size={64} className="text-white opacity-80" /> : i === 1 ? <Filter size={64} className="text-white opacity-80" /> : <GitMerge size={64} className="text-white opacity-80" />}
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
          icons highlighting enterprise routing features.
          ========================================================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-700 mb-4">
            Why choose our <span className="text-blue-600">Routing Engine?</span>
          </h2>
          <div className="w-12 h-1 bg-green-500 rounded-full mx-auto mb-20"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 text-left">
            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <Network size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Multi-Level Logic</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Build deeply nested routing trees. Combine time-based routing with skill-based routing to create highly granular call distribution paths.
              </p>
            </div>

            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <RefreshCw size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Fallback Protocols</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Never lose a caller. If a primary agent group is busy, automatically cascade the call to a secondary group, an external number, or a smart voicemail box.
              </p>
            </div>

            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <Database size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">CRM Data Lookups</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Our engine integrates with Salesforce and Zoho to query database fields in real-time. Route calls based on lead status, account owner, or ticket severity.
              </p>
            </div>

            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <Zap size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Instant Scalability</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Add or remove routing nodes, update agent skills, and change business hours on the fly via the dashboard without any downtime or technical support.
              </p>
            </div>

            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <Globe size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Device Agnostic</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Route calls to softphones, landlines, IP phones, or agent mobile devices globally. Agents can log in from anywhere and receive routed calls.
              </p>
            </div>

            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <BarChart size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Queue Analytics</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Monitor hold times, abandonment rates, and queue lengths in real-time. Make data-driven decisions to adjust staffing and routing rules on the fly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 6: TYPES OF ROUTING
          Description: Grey background featuring the 3 core 
          routing architectures.
          ========================================================= */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-800 mb-4">
              Advanced <span className="text-blue-600">Routing Modes</span>
            </h2>
            <div className="w-12 h-1 bg-green-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform cursor-pointer border border-slate-100 group">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <Star size={32} className="text-blue-600 group-hover:text-white" />
                </div>
                <h3 className="font-bold text-2xl text-slate-800 mb-4">Skill-Based Routing</h3>
                <p className="text-slate-600 leading-relaxed">
                  Assign proficiency tags to your agents (e.g., Spanish Speaker, Tech Support Tier 2). The system matches the caller's need to the agent with the highest relevant skill score.
                </p>
             </div>

             <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform cursor-pointer border border-slate-100 group">
                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500 transition-colors">
                  <Clock size={32} className="text-green-600 group-hover:text-white" />
                </div>
                <h3 className="font-bold text-2xl text-slate-800 mb-4">Time & Day Routing</h3>
                <p className="text-slate-600 leading-relaxed">
                  Create specific logic based on your operational hours. Route calls to the main office from 9-5, shift to a remote team in the evening, and direct to voicemail on weekends.
                </p>
             </div>

             <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform cursor-pointer border border-slate-100 group">
                <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
                  <Users size={32} className="text-purple-600 group-hover:text-white" />
                </div>
                <h3 className="font-bold text-2xl text-slate-800 mb-4">Round Robin Routing</h3>
                <p className="text-slate-600 leading-relaxed">
                  Perfect for sales teams. The system distributes incoming leads evenly in a cycle (Agent A, then B, then C), ensuring everyone gets a fair share of opportunities.
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
            Ready to end call transfers forever?
          </h2>
          <p className="text-blue-200 text-lg mb-10 max-w-2xl mx-auto">
            Design intelligent call flows in minutes. Increase first-call resolution and empower your agents with our smart routing engine.
          </p>
          <Button className="bg-[#10b981] hover:bg-[#059669] text-white px-10 h-14 rounded-full shadow-lg text-lg font-bold">
            Optimize Your Workflow
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}