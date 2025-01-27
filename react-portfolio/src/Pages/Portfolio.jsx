import React from "react";
import Project from "../components/Project";
import "../index.css";
import blogImg from "../../img/blog.png";
import gymwebsiteImg from "../../img/gymwebsite.png";

function Portfolio() {
  const projects = [
    {
      title: "Gym Website",
      image: gymwebsiteImg,
      deployedLink: "https://soulful0.github.io/Gym-Website/",
      repoLink: "https://github.com/Soulful0/Gym-Website",
    },
    {
      title: "Blog",
      image: blogImg,
      deployedLink: "https://soulful0.github.io/Challenge-4/",
      repoLink: "https://github.com/Soulful0/Challenge-4",
    },
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
