import React from "react";
import Pubitems from "./pubProjects.js";
import Privateitems from "./privateProjects.js";
import Footer from "./footer.js";
import "../css/interactive.css";

const projects = () => {
  return (
    <React.Fragment>
      <div className="main">
        <div className="page-intro">
          <p>
            Here are interactive projects I've published.
            {String.fromCodePoint("0x1F4FD")}
            {String.fromCodePoint("0x1F64C")}
          </p>
        </div>

        <Pubitems></Pubitems>
        <div className="divider interactive">
          <p>
            Here are some personal projects I've been working on.{" "}
            {String.fromCodePoint("0x1F4BB")} {String.fromCodePoint("0x1F3A7")}
          </p>
        </div>
        <Privateitems></Privateitems>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default projects;
