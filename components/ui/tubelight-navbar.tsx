"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  url: string;
  icon: React.ComponentType<any>;
}

interface NavBarProps {
  items: NavItem[];
}

export function NavBar({ items }: NavBarProps) {
  const handleClick = (url: string) => {
    if (url.startsWith('http')) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else if (url.startsWith('#')) {
      const element = document.querySelector(url);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = url;
    }
  };

  // Filter items for mobile (only Work and Share your Idea)
  const mobileItems = items.filter(item => 
    item.name === 'Work' || item.name === 'Share your Idea'
  );

  return (
    <>
      {/* Mobile Navigation - Shows only Work and Share your Idea with text */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 block md:hidden">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-center gap-3 mx-auto w-fit"
        >
          <div className="flex items-center gap-3 bg-black/80 backdrop-blur-md border border-white/10 rounded-full px-4 py-3 shadow-lg">
            {mobileItems.map((item, index) => {
              const Icon = item.icon;
              const isShareIdea = item.name === 'Share your Idea';
              
              return (
                <motion.button
                  key={item.name}
                  onClick={() => handleClick(item.url)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 text-sm font-medium",
                    isShareIdea
                      ? "bg-[#B6FF40] text-black hover:bg-[#a3e636]"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Desktop Navigation - Shows all items */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 hidden md:block">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-center gap-3 mx-auto w-fit"
        >
          <div className="flex items-center gap-3 bg-black/80 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 shadow-lg">
            {items.map((item, index) => {
              const Icon = item.icon;
              const isShareIdea = item.name === 'Share your Idea';
              
              return (
                <motion.button
                  key={item.name}
                  onClick={() => handleClick(item.url)}
                  className={cn(
                    "flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200",
                    isShareIdea
                      ? "bg-[#B6FF40] text-black hover:bg-[#a3e636]"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  )}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </>
  );
}