"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const CtaSection = () => {
  return (
    <section className="bg-[#0B0B0B] py-24 rounded-t-[48px]">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="font-playfair text-4xl md:text-5xl text-white leading-tight mb-12">
            Ready to bring your<br />idea to life?
          </h2>

          <Link
            href="https://tally.so/r/m6y4xA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#B6FF40] text-[#0B0B0B] font-medium rounded-full px-8 py-4 hover:shadow-[0_0_20px_rgba(182,255,64,0.3)] transition-all duration-300"
          >
            Share your Idea
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;