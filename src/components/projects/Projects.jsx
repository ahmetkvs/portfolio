import React from "react";
import useLightDarkTheme from "../../hooks/useLightDarkTheme";
import useLangTheme from "../../hooks/useLangTheme";
import Project from "./Project";
import { useGetProjects } from "../../hooks/useGetProjects";

function Projects() {
  const { ldTheme } = useLightDarkTheme();
  const { langTheme } = useLangTheme();

  const { data, error, isPending } = useGetProjects();

  if (isPending) {
    return <p>Projects Loading...</p>;
  }
  if (error) {
    return <p>An error occured: {error.message}</p>;
  }

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16">
      <h2
        className={`text-4xl font-semibold mb-8 ${
          ldTheme === "dark" ? "text-white" : "text-gray-700"
        }`}
      >
        {langTheme === "en" ? "Projects" : "Projeler"}
      </h2>
      <div className="flex">
        {data.map((project) => (
          <Project
            key={project.id}
            imgUrl={project.image}
            heading={project.name}
            description={project.description}
            techStack={project.techStack}
            githubUrl={project.githubUrl}
            deployUrl={project.deployUrl}
            langTheme={langTheme}
            ldTheme={ldTheme}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
