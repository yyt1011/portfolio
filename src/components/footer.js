import React from "react";
import "../css/footer.css";

const footer = () => {
  return (
    <div className="footer">
      <div className="copyright">©Yutong Yuan 2020 </div>
      <a className="social" href="mailto:yutong1011@gmail.com">
        Email
      </a>
      <a
        className="social"
        href="https://www.linkedin.com/in/yutong-yuan-607a6ba7/"
        target="_blank"
      >
        LinkedIn
      </a>
      <a className="social" href="https://github.com/yyt1011" target="_blank">
        Github
      </a>
    </div>
  );
};

export default footer;
