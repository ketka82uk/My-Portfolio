import React from "react"
import FadeIn from 'react-fade-in'
import Header from "../components/header"
import background from "../images/home-background.jpg"

import Container from 'react-bootstrap/Container'

export default function Welcome() {


  return ( <div className="page-contents-center" style={{ backgroundImage: `url(${background})`, backgroundSize: '100% 100%' }}>
    <Container>
    <div className="welcome-header">
      <div><Header headerText="Hi, I'm"/></div>
      <FadeIn delay='1000'><div className="cathy"><Header headerText="Cathy"/></div></FadeIn>
    </div>
    <a href="#about" aria-label="move down"><div className="arrows"></div></a>
    </Container>
    </div>
  )
}