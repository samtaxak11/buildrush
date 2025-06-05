"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MoveDown } from "lucide-react";

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="bg-[#0B0B0B] pt-32 pb-36 relative overflow-hidden rounded-b-[48px] min-h-[110vh]">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/0 to-[#0B0B0B] z-10" />
        
        {/* Curved Lines Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute bottom-0 left-0 w-full h-[1200px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* First Wave */}
            <motion.div
              className="absolute bottom-0 left-0 w-full h-[500px] bg-[#808080]/35"
              style={{
                borderRadius: "50% 50% 0 0 / 100% 100% 0 0",
                transform: "scaleX(2)",
              }}
              animate={{
                y: [0, -40, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Second Wave */}
            <motion.div
              className="absolute bottom-0 left-0 w-full h-[600px] bg-[#A0A0A0]/40"
              style={{
                borderRadius: "60% 40% 0 0 / 100% 100% 0 0",
                transform: "scaleX(2.2)",
              }}
              animate={{
                y: [0, -50, 0],
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
              className="absolute bottom-0 left-0 w-full h-[700px] bg-[#C0C0C0]/45"
              style={{
                borderRadius: "40% 60% 0 0 / 100% 100% 0 0",
                transform: "scaleX(1.8)",
              }}
              animate={{
                y: [0, -45, 0],
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
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
            We craft MVPs.<br />
            Fast, <span className="text-[#B6FF40]">Affordable</span> & Hassle&#8209;Free.
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
              We're accepting only 3 new clients for May. Fill out the form to share your vision,<br />we'll reply within 24 hours.
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