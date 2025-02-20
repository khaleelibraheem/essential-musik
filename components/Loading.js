import React from "react";
import { motion } from "framer-motion";

const LoadingScreen = () => {
  const bars = Array.from({ length: 5 });

  return (
    <div className="h-screen w-screen bg-black flex flex-col items-center justify-center gap-8 md:gap-12 px-4">
      {/* Audio visualizer bars */}
      <motion.div
        className="flex items-end gap-1.5 md:gap-2 h-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {bars.map((_, i) => (
          <motion.div
            key={i}
            className="w-2 md:w-3 bg-white"
            animate={{
              height: [20, 60, 20],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Text container */}
      <div className="space-y-4 md:space-y-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Essential
          </h1>
          <h1 className="text-3xl font-bold text-white tracking-tight mt-0.5 md:mt-1">
            Musik
          </h1>
        </motion.div>

        {/* Loading dots */}
        <motion.div
          className="flex justify-center gap-1.5 md:gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingScreen;
