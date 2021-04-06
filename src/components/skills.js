import React from "react"
import Button from "react-bootstrap/Button"
import FadeIn from 'react-fade-in'


export default function AboutMe({ toggleAboutMe, toggleInterests }) {
  return <div className="about-container"><h2 className="h2-about">{'skills() {'}</h2>
  <FadeIn delay="100" transitionDuration="1000"><p className="p-about">
  Front end: 
#HTML/CSS/SCSS, #Bulma, 
#Webpack, #React, #JavaScript, #Sass, #Material UI, #Gatsby 
Back end: 
#Node.js, #Python, #MongoDB, #PostgreSQL, #Mongoose, 
#Express, #Flask, #SQLAlchemy 
Version control: 
#Git, #Github 
CLI: 
#npm, #Yarn, #Homebrew, #pip3 
otherSkills
#Excel, #Adobe Creative Suite, #Sharepoint, #Sketch, #Microsoft Flow, #Cvent, #Wordpress, #budget handling, #project management, #pitching and proposal creation  
languages
English native
Russian 

  </p>
  </FadeIn>
  <div className="about-buttons-container">
  <h2 className="h2-about">{'}'}</h2>
  <Button className="about-button" onClick={toggleAboutMe}>{'About me'}</Button>
  <Button className="about-button" onClick={toggleInterests}>{'My interests'}</Button>
  </div>
</div>
}