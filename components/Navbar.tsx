"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X, CircleIcon } from "lucide-react";

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar = ({ isScrolled }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={cn(
        "z-50 transition-all duration-300 px-6 lg:px-12",
        isScrolled
          ? "bg-[#0B0B0B] py-4 shadow-md"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <CircleIcon className="text-[#B6FF40] w-8 h-8" />
        </Link>

        <Link 
          href="#pricing" 
          className="hidden lg:flex items-center border border-[#B6FF40] text-[#B6FF40] hover:bg-[#B6FF40]/10 rounded-full px-6 py-2 transition-all duration-300"
        >
          See Plans
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
            <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="#B6FF40"/>
          </svg>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;