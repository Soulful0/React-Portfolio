import React from "react";

function Project({ title, image, deployedLink, repoLink }) {
  return (
    <div className="project">
      <div class="img-wrap">
        <img src={image} alt={title} class="img-style" />
        <div class="link-wrap">
          <h3>{title}</h3>
          <a href={deployedLink} target="_blank" rel="noopener noreferrer">
            Deployed Application
          </a>
          <a href={repoLink} target="_blank" rel="noopener noreferrer">
            GitHub Repository
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
