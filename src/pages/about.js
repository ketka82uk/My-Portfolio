import React from "react"
import background from "../images/about-background.jpg"
import me from "../images/meinframe.png"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import { FaBeer } from 'react-icons/fa'

export default function About() {

  return ( <div className="page-contents" style={{ backgroundImage: `url(${background})`, backgroundSize: '100% 100%' }}>
    <Container>
      <Row>
        <Col md={0} lg={6}>
        </Col>
        <Col md={12} lg={6}>
        <div>
          <img src={me} alt="me" height='400px' />
      <h2>aboutMe ()</h2>
      <p>{`{`}How can I use fun and creative methods to make things quicker, easier and more efficient? In my fifteen years in the corporate events industry, this was a question I asked myself at every opportunity, pioneering cross-company initiatives using self-taught technology to streamline business processes and improve the customer and employee experience. It’s a question I continue to ask myself as I follow a long-held passion for web development and creative design, recently retraining as a Web Developer with an emphasis on front-end and an interest in UX/UI. I am looking forward to putting my new skills into practise, and combining them with my previous experience, as part of an innovative and forward-looking organisation.</p>
    <FaBeer />
    </div>
        </Col>
    </Row>
    </Container>
    </div>
  )
}