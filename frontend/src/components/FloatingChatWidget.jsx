import React, { useState } from "react";
import { MessageSquare, X, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    question: "How do I book a demo?",
    answer: "You can book a demo by clicking the 'Book Demo' button at the top of the page, or by navigating to our Contact section to fill out a request form. Our team will reach out within 24 hours!"
  },
  {
    question: "What are your pricing plans?",
    answer: "We offer flexible pricing starting at $19/month for our Starter plan and $49/month for our Professional Contact Center plan. Check out our Pricing page for a full feature breakdown."
  },
  {
    question: "Do you offer 24/7 technical support?",
    answer: "Yes! Our Professional and Enterprise tiers include dedicated 24/7 technical hotline access to ensure your business-critical communications never experience downtime."
  },
  {
    question: "Can I get a custom Enterprise quote?",
    answer: "Absolutely. Please email us at sales@cube-software.com or call our expert line at +91 120 405 7109 to get a customized architecture breakdown."
  }
];

export default function FloatingChatWidget() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedFaq, setSelectedFaq] = useState(null);
  const [showTooltip, setShowTooltip] = useState(true);

  // --- WHATSAPP CONFIGURATION ---
  // Note: The number must include the country code (91) without the '+' symbol
  const whatsappNumber = "919899570753"; 
  
  // Edit this to change the default message the user sends to you!
  const whatsappMessage = "Hello Cube Software, I would like to know more about your cloud telephony solutions.";

  const handleWhatsAppClick = () => {
    // encodeURIComponent ensures spaces and special characters are formatted correctly for the URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
    setShowTooltip(false);
    setSelectedFaq(null); // Reset to main menu when reopening
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      
      {/* --- THE CHAT WINDOW --- */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-white w-80 sm:w-96 rounded-2xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col"
          >
            {/* Chat Header */}
            <div className="bg-[#0A1F44] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {selectedFaq && (
                  <button onClick={() => setSelectedFaq(null)} className="hover:bg-white/20 p-1 rounded-md transition-colors">
                    <ChevronLeft size={20} />
                  </button>
                )}
                <div>
                  <h3 className="font-bold text-sm">Cube Support</h3>
                  <p className="text-[11px] text-blue-200">Typically replies instantly</p>
                </div>
              </div>
              <button onClick={toggleChat} className="text-blue-200 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-4 bg-slate-50 min-h-[300px] max-h-[400px] overflow-y-auto">
              {!selectedFaq ? (
                <div className="space-y-3">
                  <div className="bg-white border border-slate-200 p-3 rounded-tr-xl rounded-bl-xl rounded-br-xl shadow-sm text-sm text-slate-700 max-w-[90%]">
                    Hi there! 👋 How can we help you today? Choose a topic below:
                  </div>
                  
                  <div className="flex flex-col gap-2 mt-4">
                    {FAQS.map((faq, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedFaq(faq)}
                        className="text-left bg-white border border-blue-100 hover:border-blue-400 hover:bg-blue-50 text-blue-700 text-sm p-3 rounded-xl transition-colors shadow-sm"
                      >
                        {faq.question}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex justify-end">
                    <div className="bg-blue-600 text-white p-3 rounded-tl-xl rounded-bl-xl rounded-br-xl shadow-sm text-sm max-w-[90%]">
                      {selectedFaq.question}
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-white border border-slate-200 p-3 rounded-tr-xl rounded-bl-xl rounded-br-xl shadow-sm text-sm text-slate-700 max-w-[90%] leading-relaxed">
                      {selectedFaq.answer}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- THE FLOATING BUTTONS --- */}
      <div className="flex flex-col gap-3 items-end">
        
        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsAppClick}
          className="w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group relative"
          aria-label="Chat on WhatsApp"
        >
          {/* Official WhatsApp SVG Logo */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-white"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.305-.88-.653-1.473-1.46-1.646-1.757-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>

          {/* Optional Hover Label */}
          <span className="absolute right-16 bg-white text-slate-800 text-xs font-bold px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            WhatsApp Us
          </span>
        </button>

        {/* Chatbot Button */}
        <div className="relative">
          {/* Tooltip that matches your reference image */}
          <AnimatePresence>
            {showTooltip && !isChatOpen && (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute right-16 top-1 bg-white border border-slate-100 shadow-lg rounded-xl p-3 w-48 pointer-events-none origin-right"
              >
                <div className="text-xs font-bold text-slate-800 mb-0.5">We're Online!</div>
                <div className="text-xs text-slate-500 leading-tight">How may I help you today?</div>
                {/* Little triangle pointing to the button */}
                <div className="absolute top-4 -right-1.5 w-3 h-3 bg-white border-r border-t border-slate-100 transform rotate-45"></div>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={toggleChat}
            className="w-14 h-14 bg-amber-500 hover:bg-amber-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            aria-label="Open Chat"
          >
            {isChatOpen ? <X size={26} /> : <MessageSquare size={26} className="fill-current" />}
          </button>
        </div>

      </div>
    </div>
  );
}