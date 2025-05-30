"use client";
import React from "react";
import Link from "next/link";

const GitHubPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-blue-100 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full text-center animate-fadeIn">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Visit My GitHub
        </h1>
        <p className="text-gray-600 mb-6">
          Click the button below to explore my repositories and work.
        </p>
        <Link
          href="https://github.com/Mostafa-Shariare"
          target="_blank"
          className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition shadow-md font-semibold"
        >
          @Mostafa-Shariare
        </Link>
      </div>
    </div>
  );
};

export default GitHubPage;
