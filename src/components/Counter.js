import React from "react";
import PropTypes from "prop-types";
import { Consumer } from "./Context";

const Counter = ({ index, score, changeScore }) => {
  // incrementScore = () => {
  //   this.setState(prevState => ({
  //     score: prevState.score + 1
  //   }));
  // };

  // decrementScore = () => {
  //   this.setState(prevState => ({
  //     score: prevState.score - 1
  //   }));
  // };

  return (
    <Consumer>
      {context => (
        <div className="counter">
          <button
            className="counter-action decrement"
            onClick={() => context.actions.changeScore(index, -1)}
          >
            {" "}
            -{" "}
          </button>
          <span className="counter-score">{score}</span>
          <button
            className="counter-action increment"
            onClick={() => context.actions.changeScore(index, 1)}
          >
            {" "}
            +{" "}
          </button>
        </div>
      )}
    </Consumer>
  );
};

Counter.propTypes = {
  index: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired
};

export default Counter;
