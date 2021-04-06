import React from "react"
import FadeIn from 'react-fade-in'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Welcome() {


  return (<div className="welcome-background">
    <Container>
      <Row>
        <Col md={0} lg={4}></Col>
        <Col md={12} lg={6}>
          <FadeIn delay='500' transitionDuration="2000">
            <div className="welcome-header">
              <h2 className="h2-welcome">Hi, I'm</h2>
              <h1 className="cathy">{`{ Cathy }`}</h1>
            </div>
          </FadeIn>
        </Col>
        <Col md={0} lg={2}></Col>
      </Row>
      <a href="#about" aria-label="move down"><div className="arrows"></div></a>
    </Container>
  </div>
  )
}