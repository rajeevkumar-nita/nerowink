import { Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`bg-white shadow-sm border border-gray-200 rounded-b-2xl px-6 py-3 sticky top-0 z-10 transition-all ${scrolled ? 'bg-white/95' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Branding */}
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
          <div className="bg-blue-700 text-white text-sm font-bold w-10 h-10 rounded-md flex items-center justify-center transform transition-all hover:scale-110 duration-300">
            N
          </div>
          <span className="text-2xl font-semibold text-gray-800">NeroWink</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <button onClick={() => scrollToSection('hero')} className="hover:text-blue-600 transition">Home</button>
          <button onClick={() => scrollToSection('features')} className="hover:text-blue-600 transition">Features</button>
          <button onClick={() => scrollToSection('solutions')} className="hover:text-blue-600 transition">Solutions</button>
          <button onClick={() => scrollToSection('about')} className="hover:text-blue-600 transition">About Us</button>
          <button onClick={() => navigate('/career')} className="hover:text-blue-600 transition">Careers</button>
        </nav>

        {/* Contact Button */}
        <div className="hidden md:flex">
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-orange-500 text-white font-semibold text-sm px-6 py-3 rounded-xl hover:bg-orange-600 transition duration-200"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Menu onClick={toggleMobileMenu} className="w-6 h-6 text-gray-700" />
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 right-6 bg-white shadow-lg rounded-lg p-4 md:hidden z-50">
            <button onClick={() => scrollToSection('hero')} className="block py-2 px-4 w-full text-left">Home</button>
            <button onClick={() => scrollToSection('features')} className="block py-2 px-4 w-full text-left">Features</button>
            <button onClick={() => scrollToSection('solutions')} className="block py-2 px-4 w-full text-left">Solutions</button>
            <button onClick={() => scrollToSection('about')} className="block py-2 px-4 w-full text-left">About Us</button>
            <button onClick={() => navigate('/career')} className="block py-2 px-4 w-full text-left">Careers</button>
            <button onClick={() => scrollToSection('contact')} className="block py-2 px-4 w-full text-left">Contact</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
