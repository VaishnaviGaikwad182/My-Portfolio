"use client";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";
import { experience } from "@/constants";

export const Experience = () => {
  return (
    <section id="experience" className="relative py-28 px-6 md:px-24">
      {/* ================= HEADING ================= */}
      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-bold text-white">
          Work{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Experience
          </span>
        </h2>

        <div className="flex flex-col items-center mt-4">
          <span className="w-32 h-[2px] bg-white/30 rounded-full" />
          <span className="w-20 h-[2px] bg-purple-500/40 rounded-full mt-1" />
        </div>

        <p className="text-gray-400 mt-4 max-w-xl">
          My journey so far, the roles I’ve taken, and the work I’ve done.
        </p>
      </motion.div>

      {/* ================= TIMELINE ================= */}
      <div className="relative max-w-5xl mx-auto">
        {/* Center vertical line */}
        <div className="absolute left-1/2 top-0 w-[2px] h-full bg-purple-500/30 -translate-x-1/2"></div>

        <div className="space-y-12">
          {experience.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                variants={isLeft ? slideInFromLeft(0.3) : slideInFromRight(0.3)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`relative flex w-full ${isLeft ? "justify-start" : "justify-end"}`}
              >
                {/* Dot on center line */}
                <div className="absolute left-1/2 -translate-x-1/2 top-6 z-10">
                  <div className="w-4 h-4 rounded-full bg-purple-400"></div>
                </div>

                {/* Card */}
                <div className={`relative w-full md:w-[45%] ${isLeft ? "mr-auto" : "ml-auto"}`}>
                  <div
                    className="
                      p-6 rounded-2xl
                      bg-white/5 backdrop-blur-lg
                      border-2 border-purple-400/40
                      shadow-[0_0_15px_rgba(168,85,247,0.3)]
                      transition-all duration-300
                      hover:-translate-y-2
                      hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]
                    "
                  >
                    {/* Header with period on right */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                      <span className="mt-2 sm:mt-0 px-4 py-1 rounded-full text-sm bg-purple-500/20 text-purple-400">
                        {item.period}
                      </span>
                    </div>

                    {/* Company */}
                    <p className="text-purple-400 mb-3">{item.company}</p>

                    {/* Description */}
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      {item.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
