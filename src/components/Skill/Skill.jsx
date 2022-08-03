import './Skill.css'

const Skill = () => {
  return (
    <div className='skill'>
        <div className="skilltop">
            <span className="skillTitle">html</span>
        </div>
        <div className="skillBottom">
            <div className="outerSkill">
                <div className="innerSkill" style={{width:'60%',backgroundColor:"blue"}}>
                    
                </div>
                <span className="persentage">60 %</span>
            </div>
        </div>
    </div>
  )
}

export default Skill