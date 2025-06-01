"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gray-500 uppercase tracking-wider mb-3">Our Projects</p>
          <h2 className="font-playfair text-4xl md:text-5xl leading-tight">
            Ideas we've brought to life
          </h2>
        </div>

        <motion.div 
          className="bg-white rounded-xl shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="flex flex-col lg:flex-row">
            <div className="p-8 lg:p-12 lg:w-1/2 flex flex-col justify-center">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 mb-6">
                MVP
              </div>
              
              <h3 className="font-playfair text-2xl md:text-3xl lg:text-4xl mb-4">
                Digital health monitoring platform
              </h3>
              
              <p className="text-gray-600 mb-8">
                A comprehensive health tracking solution that helps users monitor their wellness journey and achieve their fitness goals.
              </p>
              
              <Link 
                href="#" 
                className="inline-flex items-center text-[#0B0B0B] font-medium hover:underline w-fit"
              >
                Open Project 
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-2">
                  <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="currentColor"/>
                </svg>
              </Link>
            </div>
            
            <div className="lg:w-1/2 relative min-h-[400px]">
              <div className="relative h-full">
                <Image 
                  src="https://images.pexels.com/photos/3846115/pexels-photo-3846115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Health Monitoring Dashboard"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-r-xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;