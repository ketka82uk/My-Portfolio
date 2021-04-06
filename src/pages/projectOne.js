import React from "react"
import { SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";


export default function ProjectOne() {
  return <div className="project-description">
    <div className="curly-brace">{`{`}</div>
    <div className="description-contents">
    <h3 className="h3-portfolio">Tic-Tac-Dino! | Individual</h3>
    <p>The first project I completed as part of General Assembly's Software Engineering course in Jan 2021. Uses vanilla JS, HTML and CSS to create a 2D grid-based game.</p>
    <p style={{ fontSize: '30px' }}><SiJavascript /> <SiHtml5 /> <SiCss3 /></p>
    <div className="project-links">
<a className="project-links" href="https://github.com/ketka82uk/Tic-Tac-Dino/blob/master/README.md" target="_blank" rel="noreferrer" style={{ color: '#2c497f'}}>Read more |</a>
<a className="project-links" href="https://ketka82uk.github.io/Tic-Tac-Dino/" target="_blank" rel="noreferrer" style={{ color: '#2c497f'}}> Play Tic-Tac-Dino!</a>
  </div>
  </div>
  <div className="curly-brace">{`}`}</div>
  </div>
}