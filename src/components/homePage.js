import React from "react";
import Footer from "./footer.js";
import "../css/home.css";
import profileImg from "../image/comp/profile.jpg";

const home = () => {
  return (
    <React.Fragment>
      <div className="main">
        <div className="home_intro">
          <div className="intro_text_wrap">
            <p className="intro_text">
              I'm <span className="bold">Yutong Yuan </span>{" "}
            </p>
            <p>
              I'm a visual journalist. <br />I work with data{" "}
              <span className="emoji" role="img" aria-label="poll">
                {String.fromCodePoint("0x2714")}
              </span>
              , make charts{" "}
              <span className="emoji" role="img" aria-label="poll">
                {String.fromCodePoint("0x1F4CA")}
              </span>{" "}
              <br />
              and love coding{" "}
              <span className="emoji" role="img" aria-label="poll">
                {String.fromCodePoint("0x1F4BB")}
              </span>
              .
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
          <div className="intro_img_wrap">
            <img className="intro_img" src={profileImg} alt="profile" />
          </div>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default home;
