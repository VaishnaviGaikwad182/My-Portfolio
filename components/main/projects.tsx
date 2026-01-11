"use client";

import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      {/* ================= HEADING ================= */}
      <div className="flex flex-col items-center text-center relative mb-12">
        <h1 className="text-5xl md:text-6xl font-bold text-white">
          <span className="text-white">My</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Projects
          </span>
        </h1>

        <div className="flex flex-col items-center mt-4">
          <span className="w-32 h-[2px] bg-white/30 rounded-full" />
          <span className="w-20 h-[2px] bg-purple-500/40 rounded-full mt-1" />
        </div>
      </div>

      {/* ================= PROJECT CARDS ================= */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            src={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
            techStack={project.techStack}
            index={project.index}
          />
        ))}
      </div>

    </section>
  );
};
