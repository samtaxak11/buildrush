"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const NavBar = ({
  items,
  className,
}: {
  items: {
    name: string;
    url: string;
    icon: React.ComponentType<any>;
  }[];
  className?: string;
}) => {
  // Filter items for mobile - only show "Work" and "Share your Idea"
  const mobileItems = items.filter(item => 
    item.name === "Projects" || item.name === "Pricing"
  );

  return (
    <>
      {/* Mobile Navigation - Only Projects and Pricing */}
      <div className={cn(
        "fixed bottom-0 left-0 right-0 z-50 p-4 md:hidden",
        className
      )}>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-center gap-4 mx-auto w-fit bg-black/80 backdrop-blur-md border border-white/10 rounded-full px-6 py-3"
        >
          {mobileItems.map((item, idx) => (
            <a
              key={item.name}
              href={item.url}
              className="flex items-center gap-2 text-white hover:text-[#B6FF40] transition-colors duration-200 px-3 py-2 rounded-full hover:bg-white/10"
            >
              <item.icon className="h-4 w-4" />
              <span className="text-sm font-medium">
                {item.name === "Work" ? "Work" : "Share your Idea"}
              </span>
            </a>
          ))}
        </motion.div>
      </div>

      {/* Desktop Navigation - All Items */}
      <div className={cn(
        "fixed bottom-0 left-0 right-0 z-50 p-4 hidden md:block",
        className
      )}>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-center gap-2 mx-auto w-fit bg-black/80 backdrop-blur-md border border-white/10 rounded-full px-6 py-3"
        >
          {items.map((item, idx) => (
            <a
              key={item.name}
              href={item.url}
              className="flex items-center gap-2 text-white hover:text-[#B6FF40] transition-colors duration-200 px-3 py-2 rounded-full hover:bg-white/10"
            >
              <item.icon className="h-4 w-4" />
              <span className="text-sm font-medium">{item.name}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </>
  );
};