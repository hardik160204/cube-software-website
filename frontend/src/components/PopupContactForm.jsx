import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function PopupContactForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    website: "",
    designation: "",
  });

  // --- SMART TRIGGERS: 20s Inactivity & Exit Intent ---
  useEffect(() => {
    if (hasTriggered) return;

    let idleTimer;

    const triggerPopup = () => {
      setIsOpen(true);
      setHasTriggered(true); // Ensures it only pops up once per session
    };

    // 1. Inactivity Logic (20 seconds)
    const resetIdleTimer = () => {
      clearTimeout(idleTimer);
      idleTimer = setTimeout(triggerPopup, 20000); // 20,000 ms = 20 seconds
    };

    // 2. Exit Intent Logic (Mouse leaves top of window)
    const handleMouseLeave = (e) => {
      // clientY <= 0 means the mouse crossed the top edge of the browser viewport
      if (e.clientY <= 0) {
        triggerPopup();
      }
    };

    // Start the initial idle timer
    resetIdleTimer();

    // Listen for activity to reset the timer
    const activityEvents = ['mousemove', 'mousedown', 'keydown', 'touchstart', 'scroll'];
    activityEvents.forEach(event => document.addEventListener(event, resetIdleTimer));
    
    // Listen for exit intent
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(idleTimer);
      activityEvents.forEach(event => document.removeEventListener(event, resetIdleTimer));
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasTriggered]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API Call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsOpen(false);
      console.log("Lead captured:", form);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 pointer-events-auto">
          
          {/* Frosted Glass Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Popup Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl z-10 flex flex-col overflow-hidden"
          >
            {/* Floating Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-slate-900 text-white hover:bg-slate-700 transition-colors shadow-md"
              aria-label="Close modal"
            >
              <X size={18} strokeWidth={2.5} />
            </button>

            {/* Header */}
            <div className="pt-8 pb-6 px-8 text-center bg-white z-10">
              <h2 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 tracking-tight">
                "Stop Juggling Tools—Switch to Cube's Cloud Telephony"
              </h2>
            </div>

            {/* Content Flex Container */}
            <div className="flex flex-col md:flex-row px-6 pb-8 gap-6 md:gap-8">
              
              {/* Left Side: Image */}
              <div className="w-full md:w-5/12 shrink-0">
                <div className="w-full h-[250px] md:h-full rounded-2xl overflow-hidden shadow-inner">
                  <img 
                    src="https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=800&q=80" 
                    alt="Professional on phone" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              {/* Right Side: Form */}
              <div className="w-full md:w-7/12 flex flex-col justify-center">
                <form onSubmit={handleSubmit} className="flex flex-col h-full justify-between gap-4">
                  
                  {/* Grid of Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Name"
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all shadow-sm"
                    />
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all shadow-sm"
                    />
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Business Email"
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all shadow-sm"
                    />
                    <input
                      type="text"
                      name="company"
                      required
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Company Name"
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all shadow-sm"
                    />
                    <input
                      type="url"
                      name="website"
                      value={form.website}
                      onChange={handleChange}
                      placeholder="Website URL"
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all shadow-sm"
                    />
                    <input
                      type="text"
                      name="designation"
                      value={form.designation}
                      onChange={handleChange}
                      placeholder="Designation"
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all shadow-sm"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-4 rounded-lg shadow-md shadow-blue-600/20 transition-transform hover:-translate-y-0.5 mt-4 disabled:opacity-70 disabled:hover:translate-y-0"
                  >
                    {isSubmitting ? "Sending Request..." : "Get in Touch"}
                  </button>

                </form>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}