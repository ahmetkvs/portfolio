import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full flex justify-between">
      <p className="text-violet-600">Ahmet Kavas</p>{" "}
      {/* Change later with logo or something */}
      <div className="flex space-x-4">
        <Link to="#">Blog</Link>
        <Link to="#skills-section">Skills</Link>
        <Link to="#projects-section">Projects</Link>
        <Link to="#">Hire me</Link>
      </div>
    </nav>
  );
}

export default Navbar;
