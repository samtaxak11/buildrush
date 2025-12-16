"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, CircleIcon, Instagram } from "lucide-react";

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
          href="https://www.instagram.com/build.rush/" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 bg-[#1a1a1a] hover:bg-[#2a2a2a] border border-gray-700 hover:border-gray-600 rounded-full px-4 py-2 transition-all duration-300 group"
        >
          <Instagram className="text-white w-4 h-4 group-hover:text-[#B6FF40] transition-colors duration-300" />
          <span className="text-white text-sm font-medium group-hover:text-[#B6FF40] transition-colors duration-300 hidden md:block">
            @build.rush
          </span>
          <span className="text-white text-xs font-medium bg-[#B6FF40]/10 border border-[#B6FF40]/20 rounded-full px-2 py-1 group-hover:bg-[#B6FF40] group-hover:text-[#0B0B0B] transition-all duration-300">
            Follow Us
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;