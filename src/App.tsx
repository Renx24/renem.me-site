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
  SiDocker,
  SiReactrouter,
  SiNodedotjs,
} from "react-icons/si";
import Navbar from "./components/ui/Navbar";

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
  { icon: SiReactrouter, name: "React Router" },
  { icon: SiDocker, name: "Docker" },
  { icon: SiNodedotjs, name: "NodeJS" },
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
    title: "🛒 MyShop",
    description:
      "An e-commerce project utilizing React Router. It uses a mock API to fetch data and display it in a user-friendly way. Deployed via Docker.",
    link: "https://renem.me/shopping-cart/",
    image: "/images/myshop1.png",
    techStack: "React, React-Router, TypeScript, Tailwind CSS, API, Docker",
  },
  {
    title: "🧠 Memory Card Game",
    description:
      "Fully-responsive memory game built with React and TypeScript. Learned about useEffects and optimizing fetching data from an API.",
    link: "https://renem.me/memory-card-game/",
    image: "/images/memory1.png",
    techStack: "React, TypeScript, API",
  },
  {
    title: "📄 CV Generator",
    description:
      "React project that familiarized me with hooks and conditional rendering. Very useState heavy - learned a lot about managing state and props.",
    link: "https://renem.me/cv-preview-application/",
    image: "/images/cvbuilder1.png",
    techStack: "React, TypeScript, Bootstrap",
  },
  {
    title: "🎌 Flag Guesser",
    description:
      "Just something I made to practice my React skills. It uses the REST Countries API to fetch data and keeps track of the score.",
    link: "https://renem.me/flag-guesser/",
    image: "/images/country1.png",
    techStack: "React, TypeScript, API",
  },
  {
    title: "🕹️ Pokedex",
    description:
      "One of the first projects I made - manipulates DOM and API through JavaScript. It uses the PokeAPI to fetch data and display it in a user-friendly way.",
    link: "https://renem.me/pokedex-app/",
    image: "/images/pokedex1.png",
    techStack: "HTML, CSS, JavaScript, API",
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 px-4 py-4 space-y-12 flex flex-col">
      <Navbar />
      <header
        id="about"
        className="min-h-[40vh] text-center space-y-4 align-middle flex flex-col justify-center"
      >
        <h1 className="text-4xl font-bold">Rene Merida</h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto mb-10">
          I'm a developer who loves building clean, performant, and
          user-friendly applications.
        </p>
        <div className="flex justify-center flex-wrap gap-4 mt-4  mx-auto">
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

      <section
        id="projects"
        className="flex grow flex-col items-center justify-center max-w-7xl mx-auto"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
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
                  <img
                    src={project.image}
                    alt={project.title + " display image"}
                    className="rounded-lg mb-4 w-full h-full object-cover"
                  />
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {project.link}
                    </span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {project.techStack}
                    </span>
                  </div>
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

      <footer id="contact" className="text-center">
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
