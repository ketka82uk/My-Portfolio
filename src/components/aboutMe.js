import React from "react"
import Button from "react-bootstrap/Button"
import FadeIn from 'react-fade-in'


export default function AboutMe({ toggleSkills, toggleInterests }) {
  return <div className="about-container"><h2 className="h2-about">{'aboutMe() {'}</h2>
    <FadeIn delay="100" transitionDuration="1000">
      <div className="about-description">
      <p className="p-about"><strong>I’m Cathy, a junior web developer based in Ipswich, UK.</strong> I love making stuff - fun stuff, functional stuff, all kinds of stuff. If I can make it, shape it, solve it or create it then I'm into it, which is why I have such a great love of coding!</p>
      <p className="p-about">My journey to professional web developer has been a long one, starting as a teen in the nineties. Back then, I would spend hours building fan sites on GeoCities with the help of a huge brick of a book, literally entitled the HTML4 Bible. So much has changed in that time, but despite a fifteen year career detour into the Meetings and Events industry, my passion for coding and web design never faded. I decided to make it my profession late in 2020, enrolling onto General Assembly’s Immersive Software Engineering course, graduating in March 2021.</p>
      <p className="p-about">I’m now hugely excited to begin the next step of my career, combining my programming skills, love of design and problem solving with my previous corporate experience. </p>
      </div>
    </FadeIn>
    <div className="about-buttons-container">
      <h2 className="h2-about">{'}'}</h2>
      <Button className="about-button" onClick={toggleSkills}>My skills</Button>
      {/* <Button className="about-button" onClick={toggleInterests}>My interests</Button> */}
    </div>
  </div>
}