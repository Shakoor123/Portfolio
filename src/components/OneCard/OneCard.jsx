import "./OneCard.css";
import emplcement from "./emplacement.png";
import eCommers from "./e-commers.jpg";
import portfolio from "./portfolio.png";
import socialMedia from "./social-media.jpg";

const OneCard = ({ project }) => {
  return (
    <div
      className="OneCard"
      onClick={() => {
        window.location.href = `${project.link}`;
      }}
    >
      <div className="top">
        <span className="cardTitle">{project.title}</span>
      </div>
      <div className="bottom">
        {project.img === 1 && (
          <img src={emplcement} alt="images" className="image" />
        )}
        {project.img === 2 && (
          <img src={portfolio} alt="images" className="image" />
        )}
        {project.img === 3 && (
          <img src={socialMedia} alt="images" className="image" />
        )}
        {project.img === 4 && (
          <img src={eCommers} alt="images" className="image" />
        )}
      </div>
    </div>
  );
};

export default OneCard;
