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

        {/* Source Code Section */}
        <div className="mt-8 border-t pt-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Source Code
          </h2>
          <p className="text-gray-600 mb-4">
            Check out the source code of this project:
          </p>
          <Link
            href="https://github.com/Mostafa-Shariare/cut-url"
            target="_blank"
            className="inline-block bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition font-medium shadow-sm"
          >
            GitHub Repository
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GitHubPage;
