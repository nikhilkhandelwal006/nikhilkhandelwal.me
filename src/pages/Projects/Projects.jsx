import React from 'react'
import './Projects.css'
import FD from "../../assets/FD.png"
const Projects = () => {
  return (
    <div className='project-container'>
        <div className="heading">
            <h2>PROJECTS</h2>
        </div>
      <div className="showcase">
        <div className="project-one" ><img src={FD} alt="" /></div>
        <div className="project-one"><img src={FD} alt="" /></div>
        <div className="project-one"><img src={FD} alt="" /></div>
        <div className="project-one"><img src={FD} alt="" /></div>
        <div className="project-one"><img src={FD} alt="" /></div>
        <div className="project-one"><img src={FD} alt="" /></div>

      </div>
    </div>
  )
}

export default Projects
