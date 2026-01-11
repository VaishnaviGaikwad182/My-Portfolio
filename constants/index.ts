import { title } from "process";

export const RESUME_PATH = "/docs/Vaishnavi_CV.pdf";

export const FRONTEND_SKILL = [
  { skill_name: "HTML", image: "html.png", width: 80, height: 80 },
  { skill_name: "CSS", image: "css.png", width: 80, height: 80 },
  { skill_name: "JavaScript", image: "js.png", width: 65, height: 65 },
  { skill_name: "TailwindCSS", image: "tailwind.png", width: 80, height: 80 },
  { skill_name: "Bootstrap", image: "bootstrap.png", width: 80, height: 80 },
  { skill_name: "React", image: "react.png", width: 80, height: 80 },
  { skill_name: "TypeScript", image: "ts.png", width: 80, height: 80 },
  { skill_name: "Next.js 14", image: "next.png", width: 80, height: 80 },
] as const;

export const BACKEND_SKILL = [
  { skill_name: "Node.js", image: "node.png", width: 80, height: 80 },
  { skill_name: "Express.js", image: "express.png", width: 80, height: 80 },
  { skill_name: "MySQL", image: "mysql.png", width: 70, height: 70 },
  { skill_name: "MongoDB", image: "mongodb.png", width: 40, height: 40 },
  { skill_name: "Firebase", image: "firebase.png", width: 55, height: 55 },
] as const;

export const TOOLS_SKILL = [
  { skill_name: "Git", image: "git.png", width: 60, height: 60 },
  { skill_name: "GitHub", image: "github.png", width: 60, height: 60 },
  { skill_name: "VS Code", image: "vscode.png", width: 60, height: 60 },
  { skill_name: "Postman", image: "postman.png", width: 60, height: 60 },
  { skill_name: "R", image: "r.png", width: 60, height: 60 },
  { skill_name: "R Studio", image: "rstudio.png", width: 60, height: 60 },
  { skill_name: "PowerBI", image: "powerbi.png", width: 60, height: 60 },
  { skill_name: "Canva", image: "canva.png", width: 60, height: 60 },

] as const;


export const PROJECTS = [
  {
    title: "Learn2Excel - Online Skill Development Platform",
    description:
      'Learn2Excel – Online Skill Development Platform Built a responsive UI with HTML, CSS, and JavaScript. Developed interactive pages like Login, Signup, and Quiz Dashboard with real-time feedback and form validation. Integrated a simple game into the platform to improve user engagement and learning experience.',
    image: "/projects/project-1.png",
    link: "https://github.com/VaishnaviGaikwad182/Learn2Excel",
    techStack: ["HTML", "CSS", "JavaScript", "NodeJs", "ExpressJs", "MySQL"],
    index: 1,
  },
  {
    title: "Personalized Learning Tool",
    description:
      'The Personalized Learning Tool is a full-stack web app that improves education through custom learning paths, efficient workflows, and clear teacher-student communication. Built with React.js and Tailwind CSS, it offers separate dashboards for teachers and students with role-based features.',
    image: "/projects/project-2.png",
    link: "https://github.com/VaishnaviGaikwad182/Personalised-Learning-Tool",
    techStack: ["React", "Vite", "TailwindCSS", "TypeScript", "NodeJS", "ExpressJS", "MongoDB"],
    index: 2,
  },
  {
    title: "Penman-Planner",
    description:
      'Penman-Planner is an advanced web app for calculating evaporation rates using the Penman equation and providing water storage planning. It takes weather inputs to compute evaporation. Features a React frontend with charts, FastAPI backend, and MongoDB storage. Supports real-time weather integration and historical analysis.',
    image: "/projects/project-3.png",
    link: "https://github.com/VaishnaviGaikwad182/Penman-Planner",
    techStack: ["React", "TailwindCSS", "Python", "FastAPI"],
    index: 3,
  },
  {
    title: "ShikshaSphere",
    description:
      'ShikshaSphere — an interactive learning platform built with Next.js and TypeScript, Tailwind CSS, and Firebase. It offers modular courses, leaderboards, quizzes, and an AI-powered tutor (GenKit + GoogleAI). Lightweight, extensible, and designed for personalized STEM learning and analytics. Offers progress tracking, modular quizzes, and analytics.',
    image: "/projects/project-4.png",
    link: "https://github.com/VaishnaviGaikwad182/ShikshaSphere",
    techStack: ["NextJS 15", "TailwindCSS", "TypeScript", "Firebase", "GoogleAI "],
    index: 4,
  },
  {
    title: "Alankara",
    description:
      'Alankara is a premium jewelry website blending tradition with modern elegance. Built using HTML5 for structure, CSS3 & Bootstrap for responsive styling, and JavaScript for dynamic features like cart, modals, and interactivity. The tech stack ensures a fast, user-friendly, and visually rich shopping experience across all devices.',
    image: "/projects/project-5.png",
    link: "https://github.com/VaishnaviGaikwad182/Alankara",
    techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    index: 5,
  },
  {
    title: "Sleep Disorder Prediction",
    description:
      'Predictive ML model for sleep disorders with 96% accuracy. Identified 9 at-risk individuals using classification metrics like precision, recall, and F1-score. Includes data preprocessing and model evaluation.',
    image: "/projects/project-6.png",
    link: "https://github.com/VaishnaviGaikwad182/Sleep_Disorder_Prediction",
    techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebook", "Random Forest"],
    index: 6,
  },
] as const;

export const NAV_LINKS = [
  {
    title: "Home",
    link: "#home",
  },
  {
    title: "About Me",
    link: "#about",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Experience",
    link: "#experience",
  },
  {
    title: "Achievements",
    link: "#achievements",
  },
  {
    title: "Contact",
    link: "#contact",
  },
] as const;

export const experience = [
  {
    role: "Webmaster",
    company: "ACM Student Chapter, PCCOE",
    period: "July '25 - Present",
    description: [
      "Developed and maintained the official chapter website using NextJS.",
      "Ensured responsive design and cross-browser compatibility.",
      "Managed content updates, events, and resources for student members.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "PCCOE",
    period: "Jun '25 - July '25",
    description: [
      "Developed interactive UI components using React and Tailwind CSS.",
      "Optimized web pages for performance and accessibility.",
      "Collaborated with team members to improve overall UI/UX and project workflow.",
    ],
  },
  {
    role: "Salesforce Intern",
    company: "Salesforce",
    period: "May '25 - July '25",
    description: [
      "Learned about the Salesforce CRM platform and its cloud solutions.",
      "Explored declarative tools, workflow automation, and platform architecture.",
      "Gained understanding of Salesforce modules and business process management.",
    ],
  },
  {
    role: "Member",
    company: "Institution's Innovation Council",
    period: "Jan '25 - May '25",
    description: [
      "Participated in innovation-driven activities to foster creativity and entrepreneurial skills among students.",
    ],
  },
] as const;
