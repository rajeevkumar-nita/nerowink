import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import CTASection from "../components/CTASection";
import IndustrySolutions from "../components/IndustrySolutions";
import IndustryInquiry from "../components/IndustryInquiry";
import AboutCompany from "../components/AboutCompany";
import TeamCTA from "../components/TeamCTA";
import Testimonials from "../components/Testimonials";
import CareersatNerowink from "../components/Careersatnerowink.jsx";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />

      {/* Scroll Target: Hero (Home) */}
      <div id="hero">
        <HeroSection />
      </div>

      {/* Scroll Target: Features */}
      <div id="features">
        <Features />
      </div>

      <CTASection />

      {/* Scroll Target: Solutions */}
      <div id="solutions">
        <IndustrySolutions />
      </div>

      <IndustryInquiry />

      {/* Scroll Target: About Us */}
      <div id="about">
        <AboutCompany />
      </div>

      <TeamCTA />
      <Testimonials />



      {/* Scroll Target: Contact */}
      <div id="contact">
        <ContactSection />
      </div>

      <Footer />
    </>
  );
};

export default Home;
