import React from "react"

// * External
import FadeIn from 'react-fade-in'
import { Helmet } from "react-helmet"

// * Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Welcome() {

  return (<div className="welcome-background">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Cathy J Thomas</title>
    </Helmet>
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