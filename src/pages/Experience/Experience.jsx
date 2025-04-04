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
          As a SDE at True Value Infosoft (P) Ltd. , I have worked on multiple projects developed features like attendance tracking in admin panels, optimized meta fields for travel websites based on client needs, enhancing and maintaining codebases, implementing new features, and optimizing system performance. I built and managed REST APIs from scratch for an RTO Parivahan project, handling both backend and frontend while ensuring live API stability. My expertise lies in MERN stack development with a strong focus on delivering efficient and reliable applications.
          </div>
        </li>
        <li style={{ "--accent-color": "#FBCA3E" }}>
          <div className="date">Websuntech</div>
          <div className="title">Junior Software Engineer</div>
          <div className="title">(02/2024 - 01/2025)</div>

          <div className="descr">
          As a Junior Software Development Engineer at WebSunTech, I contributed to the development and enhancement of multiple web applications. I worked on building and optimizing backend APIs, improving database performance, and implementing frontend features to enhance user experience. Additionally, I collaborated on projects involving custom admin panels and dynamic web applications, ensuring efficient functionality and seamless integrations. This role helped me refine my full-stack development skills and gain hands-on experience in delivering scalable and high-performance solutions.
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
          During my internship at MatchMove, I immersed myself in the dynamic world of product management, where I honed my skills in market research, product development, and user experience design. Collaborating with talented teams, I contributed to enhancing product features and refining strategies that directly impacted user satisfaction and business growth.
          </div>
        </li>
      </ul>
    </>
  );
};

export default Experience;
