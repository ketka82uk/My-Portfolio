import React from "react"
import background from "../images/contact-background.jpg"
import ContactUs from "../components/contactForm"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

export default function Contact() {
  return (
    <div className="page-contents-center" style={{ backgroundImage: `url(${background})`, backgroundSize: '100% 100%' }}>
      <Container>
      <Row>
        <Col md={0} lg={6}>
        </Col>
        <Col md={12} lg={6}>
        <h2>Let's talk</h2>
        <ContactUs />
        </Col>
    </Row>
       </Container>
    </div>
  )
}