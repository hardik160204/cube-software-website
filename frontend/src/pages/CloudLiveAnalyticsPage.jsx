import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  BarChart, Activity, TrendingUp, Monitor, PieChart, 
  Clock, Users, Database, Eye, Zap, Target, LineChart, 
  Download, Filter, BellRing, ShieldCheck, Ear, ArrowUpRight
} from "lucide-react";
import { Button } from "../components/ui/button";
import Navbar from "../components/Navbar";
import { Footer } from "../components/HomeSections2";

export default function CloudLiveAnalyticsPage() {
  
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
          headlines and the static Analytics vector image.
          ========================================================= */}
      <section className="relative w-full pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#0A1F44]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44] via-[#0A1F44] to-blue-900/40 z-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12">
          
          <div className="lg:w-1/2">
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Real-Time <br/><span className="text-blue-400">Live Analytics</span>
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed mb-8 max-w-xl">
              Turn your call data into actionable insights. Monitor live queues, track agent performance, and visualize comprehensive reporting dashboards to make data-driven decisions instantly.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white px-8 h-12 rounded-md shadow-lg transition-transform hover:-translate-y-0.5">
                View Live Dashboard
              </Button>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[500px]">
              {/* STATIC IMAGE PLACEHOLDER */}
              <img 
                src="/analytics-hero-vector.svg" /* <-- Update this to your actual image filename */
                alt="Real-Time Analytics" 
                className="w-full h-auto object-contain drop-shadow-2xl relative z-10 transition-transform lg:scale-105 lg:origin-right hover:scale-110 duration-700"
              />
            </div>
          </div>
          
        </div>
      </section>

      {/* =========================================================
          SECTION 2: WHAT IS LIVE ANALYTICS? 
          Description: White background, split layout with 4 square
          feature blocks on the left and descriptive text on the right.
          ========================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="aspect-square max-h-[400px] bg-blue-50 rounded-full shadow-inner overflow-hidden relative flex items-center justify-center border-8 border-slate-50">
               <div className="grid grid-cols-2 gap-4 p-8 w-full h-full">
                 <div className="bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300">
                    <Activity size={40} className="mb-2" />
                    <span className="font-bold text-sm mt-2">Real-Time</span>
                 </div>
                 <div className="bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-green-500 hover:bg-green-500 hover:text-white transition-colors duration-300">
                    <Monitor size={40} className="mb-2" />
                    <span className="font-bold text-sm mt-2">Wallboards</span>
                 </div>
                 <div className="bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-slate-400 hover:bg-slate-700 hover:text-white transition-colors duration-300">
                    <BarChart size={40} className="mb-2" />
                    <span className="font-bold text-sm mt-2">Custom KPIs</span>
                 </div>
                 <div className="bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-purple-400 hover:bg-purple-500 hover:text-white transition-colors duration-300">
                    <Download size={40} className="mb-2" />
                    <span className="font-bold text-sm mt-2">Auto-Export</span>
                 </div>
               </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-800 mb-6 relative inline-block">
              Stop Guessing, <span className="text-blue-600">Start Measuring</span>
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-green-500 rounded-full"></span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Live Analytics provides supervisors and management with an instant, bird's-eye view of your entire communications infrastructure. From active calls in the queue to individual agent statuses, everything is visualized in real-time.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              By converting raw telephony data into intuitive charts and graphs, our dashboard allows you to identify bottlenecks immediately, monitor Service Level Agreements (SLAs), and dynamically allocate resources before customer wait times increase.
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
              How do <span className="text-blue-600">businesses</span> use Live Analytics?
            </h2>
            <div className="w-12 h-1 bg-green-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Target, title: "SLA Monitoring", desc: "Track average speed of answer (ASA) and first-call resolution (FCR) in real-time to ensure your team is hitting their daily service level targets." },
              { icon: Users, title: "Agent Performance Tracking", desc: "Monitor individual metrics such as total talk time, average handle time (AHT), and idle duration to identify top performers and those needing coaching." },
              { icon: ArrowUpRight, title: "Campaign ROI Analysis", desc: "Compare the call volumes and conversion rates of different virtual numbers to determine which marketing campaigns yield the best ROI." },
              { icon: Ear, title: "Live QA & Coaching", desc: "Supervisors can use the live dashboard to silently monitor active calls, whisper coaching advice to the agent, or barge in to save a critical interaction." },
              { icon: Clock, title: "Peak Hour Staffing", desc: "Analyze historical heatmaps of call volumes by hour and day of the week to accurately forecast and schedule agent shifts." },
              { icon: LineChart, title: "Call Abandonment Analysis", desc: "Identify exactly how long customers wait before hanging up. Use this data to optimize IVR menus, queue music, and routing efficiency." }
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
          3-step process of Analytics generation.
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
              { step: 1, title: "Instant Data Capture", desc: "Every time a call connects, rings, holds, or drops, our cloud servers capture the event data with millisecond precision." },
              { step: 2, title: "Real-Time Processing", desc: "The analytics engine aggregates this massive stream of data, calculating complex metrics like averages and percentages instantly." },
              { step: 3, title: "Visual Dashboard Display", desc: "The processed data is pushed directly to your web-based wallboards and reporting grids, updating live without requiring a page refresh." }
            ].map((item, i) => (
              <div key={i} className={`flex flex-col ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 lg:gap-16`}>
                <div className="w-full md:w-1/2 flex justify-center">
                   <div className="w-48 h-48 bg-white/10 rounded-full flex items-center justify-center border-4 border-white/20 backdrop-blur-sm">
                      {i === 0 ? <Database size={64} className="text-white opacity-80" /> : i === 1 ? <Zap size={64} className="text-white opacity-80" /> : <Monitor size={64} className="text-white opacity-80" />}
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
          icons highlighting enterprise reporting features.
          ========================================================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-700 mb-4">
            Why choose our <span className="text-blue-600">Reporting Suite?</span>
          </h2>
          <div className="w-12 h-1 bg-green-500 rounded-full mx-auto mb-20"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 text-left">
            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <Monitor size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Custom Wallboards</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Design specific layouts to cast on large TV screens on your call center floor. Motivate teams with live leaderboards and critical queue alerts.
              </p>
            </div>

            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <Ear size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Whisper, Snoop & Barge</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Supervisors can click on any live call to listen silently (Snoop), speak only to the agent (Whisper), or join a 3-way conference (Barge-in).
              </p>
            </div>

            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <Filter size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Granular Filtering</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Slice and dice your data. Filter reports by specific date ranges, agent groups, geographic regions, or specific DID numbers.
              </p>
            </div>

            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <BellRing size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Threshold Alerts</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Set custom trigger rules. Receive an instant SMS or Email notification if hold times exceed 5 minutes or if too many agents go on break simultaneously.
              </p>
            </div>

            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <ShieldCheck size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Role-Based Access</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Control who sees what. Grant managers full administrative access while restricting standard agents to only view their own individual performance metrics.
              </p>
            </div>

            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <Download size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Automated Export & APIs</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Schedule end-of-day reports to be emailed automatically as PDFs or Excel files, or use our Analytics API to pull raw data into PowerBI or Tableau.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 6: TYPES OF DASHBOARDS
          Description: Grey background featuring the 3 core 
          dashboard views.
          ========================================================= */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-800 mb-4">
              Comprehensive <span className="text-blue-600">Reporting Views</span>
            </h2>
            <div className="w-12 h-1 bg-green-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform cursor-pointer border border-slate-100 group">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <Users size={32} className="text-blue-600 group-hover:text-white" />
                </div>
                <h3 className="font-bold text-2xl text-slate-800 mb-4">Agent Status Dashboard</h3>
                <p className="text-slate-600 leading-relaxed">
                  A live color-coded view showing exactly what every agent is doing right now (On Call, Available, Wrap-up, Break) and their individual talk time for the day.
                </p>
             </div>

             <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform cursor-pointer border border-slate-100 group">
                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500 transition-colors">
                  <Eye size={32} className="text-green-600 group-hover:text-white" />
                </div>
                <h3 className="font-bold text-2xl text-slate-800 mb-4">Live Queue Monitor</h3>
                <p className="text-slate-600 leading-relaxed">
                  Monitor the pulse of your call center. See exactly how many callers are currently waiting in line, the longest wait time, and the real-time abandonment rate.
                </p>
             </div>

             <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform cursor-pointer border border-slate-100 group">
                <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
                  <PieChart size={32} className="text-purple-600 group-hover:text-white" />
                </div>
                <h3 className="font-bold text-2xl text-slate-800 mb-4">Historical Campaign Reports</h3>
                <p className="text-slate-600 leading-relaxed">
                  Generate deep historical insights over weeks or months. Analyze geographic trends, call outcome dispositions, and overall connection ratios.
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
            Ready to visualize your success?
          </h2>
          <p className="text-blue-200 text-lg mb-10 max-w-2xl mx-auto">
            Stop relying on guesswork. Empower your managers with the real-time data they need to optimize performance and elevate your customer experience.
          </p>
          <Button className="bg-[#10b981] hover:bg-[#059669] text-white px-10 h-14 rounded-full shadow-lg text-lg font-bold">
            Explore Dashboard Features
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}