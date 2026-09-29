import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Camera, Briefcase, Award, Zap, MessageSquare, Globe, ChevronRight, Coffee
} from "lucide-react";
import { Button } from "../components/ui/button";
import Navbar from "../components/Navbar";
import { Footer } from "../components/HomeSections2";

// Placeholder for the office team hero background
const TEAM_HERO_IMAGE = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80";

export default function MeetOurTeamPage() {
  
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
          SECTION 1: HERO SECTION (Dark Blue Theme + Image Overlay)
          ========================================================= */}
      {/* Reduced height to leave space at the bottom, removed the right-side graphic entirely */}
      <section className="relative w-full h-[75vh] min-h-[600px] flex flex-col overflow-hidden bg-[#0A1F44]">
        
        {/* Background Image Placeholder */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center z-0 opacity-40" 
          style={{ backgroundImage: `url(${TEAM_HERO_IMAGE})` }} 
        />
        
        {/* Dark gradient overlay blending seamlessly */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1F44]/90 via-[#0A1F44]/70 to-[#0A1F44] z-0 pointer-events-none" />
        
        {/* INVISIBLE TOP SPACER (Pushes content safely below the fixed Navbar) */}
        <div className="w-full h-24 lg:h-32 shrink-0 pointer-events-none z-10"></div>

        <div className="relative z-20 flex-grow flex flex-col justify-center w-full max-w-7xl mx-auto px-4 sm:px-6 pb-8 sm:pb-12">
          
          <div className="max-w-3xl">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-1.5 text-xs text-white mb-6">
              <Link to="/" className="hover:text-gray-300 transition-colors">Home</Link>
              <ChevronRight size={13} />
              <span className="text-white font-semibold">Meet Our Team</span>
            </nav>

            {/* Text changed to all white */}
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              The Minds Behind <br/>Smart Cloud Telephony
            </h1>
            
            <p className="text-lg text-white leading-relaxed mb-8 max-w-xl">
              We are a collective of engineers, innovators, and customer success champions dedicated to revolutionizing how businesses communicate globally.
            </p>
            
            <div className="flex flex-wrap gap-4">
              {/* Button redesigned to match your reference exactly and linked to Career page */}
              <Link to="/career">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white px-8 h-12 rounded-md shadow-lg transition-transform hover:-translate-y-0.5">
                  Career
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          SECTION 2: OUR PHILOSOPHY
          ========================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-800 mb-6">
            Our Core <span className="text-blue-600">Values</span>
          </h2>
          <div className="w-12 h-1 bg-red-500 rounded-full mx-auto mb-16"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <Zap size={40} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-slate-900">Innovation First</h3>
              <p className="text-slate-600 text-center leading-relaxed">
                We don't just follow industry trends; we build the features that define the future of cloud communication.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                <Globe size={40} className="text-green-500" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-slate-900">Customer Centric</h3>
              <p className="text-slate-600 text-center leading-relaxed">
                Every line of code we write and every server we deploy is designed to make our customers' lives easier and their businesses more profitable.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center mb-6">
                <Award size={40} className="text-purple-500" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-slate-900">Uncompromising Quality</h3>
              <p className="text-slate-600 text-center leading-relaxed">
                We believe in 99.99% uptime, crystal clear audio, and delivering a premium enterprise experience to businesses of all sizes.
              </p>
            </div>
          </div>
        </div>
      </section>

{/* =========================================================
          SECTION 3: LEADERSHIP TEAM
          ========================================================= */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-800 mb-4">
              Meet Our <span className="text-blue-600">Leadership</span>
            </h2>
            <div className="w-12 h-1 bg-red-500 rounded-full mx-auto"></div>
            <p className="text-slate-500 mt-6 max-w-2xl mx-auto">
              Guiding our vision with decades of combined experience in telecommunications, software engineering, and enterprise strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Praveen Varshney",
                role: "Director",
                image: "praveensir-image.png",
                bio: "Visionary leader driving innovation in cloud telecommunications for over 20 years. Praveen spearheads our strategic growth, consistently forging enterprise partnerships that define the future of global connectivity.",
                linkedin: "#"
              },
              {
                name: "Nirupma Kumar Sinha",
                role: "Director",
                image: "sinha-sir-image.webp",
                bio: "Driving operational excellence and corporate governance across all divisions. Nirupma ensures sustainable long-term value for our enterprise partners through meticulous strategy and risk management.",
                linkedin: "#"
              },
              {
                name: "Rajeev Varshney",
                role: "Chief Technical Officer",
                image: "rajeev-sir-image.webp",
                bio: "The architect behind our robust, highly scalable, zero-downtime cloud infrastructure. Rajeev leads our core R&D initiatives, pushing the boundaries of AI-driven telecommunications.",
                linkedin: "#"
              },
              {
                name: "Vivek Gupta",
                role: "Chief Operating Officer",
                image: "vivek-sir-image.webp",
                bio: "Mastermind behind our seamless day-to-day operations and unmatched customer success delivery. Vivek streamlines cross-functional team efficiencies to ensure rapid product deployment.",
                linkedin: "https://www.linkedin.com/in/vivek-gupta-056b5230"
              },
              {
                name: "Surendra Kumar",
                role: "Head Of Finance Department",
                image: "surendar-sir-image.webp",
                bio: "Crafting our global brand narrative and expanding our market footprint. Anita leverages data-driven digital strategies to position Cube Software as the undisputed leader in cloud telephony.",
                linkedin: "#"
              },
              {
                name: "Imran Ahmad",
                role: "VP Direct Sales",
                image: "imran-sir-image.webp",
                bio: "Building lasting relationships with Fortune 500 clients. Ravi leads our high-performance global sales organization, tailoring complex communication architectures to meet specific client needs.",
                linkedin: "#"
              }
            ].map((member, index) => (
              <div key={index} className="relative group">
                {/* Main Card */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 transition-all duration-300 group-hover:shadow-2xl h-full flex flex-col z-10 relative">
                  
                  {/* Image Section */}
                  <div className="h-72 bg-slate-200 w-full overflow-hidden shrink-0">
                    <img 
                      src={member.image} 
                      alt={member.role} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  
                  {/* Content Section (Always Visible) */}
                  <div className="p-6 text-center bg-white flex-1">
                    <h3 className="font-bold text-xl text-slate-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-medium">{member.role}</p>
                  </div>
                </div>

                {/* OVERLAPPING POPUP BIO (Absolute positioning allows it to float over the grid) */}
                <div className="absolute left-0 right-0 top-full -mt-4 bg-white rounded-b-3xl shadow-2xl border-x border-b border-slate-100 p-6 text-center opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">
                    {member.bio}
                  </p>
                  
                  {/* LinkedIn Button */}
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#f8fafc] border border-slate-200 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-colors duration-300 shadow-sm"
                    aria-label={`${member.name} LinkedIn Profile`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 4: LIFE AT CUBE SOFTWARE (OFFICE FUNCTIONS)
          ========================================================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-800 mb-4">
                Life at <span className="text-blue-600">Cube Software</span>
              </h2>
              <div className="w-12 h-1 bg-red-500 rounded-full"></div>
              <p className="text-slate-500 mt-6 max-w-2xl">
                We work hard, but we celebrate harder. From annual retreats to festive office functions, our culture is built on collaboration, creativity, and community.
              </p>
            </div>
            <div className="mt-6 md:mt-0 flex items-center gap-2 text-blue-600 font-bold bg-blue-50 px-4 py-2 rounded-full">
              <Camera size={20} />
              <span>Inside Our World</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
            
            <div className="md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden relative group">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" alt="Team Collaboration" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-bold text-xl">Annual Strategy Meetup</p>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden relative group">
              <img src="https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80&w=600" alt="Office Function" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-bold text-lg">Diwali Celebrations</p>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden relative group">
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600" alt="Team Lunch" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-bold text-lg">Team Success Lunch</p>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden relative group">
              <img src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=600" alt="Awards Night" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-bold text-lg">Annual Awards Night</p>
              </div>
            </div>

            <div className="md:col-span-2 rounded-3xl overflow-hidden relative group">
              <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200" alt="Corporate Event" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-bold text-xl">Tech Conference 2024</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 5: DEPARTMENTS
          ========================================================= */}
      <section className="py-20 bg-blue-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-800 mb-4">
              The Engines of <span className="text-blue-600">Our Growth</span>
            </h2>
            <div className="w-12 h-1 bg-red-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
             <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:-translate-y-2 transition-transform">
               <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                 <Zap size={28} className="text-blue-600" />
               </div>
               <h3 className="font-bold text-lg mb-2">Engineering</h3>
               <p className="text-sm text-slate-500">Building scalable, secure infrastructure and pushing product features.</p>
             </div>

             <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:-translate-y-2 transition-transform">
               <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                 <MessageSquare size={28} className="text-green-500" />
               </div>
               <h3 className="font-bold text-lg mb-2">Customer Success</h3>
               <p className="text-sm text-slate-500">Ensuring smooth onboarding and providing 24/7 technical support.</p>
             </div>

             <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:-translate-y-2 transition-transform">
               <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-4">
                 <Globe size={28} className="text-purple-500" />
               </div>
               <h3 className="font-bold text-lg mb-2">Sales & Marketing</h3>
               <p className="text-sm text-slate-500">Expanding our reach and building relationships with global enterprises.</p>
             </div>

             <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:-translate-y-2 transition-transform">
               <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
                 <Briefcase size={28} className="text-orange-500" />
               </div>
               <h3 className="font-bold text-lg mb-2">Operations & HR</h3>
               <p className="text-sm text-slate-500">Keeping the workplace thriving and organizing our legendary office functions.</p>
             </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 6: CTA / CAREERS
          ========================================================= */}
      <section className="py-20 bg-[#0A1F44] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center">
          <Coffee size={48} className="text-blue-400 mb-6" />
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-white mb-6">
            Want to build the future with us?
          </h2>
          <p className="text-blue-200 text-lg mb-10 max-w-2xl mx-auto">
            We are always looking for passionate problem-solvers. Check out our open positions and join a team that values innovation and culture.
          </p>
          <Button className="bg-[#10b981] hover:bg-[#059669] text-white px-10 h-14 rounded-md shadow-lg text-lg font-bold border-none transition-transform hover:-translate-y-0.5">
            View Open Positions
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}