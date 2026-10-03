import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Mic, Database, ShieldCheck, Headset, FileAudio, 
  Lock, Cloud, PlayCircle, BarChart, CheckCircle2, 
  Clock, Search, Users, AlertCircle, TrendingUp,
  Download, Filter, Server
} from "lucide-react";
import { Button } from "../components/ui/button";
import Navbar from "../components/Navbar";
import { Footer } from "../components/HomeSections2";

export default function CloudCallRecordingPage() {
  
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
          headlines and the animated Call Recording vector graphic.
          ========================================================= */}
      <section className="relative w-full pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#0A1F44]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44] via-[#0A1F44] to-blue-900/40 z-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12">
          
          <div className="lg:w-1/2">
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              <br/><span className="text-blue-400">Call Recording</span>
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed mb-8 max-w-xl">
              Securely capture, store, and analyze 100% of your business conversations. Ensure compliance, resolve disputes instantly, and train your agents with crystal-clear audio logs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#10b981] hover:bg-[#059669] text-white px-8 h-12 rounded-full shadow-lg transition-transform hover:-translate-y-0.5 text-lg font-bold">
                Start Recording Free
              </Button>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center relative">
            <div className="relative w-[350px] h-[350px] flex items-center justify-center">
               {/* Core Vector - Recording / Audio Base */}
               <div className="absolute w-[280px] h-[280px] bg-slate-800 rounded-full border-4 border-slate-700 shadow-2xl flex items-center justify-center z-10">
                  <div className="w-[200px] h-[200px] bg-gradient-to-br from-blue-900 to-slate-900 rounded-full flex flex-col items-center justify-center border border-blue-500/30">
                     <Mic size={50} className="text-blue-400 animate-pulse mb-2" />
                     <div className="flex items-center gap-1 mt-2">
                       <div className="w-1.5 h-6 bg-[#10b981] rounded-full animate-[bounce_1s_infinite]"></div>
                       <div className="w-1.5 h-10 bg-[#10b981] rounded-full animate-[bounce_1.2s_infinite]"></div>
                       <div className="w-1.5 h-4 bg-[#10b981] rounded-full animate-[bounce_0.8s_infinite]"></div>
                       <div className="w-1.5 h-8 bg-[#10b981] rounded-full animate-[bounce_1.1s_infinite]"></div>
                       <div className="w-1.5 h-5 bg-[#10b981] rounded-full animate-[bounce_0.9s_infinite]"></div>
                     </div>
                  </div>
               </div>
               
               {/* Floating Orbital Vectors */}
               <div className="absolute z-20 top-4 right-10 bg-red-500 p-4 rounded-full shadow-[0_0_30px_rgba(239,68,68,0.4)] animate-pulse" style={{ animationDuration: '2s' }}>
                  <div className="w-6 h-6 bg-white rounded-full"></div>
               </div>
               <div className="absolute z-20 bottom-10 left-4 bg-purple-500 p-4 rounded-full shadow-[0_0_30px_rgba(168,85,247,0.4)] animate-bounce" style={{ animationDuration: '4s' }}>
                  <Database size={24} className="text-white" />
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
          SECTION 2: WHAT IS CALL RECORDING? 
          Description: White background, split layout with 4 square
          feature blocks on the left and descriptive text on the right.
          ========================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="aspect-square max-h-[400px] bg-blue-50 rounded-full shadow-inner overflow-hidden relative flex items-center justify-center border-8 border-slate-50">
               <div className="grid grid-cols-2 gap-4 p-8 w-full h-full">
                 <div className="bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-300">
                    <Mic size={40} className="mb-2" />
                    <span className="font-bold text-sm mt-2">Capture</span>
                 </div>
                 <div className="bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300">
                    <Cloud size={40} className="mb-2" />
                    <span className="font-bold text-sm mt-2">Store</span>
                 </div>
                 <div className="bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-green-500 hover:bg-green-500 hover:text-white transition-colors duration-300">
                    <PlayCircle size={40} className="mb-2" />
                    <span className="font-bold text-sm mt-2">Playback</span>
                 </div>
                 <div className="bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-purple-400 hover:bg-purple-500 hover:text-white transition-colors duration-300">
                    <Lock size={40} className="mb-2" />
                    <span className="font-bold text-sm mt-2">Encrypt</span>
                 </div>
               </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-800 mb-6 relative inline-block">
              Never Miss a <span className="text-blue-600">Single Detail</span>
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-green-500 rounded-full"></span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Cloud Call Recording is an automated solution that seamlessly captures both sides of a telephone conversation. The audio is instantly compressed, encrypted, and saved to a secure cloud server the moment a call ends.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Whether you are monitoring inbound support calls for quality assurance, or logging outbound sales calls for legal compliance, having an irrefutable audio log protects your business and empowers your management team.
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
              How do <span className="text-blue-600">businesses</span> use Call Recording?
            </h2>
            <div className="w-12 h-1 bg-green-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: ShieldCheck, title: "Legal & Compliance", desc: "Sectors like finance and healthcare use recordings to prove compliance with regulations (like HIPAA or PCI) and maintain undeniable legal records." },
              { icon: AlertCircle, title: "Dispute Resolution", desc: "Instantly resolve 'he-said-she-said' conflicts. Pull up the exact audio file to verify what was promised to a customer or agreed upon by a vendor." },
              { icon: Users, title: "Agent Training", desc: "Use actual recordings of your best salespeople closing deals, or agents handling angry customers, to train new hires with real-world examples." },
              { icon: CheckCircle2, title: "Quality Assurance", desc: "Managers can periodically review recorded calls to ensure agents are following scripts, maintaining a polite tone, and representing the brand correctly." },
              { icon: TrendingUp, title: "Sales Strategy", desc: "Analyze recorded calls to identify customer pain points, frequently asked questions, and objections to refine your marketing and sales pitches." },
              { icon: FileAudio, title: "Verbal Contracts", desc: "Capture verbal authorizations for upgrades, payments, or contract renewals over the phone, storing them securely as legally binding proof." }
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
          3-step process of capturing and storing calls.
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
              { step: 1, title: "Call is Initiated", desc: "An inbound or outbound call connects through our cloud servers. A mandatory compliance beep or message can be played if required." },
              { step: 2, title: "Real-Time Capture", desc: "Our infrastructure captures high-definition audio of both the agent and the customer without any lag or hardware on your end." },
              { step: 3, title: "Instant Cloud Storage", desc: "The moment the call ends, the audio is encrypted, compressed, and attached to the call log in your dashboard or CRM." }
            ].map((item, i) => (
              <div key={i} className={`flex flex-col ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 lg:gap-16`}>
                <div className="w-full md:w-1/2 flex justify-center">
                   <div className="w-48 h-48 bg-white/10 rounded-full flex items-center justify-center border-4 border-white/20 backdrop-blur-sm">
                      {i === 0 ? <Headset size={64} className="text-white opacity-80" /> : i === 1 ? <Mic size={64} className="text-white opacity-80" /> : <Database size={64} className="text-white opacity-80" />}
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
          icons highlighting enterprise recording features.
          ========================================================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-700 mb-4">
            Why choose our <span className="text-blue-600">Recording Solution?</span>
          </h2>
          <div className="w-12 h-1 bg-green-500 rounded-full mx-auto mb-20"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 text-left">
            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <Server size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Unlimited Cloud Storage</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Never run out of hard drive space again. We offer vast, scalable cloud storage solutions to keep your records safe for years.
              </p>
            </div>

            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <Lock size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Bank-Grade Encryption</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Protect sensitive customer data. All audio files are secured with AES-256 encryption at rest and in transit.
              </p>
            </div>

            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <Search size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Advanced Search</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Instantly locate specific recordings by filtering through date, time, agent name, caller ID, or call duration parameters.
              </p>
            </div>

            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <Filter size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Selective Recording</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Record 100% of calls, or apply filters to only record specific departments, specific agents, or random sampling for QA.
              </p>
            </div>

            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <Download size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Export & Download</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Download individual MP3/WAV files for evidence, or bulk export thousands of recordings directly to your local servers via API.
              </p>
            </div>

            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <Database size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">CRM Synchronization</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Automatically attach the playable audio file link directly inside the customer's timeline in Salesforce, Zoho, or HubSpot.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 6: RECORDING MODES
          Description: Grey background featuring the 3 core types 
          of recording deployments.
          ========================================================= */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-800 mb-4">
              Flexible <span className="text-blue-600">Recording Modes</span>
            </h2>
            <div className="w-12 h-1 bg-green-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform cursor-pointer border border-slate-100 group">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <Database size={32} className="text-blue-600 group-hover:text-white" />
                </div>
                <h3 className="font-bold text-2xl text-slate-800 mb-4">100% Blanket Recording</h3>
                <p className="text-slate-600 leading-relaxed">
                  Every single inbound and outbound call is automatically recorded and archived. Perfect for strict regulatory environments like banking and insurance.
                </p>
             </div>

             <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform cursor-pointer border border-slate-100 group">
                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500 transition-colors">
                  <CheckCircle2 size={32} className="text-green-600 group-hover:text-white" />
                </div>
                <h3 className="font-bold text-2xl text-slate-800 mb-4">On-Demand Recording</h3>
                <p className="text-slate-600 leading-relaxed">
                  Give agents control. They can press a specific key during a live conversation to start or stop recording, ideal for capturing verbal contracts while excluding small talk.
                </p>
             </div>

             <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform cursor-pointer border border-slate-100 group">
                <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
                  <Lock size={32} className="text-purple-600 group-hover:text-white" />
                </div>
                <h3 className="font-bold text-2xl text-slate-800 mb-4">PCI Pause & Resume</h3>
                <p className="text-slate-600 leading-relaxed">
                  When a customer reads out sensitive credit card data over the phone, the agent can temporarily mute the recording to ensure complete PCI compliance.
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
            Ready to secure your business conversations?
          </h2>
          <p className="text-blue-200 text-lg mb-10 max-w-2xl mx-auto">
            Protect your company from liability, improve agent quality, and never lose track of what was said on a call.
          </p>
          <Button className="bg-[#10b981] hover:bg-[#059669] text-white px-10 h-14 rounded-full shadow-lg text-lg font-bold">
            Start Recording Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}