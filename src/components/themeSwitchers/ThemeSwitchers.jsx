import React from "react";
import useLightDarkTheme from "../../hooks/useLightDarkTheme";
import useLangTheme from "../../hooks/useLangTheme";
import ToggleSwitch from "./ToggleSwitch";
import { FaMoon, FaSun } from "react-icons/fa";

function ThemeSwitchers() {
  const { ldTheme, setLdTheme } = useLightDarkTheme();
  const { langTheme, setLangTheme } = useLangTheme();

  const handleThemeToggle = () => {
    setLdTheme(ldTheme === "light" ? "dark" : "light");
  };

  const handleLanguageChange = () => {
    setLangTheme(langTheme === "en" ? "tr" : "en");
  };

  const isDarkMode = ldTheme === "dark";
  const isTurkish = langTheme === "tr";

  return (
    <aside className="my-4 flex w-full justify-end px-4 md:px-8 lg:px-16">
      <div className="flex items-center gap-x-6 gap-y-2 flex-wrap">
        {/* Dark Mode Toggle */}
        <div className="flex items-center gap-2">
          <label id="darkModeLabel" htmlFor="ldTheme" className="sr-only">
            {isTurkish ? "Karanlık Mod" : "Dark Mode"}
          </label>
          <FaSun
            className={`text-xl ${isDarkMode ? "text-zinc-500" : "text-yellow-500"}`}
          />
          <ToggleSwitch
            id="ldTheme"
            checked={isDarkMode}
            onChange={handleThemeToggle}
            labelId="darkModeLabel"
          />
          <FaMoon
            className={`text-xl ${isDarkMode ? "text-blue-300" : "text-zinc-500"}`}
          />
        </div>

        <p
          className={`text-2xl ${isDarkMode ? "text-zinc-500" : "text-zinc-400"}`}
        >
          |
        </p>

        {/* Language Toggle */}
        <div className="flex items-center gap-2">
          <label id="langToggleLabel" htmlFor="langTheme" className="sr-only">
            {isTurkish ? "Switch to English" : "Türkçe'ye geç"}
          </label>
          <span
            className={`text-xl font-bold ${isDarkMode ? "text-zinc-100" : "text-zinc-900"}`}
          >
            EN
          </span>
          <ToggleSwitch
            id="langTheme"
            checked={isTurkish}
            onChange={handleLanguageChange}
            labelId="langToggleLabel"
          />
          <span
            className={`text-xl font-bold ${isDarkMode ? "text-zinc-100" : "text-zinc-900"}`}
          >
            TR
          </span>
        </div>
      </div>
    </aside>
  );
}

export default ThemeSwitchers;
