import React from "react";
import "./Header.css";
import wa from "../../assets/hm-1.jpg";
const Header = () => {

  // const handleClick = () => {
  //   const resumeDownload =
  //     "https://drive.google.com/uc?export=download&id=1ZOp0y5s71JSvynwfo8FR39X5YvgHUwnO";
  //   window.location.href = resumeDownload;
  // };
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
        <img className="img-h" src={wa} alt="Home-image" />
        <div className="text-box">
          <span className="overlay-text">Engineering Innovation with Code</span>
          {/* <button onClick={handleClick} className="view">
            Download My Resume{" "}
          </button> */}
<a href="https://drive.google.com/uc?export=download&id=1lfLT7QXhH7sTfCQ6r0jWIyG_q5oWL2gY" download>
  <button  className="view">Download My Resume</button>
</a>
        </div>
      </section>
    </div>
  );
};

export default Header;
