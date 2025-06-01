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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-12",
        isScrolled
          ? "bg-[#0B0B0B] py-4 shadow-md"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          {/* <CircleIcon className="h-8 w-8 text-[#B6FF40]" /> */}
          <span className="font-playfair text-xl font-bold text-white">build<span className="text-[#B6FF40]">RUSH</span></span>
        </Link>

        {/* Mobile menu button */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        {/* <nav className="hidden lg:flex items-center space-x-8">
          <Link href="#process" className="text-white hover:text-[#B6FF40] transition-colors">
            Process
          </Link>
          <Link href="#projects" className="text-white hover:text-[#B6FF40] transition-colors">
            Projects
          </Link>
          <Link href="#faq" className="text-white hover:text-[#B6FF40] transition-colors">
            FAQ
          </Link>
          <Link href="#about" className="text-white hover:text-[#B6FF40] transition-colors">
            About
          </Link>
          <Link href="#course" className="text-white hover:text-[#B6FF40] transition-colors">
            Course
          </Link>
        </nav> */}

        {/* CTA Button */}
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

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0B0B0B] border-t border-gray-800 p-4">
          <nav className="flex flex-col space-y-4">
            <Link 
              href="#process" 
              className="text-white py-2 px-4 hover:bg-gray-800 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Process
            </Link>
            <Link 
              href="#projects" 
              className="text-white py-2 px-4 hover:bg-gray-800 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              href="#faq" 
              className="text-white py-2 px-4 hover:bg-gray-800 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link 
              href="#about" 
              className="text-white py-2 px-4 hover:bg-gray-800 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="#course" 
              className="text-white py-2 px-4 hover:bg-gray-800 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Course
            </Link>
            <Link 
              href="#pricing" 
              className="flex items-center justify-center bg-[#B6FF40] text-[#0B0B0B] font-medium rounded-full px-6 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              See Plans
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
                <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="#0B0B0B"/>
              </svg>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;