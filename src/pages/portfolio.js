import React, { useState } from "react"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import FadeIn from 'react-fade-in'
import MyProjects from "./myProjects"
import ProjectOne from "./projectOne"
import ProjectTwo from "./projectTwo"
import ProjectThree from "./projectThree"
import ProjectFour from "./projectFour"
import background from "../images/portfolio-background.jpg"
import tic_tac_dino from "../images/Tic-Tac-Dino-high.gif"
import etc_news from "../images/ETC.gif"
import loose_end from "../images/loose-end.gif"
import baggle from "../images/baggle.gif"
import tv from "../images/TV.png"


export default function Portfolio() {

  const [tvStatic, setTvStatic] = useState(true)
  const [projectOne, setProjectOne] = useState(false)
  const [projectTwo, setProjectTwo] = useState(false)
  const [projectThree, setProjectThree] = useState(false)
  const [projectFour, setProjectFour] = useState(false)


  const toggleProjectOne = () => {
    setProjectOne(!projectOne)
    if (projectOne) {
      setTvStatic(true)
    } else setTvStatic(false)
    setProjectTwo(false)
    setProjectThree(false)
    setProjectFour(false)
  }

  const toggleProjectTwo = () => {
    setProjectTwo(!projectTwo)
    if (projectTwo) {
      setTvStatic(true)
    } else setTvStatic(false)
    setProjectOne(false)
    setProjectThree(false)
    setProjectFour(false)
  }

  const toggleProjectThree = () => {
    setProjectThree(!projectThree)
    if (projectThree) {
      setTvStatic(true)
    } else setTvStatic(false)
    setProjectOne(false)
    setProjectTwo(false)
    setProjectFour(false)
  }

  const toggleProjectFour = () => {
    setProjectFour(!projectFour)
    if (projectFour) {
      setTvStatic(true)
    } else setTvStatic(false)
    setProjectOne(false)
    setProjectTwo(false)
    setProjectThree(false)
  }

  return (
    <div className="page-contents-center" style={{ backgroundImage: `url(${background})`, backgroundSize: '100% 100%' }}>
    
<Container fluid>
        <Row className="portfolio-upper-section">
          
          <Col>
            <div className="tv-section">
              <div className="outer-tv-container">
                {tvStatic && <div className="inner-tv-container"></div>}
                {projectOne && <div className="project-one" style={{ backgroundImage: `url(${tic_tac_dino})` }}></div>}
                {projectTwo && <div className="project-one" style={{ backgroundImage: `url(${etc_news})` }}></div>}
                {projectThree && <div className="project-one" style={{ backgroundImage: `url(${loose_end})` }}></div>}
                {projectFour && <div className="project-one" style={{ backgroundImage: `url(${baggle})` }}></div>}
                <div className="tv">
                  <div className="button-overlay">
                    <div className="button-container">
                      <Button className="channel-button" onClick={toggleProjectOne}>Project 1</Button>
                      <Button className="channel-button" onClick={toggleProjectTwo}>Project 2</Button>
                      <Button className="channel-button" onClick={toggleProjectThree}>Project 3</Button>
                      <Button className="channel-button" onClick={toggleProjectFour}>Project 4</Button>
                    </div>
                  </div>
                  <img src={tv} alt="retro TV" height="480px"></img>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="portfolio-lower-section">
        <Col lg={0} xl={1}></Col>
          <Col lg={0} xl={5}>
            <div className="portfolio-header-section">
              <div className="portfolio-header"><h2>{`myWork()`}</h2></div>
            </div>
          </Col>
          <Col lg={12} xl={5}>
            <div className="portfolio-description-section">
              {tvStatic && <div className="portfolio-description"><FadeIn delay="500"><MyProjects /></FadeIn></div>}
              {projectOne && <div className="portfolio-description"><FadeIn delay="500"><ProjectOne /></FadeIn></div>}
              {projectTwo && <div className="portfolio-description"><FadeIn delay="500"><ProjectTwo /></FadeIn></div>}
              {projectThree && <div className="portfolio-description"><FadeIn delay="500"><ProjectThree /></FadeIn></div>}
              {projectFour && <div className="portfolio-description"><FadeIn delay="500"><ProjectFour /></FadeIn></div>}
            </div>
          </Col>
          <Col lg={0} xl={1}></Col>
        </Row>

        </Container>

     
    </div>
  )
}