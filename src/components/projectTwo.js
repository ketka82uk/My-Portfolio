import React from "react"
import { SiReact, SiBulma, SiWebpack, SiNodeDotJs } from "react-icons/si";


export default function ProjectTwo() {
  return <div className="project-description">
    <div className="curly-brace">{`{`}</div>
    <div className="description-contents">
      <h3 className="h3-portfolio">ETC. News | Pairs</h3>
      <p>Second project for General Assembly Software Engineering course. A 48-hour, pair programming 'hackathon' to create an app with a React frontend that consumes an external REST API (newsapi.org).</p>
      <p style={{ fontSize: '30px' }}><SiReact /> <SiBulma /> <SiWebpack /> <SiNodeDotJs /></p>
      <div className="project-links">
        <a className="project-links" href="https://github.com/ketka82uk/ETC-News#readme" target="_blank" rel="noreferrer" style={{ color: '#2c497f' }}>Read more |</a>
        <a className="project-links" href="https://ketka82uk.github.io/ETC-News/" target="_blank" rel="noreferrer" style={{ color: '#2c497f' }}> Go to ETC. News</a>
      </div>
    </div>
    <div className="curly-brace">{`}`}</div>
  </div>
}