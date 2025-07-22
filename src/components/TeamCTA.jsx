import { Zap, Users } from "lucide-react";

const TeamCTA = () => {
  return (
    <section className="py-16 px-4 bg-blue-50">
      <div className="max-w-5xl mx-auto bg-white text-center p-10 rounded-2xl shadow-md border">
        <div className="flex justify-center">
          <div className="bg-emerald-500 p-3 rounded-full">
            <Zap className="text-white w-6 h-6" />
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-6 mb-4">
          Built by Business Professionals, for Business Professionals
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto mb-6 text-lg">
          Our team combines decades of business management experience with cutting-edge
          technology expertise. We understand your challenges because we've faced them ourselves.
        </p>

        <div className="flex justify-center">
          <button className="flex items-center gap-2 border border-gray-400 px-6 py-2 rounded-md text-gray-800 font-medium hover:bg-gray-100 transition">
            Meet the Team <Users className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamCTA;
