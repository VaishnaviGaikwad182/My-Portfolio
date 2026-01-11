"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { RESUME_PATH } from "@/constants";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="
        flex flex-row items-center justify-center
        px-6 sm:px-10 md:px-20
        mt-32 sm:mt-36 md:mt-40
        w-screen overflow-x-hidden z-[20]
      "
    >
      {/* LEFT CONTENT */}
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Full Stack Web Developer || AI Enthusiast
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-4xl sm:text-5xl md:text-6xl font-bold text-white max-w-[600px]"
        >
          <span>
            Hi! I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Vaishnavi
            </span>{" "}
            Full Stack Web Developer
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base sm:text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Passionate about Full Stack Development, AI and EdTech Solutions. I love
          building impactful digital experiences that solve real-world problems.
          Always exploring the intersection of technology, creativity, and
          lifelong learning.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-col gap-5 mt-6"
        >
          {/* ICON ROW */}
          <div className="flex items-center gap-6 text-white">
            <a href="mailto:vaishnavig182@gmail.com">
              <EnvelopeIcon className="h-8 w-8 hover:text-purple-400 transition" />
            </a>

            <a href="https://github.com/VaishnaviGaikwad182" target="_blank">
              <FaGithub className="h-8 w-8 hover:text-purple-400 transition" />
            </a>

            <a href="https://linkedin.com/in/vaishnavi-gaikwad-675093294/" target="_blank">
              <FaLinkedin className="h-8 w-8 hover:text-purple-400 transition" />
            </a>

            <a href="https://instagram.com/vaishnavi_gaikwad182" target="_blank">
              <FaInstagram className="h-8 w-8 hover:text-purple-400 transition" />
            </a>
          </div>

          {/* DOWNLOAD CV (UNCHANGED) */}
          <a
            href={RESUME_PATH}
            download
            className="py-3 px-8 button-primary text-white rounded-lg text-center max-w-[200px]"
          >
            Download CV
          </a>
        </motion.div>
      </div>

      {/* RIGHT SVG — HIDDEN ON SMALL SCREENS */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="hidden md:flex w-full h-full justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};
