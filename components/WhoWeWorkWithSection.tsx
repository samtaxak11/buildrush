"use client";

import { motion } from "framer-motion";
import { User, TrendingUp, Briefcase, Rocket } from "lucide-react";

const clientTypes = [
  {
    icon: User,
    title: "Non-technical founders",
    description: "We'll be your technical co-founder as a service, saving you hassle and equity."
  },
  {
    icon: TrendingUp,
    title: "Fund raisers",
    description: "Our MVPs show credibility and results to investors, maximising the chance of a raise."
  },
  {
    icon: Briefcase,
    title: "Serial entrepreneurs",
    description: "Too many ideas, not enough time? We'll build the product, you work your magic."
  },
  {
    icon: Rocket,
    title: "Startups",
    description: "We bring your product to life so you can attract users and scale your business."
  }
];

const WhoWeWorkWithSection = () => {
  return (
    <section id="who-we-work-with" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gray-500 uppercase tracking-wider mb-3">Entrepreneurs → Startups</p>
          <h2 className="font-playfair text-4xl md:text-5xl leading-tight">
            Who we work with
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {clientTypes.map((client, index) => (
            <motion.div
              key={client.title}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-4">
                <client.icon className="w-6 h-6 text-[#0B0B0B]" />
              </div>
              <h3 className="text-xl font-playfair font-medium mb-2">
                {client.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {client.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeWorkWithSection;