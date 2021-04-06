import React from "react"
import Button from "react-bootstrap/Button"
import FadeIn from 'react-fade-in'


export default function Interests({ toggleAboutMe, toggleSkills }) {
  return <div className="about-container"><h2 className="h2-about">{'myInterests() {'}</h2>
  <FadeIn delay="100" transitionDuration="1000"><p className="p-about">
  In 2012, cycled with three 
colleagues from London to Paris for charity raising over £4000 for the Institute of Cancer Research. 
Took part in the inaugural Ride London 100, the Dunwich Dynamo (100 miles overnight) and 24hr Mountain Bike race. 
2012 British Cycling National Mountain Biking Champion (Sport Cat.) 
  </p>
  </FadeIn>
  <div className="about-buttons-container">
  <h2 className="h2-about">{'}'}</h2>
  <Button className="about-button" onClick={toggleAboutMe}>{'About me'}</Button>
  <Button className="about-button" onClick={toggleSkills}>{'My skills'}</Button>
  </div>
</div>
}