import React from "react";

function Project({ title, image, deployedLink, repoLink }) {
  return (
    <div className="project">
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <div>
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">
          Deployed Application
        </a>
        <a href={repoLink} target="_blank" rel="noopener noreferrer">
          GitHub Repository
        </a>
      </div>
    </div>
  );
}

export default Project;
