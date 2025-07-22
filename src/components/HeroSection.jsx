import { CheckCircle, Building2, BarChart3, Users2, ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f2f9ff] via-white to-[#ecf5ff] py-24 px-4 isolate">
      {/* 💫 Background Glow */}
      <div className="absolute -z-10 left-1/2 top-0 h-[700px] w-[1400px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-300/20 via-blue-300/10 to-transparent blur-3xl"></div>

      {/* 🫧 Floating Blob */}
      <motion.div
        className="absolute -z-10 left-[75%] top-[10%] h-[200px] w-[200px] rounded-full bg-blue-300 opacity-30 blur-2xl"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🚀 Tagline */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex justify-center mb-6"
      >
        <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium shadow-sm backdrop-blur-sm animate-pulse">
          🚀 Revolutionary Business Management Solution
        </span>
      </motion.div>

      {/* 🧠 Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center max-w-5xl mx-auto mb-10"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-gray-900 bg-gradient-to-r from-black via-blue-900 to-black bg-clip-text text-transparent animate-gradient">
          Empower Your <span className="text-blue-600">Enterprise</span>{" "}
          <span className="text-teal-600">Operations</span> with NeroWink
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-600 font-medium">
          All-in-one ERP, CRM, HR, finance, and AI analytics platform for modern businesses, MSMEs, and distributors.
        </p>
      </motion.div>

      {/* ✅ Feature Pills */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="flex flex-wrap justify-center gap-4 mb-10 max-w-4xl mx-auto"
      >
        {[
          "Complete ERP & CRM Integration",
          "AI-Driven Analytics",
          "Real-time Compliance Management",
        ].map((feature, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <CheckCircle className="text-green-500 w-4 h-4" />
            <span>{feature}</span>
          </div>
        ))}
      </motion.div>

      {/* 📦 CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="flex flex-col md:flex-row justify-center gap-6 mb-16"
      >
        <button
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:brightness-110 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-lg transform hover:-translate-y-1 transition flex items-center gap-2"
          aria-label="Learn more about NeroWink"
        >
          <ArrowRight size={20} />
          Learn More
        </button>
        <button
          className="border border-gray-400 hover:border-black px-8 py-3 rounded-xl text-lg font-medium text-gray-800 transition flex items-center gap-2"
          aria-label="Contact NeroWink"
        >
          <Mail size={20} />
          Contact Us
        </button>
      </motion.div>

      {/* 🔷 Icon Cards */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1, duration: 0.8 }}
        className="flex flex-wrap justify-center gap-6"
      >
        {[Building2, BarChart3, Users2].map((Icon, i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-blue-500 to-blue-300 text-white p-5 rounded-2xl transform hover:scale-110 transition duration-300 shadow-xl"
          >
            <Icon size={36} />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default HeroSection;
