"use client";

import { FaSpinner } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="min-h-screen bg-blue-500 flex items-center justify-center">
      <div className="bg-gray-100/30 backdrop-blur-lg rounded-lg shadow-md p-6 flex flex-col items-center gap-4">
        <FaSpinner className="animate-spin text-blue-500 text-4xl" />
        <p className="text-white text-lg">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;