import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <>
      <div className="heading">
        <h2>Experiences</h2>
      </div>
      <br />
      <ul className="experience-timeline">
        <li style={{ "--accent-color": "#41516C" }}>
          <div className="date">True Value Infosoft (P) Ltd</div>
          <div className="title">Software Development Engineer- I</div>
          <div className="title">(03/2025 - Present)</div>

          <div className="descr">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
            itaque hic quibusdam fugiat est numquam harum, accusamus suscipit
            consequatur laboriosam!
          </div>
        </li>
        <li style={{ "--accent-color": "#FBCA3E" }}>
          <div className="date">Websuntech</div>
          <div className="title">Junior Software Engineer</div>
          <div className="title">(04/2024 - 01/2025)</div>

          <div className="descr">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
            adipisci nobis nostrum vero nihil veniam.
          </div>
        </li>
        <li style={{ "--accent-color": "#E24A68" }}>
          <div className="date">Unacademy (Sorting Hat Technologies)</div>
          <div className="title">Category Associate</div>
          <div className="title">(06/2023 - 02/2024)</div>

          <div className="descr">
          I conducted market analysis and competitor research to identify trends and opportunities, driving growth and engagement in specific educational categories at Unacademy. Collaborating with educators, I curated high-quality content aligned with student needs. Using data analytics, I tracked performance, optimized recommendations, and enhanced user experience. 
          </div>
        </li>
        <li style={{ "--accent-color": "#1B5F8C" }}>
          <div className="date">EDSPREAD</div>

          <div className="title">
            Full Stack Development Trainee & Intern{" "}
          </div>
          <div className="title">(06/2021 - 08/2021)</div>
          <div className="descr">
          Contributed to developing and maintaining web applications, working on both front-end (React, HTML, CSS) and back-end (Node.js, Express). Assisted in code reviews, debugging, and performance optimization. Managed databases like MongoDB and integrated APIs to ensure seamless front-end and server communication, enhancing user experience.
          </div>
        </li>
        <li style={{ "--accent-color": "#4CADAD" }}>
          <div className="date">MatchMove</div>
          <div className="title">
          Product Management Intern </div>
          <div className="title">(12/2020 - 03/2021)</div>
          <div className="descr">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, non.
          </div>
        </li>
      </ul>
    </>
  );
};

export default Experience;
