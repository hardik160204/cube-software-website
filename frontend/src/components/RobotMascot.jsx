import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mascot } from 'page-mascot';

export default function RobotMascot() {
  const [isHovered, setIsHovered] = useState(false);

  // This function checks the URL *every time* the user hovers, 
  // ensuring it always shows the right message even if they navigate without refreshing.
  const getGreeting = () => {
    const path = window.location.pathname.toLowerCase();
    if (path.includes('pricing')) return "Need a custom Enterprise quote?";
    if (path.includes('services')) return "Want to see how our Cloud Contact Center works?";
    if (path.includes('products')) return "Need help choosing the right plan?";
    return "We're Online! How may I help you today?";
  };

  const handleMascotClick = () => {
    const chatWidgetBtn = document.querySelector('.chat-widget-trigger-button-class');
    if (chatWidgetBtn) chatWidgetBtn.click();
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 20, delay: 1.5 }}
      className="fixed bottom-6 right-6 z-[9999] cursor-pointer flex flex-col items-end"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleMascotClick}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            // Fixed: Set a fixed width (w-48), allow wrapping (whitespace-normal), and anchored to the right (right-0)
            className="absolute bottom-[100%] right-0 mb-4 bg-white text-slate-800 text-sm font-bold px-4 py-3 rounded-2xl shadow-xl border border-slate-100 w-48 whitespace-normal text-center leading-snug z-20"
          >
            {getGreeting()}
            {/* Fixed: Moved the little pointer triangle to the right side so it lines up with the robot */}
            <div className="absolute top-full right-10 w-0 h-0 border-l-[8px] border-l-transparent border-t-[10px] border-t-white border-r-[8px] border-r-transparent"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Ambient Blue Glow Ring */}
      <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full pointer-events-none"></div>

      {/* Gentle Levitation Wrapper */}
      <motion.div 
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-[110px] h-[110px] hover:scale-105 transition-transform duration-300 drop-shadow-2xl"
      >
        {/* Fixed: Kept the dot OUTSIDE the hue-rotated div so it stays red! */}
        <div className="absolute top-2 right-2 w-4 h-4 bg-red-500 rounded-full border-[3px] border-[#0A1F44] z-20 animate-pulse"></div>

        {/* The Mascot Head (Hue rotation applied ONLY to the image) */}
        <div style={{ filter: "hue-rotate(215deg) saturate(1.4) contrast(1.15)", width: '100%', height: '100%' }}>
          <Mascot 
            size={110} 
            directions="/mascots/cube-directions.webp" 
            reactions="/mascots/cube-reactions.webp" 
          />
        </div>
      </motion.div>
    </motion.div>
  );
}