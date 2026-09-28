import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ShieldCheck, PhoneCall, EyeOff, Lock, UserX, Car, 
  ShoppingBag, Heart, Stethoscope, Smartphone, Network, 
  Database, Clock, MessageSquare, LineChart, FileAudio,
  Shield, Key, Link as LinkIcon
} from "lucide-react";
import { Button } from "../components/ui/button";
import Navbar from "../components/Navbar";
import { Footer } from "../components/HomeSections2";

export default function CloudNumberMaskingPage() {
  
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
          headlines and the animated Masking/Security vector graphic.
          ========================================================= */}
      <section className="relative w-full pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#0A1F44]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44] via-[#0A1F44] to-blue-900/40 z-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12">
          
          <div className="lg:w-1/2">
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Secure Cloud <br/><span className="text-blue-400">Number Masking</span>
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed mb-8 max-w-xl">
              Protect the privacy of your customers and agents. Facilitate seamless voice and SMS communication without ever revealing personal phone numbers on either side.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#10b981] hover:bg-[#059669] text-white px-8 h-12 rounded-full shadow-lg transition-transform hover:-translate-y-0.5 text-lg font-bold">
                Secure Your Calls
              </Button>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center relative">
            <div className="relative w-[350px] h-[350px] flex items-center justify-center">
               {/* Core Vector - Shield/Privacy Base */}
               <div className="absolute w-[280px] h-[280px] bg-slate-800 rounded-full border-4 border-slate-700 shadow-2xl flex items-center justify-center z-10">
                  <div className="w-[200px] h-[200px] bg-gradient-to-br from-blue-900 to-slate-900 rounded-full flex flex-col items-center justify-center border border-blue-500/30">
                     <ShieldCheck size={60} className="text-[#10b981] animate-pulse mb-2" />
                     <EyeOff size={30} className="text-white opacity-80" />
                  </div>
               </div>
               
               {/* Floating Orbital Vectors */}
               <div className="absolute z-20 top-4 right-10 bg-blue-500 p-4 rounded-full shadow-[0_0_30px_rgba(59,130,246,0.4)] animate-bounce" style={{ animationDuration: '3s' }}>
                  <PhoneCall size={24} className="text-white" />
               </div>
               <div className="absolute z-20 bottom-10 left-4 bg-purple-500 p-4 rounded-full shadow-[0_0_30px_rgba(168,85,247,0.4)] animate-bounce" style={{ animationDuration: '4s' }}>
                  <Lock size={24} className="text-white" />
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
          SECTION 2: WHAT IS NUMBER MASKING? 
          Description: White background, split layout with 4 square
          feature blocks on the left and descriptive text on the right.
          ========================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="aspect-square max-h-[400px] bg-blue-50 rounded-full shadow-inner overflow-hidden relative flex items-center justify-center border-8 border-slate-50">
               <div className="grid grid-cols-2 gap-4 p-8 w-full h-full">
                 <div className="bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300">
                    <Shield size={40} className="mb-2" />
                    <span className="font-bold text-sm mt-2">Privacy First</span>
                 </div>
                 <div className="bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-green-500 hover:bg-green-500 hover:text-white transition-colors duration-300">
                    <EyeOff size={40} className="mb-2" />
                    <span className="font-bold text-sm mt-2">Hidden ID</span>
                 </div>
                 <div className="bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-slate-400 hover:bg-slate-700 hover:text-white transition-colors duration-300">
                    <LinkIcon size={40} className="mb-2" />
                    <span className="font-bold text-sm mt-2">Secure Bridge</span>
                 </div>
                 <div className="bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-purple-400 hover:bg-purple-500 hover:text-white transition-colors duration-300">
                    <UserX size={40} className="mb-2" />
                    <span className="font-bold text-sm mt-2">Anti-Poach</span>
                 </div>
               </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-800 mb-6 relative inline-block">
              Absolute Privacy for <span className="text-blue-600">Every Call</span>
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-green-500 rounded-full"></span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Number Masking (or Call Anonymization) is a cloud telephony feature that connects two parties on a phone call without revealing either person's actual phone number.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Instead of dialing directly, both parties are connected through a temporary virtual number. This ensures absolute privacy, prevents off-platform transactions, and keeps personal data safe from misuse, making it essential for modern aggregators and marketplaces.
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
              How do <span className="text-blue-600">businesses</span> use Call Masking?
            </h2>
            <div className="w-12 h-1 bg-green-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Car, title: "Ride Hailing & Taxis", desc: "Connect drivers and riders seamlessly. Both can call each other regarding pickups without ever seeing the other person's real mobile number." },
              { icon: ShoppingBag, title: "E-Commerce Delivery", desc: "Allow delivery executives to call customers for location directions while keeping the customer's personal data completely hidden." },
              { icon: Heart, title: "Dating & Matrimony", desc: "Provide a safe environment for users to speak on the phone before meeting in person, without compromising their personal contact info." },
              { icon: UserX, title: "Preventing Poaching", desc: "Ensure your vendors and clients communicate only through your platform, preventing them from bypassing your marketplace for direct deals." },
              { icon: Stethoscope, title: "Telemedicine", desc: "Connect doctors and patients for private health consultations while maintaining strict HIPAA compliance and protecting doctor privacy." },
              { icon: Database, title: "Recruitment & HR", desc: "Allow recruiters to interview candidates via masked numbers, keeping the recruiters' direct lines free from unsolicited callbacks." }
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
          3-step process of Number Masking.
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
              { step: 1, title: "The Call is Triggered", desc: "A user taps 'Call Driver' in your app. Instead of dialing the driver directly, the app initiates a call to a temporary virtual proxy number." },
              { step: 2, title: "The Server Masks IDs", desc: "Our cloud telephony engine receives the call, hides the caller's real number, and looks up the driver's actual number in your database." },
              { step: 3, title: "Secure Call Bridging", desc: "The server dials the driver. When the driver looks at their phone, they only see the proxy virtual number, ensuring 100% two-way anonymity." }
            ].map((item, i) => (
              <div key={i} className={`flex flex-col ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 lg:gap-16`}>
                <div className="w-full md:w-1/2 flex justify-center">
                   <div className="w-48 h-48 bg-white/10 rounded-full flex items-center justify-center border-4 border-white/20 backdrop-blur-sm">
                      {i === 0 ? <Smartphone size={64} className="text-white opacity-80" /> : i === 1 ? <ShieldCheck size={64} className="text-white opacity-80" /> : <LinkIcon size={64} className="text-white opacity-80" />}
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
          icons highlighting enterprise masking features.
          ========================================================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-700 mb-4">
            Why choose our <span className="text-blue-600">Masking API?</span>
          </h2>
          <div className="w-12 h-1 bg-green-500 rounded-full mx-auto mb-20"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 text-left">
            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <Network size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Two-Way Masking</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Absolute protection on both sides of the conversation. The caller and the receiver only ever see the proxy virtual number on their caller IDs.
              </p>
            </div>

            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <Clock size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Time-Bound Expiration</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Sessions can be programmed to expire. Once a food delivery is marked 'Delivered', the virtual number immediately stops connecting the two parties.
              </p>
            </div>

            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <FileAudio size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Call Recording</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Every masked conversation can be recorded and archived to your servers for quality assurance and rapid dispute resolution.
              </p>
            </div>

            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <LineChart size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Detailed Analytics</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Track missed calls, average talk time, and connection success rates to ensure your drivers or agents are communicating effectively.
              </p>
            </div>

            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <MessageSquare size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Omnichannel (Voice & SMS)</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Masking isn't just for calls. Allow users to send SMS texts through the proxy number, protecting privacy across all communication mediums.
              </p>
            </div>

            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <Key size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Developer Friendly API</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Integrate masking seamlessly into your proprietary mobile app or backend software using our well-documented REST APIs and Webhooks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 6: TYPES OF MASKING
          Description: Grey background featuring the 3 core 
          implementations of masking.
          ========================================================= */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-800 mb-4">
              Implementation <span className="text-blue-600">Methods</span>
            </h2>
            <div className="w-12 h-1 bg-green-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform cursor-pointer border border-slate-100 group">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <PhoneCall size={32} className="text-blue-600 group-hover:text-white" />
                </div>
                <h3 className="font-bold text-2xl text-slate-800 mb-4">Voice Call Masking</h3>
                <p className="text-slate-600 leading-relaxed">
                  The standard implementation. A customer and a service provider are bridged via a virtual proxy number to communicate via voice while keeping personal IDs hidden.
                </p>
             </div>

             <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform cursor-pointer border border-slate-100 group">
                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500 transition-colors">
                  <MessageSquare size={32} className="text-green-600 group-hover:text-white" />
                </div>
                <h3 className="font-bold text-2xl text-slate-800 mb-4">SMS Masking</h3>
                <p className="text-slate-600 leading-relaxed">
                  Perfect for automated alerts. Delivery executives can text "I have arrived" to a proxy number, which forwards the text to the customer without exposing the driver's number.
                </p>
             </div>

             <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform cursor-pointer border border-slate-100 group">
                <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
                  <Clock size={32} className="text-purple-600 group-hover:text-white" />
                </div>
                <h3 className="font-bold text-2xl text-slate-800 mb-4">Temporary Bridging</h3>
                <p className="text-slate-600 leading-relaxed">
                  Generate disposable phone numbers that only last for the duration of a transaction (e.g., an active Uber ride). Once the ride is over, the number is recycled.
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
            Ready to secure your platform?
          </h2>
          <p className="text-blue-200 text-lg mb-10 max-w-2xl mx-auto">
            Protect your users' privacy, prevent platform leakage, and maintain complete control over your business communications.
          </p>
          <Button className="bg-[#10b981] hover:bg-[#059669] text-white px-10 h-14 rounded-full shadow-lg text-lg font-bold">
            Implement Masking API
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}