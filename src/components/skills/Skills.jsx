import Skill from "./Skill";
import skillsContent from "../../data/skillsContent";
import useLightDarkTheme from "../../hooks/useLightDarkTheme";
import useLangTheme from "../../hooks/useLangTheme";

function Skills() {
  const { ldTheme } = useLightDarkTheme();
  const { langTheme } = useLangTheme();

  return (
    <section id="skills-section" className="py-16">
      <div className="w-full mx-auto px-4 md:px-8 lg:px-16">
        <h2
          className={`text-4xl font-semibold mb-8 ${ldTheme === "dark" ? "text-white" : "text-black"}`}
        >
          {langTheme === "en" ? "Skills" : "Yetenekler"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsContent.map((skill, index) => {
            return (
              <Skill
                key={index}
                heading={
                  langTheme === "en" ? skill.en.heading : skill.tr.heading
                }
                message={
                  langTheme === "en" ? skill.en.message : skill.tr.message
                }
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
