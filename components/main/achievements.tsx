"use client";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion"; // make sure these exist

export const AchievementsCertifications = () => {
  const achievements = [
    {
      title: "© Copyright Registered",
      project: "Learn2excel - Online Skill Development Platform",
      desc: "Officially registered under copyright law to protect intellectual property.",
      type: "Copyright",
    },
    {
      title: "Secured 2nd Rank in F.Y",
      project: "First Year Engineering Exams",
      desc: "Achieved 2nd rank among all students in first-year exams with consistent academic excellence.",
      type: "Academic Achievement",
    },
    {
      title: "Salesforce Developer – AgentBlazer Champion",
      project: "Salesforce Development Projects",
      desc: "Completed Salesforce developer training and recognized as AgentBlazer Champion.",
      type: "Certification & Recognition",
    },
    {
      title: "Introduction to LLM – NPTEL Course",
      project: "NPTEL Online Course",
      desc: "Completed the Introduction to Large Language Models course by NPTEL and gained hands-on knowledge.",
      type: "Certification",
    },
  ];

  return (
    <section id="achievements" className="py-20 flex flex-col items-center">
      {/* Heading */}
      <motion.div
        variants={slideInFromLeft(0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-white">
          Achievements &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Certifications
          </span>
        </h1>
        <div className="flex flex-col items-center mt-4">
          <span className="w-32 h-[2px] bg-white/30 rounded-full" />
          <span className="w-20 h-[2px] bg-purple-500/40 rounded-full mt-1" />
        </div>
      </motion.div>

      {/* Cards */}
      <div className="w-full max-w-4xl px-6 space-y-6">
        {achievements.map((item, index) => {
          const isLeft = index % 2 === 0; // alternate left/right
          return (
            <motion.div
              key={index}
              variants={isLeft ? slideInFromLeft(0.3) : slideInFromRight(0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="
                relative p-6 rounded-2xl
                bg-white/5 backdrop-blur-lg
                border-2 border-purple-400/40
              "
            >
              {/* Gradient left border */}
              <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-l-xl" />

              <div className="relative z-10 pl-2 space-y-2">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-purple-400 font-medium">{item.project}</p>
                <p className="text-gray-300 text-sm">{item.desc}</p>

                {/* Badge at bottom */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-3">
                  <span className="mt-2 sm:mt-0 px-4 py-1 rounded-full text-sm bg-purple-500/20 text-purple-400">
                    {item.type}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
