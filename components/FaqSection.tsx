"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Mail } from "lucide-react";

const faqs = [
  {
    question: "How long does the entire process take?",
    answer: "From start to finish, our process typically takes 4-5 weeks for a complete MVP. We have a streamlined process to ensure quick turnaround while maintaining high quality."
  },
  {
    question: "What happens after the MVP is completed?",
    answer: "After completion, we provide 1 week of maintenance & support to help you with critical bug fixes and necessary optimizations. We can also discuss ongoing development, feature additions, or technical support beyond that period if needed."
  },
  {
    question: "How much input do I need to provide during the process?",
    answer: "Your input is crucial at key milestones, particularly during the research and feedback stages. We'll need about 2-3 hours per week of your time, primarily for scheduled calls and asynchronous feedback on deliverables."
  },
  {
    question: "Do you help with marketing or user acquisition?",
    answer: "While our core focus is on building your MVP, we provide guidance on product-market fit and can suggest growth strategies. For specialized marketing needs, we can connect you with trusted partners in our network."
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl leading-tight mb-4">
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-medium text-lg">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 pb-6"
                    : "max-h-0 pb-0"
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="mailto:hello@simplesuite.com"
            className="inline-flex items-center text-[#0B0B0B] font-medium hover:underline"
          >
            <Mail className="w-5 h-5 mr-2" />
            Drop us an email
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default FaqSection;