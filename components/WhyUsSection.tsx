"use client";

import { motion } from "framer-motion";
import { Check, X, HelpCircle, Network, DollarSign } from "lucide-react";

const comparisons = [
  {
    title: "Freelancers/Hires",
    features: [
      { name: "Custom product", value: true },
      { name: "Expensive (£30k+)", value: false },
      { name: "Long duration (3+ months)", value: false },
      { name: "Self-managed process", value: false },
      { name: "Lack founder/MVP awareness", value: false },
    ],
  },
  {
    title: "Agencies",
    features: [
      { name: "Custom product", value: true },
      { name: "Expensive (£40k+)", value: false },
      { name: "Long duration (3+ months)", value: false },
      { name: "Intense process", value: false },
      { name: "Lack MVP awareness", value: false },
    ],
  },
  {
    title: "Simple Suite",
    features: [
      { name: "Custom product", value: true },
      { name: "Great value (£7.5k)", value: true },
      { name: "Short duration (4-6 weeks)", value: true },
      { name: "Simple process", value: true },
      { name: "Founder & MVP awareness", value: true },
    ],
    highlighted: true,
  },
  {
    title: "No-Code",
    features: [
      { name: "Limited product", value: false },
      { name: "Low cost", value: true },
      { name: "Long duration (3+ months)", value: false },
      { name: "Difficult process", value: false },
      { name: "Self Awareness", value: null },
    ],
  },
  {
    title: "Technical Co-Founder",
    features: [
      { name: "Custom product", value: true },
      { name: "High cost (50% ownership)", value: false },
      { name: "Long duration (4+ months)", value: false },
      { name: "Intense process", value: false },
      { name: "Self Awareness", value: null },
    ],
  },
];

const benefits = [
  {
    icon: Network,
    title1: "MVPs you ",
    title2: "actually ",
    title3: "need",
    description: "No more over-engineered products. We build fantastic, functional, and effective products that founders use to iterate to product-market fit, reducing your capital and time risk.",
  },
  {
    icon: DollarSign,
    title1: "Only ",
    title2: "pay",
    title3: " for what's needed",
    description: "Avoid paying for unnecessary scope and agency members, or wasting time managing freelancers. Only pay for what's needed, a dedicated duo of designer & developer.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="bg-[#0B0B0B] py-24 rounded-t-[40px] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gray-400 uppercase tracking-wider mb-3">Why us</p>
          <h2 className="font-playfair text-4xl md:text-5xl text-white leading-tight">
            Save time, capital,<br />
            <span className="italic">&</span> attention.
          </h2>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {comparisons.map((option, index) => (
            <motion.div
              key={option.title}
              className={`rounded-xl p-6 ${
                option.highlighted
                  ? "border border-[#B6FF40] bg-[#0B0B0B]/80"
                  : "border border-gray-800 bg-[#0B0B0B]/50"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="flex items-center mb-6">
                <h3 className="text-xl text-white font-medium">
                  {option.title}
                </h3>
                {option.highlighted && (
                  <div className="ml-auto">
                    <div className="w-8 h-8 rounded-full bg-[#B6FF40] flex items-center justify-center text-[#0B0B0B]">
                      <Check size={18} />
                    </div>
                  </div>
                )}
              </div>

              <ul className="space-y-3">
                {option.features.map((feature) => (
                  <li
                    key={feature.name}
                    className="flex items-center text-sm"
                  >
                    {feature.value === true ? (
                      <Check size={16} className="text-[#B6FF40] mr-2" />
                    ) : feature.value === false ? (
                      <X size={16} className="text-gray-500 mr-2" />
                    ) : (
                      <HelpCircle size={16} className="text-gray-500 mr-2" />
                    )}
                    <span className={feature.value ? "text-white" : "text-gray-500"}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              {option.highlighted && (
                <div className="mt-6 space-y-2">
                  {Array(5).fill(0).map((_, i) => (
                    <div key={i} className="h-2 bg-[#111111] rounded-full" />
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div> */}

        <div className="text-center text-xs text-gray-500 mb-8">Our Why</div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#111111] rounded-xl p-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title1}
              className="flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <benefit.icon className="h-8 w-8 text-[#B6FF40] mb-4" />
              <h3 className="text-xl text-white font-medium mb-3">
                {/* <span className="font-normal">MVPs you</span> <em>actually</em> <span className="font-normal">need</span> */}
                <span className="font-normal">{benefit.title1}</span> <em>{benefit.title2}</em> <span className="font-normal">{benefit.title3}</span>
              </h3>
              <p className="text-gray-400 text-sm">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;