import React from "react";
import Images538 from "./images538.js";
import ImagesBI from "./imagesBI.js";
import Footer from "./footer.js";
import "../css/graphics.css";

// Import all images in image folders
function importAll(r) {
  return r.keys().map(r);
}

// https://webpack.js.org/guides/dependency-management/#require-context
// https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack#_=_
const images538 = importAll(
  require.context("../image/images538", false, /.png$/)
);
const row = Math.ceil(images538.length / 3);
const imagesBI = importAll(
  require.context("../image/imagesBI", false, /\.(png|jpg)$/)
);

const ImageGrid = () => {
  return (
    <React.Fragment>
      <div className="main">
        <div className="page-intro">
          <p className="title">
            I was an Associate Visual Journalist at FiveThirtyEight. Before
            that, I was a Graphics Fellow at Business Insider.
          </p>
          <p>
            Here is my work at FiveThirtyEight; Focused on creating
            visualizations that explain the numbers behind polls {` `}
            <span className="emoji" role="img" aria-label="poll">
              {String.fromCodePoint("0x1F4C8")}
            </span>
            <span className="emoji" role="img" aria-label="poll">
              {String.fromCodePoint("0x1F4CA")}
            </span>
            {` `} and sports {` `}
            <span className="emoji" role="img" aria-label="poll">
              {String.fromCodePoint("0x1F3C8")}
            </span>
            <span className="emoji" role="img" aria-label="poll">
              {String.fromCodePoint("0x1F3C0")}
            </span>
            .
          </p>
        </div>

        <div className="img-grid">
          <Images538 images538={images538} row={row} />
        </div>
        <div className="page-intro divider">
          <p>
            Here is my work at Business Insider; Created visual elements and
            story arts to deliver meaningful insights to readers.
          </p>
        </div>
        <div className="img-grid">
          <ImagesBI imagesBI={imagesBI} />
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default ImageGrid;
