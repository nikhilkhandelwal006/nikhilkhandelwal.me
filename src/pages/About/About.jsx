import React from "react";
import "./About.css";
import img from "../../assets/img.png";
const About = () => {
  return (
    <div className="about-container">
      <div className="content-container">
        <div className="left-ab ">
          <img src={img} alt="" />
        </div>
        <div className="right-ab">
          <div className="about">
            <h2>About Nikhil</h2>
            <p className="one">
              Hi, I'm Nikhil Khandelwal, a passionate{" "}
              <strong>Software Engineer</strong> with expertise in Fullstack
              development using the MERN stack, and a strong passion for backend development. Currently, I'm focusing on
              System Design while also diving deep into DevOps and Distributed
              Systems.
            </p>
            <br />
            <br />
            <p className="one">
              I am currently working at 
               <strong> True Value Infosoft (P) Ltd</strong> , where I focus on
              building scalable applications and developing robust software
              solutions that enhance business efficiency and user experience. My
              work involves architecting scalable systems, optimizing
              performance of modern scalable applications.
            </p>
            <br />
            <hr />
            <h3>Education:</h3>
            <p className="one">
              I am currently pursuing my M.Tech from BITS Pilani, further
              strengthening my expertise in computer science engineering. Prior
              to this, I completed my B.Tech (CSE) from Arunachal University of
              Studies (2019-2023), where I built a strong foundation in computer
              science and software development.
            </p>
            <br />
            <hr />
            <h3>Technical Skills:</h3>

            <ul className="skills">
              <li>
                <strong>Programming Languages:</strong> Java, JavaScript, SQL,
                TypeScript
              </li>
              <li>
                <strong>Libraries and Frameworks:</strong> React, Redux,
                Express.js, Node.js, Spring, Spring Boot, Tailwind
              </li>
              <li>
                <strong>Databases and other:</strong> MongoDB, PostgreSQL, Redis
              </li>
              <li>
                <strong> Cloud and Tools:</strong> AWS, Docker, Visual Studio
                Code, Postman, Git, GitHub
              </li>
              <li>
                <strong>Other Expertise:</strong> Data Structures and
                Algorithms, System Design (HLD and LLD), Kafka
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
