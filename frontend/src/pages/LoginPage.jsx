import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";

const LoginPage = () => {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row font-sans bg-white">
      
      {/* LEFT COLUMN: Login Form */}
      <div className="w-full lg:w-1/2 min-h-screen flex flex-col relative px-8 py-10 sm:px-16 lg:px-24">
        
        {/* Logo */}
        <Link to="/" className="inline-block w-fit">
          <img 
            src="/logo75.png" 
            alt="Cube Software" 
            className="h-10 sm:h-12 w-auto object-contain"
          />
        </Link>

        {/* Form Container */}
        <div className="flex-grow flex flex-col justify-center max-w-[420px] w-full mx-auto pb-20">
          
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">
              Welcome to Cube
            </h1>
            <p className="text-slate-500 text-[15px]">
              Don't have an account?{" "}
              <Link to="/#contact" className="text-blue-600 font-semibold hover:underline">
                Contact Sales
              </Link>
            </p>
          </div>

          <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
            
            <div className="space-y-1">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail size={18} className="text-slate-400" />
                </div>
                <input 
                  type="email" 
                  placeholder="name@company.com" 
                  required
                  className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-xl text-sm placeholder:text-slate-400 text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all shadow-sm"
                />
              </div>
            </div>

            <div className="space-y-1">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock size={18} className="text-slate-400" />
                </div>
                <input 
                  type="password" 
                  placeholder="Password" 
                  required
                  className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-xl text-sm placeholder:text-slate-400 text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all shadow-sm"
                />
              </div>
              <div className="flex justify-end pt-1">
                <a href="#" className="text-xs font-semibold text-blue-600 hover:underline">
                  Forgot password?
                </a>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 mt-2 rounded-xl shadow-md transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              Sign in securely <ArrowRight size={18} />
            </Button>

          </form>

        </div>

        {/* Footer Links */}
        <div className="text-center pb-6">
          <p className="text-xs text-slate-400">
            By signing in, you agree to our{" "}
            <a href="#" className="underline hover:text-slate-600 transition-colors">Terms</a> &{" "}
            <a href="#" className="underline hover:text-slate-600 transition-colors">Privacy Policy</a>.
          </p>
        </div>

      </div>

      {/* RIGHT COLUMN: Visual Showcase (Hidden on Mobile) */}
      <div className="hidden lg:flex w-1/2 bg-[#0A1F44] relative flex-col justify-center items-center p-16 overflow-hidden">
        
        {/* Abstract Background Shapes */}
        <div className="absolute top-[-10%] left-[-10%] w-[80%] h-[80%] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-emerald-500/10 blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 max-w-lg text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white leading-[1.3] mb-12 tracking-tight">
            Over 500+ enterprises & teams like yours handle millions of interactions with Cube.
          </h2>

          {/* Client Logos */}
          <div className="flex flex-wrap items-center justify-center gap-10 opacity-70">
            {/* Using brightness-0 and invert to turn colorful logos into clean white silhouettes */}
            <img 
              src="/Avaya.jpeg" 
              alt="Avaya" 
              className="h-8 md:h-10 object-contain brightness-0 invert" 
            />
            <img 
              src="/cars24.png" 
              alt="Cars24" 
              className="h-8 md:h-10 object-contain brightness-0 invert" 
            />
            <img 
              src="/yatra.png" 
              alt="Yatra" 
              className="h-8 md:h-10 object-contain brightness-0 invert" 
            />
            <img 
              src="/Mitel.png" 
              alt="Mitel" 
              className="h-8 md:h-10 object-contain brightness-0 invert" 
            />
          </div>
        </div>
        
      </div>

    </div>
  );
};

export default LoginPage;