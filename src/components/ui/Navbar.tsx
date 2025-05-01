export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4">
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
    </nav>
  );
}
