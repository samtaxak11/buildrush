"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MoveDown } from "lucide-react";

interface HeroSectionProps {
  onLoaded?: () => void;
}

const HeroSection = ({ onLoaded }: HeroSectionProps) => {
  const [mounted, setMounted] = useState(false);
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  // Preload critical assets
  useEffect(() => {
    const preloadAssets = async () => {
      try {
        // Preload any critical images or fonts
        const fontPromises = [
          document.fonts.load('400 16px Inter'),
          document.fonts.load('400 48px Playfair Display'),
        ];

        await Promise.all(fontPromises);
        setAssetsLoaded(true);
      } catch (error) {
        console.warn('Font preloading failed:', error);
        setAssetsLoaded(true); // Continue even if fonts fail
      }
    };

    preloadAssets();
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Notify parent when hero is fully loaded
  const handleAnimationComplete = useCallback(() => {
    if (mounted && assetsLoaded && onLoaded) {
      onLoaded();
    }
  }, [mounted, assetsLoaded, onLoaded]);

  // Call onLoaded when both mounted and assets are ready
  useEffect(() => {
    if (mounted && assetsLoaded) {
      handleAnimationComplete();
    }
  }, [mounted, assetsLoaded, handleAnimationComplete]);

  if (!mounted) {
    return (
      <section className="bg-[#0B0B0B] pt-24 pb-36 relative overflow-hidden rounded-b-[48px] min-h-[80vh] md:min-h-[100vh]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20">
          <div className="text-center mb-12 mt-3">
            {/* Loading skeleton */}
            <div className="animate-pulse">
              <div className="h-4 bg-gray-700 rounded w-48 mx-auto mb-8"></div>
              <div className="h-16 bg-gray-700 rounded w-3/4 mx-auto mb-6"></div>
              <div className="h-6 bg-gray-700 rounded w-2/3 mx-auto mb-10"></div>
              <div className="h-12 bg-gray-700 rounded w-48 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#0B0B0B] pt-24 pb-36 relative overflow-hidden rounded-b-[48px] min-h-[80vh] md:min-h-[100vh]">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/0 to-[#0B0B0B] z-10" />
        
        {/* Curved Lines Background - Only render when assets are loaded */}
        {assetsLoaded && (
          <div className="absolute inset-0 overflow-hidden">
            <motion.div 
              className="absolute -bottom-[48px] left-0 w-full h-[1200px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              onAnimationComplete={handleAnimationComplete}
            >
              {/* First Wave */}
              <motion.div
                className="absolute bottom-0 left-0 w-full h-[300px] bg-[#808080]/35"
                style={{
                  borderRadius: "50% 50% 0 0 / 100% 100% 0 0",
                  transform: "scaleX(1.5)",
                }}
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Second Wave */}
              <motion.div
                className="absolute bottom-0 left-0 w-full h-[400px] bg-[#A0A0A0]/40"
                style={{
                  borderRadius: "50% 50% 0 0 / 100% 100% 0 0",
                  transform: "scaleX(1.5)",
                }}
                animate={{
                  y: [0, -25, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />

              {/* Third Wave */}
              <motion.div
                className="absolute bottom-0 left-0 w-full h-[500px] bg-[#C0C0C0]/45"
                style={{
                  borderRadius: "50% 50% 0 0 / 100% 100% 0 0",
                  transform: "scaleX(1.5)",
                }}
                animate={{
                  y: [0, -30, 0],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              />
            </motion.div>
          </div>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20">
        <motion.div 
          className="text-center mb-12 mt-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: assetsLoaded ? 1 : 0, y: assetsLoaded ? 0 : 20 }}
          transition={{ duration: 0.5 }}
        >
          {/* Notification Banner */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: assetsLoaded ? 1 : 0, y: assetsLoaded ? 0 : -10 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#1a1a2e] to-[#16213e] border border-[#B6FF40]/20 rounded-full px-4 py-2 md:px-6 md:py-3 shadow-lg backdrop-blur-sm">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#B6FF40] rounded-full animate-pulse"></div>
              <span className="text-white text-xs md:text-sm font-medium">
                <span className="text-[#B6FF40] font-semibold">2 Spots left</span> for January
              </span>
            </div>
          </motion.div>

          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
            We craft MVPs,<br />
            fast, <span className="text-[#B6FF40]">affordable</span> & hassle&#8209;free.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Helping founders bring their product to life, attract
            early users, and iterate to product-market fit.
          </p>
          <div className="space-y-6">
            <a
              href="https://tally.so/r/m6y4xA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#B6FF40] text-[#0B0B0B] font-medium rounded-full px-8 py-3 hover:shadow-[0_0_20px_rgba(182,255,64,0.3)] transition-all duration-300"
            >
              Share your Idea
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-2">
                <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="#0B0B0B"/>
              </svg>
            </a>
            <div className="text-gray-400 text-sm">
              We're accepting only 2 new clients for January.<br /> Fill out the form to share your vision, we'll reply within 24 hours.
            </div>
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-[#B6FF40]"
            >
              <MoveDown className="mx-auto w-6 h-6" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;