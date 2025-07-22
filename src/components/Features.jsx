import {
  HiBuildingOffice2,
  HiUserGroup,
  HiCurrencyDollar,
  HiChartBar,
  HiShieldCheck,
  HiArchiveBox,
  HiBolt,
  HiGlobeAlt,
} from "react-icons/hi2";
import { HiCheck } from "react-icons/hi";

const features = [
  {
    icon: <HiBuildingOffice2 className="text-blue-600 w-6 h-6" />,
    title: "Enterprise Resource Planning",
    description:
      "Comprehensive ERP solution managing all business processes from procurement to delivery with real-time visibility.",
    points: ["Resource Optimization", "Process Automation", "Supply Chain Management"],
  },
  {
    icon: <HiUserGroup className="text-blue-600 w-6 h-6" />,
    title: "Customer Relationship Management",
    description:
      "Advanced CRM platform to manage customer interactions, sales pipelines, and marketing campaigns effectively.",
    points: ["Lead Management", "Sales Analytics", "Customer Support"],
  },
  {
    icon: <HiCurrencyDollar className="text-blue-600 w-6 h-6" />,
    title: "Financial Management",
    description:
      "Complete financial suite including accounting, budgeting, reporting, and compliance management.",
    points: ["Automated Invoicing", "Financial Reporting", "Tax Management"],
  },
  {
    icon: <HiChartBar className="text-blue-600 w-6 h-6" />,
    title: "AI-Driven Analytics",
    description:
      "Powerful analytics engine providing actionable insights through machine learning and predictive analytics.",
    points: ["Predictive Insights", "Custom Dashboards", "Performance Metrics"],
  },
  {
    icon: <HiShieldCheck className="text-blue-600 w-6 h-6" />,
    title: "Compliance Management",
    description:
      "Automated compliance tracking and reporting to ensure adherence to industry regulations and standards.",
    points: ["Regulatory Compliance", "Audit Trails", "Risk Management"],
  },
  {
    icon: <HiArchiveBox className="text-blue-600 w-6 h-6" />,
    title: "Inventory Management",
    description:
      "Smart inventory control with automated reordering, stock optimization, and multi-location management.",
    points: ["Stock Optimization", "Automated Reordering", "Multi-location Support"],
  },
  {
    icon: <HiBolt className="text-blue-600 w-6 h-6" />,
    title: "Workflow Automation",
    description:
      "Eliminate manual processes with intelligent automation for approvals, notifications, and routine tasks.",
    points: ["Process Automation", "Smart Notifications", "Approval Workflows"],
  },
  {
    icon: <HiGlobeAlt className="text-blue-600 w-6 h-6" />,
    title: "Multi-Platform Integration",
    description:
      "Seamless integration with 50+ popular business tools and platforms for unified operations.",
    points: ["API Integrations", "Third-party Tools", "Data Synchronization"],
  },
];

const Features = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <h2 className="text-4xl font-bold text-center text-blue-800 mb-16">
        Core Features
      </h2>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-[#f5f7fa] p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-500 ease-in-out animate-fadeIn"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-xl mb-4">
              {feature.icon}
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              {feature.title}
            </h4>
            <p className="text-gray-600 mb-4">{feature.description}</p>
            <ul className="space-y-2">
              {feature.points.map((point, i) => (
                <li key={i} className="flex items-center text-gray-800">
                  <HiCheck className="text-green-500 w-5 h-5 mr-2" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;

