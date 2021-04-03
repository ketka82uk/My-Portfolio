import React, { useState } from "react"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import FadeIn from 'react-fade-in'
import ProjectOne from "../components/ProjectOne"
import background from "../images/portfolio-background.jpg"
import tic_tac_dino from "../images/Tic-Tac-Dino-high.gif"
import etc_news from "../images/ETC.gif"
import tv from "../images/TV.png"


export default function Portfolio() {

  const [tvStatic, setTvStatic] = useState(true)
  const [projectOne, setProjectOne] = useState(false)
  const [projectTwo, setProjectTwo] = useState(false)


  const toggleProjectOne = () => {
    setProjectOne(!projectOne)
    setTvStatic(false)
    setProjectTwo(false)
  }

  const toggleProjectTwo = () => {
    setProjectOne(false)
    setTvStatic(false)
    setProjectTwo(!projectTwo)
  }

  return (
    <div className="page-contents-center" style={{ backgroundImage: `url(${background})`, backgroundSize: '100% 100%' }}>
      <Container>
        <div className="portfolio-container">
          <div className="portfolio-upper-section">
          <div className="portfolio-header-section">
            <div className="portfolio-header"><h2>portfolio</h2></div>
            </div>
            <div className="portfolio-description-section">
            {projectOne && <div className="portfolio-description"><FadeIn><ProjectOne /></FadeIn></div>}
            </div>
          </div>
          <div className="tv-container">
            <div className="outer-tv-container">
              {tvStatic && <div className="inner-tv-container"></div>}
              {projectOne && <div className="project-one" style={{ backgroundImage: `url(${tic_tac_dino})` }}></div>}
              {projectTwo && <div className="project-one" style={{ backgroundImage: `url(${etc_news})` }}></div>}
              <div className="tv">
                <div className="button-overlay">
                  <div className="button-container">
                    <Button className="channel-button" onClick={toggleProjectOne}>Project 1</Button>
                    <Button className="channel-button" onClick={toggleProjectTwo}>Project 2</Button>
                    <Button className="channel-button" onClick={toggleProjectOne}>Project 3</Button>
                    <Button className="channel-button" onClick={toggleProjectOne}>Project 4</Button>
                  </div>
                </div>
                <img src={tv} alt="retro TV" height="480px"></img>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}