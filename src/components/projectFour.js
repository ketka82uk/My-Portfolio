import React from "react"
import { DiPython } from "react-icons/di";
import { SiFlask, SiPostgresql, SiReact, SiBulma, SiWebpack, SiNodeDotJs } from "react-icons/si";


export default function ProjectFour() {
  return <div className="project-description">
    <div className="curly-brace">{`{`}</div>
    <div className="description-contents">
      <h3 className="h3-portfolio">Baggle! | Group</h3>
      <p className="p-portfolio">Final project for General Assembly Software Engineering Course. A group of three of us created Baggle, a modern bartering site. Baggle is a full-stack application using a Flask REST framework on a Python Flask API to serve data from a PostgreSQL database.</p>
      <p className="p-portfolio" style={{ fontSize: '30px' }}><DiPython /> <SiFlask /> <SiPostgresql /> <SiReact /> <SiBulma /> <SiWebpack /> <SiNodeDotJs /></p>
      <div className="project-links">
        <a className="project-links" href="https://github.com/ketka82uk/Baggle#readme" target="_blank" rel="noreferrer" style={{ color: '#2c497f' }}>Read more |</a>
        <a className="project-links" href="http://gobaggle.herokuapp.com/" target="_blank" rel="noreferrer" style={{ color: '#2c497f' }}> Visit Baggle!</a>
      </div>
    </div>
    <div className="curly-brace">{`}`}</div>
  </div>
}