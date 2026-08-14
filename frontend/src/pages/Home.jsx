import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

// Importing the sections (FeaturesSection safely removed)
import { WhySection, ProductsSection } from "../components/HomeSections";

// 1. Removed ContactSection from the HomeSections2 import
import { ClientsSection, IndustriesSection, TestimonialsSection, FAQSection, Footer } from "../components/HomeSections2";

// 2. Added the import for our NEW standalone ContactSection
import ContactSection from "../components/ContactSection";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // wait for render, then scroll to the requested section
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
      <Hero onBookDemo={scrollToContact} onGetStarted={scrollToContact} />
      
      <ClientsSection />
      
      <WhySection />
      <ProductsSection />
      
      <IndustriesSection />
      <TestimonialsSection />
      <FAQSection />
      
      {/* This will now render the NEW map layout */}
      <ContactSection /> 
      
      <Footer />
    </div>
  );
};

export default Home;