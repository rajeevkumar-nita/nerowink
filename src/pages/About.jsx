import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutCompany";
import Footer from "../components/Footer";
import Accordion from "../components/Accordion.jsx"; 

const About = () => {
  return (
    <>
      <Navbar />
      <div className="py-10">
        <AboutSection />
      </div>
      <Footer />
    </>
  );
};

export default About;
