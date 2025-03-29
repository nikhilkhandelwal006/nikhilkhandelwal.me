import React from "react";
import "./About.css";
import img from "../../assets/img.jpeg";
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
              Hi, I'm Nikhil, a passionate <strong>Software Engineer</strong> with
              expertise in Fullstack development using the MERN stack.
              Currently, I'm focusing on System Design while also diving deep
              into DevOps and Distributed Systems. My goal is to become a top 1%
              Software Development Engineer (SDE) globally, and I'm constantly
              pushing myself to improve my skills and build impactful solutions.
            </p>
            <br />
            <br />
            <p className="one">
              I am currently working at <strong>True Value Infosoft (P) Ltd</strong> ,
              where I focus on building scalable applications and developing
              robust software solutions that enhance business efficiency and
              user experience. My work involves architecting scalable systems,
              optimizing performance, and ensuring seamless integration of
              modern technologies
            </p>
            <br />
            <hr />
            <h3>Education:</h3>
            <p className="one">
              I am currently pursuing my <strong>M.Tech from BITS Pilani</strong> ,
              further strengthening my expertise in computer science engineering. Prior
              to this, I completed my{" "}
              <strong> B.Tech(CSE) from Arunachal University of Studies</strong> (2019-2023),
              where I built a strong foundation in computer science and software
              development.
            </p>
            <br />
            <hr />
            <h3>Skills:</h3>

            <ul className="skills">
              <li>
                <b>Programming Languages:</b> Java, JavaScript, SQL, TypeScript
              </li>
              <li>
                <b>Libraries and Frameworks:</b> React, Redux, Express.js, Node.js, Spring, Spring Boot, Tailwind 
              </li>
              <li>
                <b>Databases and other:</b> MongoDB, PostgreSQL, Redis
              </li>
              <li>
                
                <b> Cloud and Tools:</b> AWS, Docker, Visual Studio Code, Postman, Git, GitHub
              </li>
              <li>
                <b>Other Expertise:</b> Data Structures and Algorithms, System Design (HLD and LLD), Kafka
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
