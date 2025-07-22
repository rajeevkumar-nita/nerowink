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
    icon: <FaBuilding className="text-white w-6 h-6" />,
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
    color: "bg-blue-600",
  },
  {
    icon: <FaIndustry className="text-white w-6 h-6" />,
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
    color: "bg-green-600",
  },
  {
    icon: <FaShoppingCart className="text-white w-6 h-6" />,
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
    color: "bg-purple-600",
  },
  {
    icon: <FaTruck className="text-white w-6 h-6" />,
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
    color: "bg-orange-600",
  },
  {
    icon: <FaBriefcase className="text-white w-6 h-6" />,
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
    color: "bg-teal-600",
  },
  {
    icon: <FaUsers className="text-white w-6 h-6" />,
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
    color: "bg-indigo-600",
  },
];

const IndustrySolutionsComponent = () => {
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const cardWidth = 384 + 24; // width + gap

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
      intervalRef.current = setInterval(scrollNext, 2000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isHovered]);

  return (
    <section className="py-16 px-4 bg-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
          Industry Solutions
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4 mb-4">
          Tailored for Your Industry
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          NeroWink adapts to your specific industry needs with specialized features,
          workflows, and integrations designed for optimal performance.
        </p>
      </div>

      <div className="relative mt-12 max-w-7xl mx-auto group">
        <button
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg p-2 rounded-full z-10"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div
          ref={sliderRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4 scroll-smooth snap-x"
        >
          {IndustrySolutions.map((industry, idx) => (
            <div
              key={idx}
              className="snap-start shrink-0 w-96 bg-white border rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <div className={`p-6 rounded-t-xl ${industry.color}`}>
                <div className="flex items-center justify-between">
                  <div className="bg-white/30 p-3 rounded-xl">{industry.icon}</div>
                  <span className="bg-white/30 text-white text-sm px-3 py-1 rounded-full font-medium">
                    {industry.tag}
                  </span>
                </div>
                <h3 className="text-white text-xl font-bold mt-6">{industry.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4 group-hover:text-yellow-600 transition-colors">
                  {industry.description}
                </p>
                <ul className="space-y-2 text-gray-800">
                  {industry.points.map((point, i) => (
                    <li key={i} className="flex items-center">
                      <span className="text-green-500 mr-2">✔</span>
                      <span className="font-medium group-hover:text-yellow-600 transition-colors">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full border-2 border-transparent px-4 py-2 rounded-md text-center font-semibold text-gray-800 transition duration-300 hover:bg-gray-900 hover:text-white">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg p-2 rounded-full z-10"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default IndustrySolutionsComponent;
