import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cut URL",
  keywords: ["URL Shortener", "Cut URL", "Next.js", "React", "Web Development"],
  authors: [{ name: "Mostafa Shariare", url: "https://github.com/Mostafa-Shariare" }],
  description: "Cut URL is a simple and efficient URL shortener built with Next.js and React. It allows users to shorten long URLs for easier sharing and management.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
