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

export default function Contact() {
  return (
    <div className="contact-background">
      <Container className="contact-upper-section">
      <Row>
        <Col md={0} lg={6}>
          <div className="contact-left-section">
          <h2 className="h2-contact">{"{ let's talk }"}</h2>
          <a className="a-contact" href="https://www.linkedin.com/in/cathyjthomas/">/in/cathyjthomas <SiLinkedin /></a>
          <a className="a-contact" href="https://github.com/ketka82uk">/ketka82uk <SiGithub /></a>
          <a className="a-contact" href="mailto:cathyjthomas.dev@gmail.com">cathyjthomas.dev@gmail.com <AiOutlineMail /></a>
          </div>
        </Col>
        <Col md={12} lg={6}>
        <ContactUs />
        </Col>
    </Row>
       </Container>

       <div className="contact-lower-section">
       <div>Cathy J Thomas | 2021</div>
       <div>Made with <SiGatsby /> Gatsby and <SiBootstrap /> Bootstrap</div>
       </div>
       
    </div>
  )
}