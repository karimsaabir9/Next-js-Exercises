"use client";

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 ">
      <h2 className="text-xl font-bold mb-3">
        Count: {count}
      </h2>

      <button
        onClick={() => setCount(count + 1)}
        className="bg-black text-white px-4 py-2 rounded-lg"
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;