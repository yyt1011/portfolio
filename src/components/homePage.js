import React from "react";
import Footer from "./footer.js";
import "../css/home.css";
import profileImg from "../image/comp/profile.jpg";

const home = () => {
  return (
    <React.Fragment>
      <div className="main">
        <div className="home_intro">
          <div clasNames="intro_text_wrap">
            <p clasNames="intro_text">
              I'm <span className="bold">Yutong Yuan </span>{" "}
            </p>
            <p>
              I'm a visual journalist. <br />I work with data, make charts and
              love coding.
            </p>
            <p>
              You can find my work {`at `}
              <a
                href="https://fivethirtyeight.com/contributors/yutong-yuan/"
                target="_blank"
                rel="noopener noreferrer"
              >
                FiveThirtyEight
              </a>
              {` and `}
              <a
                href="https://www.businessinsider.com/author/yutong-yuan"
                target="_blank"
                rel="noopener noreferrer"
              >
                Business Insider
              </a>
              .
            </p>
          </div>
          <div clasNames="intro_img_wrap">
            <img className="intro_img" src={profileImg} alt="profile" />
          </div>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default home;
