import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingCart,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  ChevronRight,
  MessageSquare,
  Filter,
  ArrowRight,
} from "lucide-react";

// Shared Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const faqs = [
  {
    question: "How can I submit my music to Essential Musik?",
    answer:
      "We accept music submissions through our online portal. Please ensure your submission includes high-quality recordings, artist biography, and press materials. Our A&R team reviews all submissions and will contact you if interested.",
  },
  {
    question: "What genres do you work with?",
    answer:
      "We work across all genres, from electronic and pop to rock and classical. Our focus is on quality and innovation rather than specific genres. We're always looking for unique voices and fresh approaches to music.",
  },
  {
    question: "How do your artist contracts work?",
    answer:
      "Our contracts are tailored to each artist's needs and circumstances. We believe in fair, transparent agreements that benefit both parties. Standard contracts typically cover recording, distribution, and marketing support.",
  },
  {
    question: "Do you offer distribution-only deals?",
    answer:
      "Yes, we offer various partnership models, including distribution-only deals. These arrangements give artists more control while leveraging our global distribution network and marketing expertise.",
  },
  {
    question: "What support do you provide to artists?",
    answer:
      "We provide comprehensive support including recording facilities, marketing, PR, tour support, digital strategy, and sync licensing. Our team works closely with each artist to develop customized career strategies.",
  },
];

const FAQPage = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  return (
    <main className="min-h-screen bg-black">
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto pt-[80px] md:pt-[30px]">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 tracking-tight">FAQ</h1>
            <p className="text-gray-400 text-lg">
              Find answers to common questions
            </p>
          </motion.div>

          <motion.div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 rounded-xl overflow-hidden"
              >
                <motion.button
                  onClick={() =>
                    setOpenQuestion(openQuestion === index ? null : index)
                  }
                  className="w-full px-6 py-4 flex items-center justify-between"
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                >
                  <span className="text-lg font-medium text-left">
                    {faq.question}
                  </span>
                  <ChevronRight
                    className={`transition-transform duration-300 ${
                      openQuestion === index ? "rotate-90" : ""
                    }`}
                  />
                </motion.button>
                <AnimatePresence>
                  {openQuestion === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-gray-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="mt-16 text-center bg-white/5 p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-gray-400 mb-6">
              Our support team is here to help you 24/7
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-black px-8 py-4 rounded-xl font-bold inline-flex items-center gap-2"
            >
              Contact Support
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default FAQPage;
