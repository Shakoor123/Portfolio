import "./Skill.css";

const Skill = ({ skill }) => {
  return (
    <div className="skill">
      <div className="skilltop">
        <span className="skillTitle">{skill.language}</span>
      </div>
      <div className="skillBottom">
        <div className="outerSkill">
          <div
            className="innerSkill"
            style={{
              width: `${skill.persantage}`,
              backgroundColor: `${skill.color}`,
            }}
          ></div>
          <span className="persentage">{skill.persantage}</span>
        </div>
      </div>
    </div>
  );
};

export default Skill;
