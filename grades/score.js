import React from "react";

export default function Score(props) {
  return (
    <div>
      <div className="date"> Date: {props.score.date}</div>
      <div className="score">Score: {props.score.score}</div>
    </div>
  );
}
