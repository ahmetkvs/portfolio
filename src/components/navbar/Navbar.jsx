import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full h-[62px] flex items-center justify-between px-4 md:px-8 lg:px-16">
      {/*add the light logo if mode is dark */}
      <img
        src="/assets/logoDark.svg"
        alt="logo"
        className="w-8 h-8 object-center rounded-2xl"
      />
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
