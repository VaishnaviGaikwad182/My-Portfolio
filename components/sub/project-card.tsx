"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
  techStack: readonly string[];
  index: number; // for staggered animation
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
  techStack,
  index,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.2 }} // stagger animation
      className="
        relative
        overflow-hidden
        rounded-lg
        shadow-lg
        border border-[#2A0E61]
        flex flex-col
        flex-1          
        h-full
      "
    >
      {/* Image */}
      <div className="relative w-full h-[260px]">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4">
        <div>
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <p className="mt-2 text-gray-300 text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* Bottom pinned */}
        <div className="mt-auto">
          {/* Tech Stack */}
          <div className="mt-4 flex flex-wrap gap-2">
            {techStack.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1.5 text-sm rounded-full bg-[#1E1E2E] text-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Button */}
          <Link
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-5 inline-block py-3 px-8 button-primary text-white rounded-lg text-center max-w-[200px]"
          >
            View Code
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
