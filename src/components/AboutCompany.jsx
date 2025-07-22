import { Briefcase, Heart, Shield, Users } from "lucide-react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { useRef } from "react";

const values = [
  {
    icon: <Shield className="w-6 h-6 text-blue-600" />,
    title: "Integrity",
    description: "We are committed to transparency, honesty, and accountability in everything we do.",
  },
  {
    icon: <Users className="w-6 h-6 text-green-600" />,
    title: "Collaboration",
    description: "We believe in the power of teamwork and working closely with our clients and partners.",
  },
  {
    icon: <Briefcase className="w-6 h-6 text-purple-600" />,
    title: "Excellence",
    description: "We strive for excellence in our products, services, and operations.",
  },
  {
    icon: <Heart className="w-6 h-6 text-pink-600" />,
    title: "Customer Centricity",
    description: "Our customers are at the heart of everything we do.",
  },
];

const metrics = [
  {
    label: "Founded",
    value: 2024,
    duration: 1.5,
    suffix: "",
    steps: false,
  },
  {
    label: "Team Members",
    value: 50,
    duration: 2,
    suffix: "+",
    steps: true,
  },
  {
    label: "Clients",
    value: 200,
    duration: 2.5,
    suffix: "+",
    steps: true,
  },
  {
    label: "Industries Served",
    value: 6,
    duration: 1.5,
    suffix: "+",
    steps: true,
  },
];

export default function AboutCompany() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900"
          >
            About NeroWink
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Building the Future of Business Management
          </motion.p>
        </div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-8 mt-12 text-center"
        >
          <div className="flex flex-col items-center justify-center">
            <Heart className="w-10 h-10 mb-3" />
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Our Mission</h3>
            <p className="max-w-xl text-sm sm:text-base">
              To empower organizations with intelligent, unified, and adaptive business management software
              that drives innovation, growth, and long-term success.
            </p>
          </div>
        </motion.div>

        {/* Core Values */}
        <div className="mt-16">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center text-xl sm:text-2xl font-bold text-gray-800 mb-10"
          >
            Our Core Values
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white rounded-xl shadow-md hover:shadow-lg p-6 text-center transition transform hover:scale-105 border border-transparent hover:border-blue-500"
              >
                <motion.div
                  whileHover={{ rotate: 6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex justify-center mb-4"
                >
                  {value.icon}
                </motion.div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-sm sm:text-base text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Section + Metrics */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <div className="bg-white rounded-xl shadow-md p-8" ref={sectionRef}>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              Why We're Building NeroWink
            </h3>
            <p className="text-gray-600 text-sm sm:text-base mb-6">
              In today’s fast-evolving digital economy, businesses need more than just software — they need a unified,
              intelligent platform that adapts, integrates, and scales. NeroWink was born out of a deep understanding
              of these evolving needs. Our mission is to eliminate complexity and empower businesses to focus on what
              truly matters — delivering value to customers.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {metrics.map((metric, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  className="text-center border rounded-lg py-4 px-2 hover:shadow-md transition"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-gray-800">
                    {isInView && (
                      <CountUp
                        start={metric.steps ? 0 : undefined}
                        end={metric.value}
                        duration={metric.duration}
                        useEasing={!metric.steps}
                        useGrouping={false}
                        separator=""
                        suffix={metric.suffix}
                      />
                    )}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{metric.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-full text-sm sm:text-base transition">
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
