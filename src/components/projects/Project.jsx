import React from "react";

function Project({
  imgUrl,
  heading,
  description,
  techStack,
  githubUrl,
  deployUrl,
  langTheme,
  ldTheme,
}) {
  return (
    <div className="w-1/3 px-4 py-4">
      <div className="rounded-xl shadow-md overflow-hidden h-full flex flex-col">
        <div className="w-full h-64">
          <img
            src={imgUrl}
            alt="project-image"
            className="w-full h-full object-cover rounded-t-xl"
          />
        </div>
        <div className="p-4 flex-grow">
          <h3
            className={`text-3xl my-5 ${
              ldTheme === "dark" ? "text-violet-400" : "text-violet-600"
            }`}
          >
            {heading}
          </h3>
          <p
            className={`${
              ldTheme === "dark" ? "text-white" : "text-gray-600"
            } max-h-20 overflow-hidden`}
          >
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {techStack.map((tech, index) => {
              return (
                <p
                  className="border font-medium border-violet-600 px-2 py-0.5 rounded-md text-violet-600"
                  key={index}
                >
                  {tech.toLowerCase()}
                </p>
              );
            })}
          </div>
        </div>
        <div className="p-4">
          <div className="flex justify-between mt-4 underline text-lg">
            <a href={githubUrl}>Github</a>
            <a href={deployUrl}>
              {langTheme === "en" ? "View Site" : "Siteye Git"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
