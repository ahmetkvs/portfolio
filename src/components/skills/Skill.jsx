import React from "react";
import { useLightDarkTheme } from "../../contexts/LightDarkThemeContext";

function Skill({ heading, message }) {
  const { ldTheme } = useLightDarkTheme();

  return (
    <div>
      <h1
        className={`text-2xl mb-6 ${ldTheme === "dark" ? "text-violet-400" : "text-violet-600"}`}
      >
        {heading}
      </h1>
      <p className={`${ldTheme === "dark" ? "text-white" : "text-gray-600"}`}>
        {message}
      </p>
    </div>
  );
}

export default Skill;
