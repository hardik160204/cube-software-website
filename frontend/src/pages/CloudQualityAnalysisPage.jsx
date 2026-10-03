import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ClipboardCheck, Star, Ear, BarChart, ShieldCheck, 
  Target, Users, FileText, Headset, CheckCircle2, 
  LineChart, MessageSquare, Bot, ListChecks, Award
} from "lucide-react";
import { Button } from "../components/ui/button";
import Navbar from "../components/Navbar";
import { Footer } from "../components/HomeSections2";

export default function CloudQualityAnalysisPage() {
  
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
          headlines and the static QA vector image.
          ========================================================= */}
      <section className="relative w-full pt-32 pb-20 lg:pt-40 lg:pb-12 overflow-hidden bg-[#0A1F44]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44] via-[#0A1F44] to-blue-900/40 z-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12">
          
          <div className="lg:w-1/2">
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              <span className="text-blue-400">Quality Analysis</span>
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed mb-8 max-w-xl">
              Ensure every conversation meets your highest standards. Evaluate agent performance, ensure compliance, and deliver actionable coaching using comprehensive call scoring and analytics.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white px-8 h-12 rounded-md shadow-lg transition-transform hover:-translate-y-0.5">
                Start Evaluating
              </Button>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[500px]">
              {/* STATIC IMAGE PLACEHOLDER */}
              <img 
                src="/qa-hero-vector.svg" /* <-- Update this to your actual image filename */
                alt="Quality Analysis" 
                className="w-full h-auto object-contain drop-shadow-2xl relative z-10 transition-transform lg:scale-105 lg:origin-right hover:scale-110 duration-700"
              />
            </div>
          </div>
          
        </div>
      </section>

      {/* =========================================================
          SECTION 2: WHAT IS QUALITY ANALYSIS? 
          Description: White background, split layout with 4 square
          feature blocks on the left and descriptive text on the right.
          ========================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="aspect-square max-h-[400px] bg-blue-50 rounded-full shadow-inner overflow-hidden relative flex items-center justify-center border-8 border-slate-50">
               <div className="grid grid-cols-2 gap-4 p-8 w-full h-full">
                 <div className="bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300">
                    <Ear size={40} className="mb-2" />
                    <span className="font-bold text-sm mt-2">Listen</span>
                 </div>
                 <div className="bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-green-500 hover:bg-green-500 hover:text-white transition-colors duration-300">
                    <ListChecks size={40} className="mb-2" />
                    <span className="font-bold text-sm mt-2">Score</span>
                 </div>
                 <div className="bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-slate-400 hover:bg-slate-700 hover:text-white transition-colors duration-300">
                    <Target size={40} className="mb-2" />
                    <span className="font-bold text-sm mt-2">Coach</span>
                 </div>
                 <div className="bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-purple-400 hover:bg-purple-500 hover:text-white transition-colors duration-300">
                    <BarChart size={40} className="mb-2" />
                    <span className="font-bold text-sm mt-2">Improve</span>
                 </div>
               </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-800 mb-6 relative inline-block">
              Elevate Your <span className="text-blue-600">Customer Experience</span>
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-green-500 rounded-full"></span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Quality Analysis (QA) is the systematic process of reviewing, scoring, and analyzing customer interactions across your call center to ensure agents are delivering optimal service and adhering to company policies.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              By using custom evaluation forms, audio playback, and analytics, QA managers can identify knowledge gaps, correct behavioral issues, and provide targeted coaching to transform average agents into top performers.
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
              How do <span className="text-blue-600">businesses</span> use QA Software?
            </h2>
            <div className="w-12 h-1 bg-green-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: ShieldCheck, title: "Compliance Verification", desc: "Ensure agents are reading mandatory legal disclaimers, verifying customer identities correctly, and maintaining strict industry compliance." },
              { icon: FileText, title: "Script Adherence", desc: "Score agents on whether they followed the designated sales or support script, ensuring a consistent brand voice across all interactions." },
              { icon: Target, title: "Targeted Coaching", desc: "Identify specific weaknesses (like poor objection handling or lack of empathy) and create personalized coaching plans for individual agents." },
              { icon: Star, title: "Performance Appraisals", desc: "Use objective, data-driven QA scores to determine agent bonuses, promotions, or the need for additional training." },
              { icon: MessageSquare, title: "Customer Sentiment", desc: "Analyze how customers react to certain phrases or policies to refine company-wide messaging and improve customer satisfaction." },
              { icon: Users, title: "Onboarding New Hires", desc: "Play highly-scored benchmark calls to trainees to demonstrate what a 'perfect call' sounds like during the onboarding process." }
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
          3-step QA process.
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
              { step: 1, title: "Call Sampling & Selection", desc: "The system automatically records all calls and intelligently selects a random or filtered sample for the QA team to review." },
              { step: 2, title: "Review & Scorecard Evaluation", desc: "The QA analyst listens to the audio while simultaneously filling out a customized digital evaluation scorecard on the dashboard." },
              { step: 3, title: "Feedback & Agent Sign-Off", desc: "The final score and notes are pushed to the agent's dashboard. The agent reviews the feedback, acknowledges it, and applies the coaching." }
            ].map((item, i) => (
              <div key={i} className={`flex flex-col ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 lg:gap-16`}>
                <div className="w-full md:w-1/2 flex justify-center">
                   <div className="w-48 h-48 bg-white/10 rounded-full flex items-center justify-center border-4 border-white/20 backdrop-blur-sm">
                      {i === 0 ? <Ear size={64} className="text-white opacity-80" /> : i === 1 ? <ClipboardCheck size={64} className="text-white opacity-80" /> : <Target size={64} className="text-white opacity-80" />}
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
          icons highlighting enterprise QA features.
          ========================================================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-700 mb-4">
            Why choose our <span className="text-blue-600">QA Platform?</span>
          </h2>
          <div className="w-12 h-1 bg-green-500 rounded-full mx-auto mb-20"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 text-left">
            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <ListChecks size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Customizable Scorecards</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Build unique evaluation forms with weighted questions, yes/no toggles, and drop-down criteria tailored to different departments.
              </p>
            </div>

            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <Ear size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Live Call Barging & Whisper</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Don't wait for the recording. Supervisors can silently monitor live calls and whisper instructions to agents without the customer hearing.
              </p>
            </div>

            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <LineChart size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Trend Analytics</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Track agent performance over time. View visual heatmaps of common failure points across your entire floor to adjust training protocols.
              </p>
            </div>

            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <MessageSquare size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">In-Line Annotations</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Leave time-stamped comments directly on the audio waveform so agents know exactly which part of the conversation needs improvement.
              </p>
            </div>

            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <CheckCircle2 size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Calibration Workflows</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Ensure all QA analysts score consistently. Have multiple supervisors grade the same call and compare results to standardize your quality benchmarks.
              </p>
            </div>

            <div className="flex flex-col items-start px-4 group">
              <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <Bot size={70} className="text-blue-400 drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Automated Sampling</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Instead of searching manually, set the system to auto-assign 5 random calls per agent per week directly to the QA team's queue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 6: TYPES OF QA
          Description: Grey background featuring the 3 core 
          implementations of quality analysis.
          ========================================================= */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-800 mb-4">
              Methods of <span className="text-blue-600">Evaluation</span>
            </h2>
            <div className="w-12 h-1 bg-green-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform cursor-pointer border border-slate-100 group">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <Headset size={32} className="text-blue-600 group-hover:text-white" />
                </div>
                <h3 className="font-bold text-2xl text-slate-800 mb-4">Manual QA</h3>
                <p className="text-slate-600 leading-relaxed">
                  The traditional approach where a human supervisor listens to call recordings, assesses tone and empathy, and manually scores the interaction using a digital form.
                </p>
             </div>

             <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform cursor-pointer border border-slate-100 group">
                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500 transition-colors">
                  <Bot size={32} className="text-green-600 group-hover:text-white" />
                </div>
                <h3 className="font-bold text-2xl text-slate-800 mb-4">AI-Automated QA</h3>
                <p className="text-slate-600 leading-relaxed">
                  Utilize AI to transcribe calls and automatically flag compliance violations, measure sentiment, and score 100% of interactions without human intervention.
                </p>
             </div>

             <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform cursor-pointer border border-slate-100 group">
                <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
                  <Users size={32} className="text-purple-600 group-hover:text-white" />
                </div>
                <h3 className="font-bold text-2xl text-slate-800 mb-4">Peer & Self Review</h3>
                <p className="text-slate-600 leading-relaxed">
                  Allow agents to listen to and score their own calls, or blindly score their peers. This builds self-awareness and fosters a collaborative coaching environment.
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
            Ready to standardize your service quality?
          </h2>
          <p className="text-blue-200 text-lg mb-10 max-w-2xl mx-auto">
            Stop relying on guesswork. Use data-driven scorecards to coach your team, ensure compliance, and deliver exceptional experiences on every call.
          </p>
          <Button className="bg-[#10b981] hover:bg-[#059669] text-white px-10 h-14 rounded-full shadow-lg text-lg font-bold">
            Start Building Scorecards
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}