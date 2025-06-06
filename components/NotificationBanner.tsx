"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

const NotificationBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="bg-gradient-to-r from-[#1a1a2e] to-[#16213e] border border-[#B6FF40]/20 rounded-full px-6 py-3 shadow-lg backdrop-blur-sm">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-[#B6FF40] rounded-full animate-pulse"></div>
            <span className="text-white text-sm font-medium">
              <span className="text-[#B6FF40] font-semibold">2 Spots left</span> for June
            </span>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white transition-colors duration-200 ml-2"
            aria-label="Close notification"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default NotificationBanner;