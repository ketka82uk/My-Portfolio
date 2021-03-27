import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import PortfolioCard from "../components/card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"

export default function Portfolio() {
  return (
    <div className="page-contents">
    
      
  {/* Stack the columns on mobile by making one full-width and the other half-width */}
  <Row className="row">
    <Col className="column" xs={3} md={3}>
      xs=12 md=8
    </Col>
    <Col className="column" xs={3} md={3}>
      xs=6 md=4
    </Col>
    <Col className="column" xs={3} md={3}>
      xs=6 md=4
    </Col>
    <Col className="column" xs={3} md={3}>
      xs=6 md=4
    </Col>
  </Row>
  <Row className="row">
  <Col className="column" xs={3} md={3}>
      xs=12 md=8
    </Col>
    <Col xs={3} md={3}>
      xs=6 md=4
    </Col>
    <Col xs={3} md={3}>
      xs=6 md=4
    </Col>
    <Col xs={3} md={3}>
      xs=6 md=4
    </Col>
  </Row>


    </div>
  )
}