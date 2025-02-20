"use client";

import React from "react";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import { motion } from "framer-motion";

const Footer = ({ setCurrentPage }) => {
  return (
    <footer className="bg-black bg-opacity-50 backdrop-blur-lg py-10 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Bottom Footer */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="md:col-span-2">
            <div className="flex justify-center md:justify-start space-x-6 md:space-x-4">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="text-gray-400 hover:text-white transition"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 mt-6 md:mt-6">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Essential Musik. All rights reserved.
            </p>
            <div className="flex justify-center md:justify-end space-x-8">
              <motion.a
                href="#"
                whileHover={{ y: -2 }}
                className="text-gray-400 hover:text-white text-sm transition"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -2 }}
                className="text-gray-400 hover:text-white text-sm transition"
              >
                Terms of Service
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
