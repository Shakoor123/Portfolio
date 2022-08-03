import OneCard from '../OneCard/OneCard'
import './Projects.css'

const Projects = () => {
  return (
    <div className='projects'>
        <h1 className="projectTitle">Projects </h1>
    <div className="cardContainer">
    <OneCard/>
    <OneCard/>
    <OneCard/>
    <OneCard/>
    <OneCard/>

    </div>

    </div>
  )
}

export default Projects