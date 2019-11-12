import React from "react";
import PropTypes from "prop-types";

function Counter({ score, index, changeScore }) {
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
Counter.protoTypes = {
  score: PropTypes.number,
  index: PropTypes.number,
  changeScore: PropTypes.func
};
export default Counter;
