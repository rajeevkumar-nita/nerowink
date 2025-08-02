import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
        {/* Company Info */}
        <div className="col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-slate-700 text-white w-9 h-9 rounded-lg flex items-center justify-center font-bold text-lg">
              N
            </div>
            <span className="text-xl font-bold">NeroWink</span>
          </div>
          <p className="text-sm text-slate-300 mb-4">
            Advanced business management solution designed to streamline enterprise operations with
            integrated ERP, CRM, HR, finance, and AI-driven analytics.
          </p>
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-400" />
              hello@nerowink.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-400" />
              +918102753070
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-400" />
              Jaipur, Rajasthan
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-3 mt-6">
            <a href="#" className="p-2 bg-slate-800 rounded-md hover:bg-blue-500 transition">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 bg-slate-800 rounded-md hover:bg-blue-600 transition">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 bg-slate-800 rounded-md hover:bg-blue-700 transition">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 bg-slate-800 rounded-md hover:bg-pink-500 transition">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Product Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Product</h4>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>Features</li>
            <li>Pricing</li>
            <li>Integrations</li>
            <li>API Documentation</li>
            <li>Security</li>
          </ul>
        </div>

        {/* Solutions Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Solutions</h4>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>Enterprise</li>
            <li>Small Business</li>
            <li>Retailers</li>
            <li>Distributors</li>
            <li>Manufacturing</li>
          </ul>
        </div>

        {/* Resources Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Resources</h4>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>Documentation</li>
            <li>Help Center</li>
            <li>Community</li>
            <li>Blog</li>
            <li>Webinars</li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>About Us</li>
            <li>Careers</li>
            <li>Contact</li>
            <li>Press</li>
            <li>Partners</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <hr className="border-slate-700 mt-10" />

      <div className="flex flex-col sm:flex-row justify-between items-center mt-6 text-sm text-slate-400">
        {/* Left Side */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center">
          <span>© 2024 NeroWink. All rights reserved.</span>
          <span className="hidden sm:block">|</span>
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <span className="hidden sm:block">|</span>
          <a href="#" className="hover:text-white transition">Terms of Service</a>
          <span className="hidden sm:block">|</span>
          <a href="#" className="hover:text-white transition">Cookie Policy</a>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2 mt-4 sm:mt-0">
          <span>Available 24/7</span>
          <span className="flex items-center gap-1 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Online
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
