"use client";

import { FaSearch } from "react-icons/fa";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-blue-500 flex items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full text-center">
        <FaSearch className="text-gray-500 text-5xl mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">404 - Page Not Found</h1>
        <p className="text-gray-600 mb-6">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;