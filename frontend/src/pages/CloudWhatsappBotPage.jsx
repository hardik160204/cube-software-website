import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  MessageCircle, Bot, Smartphone, Users, BarChart, Database, 
  ShieldCheck, Zap, TrendingUp, Clock, Globe, Maximize, 
  ShoppingBag, Send, CheckCircle2, Image as ImageIcon, Network 
} from "lucide-react";
import { Button } from "../components/ui/button";
import Navbar from "../components/Navbar";
import { Footer } from "../components/HomeSections2";

export default function CloudWhatsappBotPage() {
  
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
          headlines and the animated WhatsApp/Bot vector graphic.
          ========================================================= */}
      <section className="relative w-full pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#0A1F44]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44] via-[#0A1F44] to-blue-900/40 z-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12">
          
          <div className="lg:w-1/2">
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Smart Cloud <br/><span className="text-[#25D366]">WhatsApp API & Bot</span>
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed mb-8 max-w-xl">
              Engage your customers where they already are. Build intelligent conversational workflows, automate customer support, and drive sales 24/7 through the official WhatsApp Business API.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#10b981] hover:bg-[#059669] text-white px-8 h-12 rounded-full shadow-lg transition-transform hover:-translate-y-0.5 text-lg font-bold">
                Get WhatsApp API
              </Button>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center relative">
            <div className="relative w-[350px] h-[350px] flex items-center justify-center">
               {/* Core Vector - Smartphone / Bot Base */}
               <div className="absolute w-[280px] h-[280px] bg-slate-800 rounded-full border-4 border-slate-700 shadow-2xl flex items-center justify-center z-10">
                  <div className="w-[200px] h-[200px] bg-gradient-to-br from-slate-900 to-[#0A1F44] rounded-full flex items-center justify-center border border-[#25D366]/30">
                     <Bot size={80} className="text-[#25D366] animate-pulse" />
                  </div>
               </div>
               
               {/* Floating Orbital Vectors */}
               <div className="absolute z-20 top-4 right-10 bg-[#25D366] p-4 rounded-full shadow-[0_0_30px_rgba(37,211,102,0.4)] animate-bounce" style={{ animationDuration: '3s' }}>
                  <MessageCircle size={24} className="text-white" />
               </div>
               <div className="absolute z-20 bottom-10 left-4 bg-blue-500 p-4 rounded-full shadow-[0_0_30px_rgba(59,130,246,0.4)] animate-bounce" style={{ animationDuration: '4s' }}>
                  <Zap size={24} className="text-white" />
               </div>

               {/* Radiating Signal Rings */}
               <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 350 350">
                  <circle cx="175" cy="175" r="150" fill="none" stroke="#25D366" strokeWidth="2" strokeDasharray="15 15" className="animate-[spin_10s_linear_infinite]" opacity="0.6" />
                  <circle cx="175" cy="175" r="110" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="10 10" opacity="0.4" className="animate-[spin_8s_linear_infinite_reverse]" />
               </svg>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 2: WHAT IS A WHATSAPP CHAT BOT? 
          Description: White background, split layout with 4 square
          feature blocks on the left and descriptive text on the right.
          ========================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="aspect-square max-h-[400px] bg-green-50 rounded-full shadow-inner overflow-hidden relative flex items-center justify-center border-8 border-slate-50">
               <div className="grid grid-cols-2 gap-4 p-8 w-full h-full">
                 <div className="bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors duration-300">
                    <MessageCircle size={40} className="mb-2" />
                    <span className="font-bold text-sm mt-2">Chat UX</span>
                 </div>
                 <div className="bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-300">
                    <Bot size={40} className="mb-2" />
                    <span className="font-bold text-sm mt-2">AI Logic</span>
                 </div>
                 <div className="bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-slate-400 hover:bg-slate-700 hover:text-white transition-colors duration-300">
                    <Database size={40} className="mb-2" />
                    <span className="font-bold text-sm mt-2">CRM Sync</span>
                 </div>
                 <div className="bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-purple-400 hover:bg-purple-500 hover:text-white transition-colors duration-300">
                    <Users size={40} className="mb-2" />
                    <span className="font-bold text-sm mt-2">Multi-Agent</span>
                 </div>
               </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-800 mb-6 relative inline-block">
              Conversational Commerce <span className="text-[#25D366]">Made Simple</span>
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-500 rounded-full"></span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              A WhatsApp Chat Bot runs on the official WhatsApp Business API. It allows you to build automated, interactive chat workflows that instantly respond to customer queries, resolve issues, and collect lead data.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Instead of forcing users to download an app or visit a website, you bring your business directly to their favorite messaging app. Transition smoothly from an automated AI bot to a live human agent whenever a complex issue arises.
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
              How do <span className="text-[#25D366]">businesses</span> use WhatsApp Bots?
            </h2>
            <div className="w-12 h-1 bg-blue-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Clock, title: "24/7 Customer Support", desc: "Automate answers to FAQs like business hours, location, and refund policies. Instantly resolve common issues without human intervention." },
              { icon: ShoppingBag, title: "E-Commerce & Orders", desc: "Send automated order confirmations, shipping updates, and delivery tracking links directly to the customer's WhatsApp inbox." },
              { icon: TrendingUp, title: "Lead Generation", desc: "Capture user details through a conversational flow. Automatically qualify leads and push their data instantly into your CRM." },
              { icon: Send, title: "Appointment Booking", desc: "Allow users to check availability and book appointments or reservations seamlessly through quick-reply buttons and list menus." },
              { icon: ImageIcon, title: "Rich Media Marketing", desc: "Send promotional broadcasts with interactive buttons, images, videos, and PDF catalogs to drive higher engagement and conversion rates." },
              { icon: Users, title: "HR & Internal Comms", desc: "Deploy internal bots for your employees to check leave balances, access company policies, or automate IT support tickets." }
            ].map((card, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-50 text-[#25D366] rounded-full flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-white transition-colors">
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
          3-step process of WhatsApp Automation.
          ========================================================= */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-white mb-4">
              How It Works
            </h2>
            <div className="w-12 h-1 bg-[#25D366] rounded-full mx-auto"></div>
          </div>

          <div className="space-y-12">
            {[
              { step: 1, title: "Connect the API", desc: "We link your official business phone number to the WhatsApp Business API and apply for your verified Green Tick profile." },
              { step: 2, title: "Design Conversational Flows", desc: "Use our intuitive drag-and-drop builder to create response trees, interactive menus, and API webhooks linked to your software." },
              { step: 3, title: "Launch & Automate", desc: "Go live. The bot instantly handles thousands of simultaneous chats, routing complex inquiries to a unified live-agent inbox." }
            ].map((item, i) => (
              <div key={i} className={`flex flex-col ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 lg:gap-16`}>
                <div className="w-full md:w-1/2 flex justify-center">
                   <div className="w-48 h-48 bg-white/10 rounded-full flex items-center justify-center border-4 border-white/20 backdrop-blur-sm">
                      <Smartphone size={64} className="text-white opacity-80" />
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
          icons highlighting enterprise API features.
          ========================================================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-700 mb-4">
            Why choose our <span className="text-[#25D366]">WhatsApp Solution?</span>
          </h2>
          <div className="w-12 h-1 bg-blue-500 rounded-full mx-auto mb-20"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 text-left">
            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <CheckCircle2 size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Green Tick Verification</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Build unparalleled trust. We assist eligible brands in securing the official WhatsApp Green Tick verification badge next to their profile name.
              </p>
            </div>

            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <Users size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Multi-Agent Shared Inbox</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Connect a single WhatsApp number to multiple customer support agents simultaneously. View, assign, and resolve chats collaboratively.
              </p>
            </div>

            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <Database size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">API & CRM Integration</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Seamlessly connect the chatbot to Shopify, Salesforce, Zoho, or your custom ERP to push and pull data directly within the chat interface.
              </p>
            </div>

            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <ImageIcon size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Rich Interactive Media</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Go beyond plain text. Send clickable quick-reply buttons, product catalogs, list menus, location pins, and PDF documents.
              </p>
            </div>

            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <ShieldCheck size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Enterprise Grade Security</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Maintain strict data privacy compliance. All API communications leverage WhatsApp's robust end-to-end encryption protocols.
              </p>
            </div>

            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <BarChart size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Analytics & Dashboards</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Track message delivery rates, read receipts, bot drop-off points, and human-agent resolution times via a comprehensive dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 6: CAMPAIGN TYPES
          Description: Grey background featuring the core types 
          of chat bots.
          ========================================================= */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-800 mb-4">
              Types of <span className="text-[#25D366]">Bot Architectures</span>
            </h2>
            <div className="w-12 h-1 bg-blue-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform cursor-pointer border border-slate-100 group">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <Bot size={32} className="text-blue-600 group-hover:text-white" />
                </div>
                <h3 className="font-bold text-2xl text-slate-800 mb-4">Rule-Based Bots</h3>
                <p className="text-slate-600 leading-relaxed">
                  Provide guided paths using predefined buttons and menus. Perfect for structured tasks like collecting lead information, booking appointments, or navigating FAQs.
                </p>
             </div>

             <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform cursor-pointer border border-slate-100 group">
                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#25D366] transition-colors">
                  <Zap size={32} className="text-[#25D366] group-hover:text-white" />
                </div>
                <h3 className="font-bold text-2xl text-slate-800 mb-4">NLP / AI Bots</h3>
                <p className="text-slate-600 leading-relaxed">
                  Powered by Natural Language Processing (NLP). Users can type open-ended questions like "Where is my order?" and the AI understands intent to fetch the correct data.
                </p>
             </div>

             <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform cursor-pointer border border-slate-100 group">
                <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
                  <Network size={32} className="text-purple-600 group-hover:text-white" />
                </div>
                <h3 className="font-bold text-2xl text-slate-800 mb-4">Hybrid Support Model</h3>
                <p className="text-slate-600 leading-relaxed">
                  The bot acts as the frontline defense, handling 80% of routine queries. When an issue requires empathy or complex troubleshooting, it seamlessly transfers chat history to a live agent.
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
            Ready to engage 2 Billion+ WhatsApp users?
          </h2>
          <p className="text-blue-200 text-lg mb-10 max-w-2xl mx-auto">
            Transform how you communicate with your customers. Automate support, blast promotional messages, and scale your brand globally today.
          </p>
          <Button className="bg-[#10b981] hover:bg-[#059669] text-white px-10 h-14 rounded-full shadow-lg text-lg font-bold">
            Get Started with WhatsApp API
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}