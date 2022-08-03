import Skill from '../Skill/Skill'
import './Skills.css'

const Skills = () => {
  return (
    <div className='skills'>
        <h1 className="skillsTitle">Skills</h1>
        <div className="divSkillContainer">
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
        </div>
    </div>
  )
}

export default Skills