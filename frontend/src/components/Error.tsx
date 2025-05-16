"use client";

import { FaExclamationTriangle } from "react-icons/fa";
import Link from "next/link";

interface ErrorPageProps {
  message?: string;
}

const ErrorPage = ({ message = "Something went wrong. Please try again later." }: ErrorPageProps) => {
  return (
    <div className="min-h-screen bg-blue-500 flex items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full text-center">
        <FaExclamationTriangle className="text-red-500 text-5xl mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Error</h1>
        <p className="text-gray-600 mb-6">{message}</p>
        <Link href="/">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;