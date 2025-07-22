import { useState } from "react";

const Drawer = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} className="px-4 py-2 bg-blue-600 text-white rounded">
        Open Drawer
      </button>
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-40" onClick={() => setOpen(false)}>
          <div
            className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h4 className="text-lg font-bold mb-4">Sidebar Menu</h4>
            <p className="text-gray-600">Your drawer content here</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Drawer;
