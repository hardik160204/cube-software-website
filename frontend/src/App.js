import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "sonner";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage";
import PricingPage from "./pages/PricingPage"; 
import LoginPage from "./pages/LoginPage"; 
import FloatingChatWidget from "./components/FloatingChatWidget";
import PopupContactForm from "./components/PopupContactForm"; // <-- 1. IMPORT HERE

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pricing" element={<PricingPage />} /> 
          <Route path="/login" element={<LoginPage />} /> 
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        
        <FloatingChatWidget /> 
        <PopupContactForm /> {/* <-- 2. ADD COMPONENT HERE */}
        
      </BrowserRouter>
      <Toaster position="bottom-right" richColors />
    </div>
  );
}

export default App;