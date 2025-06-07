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
    item.name === "Work" || item.name === "Share your Idea"
  );

  return (
    <>
      {/* Mobile Navigation - Show only Work and Share your Idea */}
      <div className={cn(
        "fixed bottom-0 left-0 right-0 z-50 p-4 block md:hidden",
        className
      )}>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-center"
        >
          <div className="flex items-center gap-2 bg-black/80 backdrop-blur-md border border-white/10 rounded-full px-4 py-2">
            {mobileItems.map((item, index) => (
              <NavBarItem key={item.name} item={item} index={index} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Desktop Navigation - Show all items */}
      <div className={cn(
        "fixed bottom-0 left-0 right-0 z-50 p-4 hidden md:block",
        className
      )}>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-center"
        >
          <div className="flex items-center gap-2 bg-black/80 backdrop-blur-md border border-white/10 rounded-full px-4 py-2">
            {items.map((item, index) => (
              <NavBarItem key={item.name} item={item} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

const NavBarItem = ({
  item,
  index,
}: {
  item: {
    name: string;
    url: string;
    icon: React.ComponentType<any>;
  };
  index: number;
}) => {
  const handleClick = () => {
    if (item.url.startsWith('http')) {
      window.open(item.url, '_blank', 'noopener,noreferrer');
    } else if (item.url.startsWith('#')) {
      const element = document.querySelector(item.url);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Special styling for "Share your Idea" button
  const isShareButton = item.name === "Share your Idea";

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      onClick={handleClick}
      className={cn(
        "flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105",
        isShareButton 
          ? "bg-[#B6FF40] text-[#0B0B0B] hover:shadow-[0_0_20px_rgba(182,255,64,0.3)]"
          : "text-white/70 hover:text-white hover:bg-white/10"
      )}
    >
      <item.icon className="w-4 h-4" />
      <span className="hidden sm:inline">{item.name}</span>
    </motion.button>
  );
};