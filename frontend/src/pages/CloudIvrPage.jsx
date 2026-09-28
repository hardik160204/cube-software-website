import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Phone, Mic, Settings, Database, Users, ShieldCheck, 
  Clock, BarChart, CheckCircle2, Network, Play,
  MessageSquare, FileText, ArrowRight, Bell, PhoneOutgoing, Bot,
  PhoneForwarded, Globe, Maximize, Landmark
} from "lucide-react";
import { Button } from "../components/ui/button";
import Navbar from "../components/Navbar";
import { Footer } from "../components/HomeSections2";

export default function CloudIvrPage() {
  
  // Interactive Calculator State
  const [callVolume, setCallVolume] = useState(15000);
  const humanCostPerCall = 20000 / 3000; 
  const ivrCostPerCall = 1800 / 3000; 

  const humanCost = Math.round(callVolume * humanCostPerCall);
  const ivrCost = Math.round(callVolume * ivrCostPerCall);
  const totalSavings = humanCost - ivrCost;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white text-slate-900 flex flex-col min-h-screen">
      <Navbar />

      {/* =========================================================
          1. HERO SECTION (Dark Blue Theme with Vector Composition)
          ========================================================= */}
      <section className="relative w-full pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#0A1F44]">
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44] via-[#0A1F44] to-blue-900/40 z-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Text Block */}
          <div className="lg:w-1/2">
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Interactive Voice <br/>Response <span className="text-blue-400">(IVR) System</span>
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed mb-8 max-w-xl">
              Improve your customer's communication experience with a professional <strong>interactive voice response (IVR)</strong> greeting by Cloudshope.
            </p>
            <Button className="bg-[#0e79d6] hover:bg-[#190272] text-white px-8 h-12 rounded-full shadow-lg transition-transform hover:-translate-y-0.5 text-lg font-bold">
              Free Trial
            </Button>
          </div>

          {/* Right Vector Block (Robot & Smartphone) */}
          <div className="lg:w-1/2 flex justify-center relative">
            <div className="relative w-[350px] h-[350px] flex items-center justify-center">
               
               {/* Smartphone Base */}
               <div className="absolute w-[220px] h-[380px] bg-slate-800 rounded-3xl border-4 border-slate-700 transform rotate-[25deg] translate-y-12 shadow-2xl overflow-hidden z-10">
                  <div className="w-full h-8 bg-slate-900 flex justify-center items-center">
                    <div className="w-16 h-1.5 bg-slate-700 rounded-full"></div>
                  </div>
                  <div className="w-full h-full bg-gradient-to-b from-blue-900 to-slate-900 p-5">
                     <div className="w-full h-2 bg-blue-500/30 rounded-full mb-4"></div>
                     <div className="w-3/4 h-2 bg-blue-500/30 rounded-full mb-4"></div>
                     <div className="w-5/6 h-2 bg-blue-500/30 rounded-full"></div>
                  </div>
               </div>

               {/* Hovering Robot Graphic */}
               <div className="absolute z-20 flex flex-col items-center transform -translate-y-8 animate-bounce drop-shadow-2xl" style={{ animationDuration: '4s' }}>
                  <div className="w-28 h-28 bg-gradient-to-br from-green-400 to-blue-500 rounded-full shadow-[0_0_50px_rgba(52,211,153,0.4)] flex items-center justify-center border-4 border-white/20">
                     <Bot size={56} className="text-white" />
                  </div>
                  {/* Glowing base under robot */}
                  <div className="w-32 h-6 bg-green-400/20 rounded-full blur-xl mt-4"></div>
               </div>

               {/* Floating UI Element - Ratings */}
               <div className="absolute z-30 -left-6 top-16 bg-slate-800 p-3 rounded-xl border border-slate-600 shadow-xl transform -rotate-12 animate-pulse" style={{ animationDuration: '3s' }}>
                  <div className="flex gap-1 mb-2">
                     {[1,2,3,4,5].map(star => <div key={star} className="w-3 h-3 bg-yellow-400 rounded-sm rotate-45"></div>)}
                  </div>
                  <div className="w-16 h-1.5 bg-slate-400 rounded-full"></div>
               </div>

               {/* Floating UI Element - Call Icon */}
               <div className="absolute z-30 -right-2 bottom-20 bg-blue-600 p-4 rounded-full shadow-xl transform rotate-12">
                  <Phone size={24} className="text-white" />
               </div>

               {/* Floating UI Element - Message Icon */}
               <div className="absolute z-30 right-4 top-12 bg-[#10b981] p-3 rounded-full shadow-xl transform -rotate-6">
                  <MessageSquare size={20} className="text-white" />
               </div>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================
          3. HOW DO BUSINESSES USE IVR? 
          ========================================================= */}
      <section className="py-20 bg-blue-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-blue-900 mb-4">
              How do <span className="text-blue-600">businesses</span> use IVR?
            </h2>
            <p className="text-slate-500 relative inline-block pb-3">
              IVRs help businesses by creating a comfortable interactive environment for the users.
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-green-500 rounded-full"></span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: BarChart, title: "Improve efficiency", desc: "Automating your calls via an IVR system not only helps in streamlining your processes but also provides your staff the freedom to focus on other important activities." },
              { icon: Database, title: "Automated checking for order status", desc: "Tracking orders is easier than ever with the new IVR technology. Customers can track their orders by calling the provided contact number and punching in their user ID." },
              { icon: Users, title: "Better customer experience", desc: "Our IVR system comes with a smart feature that helps in better matching of customers with related domain experts. This helps in providing a customized user experience." },
              { icon: Clock, title: "Be available after hours", desc: "In case your company does not have a 24*7 customer support, you can set up an IVR system to respond to calls received during hours of unavailability." },
              { icon: CheckCircle2, title: "Cash on delivery verification", desc: "Providing cash on delivery without order verification can lead to huge expenses for the company. Switch to a simple IVR system for order verification." },
              { icon: Mic, title: "For local language interaction", desc: "Language inclusivity is one of the most selling features of an IVR system. Customers from different regions can get the same support without language barriers." }
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
            <p className="text-blue-100 relative inline-block pb-3">
              A hassle-free process that guarantees immediate consumer attention in a few simple steps.
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-green-400 rounded-full"></span>
            </p>
          </div>

          <div className="space-y-12">
            {[
              { step: 1, title: "Customer dials a business phone number", desc: "The customer dials a business phone number either on your ad, website, or application." },
              { step: 2, title: "System plays a custom greeting", desc: "The IVR answers instantly and plays your tailored welcome message or options." },
              { step: 3, title: "The request gets processed", desc: "For example, the customer gets connected to a support expert or gets the details of their account balance." }
            ].map((item, i) => (
              <div key={i} className={`flex flex-col ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 lg:gap-16`}>
                <div className="w-full md:w-1/2 flex justify-center">
                   <div className="w-48 h-48 bg-white/10 rounded-full flex items-center justify-center border-4 border-white/20 backdrop-blur-sm">
                      <Phone size={64} className="text-white opacity-80" />
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
          NEW SECTION: WHY IS AN IVR NUMBER ESSENTIAL
          ========================================================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-700 mb-4">
            Why is an IVR number essential <span className="text-blue-600">for your Business?</span>
          </h2>
          <div className="w-12 h-1 bg-green-500 rounded-full mx-auto mb-20"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 text-left">
            
            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <Network size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Smart call routing</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                IVR systems can be used to smartly route your calls in a time-based and team-based manner[cite: 30].
              </p>
            </div>

            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <Mic size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Sound professional</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Every customer gets a prime user experience with a clear and concise welcome greeting[cite: 30].
              </p>
            </div>

            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <PhoneForwarded size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Route calls with ease</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Just dial press in a few keys to get directed to your desired channel[cite: 30].
              </p>
            </div>

            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <Globe size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Support remote working</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Work in any region without worry with Cloudshope's IVR Number[cite: 31].
              </p>
            </div>

            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <Maximize size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Scale with ease</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                The Cloudshope's IVR comes with a choice of adding/ removing agents at the click of a button. You can also use it to scale your calls without any worries![cite: 31]
              </p>
            </div>

            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <BarChart size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Reports and analytics</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Real-time agent-wise reporting and call analytics[cite: 31].
              </p>
            </div>

            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <Landmark size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Ivr Service for banking</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                The financial sector is changing at a faster pace, with customer expectations changing dramatically[cite: 31].
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          5. INTERACTIVE SAVINGS CALCULATOR
          ========================================================= */}
      <section className="py-24 bg-gradient-to-b from-blue-500 to-blue-600 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-white mb-6">
            Savings Calculator for Interactive Voice Response
          </h2>
          <div className="w-12 h-1 bg-green-400 rounded-full mx-auto mb-6"></div>
          <p className="text-blue-100 text-sm sm:text-base max-w-3xl mx-auto mb-16">
            Consider a human receptionist answers 3000 calls a month, and is being paid a salary of Rs.20,000. 
            Here is a representation of your savings potential if an IVR replaces a human.
          </p>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-12">Calls Per Month</h3>
            
            <div className="relative pt-10 pb-8 max-w-3xl mx-auto">
               <div 
                 className="absolute top-0 -ml-8 w-16 h-16 bg-green-400 rounded-full flex items-center justify-center text-slate-900 font-bold text-lg shadow-lg transform -translate-y-2"
                 style={{ left: `${(callVolume / 50000) * 100}%`, transition: 'left 0.1s ease' }}
               >
                 {Number(callVolume).toLocaleString()}
                 <div className="absolute -bottom-2 w-4 h-4 bg-green-400 rotate-45"></div>
               </div>
               
               <input 
                  type="range" 
                  min="0" 
                  max="50000" 
                  step="500"
                  value={callVolume}
                  onChange={(e) => setCallVolume(e.target.value)}
                  className="w-full h-1 bg-white/30 rounded-lg appearance-none cursor-pointer accent-white relative z-10"
               />
               <div className="flex justify-between text-blue-200 font-bold mt-4 text-lg">
                 <span>0</span>
                 <span>50,000</span>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
             <div className="bg-white rounded-2xl p-6 shadow-xl transform hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">₹</div>
                <div className="text-sm text-slate-500 font-semibold uppercase tracking-wider mb-2">Human Cost</div>
                <div className="text-3xl font-black text-slate-800">₹{humanCost.toLocaleString()}</div>
             </div>
             <div className="bg-white rounded-2xl p-6 shadow-xl transform hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">₹</div>
                <div className="text-sm text-slate-500 font-semibold uppercase tracking-wider mb-2">IVR Cost</div>
                <div className="text-3xl font-black text-slate-800">₹{ivrCost.toLocaleString()}</div>
             </div>
             <div className="bg-white rounded-2xl p-6 shadow-xl transform hover:-translate-y-1 transition-transform border-b-4 border-green-500">
                <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">₹</div>
                <div className="text-sm text-slate-500 font-semibold uppercase tracking-wider mb-2">You Save</div>
                <div className="text-4xl font-black text-green-600">₹{totalSavings > 0 ? totalSavings.toLocaleString() : "0"}</div>
             </div>
          </div>

          <div className="mt-12 text-blue-200 text-sm font-semibold space-y-1">
            <p>Disclaimer: Extra charges applicable for toll free numbers</p>
            <p>Disclaimer: Call rates vary based on volumes</p>
          </div>

        </div>
      </section>

      {/* =========================================================
          6. INBOUND AND OUTBOUND CALLS 
          ========================================================= */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-800 mb-4">
            Integrate our IVR system with both <span className="text-blue-600">inbound and outbound calls</span>
          </h2>
          <div className="w-12 h-1 bg-green-500 rounded-full mx-auto mb-16"></div>

          <div className="flex flex-col md:flex-row gap-12 text-left">
             <div className="w-full md:w-1/2 p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                   <Bell className="text-blue-500" size={32} />
                </div>
                <h3 className="font-bold text-2xl text-slate-800 mb-4">Inbound calls</h3>
                <p className="text-slate-600 leading-relaxed">
                  Inbound IVR systems are largely in demand for <strong className="text-slate-800">customer support, order tracking, and related domains.</strong> They can be used to reroute the call to the right department, to send information via SMS, and more.
                </p>
             </div>
             
             <div className="w-full md:w-1/2 p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                   <PhoneOutgoing className="text-blue-500" size={32} />
                </div>
                <h3 className="font-bold text-2xl text-slate-800 mb-4">Outbound calls</h3>
                <p className="text-slate-600 leading-relaxed">
                  IVRs can also be used for outbound calls, meaning that an automated message is played when the person on the other end responds. These messages can be used to accept input responses from the user. <strong className="text-slate-800">They are largely used for feedback systems and surveys.</strong>
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          7. AUTOMATE YOUR BUSINESS FULL DIAGRAM 
          ========================================================= */}
      <section className="py-24 bg-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-blue-900 mb-4">
            Automate your business communication with
          </h2>
          <h3 className="font-heading font-black text-2xl text-blue-600 mb-6">
            Multi-level IVR number system
          </h3>
          <div className="w-16 h-1 bg-green-500 rounded-full mx-auto mb-20"></div>

          <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 h-auto md:h-[500px]">
             
             <div className="flex flex-col items-center relative z-10 w-40">
                <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center mb-4 border-2 border-slate-100">
                   <Users size={40} className="text-slate-700" />
                </div>
                <div className="font-bold text-sm text-slate-800 text-center">Customer Facing Number</div>
             </div>

             <div className="hidden md:block absolute left-[10%] w-[25%] h-0.5 border-t-2 border-dotted border-blue-400 top-1/2 -translate-y-1/2 z-0"></div>

             <div className="relative z-10 flex flex-col items-center mx-auto">
                <div className="absolute -top-32 flex flex-col items-center">
                   <div className="font-bold text-sm text-slate-800 mb-3">Call Recording</div>
                   <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center border border-slate-100">
                     <Mic size={24} className="text-blue-500" />
                   </div>
                </div>
                
                <div className="absolute -top-16 w-0.5 h-16 border-l-2 border-dotted border-blue-400 z-0"></div>

                <div className="w-64 h-48 bg-white rounded-xl shadow-2xl border-4 border-slate-200 flex items-center justify-center relative z-20">
                   <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center relative">
                     <Phone size={32} className="text-white" />
                     <div className="absolute -right-6 -bottom-2 bg-blue-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">IVR</div>
                   </div>
                </div>

                <div className="absolute -bottom-16 w-0.5 h-16 border-l-2 border-dotted border-blue-400 z-0"></div>
                <div className="absolute -bottom-32 flex gap-8">
                   <div className="flex flex-col items-center">
                     <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center border border-slate-100 mb-3">
                       <BarChart size={24} className="text-blue-500" />
                     </div>
                     <div className="font-bold text-sm text-slate-800">Analytics</div>
                   </div>
                   <div className="flex flex-col items-center">
                     <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center border border-slate-100 mb-3">
                       <Settings size={24} className="text-blue-500" />
                     </div>
                     <div className="font-bold text-sm text-slate-800">Automate</div>
                   </div>
                </div>
             </div>

             <div className="hidden md:block absolute right-[12%] w-[25%] h-[200px] top-1/2 -translate-y-1/2 z-0">
                <div className="absolute top-0 left-0 w-full h-0.5 border-t-2 border-dotted border-blue-400"></div>
                <div className="absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dotted border-blue-400"></div>
                <div className="absolute bottom-0 left-0 w-full h-0.5 border-t-2 border-dotted border-blue-400"></div>
                <div className="absolute top-0 left-0 h-full w-0.5 border-l-2 border-dotted border-blue-400"></div>
             </div>

             <div className="flex flex-col gap-12 relative z-10 w-40 items-end md:items-center">
                <div className="flex flex-col items-center group">
                   <span className="text-xs font-bold text-slate-500 mb-2 md:-ml-20 bg-blue-50 px-2">Press 1</span>
                   <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center border border-slate-100 mb-2 group-hover:bg-blue-50 transition-colors">
                     <Users size={24} className="text-blue-500" />
                   </div>
                   <div className="font-bold text-sm text-slate-800">Sales</div>
                </div>
                <div className="flex flex-col items-center group">
                   <span className="text-xs font-bold text-slate-500 mb-2 md:-ml-20 bg-blue-50 px-2">Press 2</span>
                   <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center border border-slate-100 mb-2 group-hover:bg-blue-50 transition-colors">
                     <Clock size={24} className="text-blue-500" />
                   </div>
                   <div className="font-bold text-sm text-slate-800">24/7 Support</div>
                </div>
                <div className="flex flex-col items-center group">
                   <span className="text-xs font-bold text-slate-500 mb-2 md:-ml-20 bg-blue-50 px-2">Press 3</span>
                   <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center border border-slate-100 mb-2 group-hover:bg-blue-50 transition-colors">
                     <FileText size={24} className="text-blue-500" />
                   </div>
                   <div className="font-bold text-sm text-slate-800">Billing</div>
                </div>
             </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          8. IVR AUTOMATION 
          ========================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-800 mb-4">
              What are you able to use <span className="text-blue-600">IVR Automation</span> for?
            </h2>
            <div className="w-12 h-1 bg-green-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform cursor-pointer">
                <div className="w-16 h-16 text-blue-500 mb-6"><Users size={60} strokeWidth={1} /></div>
                <h3 className="font-bold text-xl text-slate-800 mb-4">Large Scale Employment Drive</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Large-scale hiring can be streamlined super easily with the help of IVR systems. These can be used to perform the initial screening of candidates, thus saving the efforts of the recruiting team.
                </p>
             </div>
             
             <div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(59,130,246,0.15)] border-t-4 border-blue-500 hover:-translate-y-2 transition-transform cursor-pointer relative -top-4">
                <div className="w-16 h-16 text-blue-500 mb-6"><MessageSquare size={60} strokeWidth={1} /></div>
                <h3 className="font-bold text-xl text-slate-800 mb-4">Customer Feedback</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  IVR is one of the most efficient techniques for collecting feedback. It gives the consumers the agency of language choices, while also saving the staff from repetitive tasks. You can make your business better by knowing what your customers want.
                </p>
             </div>

             <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform cursor-pointer">
                <div className="w-16 h-16 text-blue-500 mb-6"><FileText size={60} strokeWidth={1} /></div>
                <h3 className="font-bold text-xl text-slate-800 mb-4">Surveys for Market Research</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  IVRs can be used to conduct efficient surveys with minimum efforts. You can survey a larger demographic in a short span of time with minimal human labor. A larger data set can then be used to establish better trends.
                </p>
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}