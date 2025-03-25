import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLightDarkTheme } from "../../contexts/LightDarkThemeContext";

function Header() {
  const { ldTheme } = useLightDarkTheme();
  return (
    <header className="w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 px-4 md:px-8 lg:px-16 py-8">
      <div className="flex-1">
        <div className="flex items-center">
          <hr className="w-20 border-t-2 border-solid border-violet-600 mr-2" />
          <p className="font-semibold text-lg text-violet-600">Ahmet Kavas</p>
        </div>
        <h1
          className={`text-4xl md:text-5xl font-semibold mt-4 mb-6 
          ${ldTheme === "dark" ? "text-slate-400" : "text-black"}`}
        >
          The Journey of Development
        </h1>
        <p
          className={`md:text-lg mb-6 ${ldTheme === "dark" ? "text-white" : "text-gray-600"}`}
        >
          Hi, I'm Ahmet, a passionate full-stack developer driven by a love for
          building intuitive and efficient web applications. My journey began
          with a deep curiosity for the fundamentals of computing, leading me
          from foundational networking principles to the dynamic world of modern
          web development. I thrive on creating seamless user experiences and am
          eager to contribute my skills to innovative projects.
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            className={`px-4 py-2 rounded-md transition-colors duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-violet-800 transform hover:scale-105 ${
              ldTheme === "dark"
                ? "bg-slate-200 border-2 border-slate-300 text-zinc-900 hover:bg-slate-100 hover:border-slate-200"
                : "bg-violet-900 border-2 border-violet-600 text-white hover:bg-white hover:text-violet-900"
            }`}
          >
            Hire me
          </button>
          <a
            href="https://github.com/ahmetkvs"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-violet-800 transform hover:scale-105 ${
              ldTheme === "dark"
                ? "bg-zinc-600 border-2 border-slate-300 text-violet-300 hover:bg-zinc-500 hover:text-violet-200"
                : "bg-transparent border-2 border-violet-600 text-violet-600 hover:bg-violet-900 hover:text-white"
            }`}
          >
            <FaGithub className="text-xl" />
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/ahmetkavas"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-violet-800 transform hover:scale-105 ${
              ldTheme === "dark"
                ? "bg-zinc-600 border-2 border-slate-300 text-violet-300 hover:bg-zinc-500 hover:text-violet-200"
                : "bg-transparent border-2 border-violet-600 text-violet-600 hover:bg-violet-900 hover:text-white"
            }`}
          >
            <FaLinkedin className="text-xl" />
            Linkedin
          </a>
        </div>
      </div>
      <div className="flex-1 max-w-[475px] w-full">
        <img
          className="rounded-xl object-cover w-full h-full"
          src="/assets/aijrHeader.webp"
          alt="hero image"
        />
      </div>
    </header>
  );
}

export default Header;
