import { useState } from "react";

const slides = [
  "Slide 1 Content",
  "Slide 2 Content",
  "Slide 3 Content"
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % slides.length);
  const prev = () => setIndex((index - 1 + slides.length) % slides.length);

  return (
    <div className="text-center">
      <div className="p-6 bg-blue-50 rounded shadow mb-4">
        {slides[index]}
      </div>
      <div className="flex justify-center gap-4">
        <button onClick={prev} className="px-4 py-2 bg-gray-200 rounded">Prev</button>
        <button onClick={next} className="px-4 py-2 bg-gray-200 rounded">Next</button>
      </div>
    </div>
  );
};

export default Carousel;
