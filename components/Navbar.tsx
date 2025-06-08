"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, CircleIcon } from "lucide-react";

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar = ({ isScrolled }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={cn(
        "absolute top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-12",
        isScrolled
          ? "bg-[#0B0B0B] py-4 shadow-md"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <CircleIcon className="text-[#B6FF40] w-8 h-8" />
        </Link>

        {/* Twitter Button */}
        <Link 
          href="https://x.com/buildrushagency" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 bg-[#1a1a1a] hover:bg-[#2a2a2a] border border-gray-700 hover:border-gray-600 rounded-full px-4 py-2 transition-all duration-300 group"
        >
          <svg 
            className="w-4 h-4 text-white group-hover:text-[#B6FF40] transition-colors duration-300" 
            fill="currentColor" 
            viewBox="0 0 24 24" 
            aria-hidden="true"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
          </svg>
          <span className="text-white text-sm font-medium group-hover:text-[#B6FF40] transition-colors duration-300">
            @buildrushagency
          </span>
          <span className="text-white text-sm font-medium bg-[#B6FF40]/10 border border-[#B6FF40]/20 rounded-full px-3 py-1 group-hover:bg-[#B6FF40] group-hover:text-[#0B0B0B] transition-all duration-300">
            Follow Us
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;