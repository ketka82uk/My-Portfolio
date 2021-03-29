import React from "react"
import Header from "../components/header"
import background from "../images/welcome_background.png"

import Container from 'react-bootstrap/Container'

export default function Welcome() {


  return ( <div className="page-contents-center" style={{ backgroundImage: `url(${background})`, backgroundSize: '100% 100%' }}>
    <Container>
    <div className="welcome-header">
      <div><Header headerText="Hi, I'm"/></div>
      <div className="cathy"><Header headerText="Cathy"/></div>
    </div>
    <a href="#about"><div className="arrows"></div></a>
    </Container>
    </div>
  )
}