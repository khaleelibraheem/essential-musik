"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
} from "lucide-react";

// Shared Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-black">
      <section className="py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto pt-[80px] md:pt-[30px]">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 tracking-tight">
              Get in Touch
            </h1>
            <p className="text-gray-400 text-lg">
              We&apos;d love to hear from you
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div {...fadeInUp} className="bg-white/5 p-8 rounded-2xl">
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/5 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/5 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/5 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-white text-black rounded-xl font-bold hover:bg-gray-100 transition"
                >
                  Send Message
                </motion.button>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div {...fadeInUp} className="space-y-12">
              <div className="bg-white/5 p-8 rounded-2xl">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {[
                    {
                      Icon: MapPin,
                      text: "123 Music Street, Los Angeles, CA 90028",
                    },
                    { Icon: Phone, text: "+1 (323) 555-0123" },
                    { Icon: Mail, text: "contact@essentialmusik.com" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-4"
                      whileHover={{ x: 10 }}
                    >
                      <div className="p-3 bg-purple-500/10 rounded-full">
                        <item.Icon size={24} className="text-purple-500" />
                      </div>
                      <p className="text-gray-300">{item.text}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 p-8 rounded-2xl">
                <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>
                <div className="flex gap-4">
                  {[Instagram, Facebook, Twitter, Youtube].map(
                    (Icon, index) => (
                      <motion.a
                        key={index}
                        href="#"
                        whileHover={{ scale: 1.1, y: -5 }}
                        className="p-4 bg-white/5 rounded-full hover:bg-white/10 transition"
                      >
                        <Icon size={24} />
                      </motion.a>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
