import React from "react";
import { useLightDarkTheme } from "../../contexts/LightDarkThemeContext";

function ThemeSwitchers() {
  const { ldTheme, setLdTheme } = useLightDarkTheme();

  const handleThemeToggle = () => {
    setLdTheme(ldTheme === "light" ? "dark" : "light");
  };

  return (
    <aside className="my-4 flex w-full justify-end  px-4 md:px-8 lg:px-16">
      <div className="flex gap-4 items-center ">
        <label
          className={`text-sm ${
            ldTheme === "dark" ? "text-zinc-100" : "text-zinc-900"
          }`}
        >
          Dark Mode
        </label>
        <input
          type="checkbox"
          checked={ldTheme === "dark"}
          onChange={handleThemeToggle}
          className="form-checkbox h-5 w-5 text-indigo-600 rounded focus:ring-indigo-500"
        />
        <p
          className={`| ${
            ldTheme === "dark" ? "text-zinc-100" : "text-zinc-900"
          }`}
        ></p>
        <p
          className={` ${
            ldTheme === "dark" ? "text-zinc-100" : "text-zinc-900"
          }`}
        >
          English Turkish
        </p>
      </div>
    </aside>
  );
}

export default ThemeSwitchers;
