// import imgCSS from "../assets/techno/css.png";
// import imgJS from "../assets/techno/js.png";
// import imgREACT from "../assets/techno/react.png";
// import imgHTML from "../assets/techno/html.png";
// import imgNEXT from "../assets/techno/next-js.webp";
// import imgNODE from "../assets/techno/node-js.png";
// import imgTYPE from "../assets/techno/typescript.svg";
// import imgTAILWIND from "../assets/techno/tailwind.png";
// import imgPRISMA from "../assets/techno/prisma.webp";

import SectionTitle from "./SectionTitle";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiTailwindcss, SiTypescript, SiNextdotjs, SiPrisma } from "react-icons/si";
import { motion } from "framer-motion";

// import google from "../assets/companies/google.png";
// import meta from "../assets/companies/meta.webp";
// import amazon from "../assets/companies/amazon.png";

const skills = [
  { id: 1, name: "HTML", icon: <SiHtml5 />, color: "#e44d26" },
  { id: 2, name: "CSS", icon: <SiCss3 />, color: "#1572b6" },
  { id: 3, name: "JavaScript", icon: <SiJavascript />, color: "#f7df1e" },
  { id: 4, name: "React", icon: <SiReact />, color: "#61dafb" },
  { id: 5, name: "Node.js", icon: <SiNodedotjs />, color: "#3c873a" },
  { id: 6, name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38bdf8" },
  { id: 7, name: "TypeScript", icon: <SiTypescript />, color: "#3178c6" },
  { id: 8, name: "Next.js", icon: <SiNextdotjs />, color: "#fff" },
  { id: 9, name: "Prisma", icon: <SiPrisma />, color: "#0c344b" },
];

const experiences = [
  {
    id: 1,
    role: "Développeur Web & Mobile",
    company: "Freelance",
    period: "2021 - Présent",
    description: [
      "Création d'applications web et mobiles modernes.",
      "Stack : React, React Native, Node.js, UI/UX Design.",
    ],
  },
  {
    id: 2,
    role: "UI/UX Designer",
    company: "Studio Créatif",
    period: "2020 - 2021",
    description: [
      "Conception d'interfaces intuitives et attractives.",
      "Prototypage Figma, animations et design system.",
    ],
  },
  {
    id: 3,
    role: "Développeur Backend",
    company: "Startup Tech",
    period: "2019 - 2020",
    description: [
      "Développement d'APIs robustes et sécurisées.",
      "Node.js, Express, Prisma, PostgreSQL.",
    ],
  },
];

const neonColors = [
  "shadow-[0_0_15px_#00ffe7]",
  "shadow-[0_0_15px_#ff00ea]",
  "shadow-[0_0_15px_#ffe600]",
  "shadow-[0_0_15px_#00ff2a]",
  "shadow-[0_0_15px_#ff6b00]",
  "shadow-[0_0_15px_#00aaff]",
  "shadow-[0_0_15px_#ff007b]",
  "shadow-[0_0_15px_#aaff00]",
  "shadow-[0_0_15px_#ff00c8]",
];

const gradients = [
  "linear-gradient(90deg, #00ffe7, #ff00ea)",
  "linear-gradient(90deg, #ffe600, #00ff2a)",
  "linear-gradient(90deg, #00aaff, #ff007b)",
];

const Experiences = () => {
  return (
    <div className="py-16" id="experiences">
      <SectionTitle title="Expériences" />

      <div className="mx-auto max-w-4xl">
        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.id}
              whileHover={{
                scale: 1.08,
                boxShadow: `0 0 30px 5px ${skill.color}`,
              }}
              className="flex flex-col items-center justify-center w-20 h-20 text-3xl rounded-full bg-base-300 transition-all duration-300 cursor-pointer border-2 border-base-200"
              style={{ boxShadow: "0 0 10px #222" }}
            >
              <motion.span
                whileHover={{ color: skill.color }}
                className="transition-colors duration-300"
                style={{ color: "#fff" }}
              >
                {skill.icon}
              </motion.span>
            </motion.div>
          ))}
        </div>

        {/* Experiences */}
        <div className="grid gap-8 md:grid-cols-3">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              whileHover={{
                scale: 1.01,
                boxShadow: `0 0 30px 5px ${skills[idx]?.color || "#00ffe7"}`,
                border: "2px solid transparent",
              }}
              className="relative p-6 rounded-xl bg-base-300 border-2 border-base-200 transition-all duration-300 max-w-xs w-full mx-auto"
              style={{
                boxShadow: "0 0 10px #222",
                borderImage: `${gradients[idx % gradients.length]} 1`,
              }}
            >
              <h3 className="text-lg font-bold text-accent">{exp.role}</h3>
              <p className="font-semibold">{exp.company}</p>
              <p className="mb-2 text-xs text-base-content/60">{exp.period}</p>
              <ul className="pl-4 list-disc text-sm">
                {exp.description.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
