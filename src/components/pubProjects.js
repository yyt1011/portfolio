import React from "react";
import Item from "./items";

const publishedList = [
  {
    link: "https://projects.fivethirtyeight.com/sanders-poll-quiz/",
    title: "Can You Guess How Popular Bernie Sanders's Policies Are?",
    imgLink: require("../image/comp/sanders_quiz.gif"),
    imgAlt: "How popular are Sanders' policies",
    imgStyle: { width: "95%" },
  },
  {
    link:
      "https://www.businessinsider.com/quiz-to-find-out-what-type-of-beer-to-drink-2019-4`",
    title: "Take This Quiz To Find Out What Beer You Should Try.",
    imgLink: require("../image/comp/beer_quiz.gif"),
    imgAlt: "Choose a beer that fits you",
    imgStyle: { width: "95%" },
  },
];

function Items() {
  return publishedList.map((item, i) => <Item key={i} {...item}></Item>);
}

export default Items;
