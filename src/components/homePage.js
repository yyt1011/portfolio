import React from "react";
import Footer from "./footer.js";
import "../css/home.css";
import profileImg from "../image/comp/profile.jpg";

const home = () => {
  return (
    <React.Fragment>
      <div className="main">
        <div className="home_intro">
        <div className="intro_img_wrap">
            <img className="intro_img" src={profileImg} alt="profile" />
          </div>
          <div className="intro_text_wrap">
            <p className="intro_text">
              I'm <span className="bold">Yutong Yuan </span>{" "}
            </p>
            <p>
              I'm a Technical Writer for MenuSifu - a software company providing comprehensive POS systems to restaurants. 
            </p>
            <p>There I work with product managers to create user-centric guides and with engineering teams to maintain technical documents. Please contact me for writing samples.
            </p> 

            <p>
              Before that, I was a visual journalist.
            </p>
              <p>I like working with data{" "}
              <span className="emoji" role="img" aria-label="poll">
                {String.fromCodePoint("0x2714")}
              </span>
              , making charts{" "}
              <span className="emoji" role="img" aria-label="poll">
                {String.fromCodePoint("0x1F4CA")}
              </span>{" "}
              <br />
              and coding{" "}
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
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default home;
