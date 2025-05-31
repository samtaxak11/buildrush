"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    title: "Prototype",
    price: "£4,500",
    timeline: "2-4 Weeks",
    description: "Perfect for validating ideas and raising funds",
    features: [
      { name: "UX/UI Design", included: true },
      { name: "Brand Identity", included: true },
      { name: "Single MVP Feature", included: true },
      { name: "Static Website", included: true },
      { name: "Complete in 2-4 weeks", included: true },
      { name: "Technical Documentation", included: false },
      { name: "Development Handover", included: false },
      { name: "3 months support", included: false },
    ],
    popular: false,
  },
  {
    title: "MVP",
    price: "£7,500",
    timeline: "4-6 Weeks",
    description: "Complete solution with all core functionality",
    features: [
      { name: "UX/UI Design", included: true },
      { name: "Brand Identity", included: true },
      { name: "All Core MVP Features", included: true },
      { name: "Interactive Prototype", included: true },
      { name: "Complete in 4-6 weeks", included: true },
      { name: "Technical Documentation", included: true },
      { name: "Development Handover", included: true },
      { name: "3 months support", included: true },
    ],
    popular: true,
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="bg-[#0B0B0B] py-24 rounded-t-[40px]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl text-white leading-tight">
            Bring your idea to life
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.title}
              className={`rounded-2xl overflow-hidden ${
                plan.popular 
                ? "border-2 border-[#B6FF40] bg-[#111111]" 
                : "border border-gray-800 bg-[#0B0B0B]"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {plan.popular && (
                <div className="bg-[#B6FF40] text-[#0B0B0B] py-1 text-center text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-playfair text-white mb-4">{plan.title}</h3>
                <div className="flex items-end mb-1">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                </div>
                <div className="text-gray-400 mb-4">Est. {plan.timeline}</div>
                <p className="text-gray-300 mb-6">{plan.description}</p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature.name} className="flex items-center">
                      {feature.included ? (
                        <Check className="text-[#B6FF40] mr-3 h-5 w-5" />
                      ) : (
                        <X className="text-gray-600 mr-3 h-5 w-5" />
                      )}
                      <span className={feature.included ? "text-gray-200" : "text-gray-500"}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="#"
                  className={`block text-center py-3 px-4 rounded-full font-medium ${
                    plan.popular
                      ? "bg-[#B6FF40] text-[#0B0B0B] hover:shadow-[0_0_20px_rgba(182,255,64,0.3)]"
                      : "border border-gray-700 text-white hover:bg-gray-800"
                  } transition-all duration-300`}
                >
                  Book Intro Call
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;