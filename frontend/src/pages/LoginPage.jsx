import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Loader2, Star, Quote } from "lucide-react";

export default function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear error when user types
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // ==========================================
      // NODE.JS BACKEND INTEGRATION GOES HERE
      // ==========================================
      // const response = await fetch("http://localhost:5000/api/auth/login", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData)
      // });
      // const data = await response.json();
      // if (!response.ok) throw new Error(data.message);
      // localStorage.setItem("token", data.token);
      // navigate("/dashboard");

      // SIMULATING A NETWORK REQUEST FOR NOW:
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      if (!formData.email || !formData.password) {
        throw new Error("Please enter both email and password.");
      }

      console.log("Logged in with:", formData);
      navigate("/"); 
      
    } catch (err) {
      setError(err.message || "Invalid credentials. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex bg-white font-sans overflow-hidden">
      
      {/* ========================================================= */}
      {/* LEFT PANEL: Branding & Testimonial (Hidden on mobile) */}
      {/* ========================================================= */}
      <div className="hidden lg:flex lg:w-5/12 bg-[#0A1F44] relative flex-col justify-between p-12 overflow-hidden">
        
        {/* Subtle Background Pattern (Geometric Network Vibe) */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        
        {/* Glowing Orbs for modern feel */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-500/30 rounded-full blur-[100px]"
        />
        
        {/* Top Header */}
        <div className="relative z-10">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors text-sm font-semibold"
          >
            <ArrowLeft size={16} /> Back to Website
          </Link>
        </div>

        {/* Center Content: Testimonial */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-md mx-auto">
          <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20 mb-8">
            <Quote size={28} className="text-blue-300" />
          </div>
          
          <p className="text-xl sm:text-2xl text-white font-medium leading-relaxed mb-8">
            "Cube Software transformed our business communications, improving efficiency while significantly reducing operational costs."
          </p>
          
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
            ))}
          </div>
          
          <h3 className="text-white font-bold tracking-widest text-sm uppercase">ABC Fintech Startup</h3>
        </div>

        {/* Bottom Footer */}
        <div className="relative z-10">
          <p className="text-blue-200/60 text-xs font-medium text-center tracking-wider">
            SMART. SCALABLE. SECURE CLOUD TELEPHONY.
          </p>
        </div>
      </div>

      {/* ========================================================= */}
      {/* RIGHT PANEL: Login Form */}
      {/* ========================================================= */}
      <div className="flex-1 flex flex-col items-center justify-center relative p-6 sm:p-12">
        
        {/* Mobile Back Button (Visible only on small screens) */}
        <div className="absolute top-6 left-6 lg:hidden">
          <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 text-sm font-semibold">
            <ArrowLeft size={16} /> Back
          </Link>
        </div>

        <div className="w-full max-w-[400px]">
          
          {/* Logo & Heading */}
          <div className="flex flex-col items-center text-center mb-10">
            <img 
              src="/logo75.png" 
              alt="Cube Software Pvt Ltd" 
              className="h-14 sm:h-16 w-auto object-contain mb-8"
            />
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 tracking-tight">
              Log in to access your Cube Portal.
            </h2>
          </div>

          {/* Error Message */}
          {error && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-50 text-red-600 text-sm font-semibold p-4 rounded-lg mb-6 border border-red-100 text-center"
            >
              {error}
            </motion.div>
          )}

          {/* The Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-600 uppercase tracking-wider ml-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3.5 bg-white border border-slate-300 rounded-lg text-[15px] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-slate-900 placeholder:text-slate-400"
                placeholder="name@company.com"
              />
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between ml-1">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                  Password
                </label>
                <a href="#" className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors">
                  Forgot Password?
                </a>
              </div>
              <input
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3.5 bg-white border border-slate-300 rounded-lg text-[15px] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-slate-900 placeholder:text-slate-400"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#1D4ED8] hover:bg-[#1e40af] text-white font-bold py-3.5 rounded-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-4 shadow-sm hover:shadow-md"
            >
              {isLoading ? (
                <>
                  <Loader2 size={18} className="animate-spin" /> Authenticating...
                </>
              ) : (
                "SIGN IN"
              )}
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="mt-8 text-center text-sm font-medium text-slate-600">
            Don't have an account? <a href="/#contact" className="text-blue-600 hover:text-blue-800 hover:underline">Contact Support</a>
          </div>

        </div>

        {/* Absolute Footer */}
        <div className="absolute bottom-6 w-full text-center px-4">
          <p className="text-xs text-slate-500 font-medium">
            © {new Date().getFullYear()}, Cube Software Pvt. Ltd. All Rights Reserved.
          </p>
        </div>

      </div>
    </div>
  );
}