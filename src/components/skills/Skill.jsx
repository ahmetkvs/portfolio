import React from "react";
import useLightDarkTheme from "../../hooks/useLightDarkTheme";

function Skill({ heading, message }) {
  const { ldTheme } = useLightDarkTheme();

  return (
    <div>
      <h3
        className={`text-2xl mb-6 ${ldTheme === "dark" ? "text-violet-400" : "text-violet-600"}`}
      >
        {heading}
      </h3>
      <p className={`${ldTheme === "dark" ? "text-white" : "text-gray-600"}`}>
        {message}
      </p>
    </div>
  );
}

export default Skill;
