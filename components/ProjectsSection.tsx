"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Sehat Sakhi",
    image: "/Screenshot (133).png",
    tags: ["Clinic Management System", "Healthcare", "AI"],
    description: "Sehat Sakhi is an AI-powered Clinic Management Software designed for clinics on a subscription-based model, offering features like appointment scheduling, patient record management, staff coordination, and more."
  },
  {
    title: "Juxaa",
    image: "/Screenshot (134).png",
    tags: ["AI Job Co-pilot", "Application Tracking", "Automated Applications"],
    description: "Juxaa is an AI-driven Job Co-pilot that simplifies the job search and application process with features like application tracking, ATS-optimized resumes, and more."
  },
  {
    title: "Brainwave",
    image: "/Screenshot (135).png",
    tags: ["AI Code Editor", "Solana", "Productivity"],
    description: "Brainwave is an AI-powered Web3 code editor designed to help you build Solana dApps seamlessly using AI."
  },
  {
    title: "HooBank",
    image: "/Screenshot (136).png",
    tags: ["Banking", "Credit Cards", "Payments"],
    description: "HooBank is a next-generation payment platform that recommends credit cards tailored to individual needs by analyzing annual percentage rates and fees."
  }
];

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="relative h-64 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-playfair font-medium mb-3">
                  {project.title}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors duration-200 cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <Link
                  href="#"
                  className="inline-flex items-center text-[#B6FF40] hover:text-[#a3e636] font-medium transition-colors duration-200"
                >
                  View Project
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="ml-2"
                  >
                    <path
                      d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"
                      fill="currentColor"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;