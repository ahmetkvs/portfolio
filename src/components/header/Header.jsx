import { FaGithub, FaLinkedin } from "react-icons/fa";

function Header() {
  return (
    <header className="w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 px-4 md:px-8 lg:px-16 py-8">
      {/* Text Content */}
      <div className="flex-1">
        <div className="flex items-center">
          <hr className="w-20 border-t-2 border-solid border-violet-600 mr-2" />
          <p className="font-semibold text-lg text-violet-600">Ahmet Kavas</p>
        </div>
        <h1 className="text-4xl md:text-5xl font-semibold mt-4 mb-6">
          The Journey of Development
        </h1>
        <p className="text-base text-gray-600 md:text-lg mb-6">
          Hi, I'm Ahmet, a passionate full-stack developer driven by a love for
          building intuitive and efficient web applications. My journey began
          with a deep curiosity for the fundamentals of computing, leading me
          from foundational networking principles to the dynamic world of modern
          web development. I thrive on creating seamless user experiences and am
          eager to contribute my skills to innovative projects.
        </p>
        <div className="flex flex-wrap gap-2">
          <button className="px-4 py-2 text-white bg-violet-900 border-2 border-violet-600 rounded-md hover:bg-white hover:text-violet-900 transition-colors duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-violet-800">
            Hire me
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-violet-600 border-2 border-violet-600 rounded-md hover:bg-violet-900 hover:text-white transition-colors duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-violet-800">
            <FaGithub className="text-xl" />
            Github
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-violet-600 border-2 border-violet-600 rounded-md hover:bg-violet-900 hover:text-white transition-colors duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-violet-800">
            <FaLinkedin className="text-xl" />
            Linkedin
          </button>
        </div>
      </div>

      {/* Image */}
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
