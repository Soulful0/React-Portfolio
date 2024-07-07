import React from "react";
import Project from "../components/Project";

function Portfolio() {
  const projects = [
    // Array of project objects with title, image, deployedLink, repoLink
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          image={project.image}
          deployedLink={project.deployedLink}
          repoLink={project.repoLink}
        />
      ))}
    </section>
  );
}

export default Portfolio;
