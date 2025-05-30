import Link from "next/link";

export default function Footer() {
  return (
    <footer className="backdrop-blur-md bg-white/10 text-white py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo / Brand */}
        <div className="text-xl font-bold mb-4 md:mb-0">
          CutyourUrl
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 text-sm">
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          <a
            href="https://github.com/yourusername/your-repo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-300 mt-4">
        &copy; {new Date().getFullYear()} CutyourUrl. All rights reserved.
      </div>
    </footer>
  );
}
