import React from "react";

const imagesBI = ({ imagesBI }) => {
  return (
    <React.Fragment>
      <div className="column">
        {imagesBI.slice(0, 8).map((image, i) => (
          <img src={image} key={`bicharts${i}`} alt="charts"></img>
        ))}
      </div>
      <div className="column">
        {imagesBI.slice(8, 17).map((image, i) => (
          <img src={image} key={`bicharts${i}`} alt="charts"></img>
        ))}
      </div>
      <div className="column">
        {imagesBI.slice(17).map((image, i) => (
          <img src={image} key={`bicharts${i}`} alt="charts"></img>
        ))}
      </div>
    </React.Fragment>
  );
};

export default imagesBI;
