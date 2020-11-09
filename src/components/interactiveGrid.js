import React from "react";

const interactiveGrid = ({
  firstProjectLink,
  firstProjectTitle,
  secondProjectLink,
  secondProjectTitle,
  firstImageLink,
  firstImageAlt,
  firstImageStyle,
  secondImageLink,
  secondImageAlt,
  secondImageStyle,
  thirdProjectLink,
  thirdProjectTitle,
  thirdImageLink,
  thirdImageAlt,
  thirdImageStyle,
}) => {
  return (
    <div className="interactive-wrap">
      <a
        className="title"
        href={firstProjectLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        {firstProjectTitle}
      </a>
      <a
        className="title"
        href={secondProjectLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        {secondProjectTitle}
      </a>
      <div className="img-wrap">
        <img src={firstImageLink} alt={firstImageAlt} style={firstImageStyle} />
      </div>
      <div className="img-wrap">
        <img
          src={secondImageLink}
          alt={secondImageAlt}
          style={secondImageStyle}
        />
      </div>
      <a
        className="title"
        href={thirdProjectLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        {thirdProjectTitle}
      </a>
      <a> </a>
      <div className="img-wrap">
        <img src={thirdImageLink} alt={thirdImageAlt} style={thirdImageStyle} />
      </div>
      <div className="img-wrap"></div>
    </div>
  );
};

export default interactiveGrid;
