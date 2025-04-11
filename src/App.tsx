import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiMysql,
  SiSharp,
  SiTailwindcss,
} from "react-icons/si";

const techIcons = [
  { icon: SiHtml5, name: "HTML" },
  { icon: SiCss3, name: "CSS" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiReact, name: "React" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiMysql, name: "SQL" },
  { icon: SiSharp, name: "C#" },
  { icon: SiTailwindcss, name: "Tailwind" },
];

const projects = [
  {
    title: "Memory Card Game",
    description:
      "Fully-responsive memory game built with React and TypeScript. Learned about useEffects and optimizing fetching data from an API.",
    link: "https://renem.me/memory-card-game/",
  },
  {
    title: "CV Generator",
    description:
      "React project that familiarized me with hooks and state management.",
    link: "https://renem.me/cv-builder-application/",
  },
  {
    title: "Flag Guesser",
    description:
      "Just something I made to practice my React skills. It uses the REST Countries API to fetch data.",
    link: "https://renem.me/flag-guesser/",
  },
  {
    title: "Project Four",
    description:
      "An elegant solution for Z with a focus on UX and performance.",
    link: "https://renem.me/F",
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 px-4 py-10 space-y-12">
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Rene Merida</h1>
        <p className="text-lg text-slate-600 max-w-xl mx-auto">
          I'm a developer who builds clean, performant, and user-friendly
          applications.
        </p>
        <div className="flex justify-center flex-wrap gap-4 mt-4">
          {techIcons.map(({ icon: Icon, name }) => (
            <Badge
              key={name}
              className="flex items-center space-x-2 text-base px-3 py-2"
            >
              <Icon className="w-5 h-5" />
              <span>{name}</span>
            </Badge>
          ))}
        </div>
      </header>

      <section>
        <h2 className="text-2xl font-semibold text-center mb-6">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project, i) => (
            <motion.a
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              className="block"
            >
              <Card className="rounded-2xl shadow-md bg-white hover:shadow-lg transition">
                <CardContent className="p-6 space-y-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-slate-600">{project.description}</p>
                </CardContent>
              </Card>
            </motion.a>
          ))}
        </div>
      </section>
    </div>
  );
}
