import React from "react";
import useLightDarkTheme from "../../hooks/useLightDarkTheme";
import useLangTheme from "../../hooks/useLangTheme";

function ThemeSwitchers() {
  const { ldTheme, setLdTheme } = useLightDarkTheme();
  const { langTheme, setLangTheme } = useLangTheme();

  const handleThemeToggle = () => {
    setLdTheme(ldTheme === "light" ? "dark" : "light");
  };

  const handleLanguageChange = () => {
    setLangTheme(langTheme === "en" ? "tr" : "en");
  };

  return (
    <aside className="my-4 flex w-full justify-end  px-4 md:px-8 lg:px-16">
      <div className="flex gap-4 items-center ">
        <label
          className={`text-sm ${
            ldTheme === "dark" ? "text-zinc-100" : "text-zinc-900"
          }`}
          htmlFor="ldTheme"
        >
          {langTheme === "en" ? "Dark Mode" : "Karanlık Modu"}
        </label>
        <input
          id="ldTheme"
          type="checkbox"
          checked={ldTheme === "dark"}
          onChange={handleThemeToggle}
          className="form-checkbox h-5 w-5 text-indigo-600 rounded focus:ring-indigo-500"
        />
        <p
          className={`| ${
            ldTheme === "dark" ? "text-zinc-100" : "text-zinc-900"
          }`}
        >
          |
        </p>
        <label
          htmlFor="langTheme"
          className={`text-sm ${
            ldTheme === "dark" ? "text-zinc-100" : "text-zinc-900"
          }`}
        >
          {langTheme === "en" ? "Türkçe'ye geç" : "Switch to English"}
        </label>
        <input
          type="checkbox"
          id="langTheme"
          checked={langTheme === "tr"}
          onChange={handleLanguageChange}
          className="form-checkbox h-5 w-5 text-indigo-600 rounded focus:ring-indigo-500"
        />
      </div>
    </aside>
  );
}

export default ThemeSwitchers;
