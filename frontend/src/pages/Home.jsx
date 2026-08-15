import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import CubeHeroSlider from "../components/CubeHeroSlider";

// 1. Removed ProductsSection from this import
import { WhySection } from "../components/HomeSections"; 
import { ClientsSection, IndustriesSection, TestimonialsSection, FAQSection, Footer } from "../components/HomeSections2";
import ContactSection from "../components/ContactSection";

// 2. Imported our new reusable 3x2 grid component!
import OurProducts from "../components/OurProducts"; 

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white text-slate-900">
      <Navbar onBookDemo={scrollToContact} />

      <CubeHeroSlider onBookDemo={scrollToContact} />
      
      <ClientsSection />
      
      <WhySection />

      {/* 3. Dropped in the new static grid component */}
      <OurProducts /> 
      
      <IndustriesSection />
      <TestimonialsSection />
      <FAQSection />
      
      <ContactSection /> 
      
      <Footer />
    </div>
  );
};

export default Home;