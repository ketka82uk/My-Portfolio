import React from "react"

// * Bootstrap
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

// * Components
import ContactUs from "../components/contactForm"

// * Images
import { SiGatsby, SiBootstrap, SiLinkedin, SiGithub } from "react-icons/si"
import { AiOutlineMail } from "react-icons/ai"
import telephone from "../images/telephone.png"

export default function Contact() {
  return (
    <div className="contact-background">
      <Container className="contact-upper-section">
      <Row>
        <Col md={0} lg={6}>
          <div className="contact-left-section">
          <h2 className="h2-contact">{"{ let's talk }"}</h2>
          <a className="a-contact" href="https://www.linkedin.com/in/cathyjthomas/" target="_blank" rel="noreferrer">/in/cathyjthomas <SiLinkedin /></a>
          <a className="a-contact" href="https://github.com/ketka82uk" target="_blank" rel="noreferrer">/ketka82uk <SiGithub /></a>
          <a className="a-contact" href="mailto:cathyjthomas.dev@gmail.com" rel="noreferrer">cathyjthomas.dev@gmail.com <AiOutlineMail /></a>
          </div>
          <div className="telephone">
            <img src={telephone} alt="retro telephone" height="300px" />
          </div>
        </Col>
        <Col md={12} lg={6}>
        <ContactUs />
        </Col>
    </Row>
       </Container>

       <div className="contact-lower-section">
       <div>Cathy J Thomas | 2021</div>
       <div>Built from the ground up with <SiGatsby /> Gatsby, <SiBootstrap /> Bootstrap and Fullpage.js</div>
       <div>Assets from <a href="https://www.rawpixel.com/" target="_blank" rel="noreferrer">rawpixel</a></div>
       </div>
       
    </div>
  )
}