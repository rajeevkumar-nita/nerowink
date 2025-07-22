import { useState } from "react";

const Tabs = () => {
  const [active, setActive] = useState("overview");

  return (
    <div className="text-center">
      <div className="flex justify-center gap-4 mb-4">
        <button
          onClick={() => setActive("overview")}
          className={`px-4 py-2 rounded ${active === "overview" ? "bg-blue-600 text-white" : "bg-gray-100"}`}
        >
          Overview
        </button>
        <button
          onClick={() => setActive("details")}
          className={`px-4 py-2 rounded ${active === "details" ? "bg-blue-600 text-white" : "bg-gray-100"}`}
        >
          Details
        </button>
      </div>
      <div>
        {active === "overview" && <p>Overview content here.</p>}
        {active === "details" && <p>Detailed info content here.</p>}
      </div>
    </div>
  );
};

export default Tabs;
