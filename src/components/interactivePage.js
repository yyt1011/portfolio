import React from "react";
import InteractiveGrid from "./interactiveGrid";
import sanders from "../image/comp/sanders_quiz.gif";
import beer from "../image/comp/beer_quiz.gif";
import "../css/interactive.css";

const interactive = () => {
  return (
    <React.Fragment>
      <div className="main">
        <InteractiveGrid
          firstProjectLink={`https://projects.fivethirtyeight.com/sanders-poll-quiz/`}
          firstProjectTitle={`Can You Guess How Popular Bernie Sanders's Policies Are?`}
          secondProjectLink={`https://www.businessinsider.com/quiz-to-find-out-what-type-of-beer-to-drink-2019-4`}
          secondProjectTitle={`Take This Quiz To Find Out What Beer You Should Try.`}
          firstImageLink={sanders}
          firstImageAlt={`How popular is Sanders' policies`}
          firstImageStyle={{ width: "90%" }}
          secondImageLink={beer}
          secondImageAlt={`Choose a beer that fits you`}
          secondImageStyle={{ width: "100%" }}
        />
      </div>
    </React.Fragment>
  );
};

export default interactive;
