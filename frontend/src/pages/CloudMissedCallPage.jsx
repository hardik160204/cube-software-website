import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  PhoneMissed, Zap, Users, BarChart, Database, Smartphone, 
  MessageSquare, CheckCircle2, TrendingUp, Clock, PhoneCall, ShieldCheck,
  Network, Mic, Globe, Maximize, BellRing, UserCheck
} from "lucide-react";
import { Button } from "../components/ui/button";
import Navbar from "../components/Navbar";
import { Footer } from "../components/HomeSections2";

export default function CloudMissedCallPage() {
  
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
          headlines and the animated Missed Call vector graphic.
          ========================================================= */}
      <section className="relative w-full pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#0A1F44]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44] via-[#0A1F44] to-blue-900/40 z-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12">
          
          <div className="lg:w-1/2">
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Smart Cloud <br/><span className="text-blue-400">Missed Call Service</span>
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed mb-8 max-w-xl">
              Capture high-quality leads at zero cost to your customers. Run instant verification campaigns, gather feedback, and generate instant opt-ins with a single missed call.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#10b981] hover:bg-[#059669] text-white px-8 h-12 rounded-full shadow-lg transition-transform hover:-translate-y-0.5 text-lg font-bold">
                Start Free Trial
              </Button>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center relative">
            <div className="relative w-[350px] h-[350px] flex items-center justify-center">
               <div className="absolute w-[280px] h-[280px] bg-slate-800 rounded-full border-4 border-slate-700 shadow-2xl flex items-center justify-center z-10">
                  <div className="w-[200px] h-[200px] bg-gradient-to-br from-blue-900 to-slate-900 rounded-full flex items-center justify-center border border-blue-500/30">
                     <PhoneMissed size={80} className="text-red-400 animate-pulse" />
                  </div>
               </div>
               <div className="absolute z-20 top-4 right-10 bg-green-500 p-4 rounded-full shadow-[0_0_30px_rgba(16,185,129,0.4)] animate-bounce" style={{ animationDuration: '3s' }}>
                  <TrendingUp size={24} className="text-white" />
               </div>
               <div className="absolute z-20 bottom-10 left-4 bg-blue-500 p-4 rounded-full shadow-[0_0_30px_rgba(59,130,246,0.4)] animate-bounce" style={{ animationDuration: '4s' }}>
                  <Users size={24} className="text-white" />
               </div>
               <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 350 350">
                  <circle cx="175" cy="175" r="150" fill="none" stroke="#1e293b" strokeWidth="2" strokeDasharray="10 10" className="animate-[spin_20s_linear_infinite]" />
                  <circle cx="175" cy="175" r="110" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="5 5" opacity="0.5" className="animate-[spin_15s_linear_infinite_reverse]" />
               </svg>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 2: WHAT IS MISSED CALL SERVICE? 
          Description: White background, split layout with 4 square
          feature blocks on the left and descriptive text on the right.
          ========================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="aspect-square max-h-[400px] bg-blue-50 rounded-full shadow-inner overflow-hidden relative flex items-center justify-center border-8 border-slate-50">
               <div className="grid grid-cols-2 gap-4 p-8 w-full h-full">
                 <div className="bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300">
                    <Smartphone size={40} className="mb-2" />
                    <span className="font-bold text-sm mt-2">Dial In</span>
                 </div>
                 <div className="bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-300">
                    <PhoneMissed size={40} className="mb-2" />
                    <span className="font-bold text-sm mt-2">Auto-Disconnect</span>
                 </div>
                 <div className="bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-slate-400 hover:bg-slate-700 hover:text-white transition-colors duration-300">
                    <MessageSquare size={40} className="mb-2" />
                    <span className="font-bold text-sm mt-2">Instant SMS</span>
                 </div>
                 <div className="bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition-colors duration-300">
                    <Database size={40} className="mb-2" />
                    <span className="font-bold text-sm mt-2">CRM Capture</span>
                 </div>
               </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-800 mb-6 relative inline-block">
              Zero-Cost <span className="text-blue-600">Lead Generation</span>
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-green-500 rounded-full"></span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              A Missed Call Service provides a dedicated 10-digit virtual number or toll-free number for your business. When a customer dials this number, the call is automatically disconnected after one ring.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Because the call doesn't connect, there is absolutely zero cost to the caller. Meanwhile, your system instantly captures their caller ID, time, and location, allowing you to trigger automated text messages or schedule outbound agent callbacks.
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
              How do <span className="text-blue-600">businesses</span> use Missed Call?
            </h2>
            <div className="w-12 h-1 bg-green-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: BarChart, title: "Frictionless Lead Capture", desc: "Publish your missed call number on billboards or ads. Customers register interest simply by giving a missed call, filling your CRM with verified leads." },
              { icon: UserCheck, title: "COD & Number Verification", desc: "Reduce fake orders and spam accounts. Ask users to verify their mobile numbers by giving a missed call during the checkout or signup process." },
              { icon: Users, title: "Voting & Polling Campaigns", desc: "Assign different missed call numbers to different options. Users vote for their favorite by calling the specific number for free." },
              { icon: Clock, title: "Account Balance & Updates", desc: "Banks and financial apps use it to let users request their account balance. The system auto-replies with an SMS containing the requested data." },
              { icon: CheckCircle2, title: "Opt-In Subscriptions", desc: "Easily build compliance-friendly subscriber lists. Let customers opt-in for newsletters, alerts, and promotions via a quick missed call." },
              { icon: Smartphone, title: "App Download Links", desc: "Tired of broken URLs? Have users give a missed call to instantly receive a direct app download link tailored to their device OS." }
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
          3-step process of Missed Call Services.
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
              { step: 1, title: "Customer Dials the Number", desc: "The user dials your published 10-digit virtual number or toll-free number from their mobile device." },
              { step: 2, title: "Auto-Disconnect at Zero Cost", desc: "The call rings once and is automatically disconnected by the server, ensuring the caller isn't charged a single penny." },
              { step: 3, title: "Instant Automated Action", desc: "The caller ID is captured. Your system instantly sends an automated SMS response, alerts an agent, or updates your CRM." }
            ].map((item, i) => (
              <div key={i} className={`flex flex-col ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 lg:gap-16`}>
                <div className="w-full md:w-1/2 flex justify-center">
                   <div className="w-48 h-48 bg-white/10 rounded-full flex items-center justify-center border-4 border-white/20 backdrop-blur-sm">
                      <PhoneMissed size={64} className="text-white opacity-80" />
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
          SECTION 5: WHY IS IT ESSENTIAL?
          Description: White background grid with 6 borderless 
          icons highlighting enterprise benefits.
          ========================================================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-700 mb-4">
            Why is a Missed Call Number essential <span className="text-blue-600">for your Business?</span>
          </h2>
          <div className="w-12 h-1 bg-green-500 rounded-full mx-auto mb-20"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 text-left">
            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <Network size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Multi-Channel Integration</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Connect your missed call data instantly to email alerts, SMS gateways, and dialer queues.
              </p>
            </div>

            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <Smartphone size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Accessible to Everyone</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Works flawlessly on feature phones and smartphones alike without requiring internet access.
              </p>
            </div>

            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <PhoneCall size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Automated Callbacks</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Integrate directly with an auto-dialer to trigger instant reverse calls the moment a missed call drops.
              </p>
            </div>

            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <Globe size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">National Reach</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Procure regional virtual numbers to give your brand a localized presence across various territories.
              </p>
            </div>

            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <ShieldCheck size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">100% Genuine Leads</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Since users must physically dial from their device, you automatically verify their active phone number.
              </p>
            </div>

            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <BarChart size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Detailed Dashboard</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Track incoming volumes, unique vs repeat callers, and campaign performance in a live analytics dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 6: CAMPAIGN TYPES
          Description: Grey background featuring the 3 core campaign 
          modes.
          ========================================================= */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-800 mb-4">
              Popular <span className="text-blue-600">Campaign Workflows</span>
            </h2>
            <div className="w-12 h-1 bg-green-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform cursor-pointer border border-slate-100 group">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <Database size={32} className="text-blue-600 group-hover:text-white" />
                </div>
                <h3 className="font-bold text-2xl text-slate-800 mb-4">Lead Capture</h3>
                <p className="text-slate-600 leading-relaxed">
                  The moment a missed call is received, the caller's details are injected straight into your CRM and assigned to the next available sales representative.
                </p>
             </div>

             <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform cursor-pointer border border-slate-100 group">
                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500 transition-colors">
                  <MessageSquare size={32} className="text-green-600 group-hover:text-white" />
                </div>
                <h3 className="font-bold text-2xl text-slate-800 mb-4">Auto-Responder SMS</h3>
                <p className="text-slate-600 leading-relaxed">
                  Used for delivering automated information. Users give a missed call and instantly receive a customized SMS containing promo codes, links, or account updates.
                </p>
             </div>

             <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform cursor-pointer border border-slate-100 group">
                <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
                  <BellRing size={32} className="text-purple-600 group-hover:text-white" />
                </div>
                <h3 className="font-bold text-2xl text-slate-800 mb-4">Callback Queuing</h3>
                <p className="text-slate-600 leading-relaxed">
                  During peak hours or after-hours, customers can leave a missed call to avoid holding. Their number is added to a queue, and an agent calls them back automatically.
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
            Ready to generate leads at zero cost?
          </h2>
          <p className="text-blue-200 text-lg mb-10 max-w-2xl mx-auto">
            Give your customers a frictionless way to reach out. Deploy a virtual missed call number today and watch your engagement soar.
          </p>
          <Button className="bg-[#10b981] hover:bg-[#059669] text-white px-10 h-14 rounded-full shadow-lg text-lg font-bold">
            Get Your Number Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}