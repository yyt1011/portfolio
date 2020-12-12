import React from "react";

function Item(props) {
  return (
    <a
      className="projectwrap"
      href={props.link}
      rel="noopener noreferrer"
      target="_blank"
    >
      <p className="title">{props.title}</p>
      <img src={props.imgLink} alt={props.imgAlt} style={props.imgStyle} />
    </a>
  );
}

export default Item;
