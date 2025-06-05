"use client";

import { motion } from "framer-motion";
import { Clock, Users, Layout, DollarSign, Server, Network, Rocket, Database, Monitor, Coins } from "lucide-react";

const approaches = {
  traditional: [
    {
      icon: Clock,
      title: "Lengthy Timelines",
      description: "Months of planning and design before any code is written, delaying time-to-market"
    },
    {
      icon: Users,
      title: "Bloated Teams",
      description: "Large teams with project managers adding unnecessary overhead and complexity"
    },
    {
      icon: Layout,
      title: "Excessive Design Phases",
      description: "Weeks spent on static wireframes and mockups before seeing anything functional"
    },
    {
      icon: DollarSign,
      title: "High Upfront Costs",
      description: "$10K-$20K invested before validating if your idea has market traction"
    },
    {
      icon: Server,
      title: "Complex Infrastructure",
      description: "Time and resources wasted on managing servers and complex deployment pipelines"
    }
  ],
  aiPowered: [
    {
      icon: Rocket,
      title: "Rapid MVP Development",
      description: "From concept to market-ready MVP in 5 weeks with iterative development"
    },
    {
      icon: Network,
      title: "AI-Augmented Team",
      description: "Small, efficient team leveraging AI tools for faster decision-making and execution"
    },
    {
      icon: Monitor,
      title: "No Lengthy Design Phases",
      description: "Skip lengthy design phases with Lovable/V0, creating working UI and app logic immediately"
    },
    {
      icon: Coins,
      title: "Cost-Effective Validation",
      description: "Validate your idea with real users before investing significant capital"
    },
    {
      icon: Database,
      title: "Scalable Infrastructure",
      description: "Modern stack with Supabase and Vercel for automatic scaling without maintenance headaches"
    }
  ]
};

const WhyUsSection = () => {
  return (
    <section id="why-us" className="bg-[#0B0B0B] py-24 rounded-t-[48px] rounded-b-[48px] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gray-400 uppercase tracking-wider mb-3">Why us</p>
          <h2 className="font-playfair text-4xl md:text-5xl text-white leading-tight">
            Save time, capital,<br />
            <span className="italic">&</span> attention.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Traditional Approach */}
          <div className="bg-[#111111] rounded-xl p-6">
            <h3 className="text-2xl font-medium text-red-400 mb-6 text-center flex items-center justify-center">
              <Clock className="w-6 h-6 mr-2" />
              Traditional Approach
            </h3>
            <div className="space-y-6">
              {approaches.traditional.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="bg-[#0B0B0B]/50 rounded-lg p-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start">
                    <div className="bg-red-900/20 p-2 rounded-lg mr-4">
                      <item.icon className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* AI-Powered Approach */}
          <div className="bg-[#111111] rounded-xl p-6">
            <h3 className="text-2xl font-medium text-[#B6FF40] mb-6 text-center flex items-center justify-center">
              <Rocket className="w-6 h-6 mr-2" />
              Our AI-Powered Approach
            </h3>
            <div className="space-y-6">
              {approaches.aiPowered.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="bg-[#0B0B0B]/50 rounded-lg p-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start">
                    <div className="bg-[#B6FF40]/10 p-2 rounded-lg mr-4">
                      <item.icon className="w-5 h-5 text-[#B6FF40]" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;