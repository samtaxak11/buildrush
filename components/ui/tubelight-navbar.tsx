"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

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
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 p-4 hidden md:block",
        className
      )}
    >
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center space-x-2 bg-black/80 backdrop-blur-md rounded-full px-4 py-3 border border-gray-800">
          {items.map((item, idx) => {
            const Icon = item.icon;
            const isShareIdea = item.name === "Share your Idea";
            
            return (
              <Link
                key={item.name}
                href={item.url}
                target={item.url.startsWith('http') ? '_blank' : undefined}
                rel={item.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={cn(
                  "relative flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  isShareIdea 
                    ? "bg-[#B6FF40] text-[#0B0B0B] hover:bg-[#a3e636] hover:shadow-[0_0_20px_rgba(182,255,64,0.3)]"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                )}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                onClick={() => setActiveIdx(idx)}
              >
                {Icon && (
                  <Icon className={cn(
                    "w-4 h-4",
                    isShareIdea ? "text-[#0B0B0B]" : ""
                  )} />
                )}
                <span>{item.name}</span>
                
                {!isShareIdea && hoveredIdx === idx && (
                  <motion.div
                    className="absolute inset-0 bg-white/10 rounded-full"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};