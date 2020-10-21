import React from "react";

const images538 = ({ images538, row }) => {
  return (
    <React.Fragment>
      <div className="column">
        {images538.slice(0, row - 2).map((image, i) => {
          return <img key={`chart-${i}`} src={image} alt="chart"></img>;
        })}
      </div>
      <div className="column">
        {images538.slice(row - 2, row * 2 - 2).map((image, i) => {
          return <img key={`chart-${i}`} src={image} alt="chart"></img>;
        })}
      </div>

      <div className="column">
        {images538.slice(row * 2 - 2).map((image, i) => {
          return <img key={`chart-${i}`} src={image} alt="chart"></img>;
        })}
      </div>
    </React.Fragment>
  );
};

export default images538;
