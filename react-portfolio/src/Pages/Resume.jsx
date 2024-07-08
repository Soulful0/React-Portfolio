import React from "react";

function Resume() {
  return (
    <section class="resume-wrap">
      <h2>Resume</h2>
      <a href="/path-to-your-resume.pdf" download>
        Download Resume
      </a>

      <h2>Front-end Proficiencies</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>Responsive Design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>
      <h2>Back-End Proficiencies</h2>
      <ul>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>SQL Databases</li>
        <li>NoSQL Databases</li>
      </ul>
    </section>
  );
}

export default Resume;
