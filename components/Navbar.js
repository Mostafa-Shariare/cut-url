import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-pink-500 to-violet-500 text-white">
      <div>
        <span className="text-2xl font-bold text-white">CutUrl</span>
      </div>
      <div className="space-x-4 flex items-center flex-row">
        <Link href="/">Home</Link>
        <Link href="/shorten">Try it</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        

        
      </div>
    </div>
  );
};

export default Navbar;
