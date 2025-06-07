"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export const NavBar = ({
  items,
  className,
}: {
  items: {
    name: string;
    url: string;
    icon?: React.ComponentType<any>;
  }[];
  className?: string;
}) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className={cn("fixed bottom-0 left-0 right-0 z-50 p-4 hidden md:block", className)}>
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center space-x-2 bg-black/80 backdrop-blur-md rounded-full px-4 py-3 border border-gray-800">
          {items.map((item, idx) => {
            const isShareIdea = item.name === "Share your Idea";
            const isTwitter = item.name === "Connect on X";
            
            return (
              <a
                key={item.name}
                href={item.url}
                target={item.url.startsWith('http') ? "_blank" : undefined}
                rel={item.url.startsWith('http') ? "noopener noreferrer" : undefined}
                className={cn(
                  "relative flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  isShareIdea 
                    ? "bg-[#B6FF40] text-[#0B0B0B] hover:bg-[#a3e636] hover:shadow-[0_0_20px_rgba(182,255,64,0.3)]"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                )}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <AnimatePresence>
                  {hoveredIdx === idx && !isShareIdea && (
                    <motion.span
                      className="absolute inset-0 h-full w-full bg-white/10 rounded-full"
                      layoutId="hoverBackground"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { duration: 0.15 },
                      }}
                      exit={{
                        opacity: 0,
                        transition: { duration: 0.15, delay: 0.2 },
                      }}
                    />
                  )}
                </AnimatePresence>
                {item.icon && !isTwitter && (
                  <item.icon className={cn(
                    "w-4 h-4",
                    isShareIdea ? "text-[#0B0B0B]" : "text-gray-400"
                  )} />
                )}
                {isTwitter && (
                  <svg 
                    className="w-4 h-4 text-gray-400 pointer-events-none" 
                    fill="currentColor" 
                    viewBox="0 0 24 24" 
                    aria-hidden="true"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </svg>
                )}
                <span className={cn(
                  "relative z-20",
                  isShareIdea ? "text-[#0B0B0B]" : ""
                )}>
                  {item.name}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};