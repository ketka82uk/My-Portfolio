import React from "react"
import Button from "react-bootstrap/Button"
import FadeIn from 'react-fade-in'
import { 
SiMongodb, 
SiReact, 
SiBulma, 
SiHtml5,
SiCss3,
SiJavascript,
SiSass,
SiBootstrap,
SiGatsby,
SiPython,
SiPostgresql,
SiFlask,
SiMicrosoftexcel,
SiWordpress,
SiAdobephotoshop,
SiAdobecreativecloud,
SiSketch,
SiMicrosoftsharepoint
 } from "react-icons/si"
 import { FaProjectDiagram, FaChalkboardTeacher, FaLanguage } from "react-icons/fa"
 import { GiTeacher } from "react-icons/gi"


export default function AboutMe({ toggleAboutMe, toggleInterests }) {

  const skills = [
  {logo: '', name: 'FRONT END SKILLS =>', category: 'front-end', color: '', opacity: 0, competency: 'good'},
  {logo: <SiHtml5/>, name: 'HTML', category: 'front-end', color: '', opacity: 0, competency: 'good' },
  {logo: <SiCss3/>, name: 'CSS', category: 'front-end', color: '', opacity: 0, competency: 'good' },
  {logo: <SiJavascript/>, name: 'JavaScript', category: 'front-end', color: '', opacity: 0, competency: 'good' },
  {logo: <SiReact/>, name: 'React', category: 'front-end', color: '', opacity: 0, competency: 'good' },
  {logo: <SiSass/>, name: 'Sass', category: 'front-end', color: '', opacity: 0, competency: 'okay' },
  {logo: <SiBulma/>, name: 'Bulma', category: 'front-end', color: '', opacity: 0, competency: 'good' },
  {logo: <SiBootstrap/>, name: 'Bootstrap', category: 'front-end', color: '', opacity: 0, competency: 'okay' },
  {logo: <SiGatsby/>, name: 'Gatsby', category: 'front-end', color: '', opacity: 0, competency: 'okay' },
  {logo: '', name: 'BACK-END SKILLS =>', category: 'back-end', color: '', opacity: 0, competency: 'good'},
  {logo: <SiMongodb/>, name: 'MongoDB', category: 'back-end', color: '', opacity: 0, competency: 'good' },
  {logo: <SiPython/>, name: 'Python', category: 'back-end', color: '', opacity: 0, competency: 'good' },
  {logo: <SiPostgresql/>, name: 'PostgreSQL', category: 'back-end', color: '', opacity: 0, competency: 'good' },
  {logo: <SiFlask/>, name: 'Flask', category: 'back-end', color: '', opacity: 0, competency: 'good' },
  {logo: '', name: 'DESIGN SKILLS =>', category: 'design', color: '', opacity: 0, competency: 'good'},
  {logo: <SiSketch/>, name: 'Sketch', category: 'design', color: '', opacity: 0, competency: 'good' },
  {logo: <SiAdobephotoshop/>, name: 'Photoshop', category: 'design', color: '', opacity: 0, competency: 'good' },
  {logo: <SiAdobecreativecloud/>, name: 'Creative Cloud', category: 'design', opacity: 0, color: '', competency: 'good' },
  {logo: '', name: 'OTHER SKILLS =>', category: 'other', color: '', opacity: 0, competency: 'good'},
  {logo: <SiMicrosoftexcel/>, name: 'Excel', category: 'other', color: '', opacity: 0, competency: 'good' },
  {logo: <SiWordpress/>, name: 'Wordpress', category: 'other', color: '', opacity: 0, competency: 'good' },
  {logo: <SiMicrosoftsharepoint/>, name: 'Sharepoint', category: 'other', color: '', opacity: 0, competency: 'good' },
  {logo: <FaProjectDiagram/>, name: 'Project Management', category: 'other', color: '', opacity: 0, competency: 'good' },
  {logo: <FaChalkboardTeacher/>, name: 'Pitching & presenting', category: 'other', color: '', opacity: 0, competency: 'good' },
  {logo: <GiTeacher/>, name: 'Training delivery', category: 'other', color: '', opacity: 0, competency: 'good' },
  {logo: <FaLanguage/>, name: 'Russian (fluent)', category: 'other', color: '', opacity: 0 ,competency: 'good' }
  ]


  return <div className="about-container"><h2 className="h2-about">{'skills() {'}</h2>
  <FadeIn delay="100" transitionDuration="1000"><p className="p-about">

<div className="skills-container">
  
  {skills.map((skill) => {

    skill.category === 'front-end' ?
    skill.color = `rgba(225,85,84,1)` :
    skill.category === 'back-end' ?
    skill.color = `rgba(80,178,192,1)` :
    skill.category === 'design' ?
    skill.color = `rgba(247,184,1,1)` :
    skill.color = `rgba(255,255,255,.2)`

  return <div className="skills-cell" style={{ backgroundColor: `${skill.color}`}}>
    <p className="p-icon">{skill.logo}</p>
    <p class="p-skills">{skill.name}</p>
    </div>
})}
 
</div>



  </p>
  </FadeIn>
  <div className="about-buttons-container">
  <h2 className="h2-about">{'}'}</h2>
  <Button className="about-button" onClick={toggleAboutMe}>{'About me'}</Button>
  {/* <Button className="about-button" onClick={toggleInterests}>{'My interests'}</Button> */}
  </div>
</div>
}