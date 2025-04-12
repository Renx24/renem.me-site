import { useEffect, useState } from "react";
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
  SiGithub,
  SiLinkedin,
  SiBootstrap,
  SiMailboxdotorg,
} from "react-icons/si";
import { BsSun, BsMoon } from "react-icons/bs";

const techIcons = [
  { icon: SiHtml5, name: "HTML" },
  { icon: SiCss3, name: "CSS" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiReact, name: "React" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiMysql, name: "SQL" },
  { icon: SiSharp, name: "C#" },
  { icon: SiBootstrap, name: "Bootstrap" },
  { icon: SiTailwindcss, name: "Tailwind" },
];

const socialLinks = [
  {
    url: "https://www.github.com/Renx24",
    icon: SiGithub,
  },
  {
    url: "mailto:remerida@hotmail.com",
    icon: SiMailboxdotorg,
  },
  {
    url: "https://www.linkedin.com/in/rene-merida-675738290/",
    icon: SiLinkedin,
  },
];

const projects = [
  {
    title: "🧠 Memory Card Game",
    description:
      "Fully-responsive memory game built with React and TypeScript. Learned about useEffects and optimizing fetching data from an API.",
    link: "https://renem.me/memory-card-game/",
  },
  {
    title: "📄 CV Generator",
    description:
      "React project that familiarized me with hooks and conditional rendering. Very useState heavy - learned a lot about managing state and props.",
    link: "https://renem.me/cv-preview-application/",
  },
  {
    title: "🎌 Flag Guesser",
    description:
      "Just something I made to practice my React skills. It uses the REST Countries API to fetch data and keeps track of the score.",
    link: "https://renem.me/flag-guesser/",
  },
  {
    title: "🕹️ Pokedex",
    description:
      "One of the first projects I made - manipulates DOM and API through JavaScript. It uses the PokeAPI to fetch data and display it in a user-friendly way.",
    link: "https://renem.me/pokedex-app/",
  },
];

export default function Portfolio() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 px-4 py-10 space-y-12 flex flex-col">
      <header className="text-center space-y-4 mt-8">
        <div className="flex justify-end mr-4">
          <button
            onClick={() => setIsDark(!isDark)}
            className="text-2xl p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition"
          >
            {isDark ? <BsSun /> : <BsMoon />}
          </button>
        </div>
        <h1 className="text-4xl font-bold">Rene Merida</h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto mb-10">
          I'm a developer who loves building clean, performant, and
          user-friendly applications.
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

      <section className="flex grow flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold text-center mb-6">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project, i) => (
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileTap={{ scale: 0.95 }}
              whileFocus={{ scale: 1.03 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full"
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
            >
              <Card className="rounded-2xl shadow-md bg-white dark:bg-slate-800 hover:shadow-lg transition">
                <CardContent className="p-6 space-y-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            </motion.a>
          ))}
        </div>
      </section>

      <footer className="text-center">
        <h2 className="text-2xl font-semibold mb-6">Socials</h2>
        <div className="flex justify-center space-x-6">
          {socialLinks.map(({ url, icon: Icon }) => (
            <a key={url} href={url} target="_blank" rel="noopener noreferrer">
              <Badge className="flex items-center space-x-2 text-base px-3 py-2 hover:bg-slate-600 dark:hover:bg-slate-500 transition">
                <Icon style={{ width: "1.5rem", height: "1.5rem" }} />
              </Badge>
            </a>
          ))}
        </div>
        <p className="mt-4 text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} Rene Merida. All rights reserved.
        </p>
        <p className="text-slate-500 dark:text-slate-400">
          Built with{" "}
          <a
            href="https://vite.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-800 dark:text-white hover:text-slate-600 dark:hover:text-slate-300 transition"
          >
            Vite
          </a>{" "}
          and{" "}
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-800 dark:text-white hover:text-slate-600 dark:hover:text-slate-300 transition"
          >
            Tailwind CSS
          </a>
        </p>
      </footer>
    </div>
  );
}
