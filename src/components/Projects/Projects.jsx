import OneCard from "../OneCard/OneCard";
import "./Projects.css";

import { projects } from "../../data";
const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h1 className="projectTitle">Projects </h1>
      <div className="cardContainer">
        {projects.map((project) => (
          <OneCard project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
