
import { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CareersatNerowink = () => {
  const sections = [
    "Open Positions",
    "Benefits",
    "Employee Value Proposition & Culture",
    "Professional Development",
  ];

  const [activeSection, setActiveSection] = useState("");
  const sectionRefs = useRef({});
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // Close mobile menu on click
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.4 }
    );

    sections.forEach((section) => {
      const id = section.replace(/\s+/g, "-").toLowerCase();
      const element = document.getElementById(id);
      if (element) {
        sectionRefs.current[id] = element;
        observer.observe(element);
      }
    });

    return () => {
      Object.values(sectionRefs.current).forEach((el) =>
        observer.unobserve(el)
      );
    };
  }, []);

  const sectionIds = sections.map((s) => s.replace(/\s+/g, "-").toLowerCase());

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-800 relative">
      {/* Responsive Header */}
      <div className="sticky top-0 z-30 bg-white shadow-md">
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 text-white font-bold w-8 h-8 flex items-center justify-center rounded">
              N
            </div>
            <span className="font-semibold text-lg text-gray-800">
              NeroWink
            </span>
          </div>

          {/* Hamburger for Mobile */}
          <button
            className="md:hidden text-2xl text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-4 text-sm font-medium">
            {sectionIds.map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`transition ${
                  activeSection === id
                    ? "text-blue-700 font-semibold underline"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {id.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
              </button>
            ))}
            <Link
              to="/"
              className="text-blue-600 border border-blue-600 px-3 py-1 rounded hover:bg-blue-600 hover:text-white transition"
            >
              Home
            </Link>
          </div>
        </div>

        {/* Mobile Dropdown Nav */}
        {menuOpen && (
          <div className="md:hidden flex flex-col gap-3 px-4 pb-4 text-sm border-t">
            {sectionIds.map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="text-left text-gray-700 hover:text-blue-600"
              >
                {id.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
              </button>
            ))}
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-blue-600 border border-blue-600 px-3 py-1 rounded hover:bg-blue-600 hover:text-white transition text-left"
            >
              Home
            </Link>
          </div>
        )}
      </div>

      {/* Page Content */}
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-20">
        {/* Open Positions */}
        <div id="open-positions" className="scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">
            Open Positions
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We’re hiring across roles including Frontend & Backend Engineering,
            UI/UX Design, Marketing, and Product Management. If you're a
            self-starter who loves solving real-world problems, we’d love to
            have you on board.
          </p>
          <div className="grid md:grid-cols-3 text-center gap-4 mt-8">
            <div>
              <h3 className="text-4xl font-bold text-blue-700">
                <CountUp end={20} duration={2} />+
              </h3>
              <p className="text-gray-600">Open Roles</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-700">
                <CountUp end={50} duration={2} />+
              </h3>
              <p className="text-gray-600">Team Members</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-700">
                <CountUp end={98} duration={2} />%
              </h3>
              <p className="text-gray-600">Satisfaction</p>
            </div>
          </div>
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-6 text-center text-blue-700">
              What Our Team Says
            </h2>
            <Carousel
              autoPlay
              infiniteLoop
              showThumbs={false}
              showStatus={false}
              interval={5000}
              className="rounded-xl shadow-lg max-w-3xl mx-auto"
            >
              {[
                [
                  "NeroWink provides a perfect balance of creativity, innovation and mentorship.",
                  "Priya, Frontend Developer",
                ],
                [
                  "The collaborative culture and constant learning at NeroWink has truly elevated my career.",
                  "Aman, Product Designer",
                ],
                [
                  "The mentoring sessions helped me transition from a fresher to a confident backend developer.",
                  "Sanya, Backend Developer",
                ],
                [
                  "At NeroWink, I’ve had the freedom to experiment and innovate without fear.",
                  "Arjun, UI/UX Designer",
                ],
                [
                  "The work-life balance here is the best I’ve experienced in my career so far.",
                  "Meera, Marketing Lead",
                ],
                [
                  "From day one, I felt like I was part of something meaningful and impactful.",
                  "Rajat, Product Manager",
                ],
                [
                  "Supportive team, exciting challenges, and lots of learning opportunities.",
                  "Divya, QA Engineer",
                ],
              ].map(([quote, name], idx) => (
                <div key={idx} className="px-6 py-10 bg-white">
                  <p className="italic text-gray-700">"{quote}"</p>
                  <p className="mt-4 font-semibold text-blue-600">— {name}</p>
                </div>
              ))}
            </Carousel>
          </div>
        </div>

        {/* Benefits */}
        <div id="benefits" className="scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Benefits</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            At NeroWink, we believe that people are our most valuable asset. Our
            work culture is built on trust, flexibility, and well-being.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 pl-4">
            <li>🌍 Global Projects with Local Impact</li>
            <li>⏰ Flexible Work Culture</li>
            <li>💙 Work-Life Balance & Wellness</li>
            <li>💼 Relocation & Hybrid Options</li>
            <li>🧠 Learning Support & Career Mobility</li>
          </ul>
        </div>

        {/* EVP & Culture */}
        <div id="employee-value-proposition-&-culture" className="scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">
            Employee Value Proposition & Culture
          </h2>
          <ul className="list-none space-y-4 text-gray-700 leading-relaxed text-base pl-2">
            <li>💼 We build more than products — we build purpose.</li>
            <li>👩‍💻 You'll grow through mentoring and real impact.</li>
            <li>🚀 We solve meaningful problems — not just code.</li>
            <li>🧘 Flexible hours, remote options, wellness support.</li>
            <li>🤝 Growth is a shared mission — together, honestly.</li>
          </ul>
        </div>

        {/* Professional Development */}
        <div id="professional-development" className="scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">
            Professional Development
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We’re invested in your growth from first day to leadership.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {[
              { skill: "Tech Skills", value: "90%" },
              { skill: "Leadership", value: "80%" },
              { skill: "Communication", value: "85%" },
            ].map(({ skill, value }, idx) => (
              <div key={idx}>
                <span className="text-sm font-medium text-gray-600">{skill}</span>
                <div className="w-full bg-gray-200 rounded-full h-3 mt-1">
                  <div
                    className="bg-blue-600 h-3 rounded-full transition-all"
                    style={{ width: value }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              {
                title: "Mentorship",
                desc: "1-on-1 guidance from experts to level up your journey.",
              },
              {
                title: "Certifications",
                desc: "We sponsor growth via Udemy, Coursera, AWS, etc.",
              },
              {
                title: "Knowledge Sharing",
                desc: "TechTalks, Hackathons, and open community culture.",
              },
            ].map(({ title, desc }, idx) => (
              <div
                key={idx}
                className="bg-white shadow-md rounded-xl p-4 border hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold text-blue-700 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 justify-center mt-10">
            {["Hackathon Winner", "Top Performer", "Team Mentor", "Certified Pro"].map(
              (badge, idx) => (
                <span
                  key={idx}
                  className="bg-blue-100 text-blue-700 text-xs font-medium px-4 py-2 rounded-full shadow-sm hover:bg-blue-200 transition"
                >
                  🏅 {badge}
                </span>
              )
            )}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center pt-16 bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-xl shadow-inner py-12 px-4">
          <p className="text-xl text-gray-800 font-medium mb-4">
            Ready to take the next step in your career?
          </p>
          <a
            href="mailto:nerowink@gmail.com"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-sm font-semibold shadow hover:bg-blue-700 hover:shadow-md transition duration-300"
          >
            Apply Now
          </a>
        </div>
      </div>

      {/* Floating Apply Button */}
      <a
        href="mailto:nerowink@gmail.com"
        className="fixed bottom-6 right-6 z-30 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-full shadow-lg transition"
      >
        Apply Now
      </a>
    </div>
  );
};

export default CareersatNerowink;
