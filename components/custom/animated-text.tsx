"use client";

import { motion, Variants } from "framer-motion";
import React from "react";

const quote: Variants = {
  initial: {
    opacity: 0,
    y: 100, // Start below the visible area
  },
  animate: {
    opacity: 1,
    y: 0, // Ends exactly at its final position
    transition: {
      delay: 0.5,
      ease: "linear",
      staggerChildren: 0.08, // Delays each word
    },
  },
};

const wordAnimation: Variants = {
  initial: { opacity: 0, y: 100 }, // Start each word below the view
  animate: {
    opacity: 1,
    y: 0, // Moves each word to its exact position
    transition: {
      duration: 0.6, // Consistent duration for smooth motion
      ease: "linear", // Ensures no bouncing or acceleration
    },
  },
};

function AnimatedText({
  text,
  className,
}: Readonly<{
  text: string;
  className?: string;
}>) {
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden">
      <motion.div
        className={`inline-block w-full text-dark font-bold capitalize text-8xl ${className}`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={word + "-" + index}
            className="inline-block"
            variants={wordAnimation}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}

export default AnimatedText;
