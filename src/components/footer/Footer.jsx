import React from "react";
import { Link } from "react-router-dom";
import useLightDarkTheme from "../../hooks/useLightDarkTheme";
import useLangTheme from "../../hooks/useLangTheme";
import { portfolioContent } from "../../data/portfolioContent";

function Footer({ highlightContactSection }) {
  const { ldTheme } = useLightDarkTheme();
  const { langTheme } = useLangTheme();

  const baseClasses =
    "p-6 rounded-lg border-2 transition-all duration-500 ease-in-out transform";

  const highlightClasses =
    ldTheme === "dark"
      ? "bg-violet-950 border-violet-500 shadow-violet-500/40 shadow-lg scale-105"
      : "bg-violet-100 border-violet-400 shadow-violet-400/40 shadow-lg scale-105";

  const defaultClasses = "bg-transparent border-transparent scale-100";

  return (
    <footer
      className={`py-16 w-screen ${ldTheme === "dark" ? "bg-black" : "bg-[#F5F5F5]"}`}
    >
      <div className="w-screen px-8 md:px-16 lg:px-32 mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Highligt the div below */}
        <div
          id="footer-section"
          className={`
            ${baseClasses}                                 
            ${highlightContactSection ? highlightClasses : defaultClasses} 
            text-center md:text-left mb-8 md:mb-0
          `}
        >
          <h2
            className={`text-4xl font-semibold mb-4 ${
              ldTheme === "dark" ? "text-slate-400" : "text-black"
            }`}
          >
            {langTheme === "en"
              ? portfolioContent.footer.heading.en1
              : portfolioContent.footer.heading.tr1}{" "}
            <br />{" "}
            {langTheme === "en"
              ? portfolioContent.footer.heading.en2
              : portfolioContent.footer.heading.tr2}
          </h2>
          <p
            className={`underline font-semibold ${ldTheme === "dark" ? "text-violet-400" : "text-red-700"}`}
          >
            ahmetpkavas@gmail.com
          </p>
        </div>

        <nav className="flex items-center space-x-4">
          <Link
            to="#"
            className={`font-semibold hover:underline ${ldTheme === "dark" ? "text-white" : "text-gray-700"}`}
          >
            Blog
          </Link>
          <a
            href="https://github.com/ahmetkvs"
            className="font-semibold hover:underline text-green-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/ahmetkavas"
            className="font-semibold hover:underline text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
