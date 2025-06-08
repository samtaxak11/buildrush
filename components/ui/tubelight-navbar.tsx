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

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 p-4 hidden md:block",
        className
      )}
    >
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-2 bg-black/80 backdrop-blur-md border border-white/10 rounded-full px-4 py-2">
          {items.map((navItem, idx) => (
            <Link
              key={navItem.name}
              href={navItem.url}
              target={navItem.name === 'Connect on X' ? "_blank" : undefined}
              rel={navItem.name === 'Connect on X' ? "noopener noreferrer" : undefined}
              className={cn(
                "relative flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105",
                hoveredIdx === idx
                  ? "text-white bg-white/10"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              )}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <AnimatePresence>
                {hoveredIdx === idx && (
                  <motion.span
                    className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-full"
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
              <span className="relative z-20 flex items-center gap-2">
                {navItem.icon && <navItem.icon className="w-4 h-4" />}
                {navItem.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};