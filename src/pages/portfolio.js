import React, { useState } from "react"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"

export default function Portfolio() {

  const [tvStatic, setTvStatic] = useState(true)
  const [projectOne, setProjectOne] = useState(false)

  const toggleProjectOne = () => {
    setProjectOne(!projectOne)
    setTvStatic(!tvStatic)
    console.log('look here!', tvStatic)
  }

  return (
    <div className="page-contents-center">
      <Container>
        <div className="tv-container">
          <div className="outer-tv-container">
            {tvStatic && <div className="inner-tv-container"></div>}
            {projectOne && <div className="project-one"></div>}
            <div className="tv"></div>
          </div>
          <Button onClick={toggleProjectOne}>Channel 1</Button>
        </div> 
      </Container>
    </div>
  )
}