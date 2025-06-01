"use client";

import { motion } from "framer-motion";
import { Search, Paintbrush, Layout, Code } from "lucide-react";

const processSteps = [
  {
    week: "Week 1",
    title: "Research",
    step: 1,
    description: "We dive into your idea, learn about your audience, and create a strategy to bring your idea to life.",
    icon: Search,
  },
  {
    week: "Week 2",
    title: "Design",
    step: 2,
    description: "We design every detail to ensure you showcase your idea clearly, providing a great user experience.",
    icon: Layout,
  },
  {
    week: "Week 3-5",
    title: "Develop",
    step: 3,
    description: "We code from scratch so you learn from each user interaction and iterate to product-market fit.",
    icon: Code,
  },
  {
    week: "Week 5-6",
    title: "Deliver",
    step: 4,
    description: "We code from scratch so you learn from each user interaction and iterate to product-market fit.",
    icon: Code,
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="bg-[#f5f5f5] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gray-500 uppercase tracking-wider mb-3">The Process</p>
          <h2 className="font-playfair text-4xl md:text-5xl leading-tight mb-4">
            Built by founders,<br />
            <span className="font-playfair">for founders.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              className="bg-white rounded-lg p-8 border border-gray-100 shadow-[0_2px_4px_rgba(0,0,0,0.1)] 
                hover:shadow-[0_4px_8px_rgba(0,0,0,0.1)] transition-shadow duration-300 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="text-sm text-gray-500 mb-1">{step.week}</div>
              <h3 className="font-playfair text-2xl mb-4 flex items-center gap-2">
                {step.title}
                <span className="ml-auto text-lg font-normal text-gray-400">
                  {step.step}
                </span>
              </h3>
              <p className="text-gray-600 mb-6">{step.description}</p>
              <div className="mt-auto">
                <step.icon className="w-12 h-12 text-[#B6FF40]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;