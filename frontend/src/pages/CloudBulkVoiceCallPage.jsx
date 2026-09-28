import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Megaphone, Users, BarChart, Database, UploadCloud, 
  Volume2, CheckCircle2, TrendingUp, Clock, PhoneCall, ShieldCheck,
  Network, Mic, Globe, Maximize, Languages, ListChecks, Radio
} from "lucide-react";
import { Button } from "../components/ui/button";
import Navbar from "../components/Navbar";
import { Footer } from "../components/HomeSections2";

export default function CloudBulkVoiceCallPage() {
  
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
          headlines and the animated Broadcasting vector graphic.
          ========================================================= */}
      <section className="relative w-full pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#0A1F44]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44] via-[#0A1F44] to-blue-900/40 z-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12">
          
          <div className="lg:w-1/2">
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Smart Cloud <br/><span className="text-blue-400">Bulk Voice Calls</span>
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed mb-8 max-w-xl">
              Reach thousands of customers instantly with pre-recorded voice messages. Automate your announcements, promotional offers, and reminders with just one click.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#10b981] hover:bg-[#059669] text-white px-8 h-12 rounded-full shadow-lg transition-transform hover:-translate-y-0.5 text-lg font-bold">
                Start Free Trial
              </Button>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center relative">
            <div className="relative w-[350px] h-[350px] flex items-center justify-center">
               {/* Core Megaphone Vector */}
               <div className="absolute w-[280px] h-[280px] bg-slate-800 rounded-full border-4 border-slate-700 shadow-2xl flex items-center justify-center z-10">
                  <div className="w-[200px] h-[200px] bg-gradient-to-br from-blue-900 to-slate-900 rounded-full flex items-center justify-center border border-blue-500/30">
                     <Megaphone size={80} className="text-blue-400 animate-pulse" />
                  </div>
               </div>
               
               {/* Floating Orbital Vectors */}
               <div className="absolute z-20 top-4 right-10 bg-green-500 p-4 rounded-full shadow-[0_0_30px_rgba(16,185,129,0.4)] animate-bounce" style={{ animationDuration: '3s' }}>
                  <Users size={24} className="text-white" />
               </div>
               <div className="absolute z-20 bottom-10 left-4 bg-blue-500 p-4 rounded-full shadow-[0_0_30px_rgba(59,130,246,0.4)] animate-bounce" style={{ animationDuration: '4s' }}>
                  <Radio size={24} className="text-white" />
               </div>

               {/* Radiating Sound Waves / Signal Rings */}
               <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 350 350">
                  <circle cx="175" cy="175" r="150" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="15 15" className="animate-[spin_10s_linear_infinite]" opacity="0.6" />
                  <circle cx="175" cy="175" r="110" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="10 10" opacity="0.4" className="animate-[spin_8s_linear_infinite_reverse]" />
               </svg>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 2: WHAT IS A BULK VOICE CALL? 
          Description: White background, split layout with 4 square
          feature blocks on the left and descriptive text on the right.
          ========================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="aspect-square max-h-[400px] bg-blue-50 rounded-full shadow-inner overflow-hidden relative flex items-center justify-center border-8 border-slate-50">
               <div className="grid grid-cols-2 gap-4 p-8 w-full h-full">
                 <div className="bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300">
                    <Volume2 size={40} className="mb-2" />
                    <span className="font-bold text-sm mt-2">Record</span>
                 </div>
                 <div className="bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-green-500 hover:bg-green-500 hover:text-white transition-colors duration-300">
                    <UploadCloud size={40} className="mb-2" />
                    <span className="font-bold text-sm mt-2">Upload Base</span>
                 </div>
                 <div className="bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-slate-400 hover:bg-slate-700 hover:text-white transition-colors duration-300">
                    <Megaphone size={40} className="mb-2" />
                    <span className="font-bold text-sm mt-2">Broadcast</span>
                 </div>
                 <div className="bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition-colors duration-300">
                    <BarChart size={40} className="mb-2" />
                    <span className="font-bold text-sm mt-2">Track Output</span>
                 </div>
               </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-800 mb-6 relative inline-block">
              Mass Communication <span className="text-blue-600">Made Simple</span>
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-green-500 rounded-full"></span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Bulk Voice Calling, also known as voice broadcasting, is a technology that allows you to send a pre-recorded voice message to hundreds or thousands of call recipients simultaneously.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              It is the most cost-effective and rapid way to deliver alerts, promotional offers, political campaigns, and reminders, ensuring your message is heard in your own voice, adding a personal touch to your mass outreach.
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
              How do <span className="text-blue-600">businesses</span> use Voice Broadcasting?
            </h2>
            <div className="w-12 h-1 bg-green-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Users, title: "Political & Social Campaigns", desc: "Reach thousands of voters or community members instantly with pre-recorded messages directly from candidates or leaders." },
              { icon: Clock, title: "EMI & Bill Reminders", desc: "Automate your collection process by scheduling voice broadcasts to remind customers of upcoming or overdue payments." },
              { icon: Megaphone, title: "Promotional Offers", desc: "Blast your latest deals, sales, and discount codes to your entire customer base via an engaging voice message." },
              { icon: ShieldCheck, title: "Emergency Alerts", desc: "Quickly notify students, employees, or citizens of urgent updates, weather warnings, or security situations in real-time." },
              { icon: Database, title: "Survey & Feedback", desc: "Combine voice broadcasts with IVR (Press 1) to conduct automated phone surveys and collect instant customer feedback." },
              { icon: CheckCircle2, title: "Event Notifications", desc: "Send automated voice reminders to attendees regarding event timings, webinar links, or venue changes to maximize turnout." }
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
          3-step process of Voice Broadcasting.
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
              { step: 1, title: "Upload Contacts & Audio", desc: "Upload your customer database (CSV/Excel) and record or upload your voice message (MP3/WAV) to the dashboard." },
              { step: 2, title: "Schedule the Broadcast", desc: "Choose whether to blast the campaign immediately or schedule it for a specific date and time based on user availability." },
              { step: 3, title: "Calls are Dispatched", desc: "Our high-capacity cloud servers simultaneously dial the numbers. If picked up, your message is played instantly." }
            ].map((item, i) => (
              <div key={i} className={`flex flex-col ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 lg:gap-16`}>
                <div className="w-full md:w-1/2 flex justify-center">
                   <div className="w-48 h-48 bg-white/10 rounded-full flex items-center justify-center border-4 border-white/20 backdrop-blur-sm">
                      <Radio size={64} className="text-white opacity-80" />
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
          icons highlighting enterprise broadcasting features.
          ========================================================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-700 mb-4">
            Why choose our <span className="text-blue-600">Bulk Voice Solution?</span>
          </h2>
          <div className="w-12 h-1 bg-green-500 rounded-full mx-auto mb-20"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 text-left">
            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <ListChecks size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">DND Scrubbing</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Ensure 100% compliance. Our system automatically filters out Do-Not-Disturb (DND) registered numbers before initiating the broadcast.
              </p>
            </div>

            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <PhoneCall size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Automated Retries</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Maximize reach with auto-retry features. If a call is unanswered or busy, the system will automatically attempt to call back at a later interval.
              </p>
            </div>

            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <Languages size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Text-to-Speech (TTS)</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Don't have pre-recorded audio? Simply type your message, and our advanced AI will convert your text into natural-sounding voice audio in regional languages.
              </p>
            </div>

            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <Maximize size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Unmatched Scalability</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Whether sending 500 calls or 500,000 calls, our multi-tenant cloud architecture processes massive volumes simultaneously without lag.
              </p>
            </div>

            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <Mic size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Interactive Press 1 (IVR)</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Convert one-way broadcasts into two-way communication. Allow users to "Press 1" during the message to instantly connect with a live sales agent.
              </p>
            </div>

            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <BarChart size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Real-Time Analytics</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Track answered calls, failed calls, average listen durations, and key presses via a comprehensive real-time dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 6: CAMPAIGN TYPES
          Description: Grey background featuring the core types 
          of bulk voice campaigns.
          ========================================================= */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-800 mb-4">
              Types of <span className="text-blue-600">Voice Campaigns</span>
            </h2>
            <div className="w-12 h-1 bg-green-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform cursor-pointer border border-slate-100 group">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <TrendingUp size={32} className="text-blue-600 group-hover:text-white" />
                </div>
                <h3 className="font-bold text-2xl text-slate-800 mb-4">Promotional Calls</h3>
                <p className="text-slate-600 leading-relaxed">
                  Used purely for sales and marketing. Broadcast product launches, discounts, and offers to your opted-in customer base to drive immediate sales.
                </p>
             </div>

             <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform cursor-pointer border border-slate-100 group">
                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500 transition-colors">
                  <ShieldCheck size={32} className="text-green-600 group-hover:text-white" />
                </div>
                <h3 className="font-bold text-2xl text-slate-800 mb-4">Transactional Calls</h3>
                <p className="text-slate-600 leading-relaxed">
                  Used for essential notifications like OTP deliveries, order confirmations, and urgent alerts. These can bypass standard DND registries due to their critical nature.
                </p>
             </div>

             <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform cursor-pointer border border-slate-100 group">
                <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
                  <Network size={32} className="text-purple-600 group-hover:text-white" />
                </div>
                <h3 className="font-bold text-2xl text-slate-800 mb-4">Interactive Broadcasts</h3>
                <p className="text-slate-600 leading-relaxed">
                  Combine outbound voice calls with DTMF inputs. Play a message and ask the user to respond using their dialpad (e.g., "Press 1 to renew your subscription").
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
            Amplify your reach today.
          </h2>
          <p className="text-blue-200 text-lg mb-10 max-w-2xl mx-auto">
            Connect with thousands of prospects in minutes. Sign up now and launch your first bulk voice campaign effortlessly.
          </p>
          <Button className="bg-[#10b981] hover:bg-[#059669] text-white px-10 h-14 rounded-full shadow-lg text-lg font-bold">
            Start Broadcasting Now
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}