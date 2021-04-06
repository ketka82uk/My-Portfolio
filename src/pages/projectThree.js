import React from "react"
import { SiMongodb, SiReact, SiBulma, SiWebpack, SiNodeDotJs } from "react-icons/si";


export default function ProjectThree() {
  return <div className="project-description">
    <div className="curly-brace">{`{`}</div>
    <div className="description-contents">
      <h3 className="h3-portfolio">Loose End | Group</h3>
      <p>Third project for General Assembly Software Engineering Course. Working with three other students over a week, we created Loose End, a meet-up and tourism site. Loose End was my first experience of a full-stack application, using a MERN stack and our own API.</p>
      <p style={{ fontSize: '30px' }}><SiMongodb /> <SiReact /> <SiBulma /> <SiWebpack /> <SiNodeDotJs /></p>
      <div className="project-links">
        <a className="project-links" href="https://github.com/ketka82uk/Loose-End#readme" target="_blank" rel="noreferrer" style={{ color: '#2c497f' }}>Read more |</a>
        <a className="project-links" href="https://loose-end-ga.herokuapp.com/" target="_blank" rel="noreferrer" style={{ color: '#2c497f' }}> Visit Loose End</a>
      </div>
    </div>
    <div className="curly-brace">{`}`}</div>
  </div>
}