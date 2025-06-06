"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const MeetFounderSection = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Founder Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="relative aspect-square w-full max-w-md mx-auto lg:mx-0">
              <Image
                src="/WhatsApp Image 2024-11-11 at 00.02.50_30f03aad.jpg"
                alt="Sourabh, Founder of BuildRush"
                fill
                className="object-cover rounded-2xl shadow-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2 className="font-playfair text-4xl md:text-5xl leading-tight mb-6">
              Meet the Founder
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                I'm Sourabh, founder of BuildRush—a development agency focused on turning ideas into reality. With hands-on experience building solutions for diverse clients across the industry, I've gained a deep understanding of what it takes to craft products that are both valuable and impactful.
              </p>
              
              <p>
                Today, I work closely with startups and businesses to build MVPs that bring their ideas to life and drive real progress. To maintain a high standard of quality and personalized attention, I only work with 3 clients per month.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MeetFounderSection;