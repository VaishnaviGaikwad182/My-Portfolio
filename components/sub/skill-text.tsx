"use client";

import { motion } from "framer-motion";
import { slideInFromLeft } from "@/lib/motion";

export const SkillText = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center px-6 md:px-20">
      <motion.h2
        variants={slideInFromLeft(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-bold text-white text-center mb-4 relative"
      >
        <span className="text-white">Skills</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          &nbsp;Showcase
        </span>

        <span className="absolute left-1/2 -bottom-3 -translate-x-1/2 w-32 h-[2px] bg-white/30 rounded-full" />
      </motion.h2>

      <motion.div
        variants={slideInFromLeft(0.4)}
        className="w-20 h-[2px] bg-purple-500/40 rounded-full mb-8"
      />
    </div>
  );
};
