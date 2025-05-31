"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="bg-[#0B0B0B] pt-32 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/0 to-[#0B0B0B] z-10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-[200%] rounded-[50%] border border-gray-800/50" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
            We craft minimum<br />viable <span className="text-[#B6FF40] italic">digital</span> products.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Helping founders bring their product to life, attract
            early users, and iterate to product-market fit.
          </p>
          <Link
            href="#pricing"
            className="inline-flex items-center justify-center bg-[#B6FF40] text-[#0B0B0B] font-medium rounded-full px-8 py-3 hover:shadow-[0_0_20px_rgba(182,255,64,0.3)] transition-all duration-300"
          >
            See Plans
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-2">
              <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="#0B0B0B"/>
            </svg>
          </Link>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mt-16 opacity-70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="h-8">
            <span className="text-white font-bold">cleartask</span>
          </div>
          <div className="h-8">
            <span className="text-white font-bold">Copyhub</span>
          </div>
          <div className="h-8">
            <span className="text-white font-bold">MeterMonkey</span>
          </div>
          <div className="h-8">
            <span className="text-white font-bold">haste</span>
          </div>
          <div className="h-8">
            <span className="text-white font-bold">BlackoutPoetry.co</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;