import React from "react"


export default function ProjectOne() {
  return <div className="project-description">
    <div className="curly-brace">{`{`}</div>
    <div className="description-contents">
    <h3>Tic-Tac-Dino! | Individual</h3>
    <p>The first project I completed as part of General Assembly's Software Engineering course in Jan 2021. Uses vanilla JS, HTML and CSS to create a 2D grid-based game.
</p>
<a href="https://github.com/ketka82uk/Tic-Tac-Dino/blob/master/README.md" target="_blank" rel="noreferrer" style={{ color: '#2c497f'}}>Read more |</a>
<a href="https://ketka82uk.github.io/Tic-Tac-Dino/" target="_blank" rel="noreferrer" style={{ color: '#2c497f'}}> Play Tic-Tac-Dino!</a>
  </div>
  <div className="curly-brace">{`}`}</div>
  </div>
}