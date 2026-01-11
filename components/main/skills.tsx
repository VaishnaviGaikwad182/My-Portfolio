"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

import { SkillText } from "../sub/skill-text";
import { FRONTEND_SKILL, BACKEND_SKILL, TOOLS_SKILL } from "../../constants";

type SkillCardProps = {
  src: string;
  name: string;
  width: number;
  height: number;
  index: number;
};

const SkillDataProvider = ({
  src,
  name,
  width,
  height,
  index,
}: SkillCardProps) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
      transition={{ delay: index * 0.08 }}
      className="
        relative flex flex-col items-center justify-center
        w-20 h-20 md:w-24 md:h-24
        rounded-lg
        cursor-pointer
        transition-all duration-300
        hover:scale-105
      "
    >
      {/* Skill background */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-lg shadow-md" />

      {/* Skill icon */}
      <div className="relative flex items-center justify-center w-12 h-12 md:w-16 md:h-16 z-10">
        <Image src={`/skills/${src}`} width={width} height={height} alt={name} />
      </div>

      {/* Skill name */}
      <p className="text-white text-sm md:text-base font-medium mt-2 text-center relative z-10">
        {name}
      </p>
    </motion.div>
  );
};

export const Skills = () => {
  const skillCategories = [
    { title: "Frontend Web", data: FRONTEND_SKILL },
    { title: "Backend Technologies", data: BACKEND_SKILL },
    { title: "Tools & Workflows", data: TOOLS_SKILL },
  ];

  return (
    <section id="skills"
      className="relative py-20 flex flex-col items-center gap-16">
      <SkillText />

      <div className="flex flex-col md:flex-row justify-center items-start gap-8 w-full px-4 md:px-20">
        {skillCategories.map((category) => (
          <div key={category.title} className="flex-1 flex flex-col gap-6">
            {/* ===== CATEGORY CARD ===== */}
            <div
              className="
                relative flex flex-col items-center gap-6 p-6 rounded-3xl
                bg-white/5 backdrop-blur-lg
                border-2 border-purple-400/50
                shadow-[0_0_20px_rgba(168,85,247,0.35)]
                hover:shadow-[0_0_35px_rgba(168,85,247,0.7)]
                transition-all duration-300
              "
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white text-center">
                {category.title}
              </h3>

              {/* Skills grid */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-6 mt-4 w-full">
                {category.data.map((skill, i) => (
                  <SkillDataProvider
                    key={skill.skill_name}
                    src={skill.image}
                    name={skill.skill_name}
                    width={skill.width}
                    height={skill.height}
                    index={i}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
