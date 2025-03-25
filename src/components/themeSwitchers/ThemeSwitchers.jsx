import React, { useState, useEffect } from "react";
import { useLightDarkTheme } from "../../contexts/LightDarkThemeContext";

function ThemeSwitchers() {
  const { ldTheme, setLdTheme } = useLightDarkTheme();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsSticky(scrollY > 50); // Adjust 50 to the scroll position where you want it to become sticky
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleThemeToggle = () => {
    setLdTheme(ldTheme === "light" ? "dark" : "light");
  };

  return (
    <aside
      className={`my-4 flex w-full justify-end px-4 md:px-8 lg:px-16 sticky top-0 z-10 transition-shadow duration-300 ${
        isSticky ? "bg-opacity-80 backdrop-blur-md border-b" : ""
      } ${isSticky && ldTheme === "dark" ? "border-zinc-700" : isSticky && ldTheme === "light" ? "border-gray-300" : ""} ${ldTheme === "dark" ? "bg-zinc-900/80" : "bg-white/80"}`}
    >
      <div className="flex gap-4 items-center">
        <label
          className={`text-sm ${ldTheme === "dark" ? "text-zinc-100" : "text-zinc-900"}`}
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
          className={`| ${ldTheme === "dark" ? "text-zinc-100" : "text-zinc-900"}`}
        ></p>
        <p
          className={` ${ldTheme === "dark" ? "text-zinc-100" : "text-zinc-900"}`}
        >
          English Turkish
        </p>
      </div>
    </aside>
  );
}

export default ThemeSwitchers;
