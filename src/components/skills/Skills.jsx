import Skill from "./Skill";
import skillsData from "../../data/skillsData";

function Skills() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="text-4xl font-semibold mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => {
            return (
              <Skill
                key={index}
                heading={skill.en.heading}
                message={skill.en.message}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
