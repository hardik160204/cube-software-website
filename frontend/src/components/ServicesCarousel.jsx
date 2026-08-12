import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const SERVICES_DATA = [
  {
    id: "cloud-contact-center",
    title: "Contact Center Solution",
    desc: "Get results with a powerful inbound, outbound and blended cloud contact center solution with full call disposition.",
    image: "https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "voice-logger",
    title: "Callisto Voice Logger",
    desc: "The ideal call recording solution — every conversation captured, compressed and searchable.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "call-billing",
    title: "Call Billing Software",
    desc: "Take command of telecom resources and costs across every office, hotel and facility.",
    image: "https://images.unsplash.com/photo-1611125832047-1d7ad1e8e48f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "screen-logger",
    title: "Screen Logger",
    desc: "Next-generation multi-PC screen recording over the network — see what your customers experienced.",
    image: "https://images.unsplash.com/photo-1551739440-5dd934d3a94a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ivrs",
    title: "IVRS Services",
    desc: "Custom IVR solutions built from scratch with the latest software, database and telecom technologies.",
    image: "https://images.unsplash.com/photo-1525598912003-663126343e1f?auto=format&fit=crop&w=800&q=80"
  }
];

export default function ServicesCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCardsToShow(1);
      else if (window.innerWidth < 1024) setCardsToShow(2);
      else setCardsToShow(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxSlide = Math.max(0, SERVICES_DATA.length - cardsToShow);

  const prevSlide = () => setCurrentSlide((p) => Math.max(p - 1, 0));
  const nextSlide = () => setCurrentSlide((p) => Math.min(p + 1, maxSlide));

  return (
    <section className="pt-24 pb-12 bg-white overflow-hidden relative" id="services">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <h2 className="font-heading font-black text-4xl sm:text-5xl tracking-tight text-slate-900 leading-tight">
            Our Services
          </h2>
        </motion.div>

        <div className="relative w-full">
          
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`absolute -left-2 sm:-left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
              currentSlide === 0 
                ? "bg-white text-slate-300 shadow-sm cursor-not-allowed opacity-50" 
                : "bg-blue-50 text-[#1f638b] hover:bg-[#1f638b] hover:text-white shadow-lg cursor-pointer"
            }`}
            aria-label="Previous Slide"
          >
            <ChevronLeft size={26} strokeWidth={2.5} />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentSlide === maxSlide}
            className={`absolute -right-2 sm:-right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
              currentSlide === maxSlide 
                ? "bg-white text-slate-300 shadow-sm cursor-not-allowed opacity-50" 
                : "bg-blue-50 text-[#1f638b] hover:bg-[#1f638b] hover:text-white shadow-lg cursor-pointer"
            }`}
            aria-label="Next Slide"
          >
            <ChevronRight size={26} strokeWidth={2.5} />
          </button>

          <div className="overflow-hidden px-2 py-6 mx-8 sm:mx-10">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * (100 / cardsToShow)}%)` }}
            >
              {SERVICES_DATA.map((service) => (
                <div 
                  key={service.id}
                  className="shrink-0 px-3 transition-all duration-500"
                  style={{ width: `${100 / cardsToShow}%` }}
                >
                  <div className="bg-white rounded-[32px] p-5 border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] hover:-translate-y-3 transition-all duration-500 flex flex-col h-full group">
                    
                    <div className="w-full h-48 overflow-hidden rounded-[20px] mb-5">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                    </div>
                    
                    <div className="flex flex-col flex-grow items-center text-center px-2">
                      <h3 className="font-heading font-bold text-xl text-slate-900 mb-3 group-hover:text-[#1f638b] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-[14px] text-slate-500 leading-relaxed text-justify mb-8 flex-grow line-clamp-3">
                        {service.desc}
                      </p>
                      
                      <Link to={`/services/${service.id}`} className="w-full mt-auto">
                        <button className="w-full bg-[#1f638b] hover:bg-[#13425e] text-white py-3.5 rounded-xl font-bold shadow-md transition-colors text-[15px]">
                          Learn More
                        </button>
                      </Link>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center items-center gap-2 mt-4">
            {Array.from({ length: maxSlide + 1 }).map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setCurrentSlide(dotIdx)}
                className={`h-2.5 rounded-full transition-all duration-500 ${
                  currentSlide === dotIdx 
                    ? "w-8 bg-[#1f638b]" 
                    : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}