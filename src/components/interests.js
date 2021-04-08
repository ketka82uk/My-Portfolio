import React from "react"
import Button from "react-bootstrap/Button"
import FadeIn from 'react-fade-in'
import { BiCycling, BiPencil, BiCoffee } from 'react-icons/bi'


export default function Interests({ toggleAboutMe, toggleSkills }) {
  return <div className="about-container"><h2 className="h2-about">{'myInterests() {'}</h2>
  <FadeIn delay="100" transitionDuration="1000"><p className="p-about">
  
<BiCycling/> <BiPencil/> <BiCoffee/>
  </p>
  </FadeIn>
  <div className="about-buttons-container">
  <h2 className="h2-about">{'}'}</h2>
  <Button className="about-button" onClick={toggleAboutMe}>{'About me'}</Button>
  <Button className="about-button" onClick={toggleSkills}>{'My skills'}</Button>
  </div>
</div>
}