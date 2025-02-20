"use client";

import React from "react";
import Navigation from "@/components/Navigation";
import HomePage from "@/components/HomePage";
import ArtistsPage from "@/components/ArtistsPage";
import AboutPage from "@/components/AboutPage";
import ContactPage from "@/components/ContactPage";
import FAQPage from "@/components/FAQPage";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ShopPage from "@/components/ShopPage";
import LoadingScreen from "@/components/Loading";

export default function Home() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  const pages = {
    home: <HomePage />,
    artists: <ArtistsPage />,
    about: <AboutPage />,
    shop: <ShopPage />,
    contact: <ContactPage />,
    faq: <FAQPage />,
  };

  if (isLoading) {
    return (
     <LoadingScreen />
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black text-white"
    >
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {pages[currentPage]}
      {currentPage !== "home" && <Footer setCurrentPage={setCurrentPage} />}
    </motion.div>
  );
}
