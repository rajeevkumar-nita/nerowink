const CTASection = () => {
  return (
    <section className="my-16 px-4">
      <div className="bg-gradient-to-r from-slate-800 to-blue-500 text-white rounded-2xl py-12 px-6 text-center shadow-md">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Ready to Transform Your Business Operations?
        </h2>
        <p className="text-base sm:text-lg mb-6">
          Join 1000+ businesses on our early access list and be first to experience NeroWink.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-white text-blue-700 px-6 py-2 rounded-lg font-medium hover:bg-blue-100 transition">
            Get Early Access
          </button>
          <button className="border border-white px-6 py-2 rounded-lg font-medium hover:bg-white hover:text-blue-700 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
