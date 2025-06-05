"use client";

import { motion } from "framer-motion";
import { Search, Paintbrush, Layout, Code, Package, Zap, Layers } from "lucide-react";

const processSteps = [
  {
    week: "Week 1",
    title: "MVP Planning & PRD",
    step: 1,
    description: "We dive into your idea, learn about your audience, and create a strategy to bring your idea to life.",
    icon: Search,
  },
  {
    week: "Week 2-5",
    title: "Design & Develop",
    step: 2,
    description: "We design every detail for clarity and great UX, coding from scratch so you can learn, iterate, and reach product-market fit.",
    icon: Layout,
  },
  {
    week: "Week 5",
    title: "Deliver",
    step: 3,
    description: "We provide a fully functional MVP, followed by a 48-hour window for founders to review and share feedback, ensuring it aligns with their vision and goals.",
    icon: Package,
  },
  {
    week: "Week 5-6",
    title: "Maintenance & Support",
    step: 4,
    description: "We provide one week support to ensure your MVP runs smoothly, including bug fixes, performance optimizations.",
    icon: Layers,
  },
];

const features = [
  {
    icon: Package,
    title: "Complete Package",
    description: "Your MVP includes a sleek web application, a high-converting landing page, and SEO-ready content. Everything is built to launch fast and scale effortlessly.",
  },
  {
    icon: Zap,
    title: "Seamless Integrations",
    description: "We set up all necessary integrations for you, including payment gateways, user authentication, and email marketing platforms.",
  },
  {
    icon: Layers,
    title: "Modern, Scalable Tech",
    description: "We use the latest technologies combined with AI to ensure your MVP is fast, stable, and built to scale.",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-[#0B0B0B] rounded-[32px] p-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="flex justify-center mb-6">
                <feature.icon className="w-12 h-12 text-[#B6FF40]" />
              </div>
              <h3 className="text-xl font-medium text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;