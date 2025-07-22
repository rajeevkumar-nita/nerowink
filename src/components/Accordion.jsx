import { useState } from "react";

const Accordion = ({ title, content }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded mb-2">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-4 py-3 font-medium bg-gray-100 hover:bg-gray-200"
      >
        {title}
      </button>
      {open && (
        <div className="px-4 py-3 text-gray-700 bg-white border-t">
          {content}
        </div>
      )}
    </div>
  );
};

export default Accordion;
