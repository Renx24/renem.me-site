import { useEffect, useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <nav className="sticky top-0 left-0 bg-slate-50 z-10 flex items-center justify-between p-4 dark:bg-slate-900 w-full">
      <ul className="flex space-x-4">
        <li>
          <a href="#projects" className="hover:underline">
            PROJECTS
          </a>
        </li>
        <li>
          <a href="#about" className="hover:underline">
            ABOUT
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:underline">
            CONTACT
          </a>
        </li>
      </ul>
      <button
        onClick={() => setIsDark(!isDark)}
        className="text-2xl p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition"
      >
        {isDark ? <BsSun /> : <BsMoon />}
      </button>
    </nav>
  );
}
