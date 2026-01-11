"use client";

import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const AboutMe = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex items-center px-16 md:px-24"
    >
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-12">

        {/* ================= HEADING ================= */}
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Me
            </span>
          </h2>

          <div className="flex flex-col items-center mt-4">
            <span className="w-32 h-[2px] bg-white/30 rounded-full" />
            <span className="w-20 h-[2px] bg-purple-500/40 rounded-full mt-1" />
          </div>

          <p className="text-xl text-gray-400 mt-6 max-w-2xl">
            A glimpse into who I am, what I do, and what I enjoy building.
          </p>
        </motion.div>

        {/* ================= MAIN GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">

          {/* ================= LEFT TEXT ================= */}
          <div className="relative lg:col-span-2 flex flex-col gap-8">
            <div className="absolute inset-0 -z-10 opacity-30 scale-105">
              <video
                className="w-full h-full object-cover"
                playsInline
                loop
                muted
                autoPlay
              >
                <source src="/videos/skills-bg.webm" type="video/webm" />
              </video>
            </div>

            <motion.div
              variants={slideInFromLeft(0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-8 text-gray-300 text-lg"
            >
              <p>
                I’m <span className="text-white font-semibold">Vaishnavi</span>, a
                <span className="text-purple-400"> Full Stack Web Developer</span>{" "}
                and <span className="text-purple-400">AI enthusiast</span> driven
                by curiosity and impact.
              </p>

              <p>
                I focus on developing scalable web applications, experimenting with AI-powered solutions, and crafting clean, user-friendly interfaces that solve real-world problems efficiently. I strive to bridge the gap between technology and usability in every project I work on.
              </p>

              <p>
                I’m particularly passionate about EdTech and AI-driven platforms, aiming to make learning more accessible, engaging, and effective for diverse learners. I enjoy exploring innovative ways technology can enhance education and user experiences.
              </p>

              <p>
                I’m currently seeking internships and collaborative opportunities
                in machine learning, data science, and full-stack development,
                eager to grow in environments that challenge innovation.
              </p>
            </motion.div>

            {/* ================= BOTTOM CARDS (NO BG) ================= */}
            <motion.div
              variants={slideInFromTop}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10 max-w-2xl"
            >
              {[
                { title: "Experience", desc: "2+ Years Learning" },
                { title: "Projects", desc: "6+ Projects Built" },
                { title: "Focus", desc: "AI · Full Stack" },
                { title: "Seeking", desc: "Internships" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="
                    border border-purple-400/40
                    rounded-xl
                    py-6
                    text-center
                    backdrop-blur-sm
                  "
                >
                  <h3 className="text-xl font-semibold text-purple-400">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 mt-2 text-sm">
                    {item.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ================= RIGHT CARDS (EDUCATION) ================= */}
          <motion.div
            variants={slideInFromRight(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6"
          >
            {[
              {
                title: "B.Tech",
                desc: "Computer Engineering • 2023 – Present",
              },
              {
                title: "Higher Secondary (12th)",
                desc: "Science Stream • 2023 • 83.50%",
              },
              {
                title: "Secondary (10th)",
                desc: "Board Examination • 2021 • 96.40%",
              },
            ].map((item, index) => (
              <div
                key={index}
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
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-gray-300 mt-3">
                  {item.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
