import React from "react";

function Counter({ score, index, changeScore}) {
  return (
    <div className="counter">
      <button
        className="counter-action decrement"
        onClick={() => {
          changeScore(index, -1);
        }}
      >
        {" "}
        -{" "}
      </button>
      <span className="counter-score">{score}</span>
      <button
        className="counter-action increment"
        onClick={() => {
          changeScore(index, +1);
        }}
      >
        {" "}
        +{" "}
      </button>
    </div>
  );
}
export default Counter;
