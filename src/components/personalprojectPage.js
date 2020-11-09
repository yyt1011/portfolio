import React from "react";
import InteractiveGrid from "./interactiveGrid";
import Footer from "./footer.js";

const personal = () => {
  return (
    <React.Fragment>
      <div className="main">
        <InteractiveGrid
          firstProjectLink={`https://yyt1011.github.io/immigration/`}
          firstProjectTitle={`Where are companies that are hiring foreign employees?`}
          secondProjectLink={`https://yyt1011.github.io/refugee/`}
          secondProjectTitle={`A sharp decline in refugee accepted by the US since 2017`}
          thirdProjectLink={`https://github.com/yyt1011/election1976_2016`}
          thirdProjectTitle={`How blue are blue wall states?`}
          firstImageLink={require("../image/comp/PERM_Immigration.gif")}
          firstImageAlt={`Immgration`}
          firstImageStyle={{ width: "98%" }}
          secondImageLink={require("../image/comp/refugee.gif")}
          secondImageAlt={`refugee`}
          secondImageStyle={{ width: "90%" }}
          thirdImageLink={require("../image/comp/map.gif")}
          thirdImageAlt={`election cartogram map`}
          thirdImageStyle={{ width: "100%" }}
        />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default personal;
