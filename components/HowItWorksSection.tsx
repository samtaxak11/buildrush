"use client";

import { time } from "console";
import { motion } from "framer-motion";

const steps = [
  {
    time: "24 hours",
    title: "Respond in",
  },
  {
    time: "5 days",
    title: "Confirm in",
  },
  {
    time: "4-5 weeks",
    title: "Complete in",
  },
  {
    time: "1 week",
    title: "Maintenance & Support",
  }
];

const supportingSteps = [
  {
    number: 1,
    description: "Book a call with us to discuss your vision. We'll explore your idea and understand your business goals in detail.",
  },
  {
    number: 2,
    description: "Receive a detailed MVP plan followed by a comprehensive PRD with technical implementation approach for complete clarity.",
  },
  {
    number: 3,
    description: "Once the proposal is signed, development begins. Your MVP will be ready in 5 weeks with regular updates throughout the process.",
  },
  {
    number: 4,
    description: "Get your fully functional MVP with all planned features, ready for market launch and user acquisition.",
  },
  {
    number: 5,
    description: "Enjoy a week of maintenance support including critical bug fixes and necessary optimizations.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gray-500 uppercase tracking-wider mb-3">How it works</p>
          <h2 className="font-playfair text-4xl md:text-5xl leading-tight">
            Our simple, fast, <span className="italic text-gray-400">&</span><br />
            effective process.
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-16 max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="text-center mb-8 md:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="text-sm text-gray-500 mb-2">{step.title}</div>
              <div className="text-3xl font-playfair">{step.time}</div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <svg width="40" height="2" viewBox="0 0 40 2" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-300">
                    <line x1="0" y1="1" x2="40" y2="1" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          {supportingSteps.map((step, index) => (
            <motion.div
              key={step.number}
              className="flex items-start py-5 border-b border-gray-100 last:border-b-0"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="mr-6 text-gray-400 font-medium">{step.number}</div>
              <div className="text-gray-700">{step.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;