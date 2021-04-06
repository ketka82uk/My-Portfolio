import React from "react"
import Button from "react-bootstrap/Button"


export default function AboutMe({ toggleSkills, toggleInterests }) {
  return <div className="about-container"><h2 className="h2-about">{'aboutMe() {'}</h2>
  <p className="p-about">How can I use fun and creative methods to make things quicker, easier and more efficient? In my fifteen years in the corporate events industry, this was a question I asked myself at every opportunity, pioneering cross-company initiatives using self-taught technology to streamline business processes and improve the customer and employee experience. It’s a question I continue to ask myself as I follow a long-held passion for web development and creative design, recently retraining as a Web Developer with an emphasis on front-end and an interest in UX/UI. I am looking forward to putting my new skills into practise, and combining them with my previous experience, as part of an innovative and forward-looking organisation.</p>
  <div className="about-buttons-container">
  <h2 className="h2-about">{'}'}</h2>
  <Button className="about-button" onClick={toggleSkills}>My skills</Button>
  <Button className="about-button" onClick={toggleInterests}>My interests</Button>
  </div>
</div>
}