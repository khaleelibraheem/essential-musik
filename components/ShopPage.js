"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, ChevronRight, Filter } from "lucide-react";
import Image from "next/image";

// Shared Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = [
    { id: "all", name: "All Products" },
    { id: "clothing", name: "Clothing" },
    { id: "accessories", name: "Accessories" },
    { id: "vinyl", name: "Vinyl Records" },
    { id: "digital", name: "Digital Downloads" },
  ];

  const products = [
    {
      id: 1,
      name: "Essential Music Hoodie",
      price: 59.99,
      category: "clothing",
      image: "/images/hoodie.jpg",
    },
    {
      id: 2,
      name: "Artist Collection Vinyl",
      price: 29.99,
      category: "vinyl",
      image: "/images/vinyl.jpg",
    },
    {
      id: 3,
      name: "Premium Headphones",
      price: 199.99,
      category: "accessories",
      image: "/images/headphones.jpg",
    },
    {
      id: 4,
      name: "Digital Album Bundle",
      price: 14.99,
      category: "digital",
      image: "/images/album.jpg",
    },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <main className="min-h-screen bg-black">
      <section className="py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 pt-[80px] md:pt-[30px]">
            <motion.h1
              {...fadeInUp}
              className="text-4xl sm:text-6xl font-bold mb-6 tracking-tight"
            >
              Official Store
            </motion.h1>
            <motion.p {...fadeInUp} className="text-gray-400 text-lg">
              Exclusive merchandise and music from your favorite artists
            </motion.p>
          </div>

          {/* Mobile Filter Button */}
          <motion.button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="md:hidden w-full mb-6 flex items-center justify-between px-6 py-3 bg-white/5 rounded-full"
          >
            <span className="flex items-center gap-2">
              <Filter size={20} />
              Filter Products
            </span>
            <ChevronRight
              className={`transition-transform ${
                isFilterOpen ? "rotate-90" : ""
              }`}
            />
          </motion.button>

          {/* Categories */}
          <motion.div
            className={`md:flex flex-wrap justify-center gap-4 mb-12 ${
              isFilterOpen ? "block" : "hidden md:flex"
            }`}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all w-full md:w-auto mb-2 md:mb-0 ${
                  selectedCategory === category.id
                    ? "bg-white text-black"
                    : "bg-white/5 text-gray-400 hover:bg-white/10"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                {...fadeInUp}
                className="group relative bg-white/5 rounded-2xl p-4"
              >
                <div className="relative aspect-square overflow-hidden rounded-xl mb-4">
                  <Image
                    src={product.image}
                    width={500}
                    height={500}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-black px-6 py-3 rounded-full font-medium flex items-center gap-2"
                    >
                      Add to Cart
                      <ShoppingCart size={18} />
                    </motion.button>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium text-lg">{product.name}</h3>
                  <p className="text-purple-400 font-medium">
                    ${product.price}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ShopPage;
