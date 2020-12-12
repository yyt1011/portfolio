import React from "react";
import Item from "./items";

const personalList = [
  {
    link: "https://yyt1011.github.io/immigration/",
    title: "Where are companies that are hiring foreign employees?",
    imgLink: require("../image/comp/PERM_Immigration.gif"),
    imgAlt: "Immgration",
    imgStyle: { width: "98%" },
  },
  {
    link: "https://yyt1011.github.io/refugee/",
    title: "A sharp decline in refugee accepted by the US since 2017",
    imgLink: require("../image/comp/refugee.gif"),
    imgAlt: "Refugee",
    imgStyle: { width: "90%" },
  },
  {
    link: "https://github.com/yyt1011/election1976_2016",
    title: "How blue are blue wall states?",
    imgLink: require("../image/comp/map.gif"),
    imgAlt: "Election cartogram mape",
    imgStyle: { width: "100%" },
  },
];

function Items() {
  return personalList.map((item, i) => <Item key={i} {...item}></Item>);
}

export default Items;
