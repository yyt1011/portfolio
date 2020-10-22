import React from "react";
import InteractiveGrid from "./interactiveGrid";
import Footer from "./footer.js";

const personal = () => {
  return (
    <React.Fragment>
      <div className="main">
        <InteractiveGrid
          firstProjectLink={`https://yyt1011.github.io/yutong.github.io/index.html`}
          firstProjectTitle={`Where are companies that are hiring foreign employees?`}
          secondProjectLink={`https://yyt1011.github.io/yutong.github.io/index.html`}
          secondProjectTitle={`A sharp decline in refugee accepted by the US since 2017`}
          firstImageLink={require("../image/comp/PERM_Immigration.gif")}
          firstImageAlt={`Immgration`}
          firstImageStyle={{ width: "98%" }}
          secondImageLink={require("../image/comp/refugee.gif")}
          secondImageAlt={`refugee`}
          secondImageStyle={{ width: "90%" }}
        />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default personal;
