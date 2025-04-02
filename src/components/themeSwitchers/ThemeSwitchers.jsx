import React from "react";
import useLightDarkTheme from "../../hooks/useLightDarkTheme";
import useLangTheme from "../../hooks/useLangTheme";
import ToggleSwitch from "./ToggleSwitch";

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
        <div className="flex items-center gap-2">
          <label
            id="darkModeLabel"
            className={`text-sm font-medium ${
              isDarkMode ? "text-zinc-100" : "text-zinc-900"
            }`}
            htmlFor="ldTheme"
          >
            {isTurkish ? "Karanlık Mod" : "Dark Mode"}
          </label>
          <ToggleSwitch
            id="ldTheme"
            checked={isDarkMode}
            onChange={handleThemeToggle}
            labelId="darkModeLabel"
          />
        </div>
        <p
          className={`text-2xl ${isDarkMode ? "text-zinc-500" : "text-zinc-400"}`}
        >
          |
        </p>
        <div className="flex items-center gap-2">
          <label
            id="langToggleLabel"
            className={`text-sm font-medium ${
              isDarkMode ? "text-zinc-100" : "text-zinc-900"
            }`}
            htmlFor="langTheme"
          >
            {isTurkish ? "Switch to English" : "Türkçe'ye geç"}
          </label>
          <ToggleSwitch
            id="langTheme"
            checked={isTurkish}
            onChange={handleLanguageChange}
            labelId="langToggleLabel"
          />
        </div>
      </div>
    </aside>
  );
}

export default ThemeSwitchers;
