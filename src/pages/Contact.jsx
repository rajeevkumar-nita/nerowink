import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactSection";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="py-10">
        <ContactForm />
      </div>
      <Footer />
    </>
  );
};

export default Contact;
