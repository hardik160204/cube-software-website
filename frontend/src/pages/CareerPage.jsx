import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, CheckCircle2 } from "lucide-react";
import { Button } from "../components/ui/button";
import Navbar from "../components/Navbar";
import { Footer } from "../components/HomeSections2";

export default function CareerPage() {
  
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
          SECTION 1: HERO SECTION (Light & Simple Theme)
          ========================================================= */}
      <section className="relative w-full pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-[#eefbf6] to-white">
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          
          <h1 className="font-heading font-medium text-4xl sm:text-5xl lg:text-[54px] text-slate-900 leading-[1.25] mb-8">
            Join Cube Software, a global <span className="text-[#2563eb]">telecom tech leader,</span> and drive innovation with us!
          </h1>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white px-8 h-12 rounded-md shadow-lg transition-transform hover:-translate-y-0.5">
              Explore Open Roles <ArrowRight size={16} className="ml-2" />
            </Button>
            <Button size="lg" className="bg-transparent border border-white/30 text-black hover:bg-white/10 px-8 h-12 rounded-md transition-all">
              Quick Apply <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>

        </div>
      </section>

      {/* =========================================================
          SECTION 2: FLOATING OPEN ROLES BOX
          ========================================================= */}
      <div className="relative z-20 -mt-10 max-w-5xl mx-auto px-4 sm:px-6 mb-24">
        <div className="bg-[#eefbf6] rounded-[2rem] shadow-sm border border-[#b8ecd9] p-8 sm:p-12 text-center">
          <h3 className="font-heading font-bold text-2xl text-slate-900 mb-8">Top Open Roles</h3>
          
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {[
              "Product Manager, AI",
              "Senior Product Manager, Machine Learning",
              "Senior Software Engineer",
              "Software Developer",
              "Senior Data Analyst",
              "Pre-Sales Analyst – Data & Analytics"
            ].map((role, i) => (
              <span key={i} className="px-5 py-2.5 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-slate-100 rounded-xl text-sm font-medium text-slate-700 hover:border-[#38bda9] hover:text-[#38bda9] cursor-pointer transition-colors">
                {role}
              </span>
            ))}
            {/* View More Button inside the grid */}
            <Button className="bg-[#38bda9] hover:bg-[#2aa895] text-white px-6 h-auto py-2.5 rounded-xl text-sm font-bold shadow-sm border-none transition-transform hover:-translate-y-0.5">
              View More
            </Button>
          </div>
        </div>
      </div>

      {/* =========================================================
          SECTION 3: LIFE & CULTURE (Text Left, Image Right)
          ========================================================= */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h4 className="text-blue-500 font-medium text-xl mb-2">Life</h4>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900 mb-8">
              A Glimpse into our Culture
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-800 mt-2 shrink-0"></div>
                <p className="text-slate-700"><strong className="text-slate-900">Innovation-Driven Culture</strong> – More than a goal, it's a way of life.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-800 mt-2 shrink-0"></div>
                <p className="text-slate-700"><strong className="text-slate-900">Collaborate, Create, Celebrate</strong> – Every milestone is a shared success.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-800 mt-2 shrink-0"></div>
                <p className="text-slate-700"><strong className="text-slate-900">Thriving Ideas & Talent Growth</strong> – A space where creativity flourishes.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-800 mt-2 shrink-0"></div>
                <p className="text-slate-700"><strong className="text-slate-900">Teamwork at the Core</strong> – Success is built on collective effort.</p>
              </li>
            </ul>
            <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 h-12 rounded-full font-medium">
              Explore Gallery
            </Button>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80" 
              alt="Team Culture" 
              className="rounded-3xl shadow-xl object-cover w-full h-[400px]"
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 4: WORK (Image Left, Text Right)
          ========================================================= */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col-reverse lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80" 
              alt="Office Work" 
              className="rounded-3xl shadow-xl object-cover w-full h-[400px]"
            />
          </div>
          <div className="lg:w-1/2">
            <h4 className="text-blue-500 font-medium text-xl mb-2">Work</h4>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900 mb-8">
              Where Passion Fuels Progress
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-800 mt-2 shrink-0"></div>
                <p className="text-slate-700"><strong className="text-slate-900">Dynamic & Fast-Paced</strong> – A workplace that keeps you engaged.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-800 mt-2 shrink-0"></div>
                <p className="text-slate-700"><strong className="text-slate-900">Passion-Driven</strong> – Encouraging bold ideas and breakthroughs.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-800 mt-2 shrink-0"></div>
                <p className="text-slate-700"><strong className="text-slate-900">Ownership & Responsibility</strong> – Empowering individuals to lead.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-800 mt-2 shrink-0"></div>
                <p className="text-slate-700"><strong className="text-slate-900">Global Impact</strong> – Driving AI and telecom innovations worldwide.</p>
              </li>
            </ul>
            <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 h-12 rounded-full font-medium">
              Explore Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 5: CAREER DEVELOPMENT (Text Left, Image Right)
          ========================================================= */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h4 className="text-blue-500 font-medium text-xl mb-2">Career Development</h4>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900 mb-8">
              Unlock Your Potential
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-800 mt-2 shrink-0"></div>
                <p className="text-slate-700"><strong className="text-slate-900">Curiosity & Creativity Valued</strong> – A space for thinkers and doers.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-800 mt-2 shrink-0"></div>
                <p className="text-slate-700"><strong className="text-slate-900">More Than a Job</strong> – A career with purpose and growth.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-800 mt-2 shrink-0"></div>
                <p className="text-slate-700"><strong className="text-slate-900">Innovate & Shape the Future</strong> – Be part of AI-driven transformation.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-800 mt-2 shrink-0"></div>
                <p className="text-slate-700"><strong className="text-slate-900">Opportunities for Growth</strong> – Continuous learning and skill development.</p>
              </li>
            </ul>
            <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 h-12 rounded-full font-medium">
              Explore Gallery
            </Button>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1000&q=80" 
              alt="Career Development" 
              className="rounded-3xl shadow-xl object-cover w-full h-[400px]"
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 6: OUR CULTURE QUOTE
          ========================================================= */}
      <section className="py-24 bg-blue-50/50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading font-black text-4xl text-center text-slate-900 mb-16">
            Our Culture
          </h2>
          
          <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-slate-200 shrink-0 h-[300px] md:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80" 
                alt="CHRO" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-2/3 p-10 sm:p-14 flex flex-col justify-center">
              <p className="text-slate-600 text-lg leading-relaxed mb-8 font-medium">
                Our culture is built on a foundation of collaboration, innovation, and a relentless pursuit of excellence. We believe that every voice matters, and we actively encourage open communication, diverse perspectives, and a willingness to take calculated risks. Our team is united by a shared passion and we empower each other to reach our full potential. Together, let's continue to build a workplace where we can not only achieve great things, but also thrive personally and professionally.
              </p>
              <div>
                <h4 className="font-bold text-xl text-slate-900">Atul Tiwari</h4>
                <p className="text-slate-500">Chief Human Resources Officer (CHRO)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 7: CALL TO ACTION
          ========================================================= */}
      <section className="py-24 bg-[#0A1F44] relative overflow-hidden">
        {/* Abstract Background Elements matching Cube's theme */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
            Ready To Experience The Impact First-Hand?
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Get on a call with us to explore how Cube Software can directly contribute to your business goals and success.
          </p>
          <Button className="bg-transparent border border-white hover:bg-white hover:text-[#0A1F44] text-white px-10 h-14 rounded-full text-lg font-bold transition-colors">
            Contact Us
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}