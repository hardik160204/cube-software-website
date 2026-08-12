import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Loader2, Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

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
        throw new Error("Please enter your email and password.");
      }

      console.log("Logged in:", { ...formData, rememberMe });
      navigate("/"); 
      
    } catch (err) {
      setError(err.message || "Invalid credentials. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] relative flex items-center overflow-hidden font-sans">
      
      {/* ========================================================= */}
      {/* BACKGROUND IMAGE WITH CURVED CUTOUT */}
      {/* ========================================================= */}
      <div className="absolute inset-0 z-0 flex justify-end pointer-events-none">
        {/* Mobile overlay for text readability */}
        <div className="absolute inset-0 bg-[#050505]/70 lg:hidden z-10" />
        
        <div 
          className="w-full lg:w-[75%] h-full bg-cover bg-center relative z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1556761175-5973dc0f32b7?auto=format&fit=crop&w=1920&q=80')`,
            // This creates the sweeping curved cut-out effect on desktop
            clipPath: window.innerWidth >= 1024 ? 'ellipse(90% 120% at 100% 50%)' : 'none'
          }}
        >
          {/* Subtle gradient to blend the image edges */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent lg:opacity-50" />
        </div>
      </div>

      {/* ========================================================= */}
      {/* MAIN CONTENT CONTAINER */}
      {/* ========================================================= */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-8 flex flex-col lg:flex-row items-center justify-between h-full py-12 lg:py-0">
        
        {/* Left Side: Text Content */}
        <div className="w-full lg:w-5/12 text-white mb-12 lg:mb-0">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12 text-sm font-semibold"
          >
            <ArrowLeft size={16} /> Back to Website
          </Link>

          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading font-bold text-4xl sm:text-5xl lg:text-5xl leading-[1.1] tracking-tight text-white max-w-lg"
          >
            Manage your communications,<br />
            monitor performance,<br />
            and stay in control—<br />
            securely.
          </motion.h1>
        </div>

        {/* Right Side: Login Card */}
        <div className="w-full lg:w-5/12 flex justify-end">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-[450px] bg-white rounded-3xl p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative"
          >
            <div className="text-center mb-8">
              <h2 className="font-heading font-black text-2xl sm:text-[28px] text-slate-900 tracking-tight">
                Hi there, welcome back
              </h2>
              <p className="text-sm text-slate-500 mt-2">
                Sign in to your Cube Software Portal
              </p>
            </div>

            {error && (
              <div className="bg-red-50 text-red-600 text-sm font-medium p-3 rounded-lg mb-6 text-center border border-red-100">
                {error}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-5">
              
              {/* Email Field */}
              <div className="space-y-2">
                <label className="block text-[13px] font-bold text-slate-700">
                  Email*
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0A1F44] focus:border-transparent transition-all text-slate-900 placeholder:text-slate-400"
                  placeholder="email@company.com"
                />
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className="block text-[13px] font-bold text-slate-700">
                  Password*
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-4 pr-12 py-3.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0A1F44] focus:border-transparent transition-all text-slate-900 placeholder:text-slate-400"
                    placeholder="••••••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between pt-1 pb-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <div className="relative flex items-center justify-center">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="peer appearance-none w-4 h-4 border border-slate-300 rounded bg-white checked:bg-[#0A1F44] checked:border-[#0A1F44] transition-colors cursor-pointer"
                    />
                    <svg
                      className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-[13px] font-semibold text-slate-700 select-none">
                    Remember me
                  </span>
                </label>

                <a href="#" className="text-[13px] font-bold text-slate-900 hover:underline">
                  Forgot password?
                </a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#050505] hover:bg-[#1a1a1a] text-white font-bold py-4 rounded-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" /> Logging in...
                  </>
                ) : (
                  "Log In"
                )}
              </button>
            </form>

            <div className="mt-8 text-center text-[13px] font-medium text-slate-500">
              Don't have an account? <a href="/#contact" className="text-slate-900 font-bold hover:underline">Sign Up</a>
            </div>

          </motion.div>
        </div>

      </div>
    </div>
  );
}