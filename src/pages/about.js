import React, { useState } from "react"
import background from "../images/about-background.jpg"
import me from "../images/meinframe.png"
import Container from "react-bootstrap/Container"

import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Skills from '../components/skills'
import AboutMe from '../components/aboutMe'
import Interests from '../components/interests'


export default function About() {

  const [aboutMe, setAboutMe] = useState(true)
  const [skills, setSkills] = useState(false)
  const [interests, setInterests] = useState(false)

  function toggleAboutMe() {
    setAboutMe(true)
    setSkills(false)
    setInterests(false)
  }

  function toggleSkills() {
    setAboutMe(false)
    setSkills(true)
    setInterests(false)
  }

  function toggleInterests() {
    setAboutMe(false)
    setSkills(false)
    setInterests(true)
    console.log(interests)
  }

  return ( <div className="about-background">
    <Container fluid>
      <Row>
      <Col md={0} lg={1}></Col>
        <Col md={0} lg={4}>
        
        <img className="me" src={me} alt="me" height='400px' />
        </Col>
        <Col md={12} lg={6}>
        <div className="about-right-section">
    {aboutMe && <AboutMe 
    toggleSkills={toggleSkills}
    toggleInterests={toggleInterests} />}
    {skills && <Skills 
    toggleAboutMe={toggleAboutMe}
    toggleInterests={toggleInterests} />}
    {interests && <Interests 
    toggleAboutMe={toggleAboutMe}
    toggleSkills={toggleSkills} />}
    </div>
        </Col>
        
        <Col md={0} lg={1}></Col>
    </Row>
    </Container>
    </div>
  )
}