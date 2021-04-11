import React from "react"

// * External
import FadeIn from 'react-fade-in'
import { Helmet } from "react-helmet"
import ReactRotatingText from 'react-rotating-text'

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
        <Col md={12} lg={7}>
          <FadeIn delay='500' transitionDuration="2000">
            <div className="welcome-header">
              <h1 className="cathy">Cathy <span className="j">J</span> Thomas</h1>
              <h3 className="h3-welcome">{`{ web developer }`}</h3>
              <div className="rotating-text"><h2 className="h2-welcome"><ReactRotatingText pause={1000} cursor={false} items={['build', 'create', 'solve', 'develop', 'design']} /></h2></div>
            </div>
          </FadeIn>
        </Col>
        <Col md={0} lg={1}></Col>
      </Row>
      <a href="#about" aria-label="move down"><div className="arrows"></div></a>
    </Container>
  </div>
  )
}