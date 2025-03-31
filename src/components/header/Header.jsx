import React from "react";
import "./header.css";
import wa from "../../assets/hm-1.jpg";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/projects");
  };
  return (
    <div className="header-container">
      <section className="image">
        <div class="lines">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <img className="img-h" src={wa} alt="" />
        <div className="text-box">
          <span className="overlay-text">Engineering Innovation with Code</span>
          <button onClick={handleClick} className="view">
            View More
          </button>
        </div>
      </section>
    </div>
  );
};

export default Header;
