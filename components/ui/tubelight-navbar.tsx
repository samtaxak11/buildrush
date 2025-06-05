"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  url: string;
  isExternal?: boolean;
  isSpecial?: boolean;
}

interface NavBarProps {
  items?: NavItem[];
}

export function NavBar({ items }: NavBarProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const navItems: NavItem[] = [
    { name: 'Home', url: '#' },
    { name: 'Work', url: '#projects' },
    { name: 'Process', url: '#how-it-works' },
    { name: 'Pricing', url: '#pricing' },
    { name: 'Connect on X', url: 'https://twitter.com/buildrushapp', isExternal: true },
    { name: 'Share your Idea', url: 'https://tally.so/r/m6y4xA', isExternal: true, isSpecial: true }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="max-w-fit mx-auto">
        <div className="flex items-center justify-center gap-3 bg-white py-2 px-4 rounded-full shadow-lg">
          {navItems.map((item, index) => {
            const isHovered = hoveredIndex === index;
            
            return (
              <Link
                key={item.name}
                href={item.url}
                target={item.isExternal ? "_blank" : undefined}
                rel={item.isExternal ? "noopener noreferrer" : undefined}
                className={cn(
                  "relative px-3 py-1.5 text-sm font-medium transition-colors",
                  item.isSpecial ? "bg-[#B6FF40] text-black rounded-full" : "text-black hover:text-gray-600",
                  {
                    "transition-all duration-300": isHovered,
                  }
                )}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                {isHovered && (
                  <motion.div
                    layoutId="hover"
                    className="absolute bottom-0 left-0 right-0 h-full bg-black/5 rounded-full -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}