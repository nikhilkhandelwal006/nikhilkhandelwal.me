import React from 'react'
import './Projects.css'
import FD from "../../assets/FD.png"
const Projects = () => {
  return (
    <div className='project-container page'>
        <div className="heading">
            <h2>PROJECTS</h2>
        </div>
      <div className="showcase">
        <div className="project-one" ><a href="https://github.com/nikhilkhandelwal006/MERN-Projects" target='_blank' rel="noopener noreferrer"><img src={FD} alt="Project Thumbnail" /></a></div>
        <div className="project-one" ><a href="https://github.com/nikhilkhandelwal006/MERN-Projects" target='_blank' rel="noopener noreferrer"><img src={FD}  alt="Project Thumbnail" /></a></div>
         <div className="project-one" ><a href="https://github.com/nikhilkhandelwal006/MERN-Projects" target='_blank' rel="noopener noreferrer"><img src={FD}  alt="Project Thumbnail" /></a></div>
         <div className="project-one" ><a href="https://github.com/nikhilkhandelwal006/MERN-Projects" target='_blank' rel="noopener noreferrer"><img src={FD}  alt="Project Thumbnail" /></a></div>
         <div className="project-one" ><a href="https://github.com/nikhilkhandelwal006/MERN-Projects" target='_blank' rel="noopener noreferrer"><img src={FD}  alt="Project Thumbnail" /></a></div>
         <div className="project-one" ><a href="https://github.com/nikhilkhandelwal006/MERN-Projects" target='_blank' rel="noopener noreferrer"><img src={FD}  alt="Project Thumbnail" /></a></div>

      </div>
    </div>
  )
}

export default Projects
