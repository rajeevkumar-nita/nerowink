import {
  Mail,
  Phone,
  MessageSquare,
  CheckCircle,
  SendHorizonal,
} from "lucide-react";

const ContactSection = () => {
  return (
    <section className="bg-gradient-to-br from-slate-800 to-blue-600 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <div className="mb-12">
          <span className="bg-white/10 text-white px-4 py-1 rounded-full text-sm font-medium">
            ✉️ Contact Us
          </span>
          <h2 className="text-4xl font-bold mt-4 mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Get in touch with our team to learn how NeroWink can streamline your operations, boost productivity, and drive growth across all departments.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 text-left">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-4 text-white">Contact Our Team</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm mb-1">Full Name *</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 ring-white"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Email Address *</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 ring-white"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm mb-1">Company Name</label>
              <input
                type="text"
                placeholder="Your company"
                className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 ring-white"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm mb-1">Inquiry Type</label>
              <select
                className="w-full px-4 py-2 rounded-md bg-white/10 text-white focus:outline-none focus:ring-2 ring-white"
              >
                <option>General Inquiry</option>
                <option>Demo Request</option>
                <option>Technical Support</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm mb-1">Message</label>
              <textarea
                placeholder="Tell us about your business needs..."
                rows="4"
                className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 ring-white"
              />
            </div>

            <button className="w-full bg-emerald-500 hover:bg-emerald-600 transition text-white font-semibold py-2 rounded-md flex items-center justify-center gap-2 mt-2">
              Send Message <SendHorizonal className="w-4 h-4" />
            </button>
          </div>

          {/* Contact Info + Benefits */}
          <div className="space-y-8">
            {/* Info */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-white">Get in Touch</h3>
              <div className="space-y-3 text-white/90 text-sm">
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4" /> hello@nerowink.com
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4" /> +918102753070
                </p>
                <p className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" /> Live chat coming soon
                </p>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-white">
                Early Access Benefits
              </h3>
              <ul className="space-y-2 text-white/90 text-sm">
                {[
                  "First to experience NeroWink before public launch",
                  "Special early adopter pricing and discounts",
                  "Direct feedback channel to influence product development",
                  "Priority customer support and onboarding",
                  "Exclusive access to beta features and updates",
                  "Invitation to private demos and webinars",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-20 bg-slate-900 rounded-xl py-10 px-6 text-center">
          <h3 className="text-2xl font-bold mb-2">Stay Updated with NeroWink</h3>
          <p className="text-white/80 max-w-xl mx-auto mb-6">
            Get the latest updates on new features, industry insights, and business optimization tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md text-black w-full sm:w-auto"
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition">
              Subscribe →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;













