import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import IndustrySolutions from "./components/IndustrySolutions";
import AboutSection from "./components/AboutSection";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Careers from "./pages/Career"; 

function HomePage() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div id="hero">
          <HeroSection />
        </div>

        <div id="features">
          <Features />
        </div>

        <div id="solutions">
          <IndustrySolutions />
        </div>

        <div id="about">
          <AboutSection />
        </div>

        <Testimonials />

        <div id="contact">
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/career" element={<Careers />} />
      </Routes>
    </Router>
  );
}

export default App;
