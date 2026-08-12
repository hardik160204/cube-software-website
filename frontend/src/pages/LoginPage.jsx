import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, ArrowLeft, Loader2, Sparkles, ShieldCheck, Zap } from "lucide-react";

export default function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // SIMULATING A NETWORK REQUEST
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      if (!formData.email || !formData.password) {
        throw new Error("Credentials are required to access the portal.");
      }
      console.log("Logged in:", formData);
      navigate("/"); 
      
    } catch (err) {
      setError(err.message || "Invalid credentials. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex bg-[#030712] text-slate-200 font-sans overflow-hidden selection:bg-blue-500/30">
      
      {/* ========================================================= */}
      {/* LEFT PANEL: The "Wow" Factor (Hidden on mobile) */}
      {/* ========================================================= */}
      <div className="hidden lg:flex w-1/2 relative flex-col justify-between p-12 overflow-hidden border-r border-white/5">
        
        {/* Deep Glowing Background Gradients */}
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-20%] w-[60%] h-[60%] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
        
        {/* Subtle Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z' fill='%23ffffff' fill-rule='evenodd' fill-opacity='1'/%3E%3C/svg%3E")` }}
        />

        <div className="relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-semibold group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
            Back to Website
          </Link>
        </div>

        {/* Floating Glassmorphism Card */}
        <div className="relative z-10 w-full max-w-lg mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden"
          >
            {/* Shimmer effect line */}
            <div className="absolute top-0 left-[-100%] w-[200%] h-px bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_3s_infinite]" />
            
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
              <Sparkles size={24} className="text-white" />
            </div>
            <h2 className="text-3xl font-heading font-bold text-white mb-4 leading-tight">
              Scale your communications globally.
            </h2>
            <p className="text-slate-400 leading-relaxed text-sm">
              Cube Software provides enterprise-grade cloud telephony that grows with you. Secure, reliable, and built for modern high-performance teams.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-emerald-400" size={20} />
                <span className="text-sm font-medium text-slate-300">Bank-grade Security</span>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="text-amber-400" size={20} />
                <span className="text-sm font-medium text-slate-300">99.99% Uptime</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="relative z-10 flex justify-between items-center text-xs text-slate-500 font-medium">
          <span>© {new Date().getFullYear()} Cube Software Pvt. Ltd.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* RIGHT PANEL: The Login Form */}
      {/* ========================================================= */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 relative">
        
        {/* Mobile background elements */}
        <div className="absolute inset-0 bg-[#030712] lg:hidden z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-blue-900/10 blur-[100px]" />
        </div>

        {/* Mobile Back Button */}
        <div className="absolute top-6 left-6 lg:hidden z-20">
          <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm font-semibold">
            <ArrowLeft size={16} /> Back
          </Link>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="w-full max-w-[420px] relative z-10"
        >
          
          {/* Logo & Header */}
          <div className="mb-10 text-center lg:text-left">
            <div className="inline-block p-1 rounded-xl bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
               <img src="/logo75.png" alt="Cube Logo" className="h-10 w-auto object-contain brightness-0 invert" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-heading font-black text-white tracking-tight mb-2">
              Welcome back
            </h1>
            <p className="text-slate-400 text-sm font-medium">
              Enter your credentials to access the portal.
            </p>
          </div>

          {error && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium p-4 rounded-xl mb-6 flex items-center gap-3"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              {error}
            </motion.div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            
            {/* Email Field */}
            <div className="space-y-2 group">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail size={18} className="text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                </div>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-[15px] text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 focus:bg-white/10 transition-all placeholder:text-slate-600 shadow-inner"
                  placeholder="name@company.com"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2 group">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Password
                </label>
                <a href="#" className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors">
                  Forgot?
                </a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock size={18} className="text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-11 pr-12 py-3.5 bg-white/5 border border-white/10 rounded-xl text-[15px] text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 focus:bg-white/10 transition-all placeholder:text-slate-600 shadow-inner"
                  placeholder="••••••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-500 hover:text-slate-300 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-4 rounded-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-6 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transform hover:-translate-y-0.5"
            >
              {isLoading ? (
                <>
                  <Loader2 size={18} className="animate-spin" /> Authenticating
                </>
              ) : (
                "Sign In to Dashboard"
              )}
            </button>
          </form>

          <div className="mt-8 text-center lg:text-left text-sm font-medium text-slate-500 border-t border-white/5 pt-8">
            Need an account? <a href="/#contact" className="text-white hover:text-blue-400 transition-colors ml-1">Contact Sales</a>
          </div>

        </motion.div>
      </div>

      {/* Global styles for the shimmer effect */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
    </div>
  );
}