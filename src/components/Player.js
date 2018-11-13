import React, { PureComponent } from "react";
import Counter from "./Counter";
import PropTypes from "prop-types";
import Icon from "./Icon";
import { Consumer } from "./Context";

class Player extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    score: PropTypes.number,
    id: PropTypes.number,
    index: PropTypes.number
  };

  render() {
    return (
      <Consumer>
        {context => {
          const { name, id, score, index } = this.props;
          return (
            <div className="player">
              <span className="player-name">
                <button
                  className="remove-player"
                  onClick={() => context.actions.removePlayer(id)}
                >
                  ✖
                </button>
                <Icon isHighScore={this.props.isHighestScore} />
                {name}
              </span>

              <Counter score={score} index={index} />
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Player;
