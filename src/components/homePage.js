import React from "react";
import Footer from "./footer.js";
import "../css/home.css";
import profileImg from "../image/comp/profile.jpg";

const home = () => {
  return (
    <React.Fragment>
      <div className="main">
        <div className="home_intro">
          <img className="intro_img" src={profileImg} alt="profile photo" />
          <div class="intro_text">
            <p>
              I'm <span className="bold">Yutong Yuan </span>{" "}
            </p>
            <p>
              I'm a visual journalist. I work with data, make charts and love
              coding.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default home;
