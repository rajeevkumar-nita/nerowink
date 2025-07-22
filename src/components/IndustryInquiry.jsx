const IndustryInquiry = () => {
  return (
    <section className="py-16 px-4 bg-blue-50">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-2xl p-10 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
          Don&apos;t See Your Industry?
        </h2>
        <p className="text-gray-600 text-lg mb-6">
          NeroWink&apos;s flexible platform can be customized for any business model. Let&apos;s discuss your specific requirements.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition font-medium flex items-center justify-center gap-2">
            Schedule Consultation <span>→</span>
          </button>
          <button className="border border-gray-400 px-6 py-2 rounded-md hover:bg-gray-100 transition font-medium">
            Contact Sales Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default IndustryInquiry;
