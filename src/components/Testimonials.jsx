import React, { useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "NeroWink has revolutionized our business operations. The integrated approach to ERP and CRM has increased our productivity significantly and eliminated data silos completely. The AI analytics provide insights we never had before.",
    badge: "Productivity increased",
    name: "Sarah Chen",
    role: "CEO, TechFlow Solutions",
    initials: "SC",
  },
  {
    quote:
      "The compliance management features have been a game-changer for our regulatory requirements. What used to take weeks now happens automatically, and we've streamlined our compliance processes significantly.",
    badge: "Process optimization",
    name: "Michael Rodriguez",
    role: "Operations Director, Global Dynamics Corp",
    initials: "MR",
  },
  {
    quote:
      "The financial management suite is incredibly comprehensive. Real-time reporting and automated workflows have streamlined our entire finance department. The ROI was evident quickly.",
    badge: "Quick ROI",
    name: "Emily Thompson",
    role: "CFO, Innovative Retail Group",
    initials: "ET",
  },
  {
    quote:
      "Our sales team's efficiency has improved dramatically with NeroWink's CRM features. Lead management is seamless, and the predictive analytics help us focus on the most promising opportunities.",
    badge: "Improved efficiency",
    name: "David Park",
    role: "VP of Sales, Enterprise Solutions Ltd",
    initials: "DP",
  },
  {
    quote:
      "The integration capabilities are outstanding. We connected all our existing tools without any issues. The implementation was smooth and the support team guided us through every step.",
    badge: "Seamless integration",
    name: "Lisa Anderson",
    role: "Head of IT, Manufacturing Plus",
    initials: "LA",
  },
  {
    quote:
      "Inventory management has never been this efficient. Automated reordering and multi-location support have optimized our stock levels and reduced operational overhead significantly.",
    badge: "Operational optimization",
    name: "James Wilson",
    role: "General Manager, Distribution Networks",
    initials: "JW",
  },
];

const Testimonials = () => {
  const sliderRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const scrollAmount = 384 + 24;

  const handleScroll = (direction) => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const slider = sliderRef.current;
    let intervalId;

    const startAutoScroll = () => {
      intervalId = setInterval(() => {
        if (!slider || isHovered) return;

        const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
        const atEnd = slider.scrollLeft + 10 >= maxScrollLeft;

        if (atEnd) {
          slider.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }, 5000);
    };

    startAutoScroll();

    return () => clearInterval(intervalId);
  }, [isHovered]);

  return (
    <section className="py-20 px-4 bg-[#f5f9ff] relative">
      <div className="max-w-7xl mx-auto text-center">
        <span className="bg-gray-100 text-gray-800 px-4 py-1 rounded-full text-sm font-medium">
          Customer Success Stories
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4 mb-4">
          Trusted by Industry Leaders
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-lg">
          See how businesses across industries are transforming their operations and achieving
          remarkable results with NeroWink&apos;s comprehensive business management platform.
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Arrows */}
        <button
          onClick={() => handleScroll("left")}
          className="absolute z-10 top-1/2 -left-5 transform -translate-y-1/2 bg-white border border-gray-300 p-2 rounded-full shadow hover:bg-gray-100"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => handleScroll("right")}
          className="absolute z-10 top-1/2 -right-5 transform -translate-y-1/2 bg-white border border-gray-300 p-2 rounded-full shadow hover:bg-gray-100"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div
          ref={sliderRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex space-x-6 overflow-x-auto pb-4 scroll-smooth snap-x"
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="snap-start shrink-0 w-96 bg-white border border-gray-200 hover:bg-yellow-100 hover:scale-[1.03] transition-all duration-300 rounded-2xl shadow-md hover:shadow-lg p-6 flex flex-col justify-between"
            >
              {/* Stars */}
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-4">&quot;{t.quote}&quot;</p>

              {/* Badge */}
              <span className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                {t.badge}
              </span>

              {/* Profile */}
              <div className="flex items-center gap-3 mt-auto">
                <div className="bg-slate-800 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold">
                  {t.initials}
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-600">{t.role}</p>
                </div>
              </div>

              {/* Learn More Button */}
              <button className="mt-6 text-base font-medium flex items-center group text-blue-600 hover:text-orange-600 transition">
                Learn More{" "}
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
