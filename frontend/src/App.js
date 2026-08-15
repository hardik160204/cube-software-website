import "./App.css";
import ContactSection from './components/ContactSection';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "sonner";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import CloudContactCenter from "./pages/CloudContactCenter";
import VoiceLoggerInSync from "./pages/VoiceLoggerInSync";
import CubeVoiceMail from "./pages/CubeVoiceMail";
import ScreenLogger from "./pages/ScreenLogger";
import CallBillingSoftware from "./pages/CallBillingSoftware";
import CallistoVoiceLogger from "./pages/CallistoVoiceLogger";
import IvrsServices from "./pages/IvrsServices";
import AutoDialer from "./pages/AutoDialer";
import ServicePage from "./pages/ServicePage";
import ConferenceBridge from "./pages/ConferenceBridge";
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
          <Route path="/services/cloud-contact-center" element={<CloudContactCenter />} />
          <Route path="/services/voice-logger-insync" element={<VoiceLoggerInSync />} />
          <Route path="/services/cube-voice-mail" element={<CubeVoiceMail />} />
          <Route path="/services/voice-mail" element={<CubeVoiceMail />} />
          <Route path="/services/screen-logger" element={<ScreenLogger />} />
          <Route path="/services/call-billing" element={<CallBillingSoftware />} />
          <Route path="/services/callisto-voice-logger" element={<CallistoVoiceLogger />} />
          <Route path="/services/voice-logger" element={<CallistoVoiceLogger />} /> {/* Add redirect/fallback if needed */}
          <Route path="/services/ivrs" element={<IvrsServices />} />
          <Route path="/services/auto-dialer" element={<AutoDialer />} />
          <Route path="/services/conference-bridge" element={<ConferenceBridge />} />
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