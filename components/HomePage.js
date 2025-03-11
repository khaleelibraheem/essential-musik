// "use client";

// import React, { useState } from "react";
// import { Play, Pause, ChevronRight, ArrowRight } from "lucide-react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import YouTubeGrid from "./YoutubeGrid";

// const HomePage = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);

//   const featuredArtists = [
//     {
//       name: "Sarah Blake",
//       genre: "Electronic Soul",
//       image: "/images/artist1.jpg",
//       description: "Breaking boundaries with electronic soul fusion",
//     },
//     {
//       name: "The Midnight Crew",
//       genre: "Alternative Rock",
//       image: "/images/artist2.jpg",
//       description: "Redefining rock for a new generation",
//     },
//     {
//       name: "Luna Ray",
//       genre: "Ambient Pop",
//       image: "/images/artist3.jpg",
//       description: "Creating dreamscapes through sound",
//     },
//   ];

//   return (
//     <main>
//       {/* Hero Section */}
//       <section className="relative h-screen">
//         <div className="absolute inset-0">
//           <video autoPlay muted loop className="w-full h-full object-cover">
//             <source src="/videos/vid1.mp4" type="video/mp4" />
//           </video>
//           <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-90" />
//         </div>

//         <div className="relative h-full flex items-center justify-center text-center px-6">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="max-w-4xl"
//           >
//             <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tight">
//               Shaping the Future <br />
//               of Music
//             </h1>
//             <p className="text-xl md:text-2xl text-gray-300 mb-12 tracking-wide">
//               Home to groundbreaking artists and timeless sounds
//             </p>
//             <motion.button
//               className="bg-white text-black px-12 py-5 rounded-full font-bold text-lg tracking-wide hover:bg-gray-200 transition group"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Discover Our Artists
//               <ArrowRight className="ml-2 inline-block transition-transform group-hover:translate-x-1" />
//             </motion.button>
//           </motion.div>
//         </div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.8, delay: 1 }}
//           className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
//         >
//           <motion.div
//             animate={{ y: [0, 10, 0] }}
//             transition={{ duration: 1.5, repeat: Infinity }}
//           >
//             <ChevronRight className="rotate-90" size={32} />
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* Featured Artists */}
//       <section className="py-32 px-6 bg-black">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-5xl font-bold mb-20 text-center tracking-tight">
//             Featured Artists
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
//             {featuredArtists.map((artist, index) => (
//               <div key={index} className="relative overflow-hidden rounded-2xl">
//                 <div className="aspect-square overflow-hidden">
//                   <Image
//                     src={artist.image}
//                     alt={artist.name}
//                     width={500}
//                     height={500}
//                     className="w-full h-full object-cover transform transition-transform duration-700"
//                   />
//                 </div>
//                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent">
//                   <div className="absolute bottom-0 left-0 right-0 p-8">
//                     <h3 className="text-2xl font-bold mb-2">{artist.name}</h3>
//                     <p className="text-gray-300 mb-4">{artist.genre}</p>
//                     <p className="text-sm text-gray-400">
//                       {artist.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Latest Releases */}

//       <YouTubeGrid />

//       {/* Newsletter */}
//       <section className="py-32 px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="max-w-4xl mx-auto text-center"
//         >
//           <h2 className="text-5xl font-bold mb-8 tracking-tight">
//             Stay Connected
//           </h2>
//           <p className="text-gray-400 mb-12 text-lg">
//             Subscribe to our newsletter for exclusive updates and releases
//           </p>
//           <div className="flex max-w-md mx-auto">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="flex-1 px-6 py-4 bg-gray-900 rounded-l-full focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
//             />
//             <motion.button
//               className="px-8 py-4 bg-white text-black rounded-r-full font-bold hover:bg-gray-200 transition group"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Subscribe
//               <ArrowRight className="ml-2 inline-block transition-transform group-hover:translate-x-1" />
//             </motion.button>
//           </div>
//         </motion.div>
//       </section>
//     </main>
//   );
// };

// export default HomePage;

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  const featuredArtists = [
    {
      name: "Sarah Blake",
      genre: "Electronic Soul",
      image: "/images/artist1.jpg",
      description: "Breaking boundaries with electronic soul fusion",
    },
    {
      name: "The Midnight Crew",
      genre: "Alternative Rock",
      image: "/images/artist2.jpg",
      description: "Redefining rock for a new generation",
    },
    {
      name: "Luna Ray",
      genre: "Ambient Pop",
      image: "/images/artist3.jpg",
      description: "Creating dreamscapes through sound",
    },
  ];

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % featuredArtists.length);
  }, [featuredArtists.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + featuredArtists.length) % featuredArtists.length);
  }, [featuredArtists.length]);

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  // Variants for framer-motion animations
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }, // Custom bezier curve for smooth animation
        opacity: { duration: 0.7, ease: "easeOut" },
        scale: { duration: 0.7, ease: "easeOut" },
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
        opacity: { duration: 0.5, ease: "easeInOut" },
        scale: { duration: 0.5, ease: "easeInOut" },
      },
    }),
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: delay,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <main className="bg-black min-h-screen">
      <section className="relative h-screen overflow-hidden">
        <AnimatePresence custom={direction} mode="sync" initial={false}>
          {featuredArtists.map((artist, index) => (
            index === currentSlide && (
              <motion.div
                key={index}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0"
              >
                <div className="relative h-full">
                  <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay for better text readability */}
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black z-20" />
                </div>

                {/* Hero Content */}
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center px-6 z-30"
                >
                  <div className="max-w-4xl text-center">
                    <motion.h2
                      custom={0.1}
                      variants={contentVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-xl md:text-2xl font-medium mb-4 text-gray-300"
                    >
                      {artist.genre}
                    </motion.h2>
                    <motion.h1
                      custom={0.3}
                      variants={contentVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
                    >
                      {artist.name}
                    </motion.h1>
                    <motion.p
                      custom={0.5}
                      variants={contentVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
                    >
                      {artist.description}
                    </motion.p>
                    <motion.div
                      custom={0.7}
                      variants={contentVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <button className="px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors duration-300">
                        Discover Music
                      </button>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            )
          ))}
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="absolute z-40 bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-8">
          <div className="flex items-center gap-8">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex gap-2 items-center">
              {featuredArtists.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentSlide ? 1 : -1);
                    setCurrentSlide(index);
                    setIsAutoPlaying(false);
                  }}
                  className="group relative"
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <div className={`w-3 h-3 rounded-full transition-all duration-500 ease-out ${
                    currentSlide === index 
                      ? "bg-white scale-125" 
                      : "bg-white/40 hover:bg-white/70"
                  }`} />
                  {currentSlide === index && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -inset-1 rounded-full border border-white/50"
                      transition={{ duration: 0.5, type: "spring" }}
                    />
                  )}
                </button>
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300"
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
          <button
            onClick={toggleAutoPlay}
            className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors duration-300"
            aria-label={isAutoPlaying ? "Pause autoplay" : "Start autoplay"}
          >
            {isAutoPlaying ? (
              <>
                <Pause size={16} />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play size={16} />
                <span>Play</span>
              </>
            )}
          </button>
        </div>

        {/* Progress Bar */}
        {isAutoPlaying && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-40">
            <motion.div
              className="h-full bg-white"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 8, ease: "linear", repeat: isAutoPlaying ? Infinity : 0 }}
              key={currentSlide}
            />
          </div>
        )}
      </section>
    </main>
  );
};

export default HomePage;