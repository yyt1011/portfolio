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
          <p>I was an associate visual journalist at FiveThirtyEight.</p>
          <p>
            There I enjoyed analyzing data, creating charts, working with
            talented designers and writers and learned a lot about American
            politics and sports.
          </p>
        </div>

        <div className="img-grid">
          <Images538 images538={images538} row={row} />
        </div>
        <div className="page-intro divider">
          <p>
            Before joining FiveThirtyEight, I was a graphic fellow at Business
            Insider.
            <br />
            There I made charts and story arts to bring more insights to
            readers.
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
