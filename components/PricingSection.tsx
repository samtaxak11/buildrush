"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    title: "MVP Development Package",
    price: "Starting at $1,500",
    timeline: "Limited availability - Only 3 spots for June.",
    description: "What's Included:",
    features: [
      { name: "Complete MVP development in 4-5 weeks", included: true },
      { name: "Web application/ Mobile App", included: true },
      { name: "Modern, scalable tech stack", included: true },
      { name: "Seamless integrations (payments, auth, etc.)", included: true },
      { name: "Personalized, founder-led development", included: true },
      { name: "Regular updates and transparent process", included: true },
      { name: "Technical Documentation & Development Handover", included: true },
      { name: "1 week maintenance & support", included: true },
    ],
    popular: true,
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="bg-[#0B0B0B] py-24 rounded-t-[48px] rounded-b-[48px]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl text-white leading-tight">
            Bring your idea to life
          </h2>
        </div>

        <div className="flex items-center justify-center min-h-[600px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
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
                    One Time
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-playfair text-white mb-4">{plan.title}</h3>
                  <div className="flex items-end mb-1">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                  </div>
                  <div className="text-gray-400 mb-4">{plan.timeline}</div>
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
                    href="https://tally.so/r/m6y4xA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-center py-3 px-4 rounded-full font-medium ${
                      plan.popular
                        ? "bg-[#B6FF40] text-[#0B0B0B] hover:shadow-[0_0_20px_rgba(182,255,64,0.3)]"
                        : "border border-gray-700 text-white hover:bg-gray-800"
                    } transition-all duration-300`}
                  >
                    Share your Idea
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;