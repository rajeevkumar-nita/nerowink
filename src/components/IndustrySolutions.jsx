import React, { useEffect, useRef, useState } from "react";
import {
  FaBuilding,
  FaIndustry,
  FaShoppingCart,
  FaTruck,
  FaBriefcase,
  FaUsers,
} from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";

const IndustrySolutions = [
  {
    icon: <FaBuilding className="text-white w-5 h-5" />,
    tag: "200+ companies",
    title: "Enterprise Solutions",
    description:
      "Comprehensive business management for large organizations with complex operations and multiple departments.",
    points: [
      "Multi-entity Management",
      "Advanced Reporting",
      "Custom Workflows",
      "Enterprise Integrations",
    ],
    color: "from-blue-600 to-blue-400",
  },
  {
    icon: <FaIndustry className="text-white w-5 h-5" />,
    tag: "150+ manufacturers",
    title: "Manufacturing",
    description:
      "Specialized tools for production planning, quality control, supply chain management, and regulatory compliance.",
    points: [
      "Production Planning",
      "Quality Control",
      "Supply Chain",
      "Compliance Tracking",
    ],
    color: "from-green-600 to-green-400",
  },
  {
    icon: <FaShoppingCart className="text-white w-5 h-5" />,
    tag: "300+ retailers",
    title: "Retail Management",
    description:
      "End-to-end retail solutions covering inventory, POS, customer management, and multi-channel operations.",
    points: [
      "POS Integration",
      "Inventory Control",
      "Customer Analytics",
      "Multi-channel Sales",
    ],
    color: "from-purple-600 to-purple-400",
  },
  {
    icon: <FaTruck className="text-white w-5 h-5" />,
    tag: "100+ distributors",
    title: "Distribution & Logistics",
    description:
      "Optimize distribution networks with advanced logistics management, route optimization, and tracking.",
    points: [
      "Route Optimization",
      "Fleet Management",
      "Real-time Tracking",
      "Warehouse Management",
    ],
    color: "from-orange-600 to-orange-400",
  },
  {
    icon: <FaBriefcase className="text-white w-5 h-5" />,
    tag: "250+ service firms",
    title: "Professional Services",
    description:
      "Project-based business management with time tracking, resource allocation, and client relationship tools.",
    points: [
      "Project Management",
      "Time Tracking",
      "Resource Planning",
      "Client Portals",
    ],
    color: "from-teal-600 to-teal-400",
  },
  {
    icon: <FaUsers className="text-white w-5 h-5" />,
    tag: "500+ SMBs",
    title: "Small & Medium Business",
    description:
      "Scalable solutions designed for growing businesses with simplified workflows and essential features.",
    points: [
      "Easy Setup",
      "Scalable Growth",
      "Essential Features",
      "Affordable Pricing",
    ],
    color: "from-indigo-600 to-indigo-400",
  },
];

const IndustrySolutionsComponent = () => {
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const cardWidth = 320 + 16;

  const scrollNext = () => {
    const slider = sliderRef.current;
    if (!slider) return;
    const scrollLeft = slider.scrollLeft;
    const maxScroll = slider.scrollWidth - slider.clientWidth;
    if (scrollLeft + cardWidth >= maxScroll) {
      slider.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      slider.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };

  const scrollPrev = () => {
    const slider = sliderRef.current;
    if (!slider) return;
    slider.scrollBy({ left: -cardWidth, behavior: "smooth" });
  };

  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(scrollNext, 3000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isHovered]);

  return (
    <section className="py-10 px-4 bg-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
          Industry Solutions
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-3 mb-2">
          Tailored for Your Industry
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm">
          NeroWink adapts to your specific industry needs with specialized features and workflows.
        </p>
      </div>

      <div className="relative mt-10 max-w-7xl mx-auto group">
        <button
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div
          ref={sliderRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex space-x-4 overflow-x-auto scrollbar-hide pb-2 scroll-smooth snap-x"
        >
          {IndustrySolutions.map((industry, idx) => (
            <div
              key={idx}
              className="snap-start shrink-0 w-[85vw] sm:w-80 bg-white border rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.04] hover:border-gray-400"
            >
              <div
                className={`p-3 rounded-t-xl bg-gradient-to-r ${industry.color}`}
              >
                <div className="flex items-center justify-between">
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded-md">
                    {industry.icon}
                  </div>
                  <span className="bg-white/20 backdrop-blur-sm text-white text-[11px] px-2 py-0.5 rounded-full font-semibold">
                    {industry.tag}
                  </span>
                </div>
                <h3 className="text-white text-base font-semibold mt-2">
                  {industry.title}
                </h3>
              </div>
              <div className="p-3">
                <p className="text-gray-600 text-sm line-clamp-2 mb-2">
                  {industry.description}
                </p>
                <ul className="space-y-1 text-gray-800 text-sm">
                  {industry.points.map((point, i) => (
                    <li key={i} className="flex items-center">
                      <span className="text-green-500 mr-2">✔</span>
                      <span className="font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-3 w-full flex items-center justify-between text-xs border border-gray-200 px-3 py-1.5 rounded-md font-semibold text-gray-700 hover:bg-gray-900 hover:text-white transition group">
                  <span>Learn More</span>
                  <span className="transform group-hover:translate-x-1 transition">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default IndustrySolutionsComponent;
