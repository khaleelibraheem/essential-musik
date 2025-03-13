"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, ChevronRight, Filter, X, Search } from "lucide-react";
import Image from "next/image";

// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  
  // Categories
  const categories = [
    { id: "all", name: "All Products" },
    { id: "clothing", name: "Clothing" },
    { id: "accessories", name: "Accessories" },
    { id: "vinyl", name: "Vinyl Records" },
    { id: "digital", name: "Digital Downloads" }
  ];

  // Enhanced product data
  const products = [
    {
      id: 1,
      name: "Essential Music Hoodie",
      price: 59.99,
      category: "clothing",
      image: "/images/hoodie.jpg",
      badge: "Best Seller",
      rating: 4.8
    },
    {
      id: 2,
      name: "Artist Collection Vinyl",
      price: 29.99,
      category: "vinyl",
      image: "/images/vinyl.jpg",
      badge: "Limited Edition",
      rating: 4.9
    },
    {
      id: 3,
      name: "Premium Headphones",
      price: 199.99,
      category: "accessories",
      image: "/images/headphones.jpg",
      badge: "New",
      rating: 4.7
    },
    {
      id: 4,
      name: "Digital Album Bundle",
      price: 14.99,
      category: "digital",
      image: "/images/album.jpg",
      badge: "Sale",
      rating: 4.5
    }
  ];

  // Filter products by category and search
  const filteredProducts = products
    .filter(product => selectedCategory === "all" || product.category === selectedCategory)
    .filter(product => 
      searchQuery === "" || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  // Add to cart function
  const handleAddToCart = (productId) => {
    setCartCount(prev => prev + 1);
  };

  return (
    <main className="min-h-screen bg-black">
      {/* Updated padding to match navbar */}
      <section className="py-24">
        <div className="max-w-[95rem] mx-auto px-6 lg:px-20">
          {/* Hero Section */}
          <div className="text-center mb-16 pt-[80px] md:pt-[30px]">
            <motion.h1
              {...fadeInUp}
              className="text-4xl sm:text-6xl font-bold mb-6 tracking-tight text-white"
            >
              Official Store
            </motion.h1>
            <motion.p 
              {...fadeInUp} 
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-lg max-w-2xl mx-auto"
            >
              Exclusive merchandise and music from your favorite artists
            </motion.p>
          </div>

          {/* Search Bar */}
          <div className="mb-10">
            <div className="relative max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-black border border-white/20 rounded-full py-3 px-6 pl-12 text-white focus:outline-none focus:ring-1 focus:ring-white/40 focus:border-white/40"
              />
              <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-3.5 text-gray-400 hover:text-white"
                >
                  <X size={20} />
                </button>
              )}
            </div>
          </div>

          {/* Mobile Filter Button */}
          <motion.button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="md:hidden w-full mb-6 flex items-center justify-between px-6 py-4 bg-black border border-white/20 rounded-full"
          >
            <span className="flex items-center gap-2">
              <Filter size={18} />
              Filter by Category
            </span>
            <ChevronRight
              className={`transition-transform duration-300 ${
                isFilterOpen ? "rotate-90" : ""
              }`}
            />
          </motion.button>

          {/* Categories */}
          <AnimatePresence>
            <motion.div
              initial={isFilterOpen ? { height: 0, opacity: 0 } : false}
              animate={isFilterOpen ? { height: "auto", opacity: 1 } : {}}
              exit={{ height: 0, opacity: 0 }}
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
                      : "bg-black text-gray-400 border border-white/20 hover:border-white/40"
                  }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {category.name}
                </motion.button>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Product Count */}
          <div className="mb-8 text-gray-400 font-medium">
            {filteredProducts.length} products found
          </div>

          {/* Products Grid with Staggered Animation */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  variants={fadeInUp}
                  className="group relative bg-black border border-white/10 rounded-2xl p-5 hover:border-white/30 transition-all"
                >
                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-4 left-4 z-10 bg-white text-black text-xs px-3 py-1 rounded-full">
                      {product.badge}
                    </div>
                  )}
                  
                  {/* Image Container */}
                  <div className="relative aspect-square overflow-hidden rounded-xl mb-5">
                    <Image
                      src={product.image}
                      width={500}
                      height={500}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Product Details */}
                  <div className="space-y-3">
                    <h3 className="font-medium text-lg text-white">
                      {product.name}
                    </h3>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-1">
                      <div className="text-white flex">
                        {"★".repeat(Math.floor(product.rating))}
                        {"☆".repeat(5 - Math.floor(product.rating))}
                      </div>
                      <span className="text-xs text-gray-400">({product.rating})</span>
                    </div>
                    
                    {/* Price */}
                    <div className="flex justify-between items-center pt-2">
                      <p className="text-white font-bold text-lg">
                        ${product.price}
                      </p>
                      <button 
                        onClick={() => handleAddToCart(product.id)}
                        className="bg-white text-black rounded-full p-2 transition-colors hover:bg-white/90"
                      >
                        <ShoppingCart size={18} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div 
                {...fadeInUp} 
                className="col-span-full text-center py-12"
              >
                <p className="text-gray-400 text-lg">No products found. Try a different search or category.</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ShopPage;