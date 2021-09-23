import React from "react";
import Score from "./score";

export default function Student(props) {
  return (
    <div>
      <div className="name">Name: {props.student.name}</div>
     <div className="bio">Bio: {props.student.bio}</div>
      <div className="Score__list">
        Scores:{" "}
        {props.student.scores.map((scores, index) => (
          <Score score={scores} key={index} />
        ))}
      </div>
    </div>
  );
}
