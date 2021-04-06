import React from "react"
import { DiPython } from "react-icons/di";
import { SiFlask } from "react-icons/si";
import { SiPostgresql } from "react-icons/si"
import { SiReact } from "react-icons/si"
import { SiBulma } from "react-icons/si"
import { SiWebpack } from "react-icons/si"
import { SiNodeDotJs } from "react-icons/si"


export default function ProjectFour() {
  return <div className="project-description">
    <div className="curly-brace">{`{`}</div>
    <div className="description-contents">
    <h3 style={{ color: '#2c497f'}}>Baggle! | Group</h3>
    <p>Final project for General Assembly Software Engineering Course. A group of three of us created Baggle, a modern bartering site. Baggle is a full-stack application using a Flask REST framework on a Python Flask API to serve data from a PostgreSQL database.
<p style={{ fontSize: '30px' }}><DiPython /> <SiFlask /> <SiPostgresql /> <SiReact /> <SiBulma /> <SiWebpack/> <SiNodeDotJs /></p>
</p>
<div className="project-links">
<a href="https://github.com/ketka82uk/Baggle#readme" target="_blank" rel="noreferrer" style={{ color: '#2c497f'}}>Read more |</a>
<a href="http://gobaggle.herokuapp.com/" target="_blank" rel="noreferrer" style={{ color: '#2c497f'}}> Visit Baggle!</a>
  </div>
  </div>
  <div className="curly-brace">{`}`}</div>
  </div>
}