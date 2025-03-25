import React from "react";
import { Link } from "react-router-dom";
import { useLightDarkTheme } from "../../contexts/LightDarkThemeContext"; // Import the context
import { useLangTheme } from "../../contexts/LanguageThemeContext";
import { portfolioContent } from "../../data/portfolioContent";

function Footer() {
  const { ldTheme } = useLightDarkTheme();
  const { langTheme } = useLangTheme();

  return (
    <footer
      className={`py-16 w-screen ${ldTheme === "dark" ? "bg-black" : "bg-[#F5F5F5]"}`}
    >
      <div className="w-screen px-8 md:px-16 lg:px-32 mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-8 md:mb-0">
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
