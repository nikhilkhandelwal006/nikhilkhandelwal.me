import React from "react";
import "./Contact.css";
import c from "../../assets/c.jpg";
const Contact = () => {
  return (
    <div className="contact-container">
      <div className="content-container">
        <div className="left-ab">
          <img src={c} alt="" />
        </div>
        <div className="right-ab">
          <div className="about">
            <h2>GET IN TOUCH</h2>
            <p className="one">
              Thank you for visiting my portfolio! If you have any questions,
              project ideas, want to collaborate, or just want to say hello, I’d
              love to hear from you. Feel free to reach out using the form
              below, and I’ll get back to you as soon as possible. Looking
              forward to hearing from you!
            </p>
            <p className="personal">
              Email:{" "}
              <a href="mailto:khandelwalnikhil006@gmail.com" className="mail">
                {" "}
                khandelwalnikhil006@gmail.com
              </a>
            </p>
            <div className="form">
              <div className="firstname">
                <label htmlFor="">
                  First Name *
                  <input type="text" name="" id="" />
                </label>
              </div>
              <div className="firstname">
                <label htmlFor="">
                  Last Name *
                  <input type="text"  name="" id="" />
                </label>
              </div>
              <div className="firstname">
                <label htmlFor="">
                  Email *
                  <input type="email"  name="" id="" />
                </label>
              </div>
              <div className="firstname">
                <label htmlFor="">
                  Subject *
                  <input type="text"  name="" id="" />
                </label>
              </div>
              <div className="firstname">
                <label htmlFor="">
                  Last Name *
                  <textarea name="" id=""></textarea>
                </label>
              </div>
              <div className="firstname button-sub">
                <button className="hh">Submit</button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
