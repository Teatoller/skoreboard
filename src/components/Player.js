import React, { PureComponent } from "react";
import { Consumer } from "./Context";
import PropTypes from "prop-types";
import Counter from "./Counter";
import Icon from "./Icon";

class Player extends PureComponent {
  constructor() {
    super();
    this.state = {};
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    index: PropTypes.number,
    id: PropTypes.number,
    isHighScore: PropTypes.bool
  };

  render() {
    const { name, score, index, id } = this.props;
    return (
      <div className="player">
        <Consumer>
          {context => (
            <span className="player-name">
              <button
                className="remove-player"
                onClick={() => context.actions.removePlayer(id)}
              >
                ✖
              </button>
              <Icon isHighScore={this.props.isHighScore} />
              {name}
            </span>
          )}
        </Consumer>

        <Counter score={score} index={index} />
      </div>
    );
  }
}

export default Player;
