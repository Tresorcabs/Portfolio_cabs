import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const projects = [
  {
    id: 1,
    title: "Gestionnaire de tâches",
    description: "Application web pour gérer vos tâches au quotidien.",
    image: "https://source.unsplash.com/400x300/?productivity,app", // Remplace par tes images locales si tu veux
    stack: ["React", "Tailwind", "Node.js"],
    demo: "https://demo-todo.com",
    github: "https://github.com/tonprofil/todo-app",
  },
  {
    id: 2,
    title: "Plateforme E-commerce",
    description: "Site e-commerce moderne avec paiement sécurisé.",
    image: "https://source.unsplash.com/400x300/?ecommerce,website",
    stack: ["Next.js", "Stripe", "Prisma"],
    demo: "https://demo-ecommerce.com",
    github: "https://github.com/tonprofil/ecommerce-app",
  },
  {
    id: 3,
    title: "Portfolio interactif",
    description: "Portfolio personnel avec animations et transitions.",
    image: "https://source.unsplash.com/400x300/?portfolio,website",
    stack: ["React", "Framer Motion", "UI/UX"],
    demo: "https://demo-portfolio.com",
    github: "https://github.com/tonprofil/portfolio",
  },
  // Ajoute d'autres projets ici
];

const stackColors: Record<string, string> = {
  "React": "bg-cyan-500",
  "Tailwind": "bg-blue-400",
  "Node.js": "bg-green-600",
  "Next.js": "bg-black text-white",
  "Stripe": "bg-purple-500",
  "Prisma": "bg-teal-700",
  "Framer Motion": "bg-pink-500",
  "UI/UX": "bg-yellow-400 text-black",
};

const Projects = () => (
  <div className="py-16 bg-base-300" id="projects">
    <SectionTitle title="Mes Projets" />
    <div className="mx-auto max-w-6xl px-4 grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
      {projects.map((project, idx) => (
        <motion.div
          key={project.id}
          whileHover={{
            scale: 1.01,
            rotateX: 15,
            rotateY: 15,
          }}
          className="bg-base-100 rounded-2xl overflow-hidden shadow-lg border-2 border-base-200 transition-all duration-300 flex flex-col"
        >
          <div className="h-40 w-full overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="flex-1 flex flex-col p-5">
            <h3 className="text-xl font-bold mb-2 text-accent">{project.title}</h3>
            <p className="text-sm mb-4 text-base-content/80">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className={`px-2 py-1 rounded-full text-xs text-white font-semibold ${stackColors[tech] || "bg-gray-400"}`}
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-auto flex gap-3">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 btn btn-soft rounded-lg text-base-content hover:btn-accent font-semibold transition-all duration-200 hover:bg-accent-focus shadow-md"
              >
                <FaExternalLinkAlt /> Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 btn btn-soft rounded-lg  text-base-content font-semibold transition-all duration-200 hover:bg-black hover:text-white shadow-md border border-base-300"
              >
                <FaGithub /> Code
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default Projects;