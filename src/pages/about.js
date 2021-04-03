import React, { useState } from "react"
import Header from "../components/header"
import TvStatic from "../components/tvStatic"
import TVModal from "../components/modal"
import background from "../images/about-background.jpg"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"


export default function About() {

  const [tvStatic, setTvStatic] = useState(false)
  

  const toggleStatic = () => {
    setTvStatic(!tvStatic)
    console.log('look here!', tvStatic)
  }


  return ( <div className="page-contents-center" style={{ backgroundImage: `url(${background})`, backgroundSize: '100% 100%' }}>
    <Container>
    <div style={{ color: `teal` }}>
      <Header headerText="About Me" />
      {tvStatic && <TvStatic/>}
    </div>
    <Button onClick={toggleStatic}>Turn on TV</Button>
    <TVModal />
    </Container>
    </div>
  )
}