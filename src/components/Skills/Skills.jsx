import Skill from "../Skill/Skill";
import "./Skills.css";
import { skills } from "../../data";
const Skills = () => {
  return (
    <div className="skills" id="skills">
      <h1 className="skillsTitle">Skills</h1>
      <div className="divSkillContainer">
        {skills.map((skill) => (
          <Skill skill={skill} key={skill.id} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
