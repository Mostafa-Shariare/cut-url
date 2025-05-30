import React from 'react';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-10">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-purple-700 mb-6">About CutyourUrl</h1>

        <p className="text-gray-700 text-lg mb-4">
          <strong>CutyourUrl</strong> is a fast, privacy-focused, and free URL shortener app.
          No login required, no data tracking — just a simple tool to shorten your links in seconds.
        </p>

        <p className="text-gray-700 text-lg mb-4">
          We respect your privacy and time. Thats why we made this app with zero sign-up process
          and absolutely no background data collection. Share clean, short links without any hassle.
        </p>

        <p className="text-gray-700 text-lg mb-4">
          Built using <span className="font-semibold text-purple-700">Next.js</span> and <span className="font-semibold text-purple-700">Tailwind CSS</span>,
          CutyourUrl is optimized for speed and ease of use.
        </p>

        <p className="text-gray-700 text-lg">
          Whether you're a developer, content creator, or casual user — we're here to simplify your link-sharing experience. 🚀
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Made with ❤️ by{" "}
          <Link
            href="https://www.linkedin.com/in/mostafa-shariare-33b071298/"
            target="_blank"
            className="text-purple-700 hover:underline font-medium"
          >
            Mostafa Shariare
          </Link>
        </p>
      </div>
    </div>
  );
}
