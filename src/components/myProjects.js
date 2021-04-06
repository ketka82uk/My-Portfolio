import React from "react"
import { SiGithub } from "react-icons/si";

export default function MyProjects() {
  return <div className="project-description">
    <div className="curly-brace">{`{`}</div>
    <div className="description-contents">
      <h3 className="h3-portfolio">My Projects</h3>
      <p>Between December 2020 and March 2021, I completed General Assembly's Software Development course - a full-time, immersive course that look place over 12 weeks. Find out more about my projects by clicking on the TV buttons above.</p>
      <div className="project-links">
        <a className="project-links" href="https://github.com/ketka82uk" target="_blank" rel="noreferrer"><SiGithub /> Visit my GitHub</a>
      </div>
    </div>
    <div className="curly-brace">{`}`}</div>
  </div>
}