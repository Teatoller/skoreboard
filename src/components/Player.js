import React, { PureComponent } from "react";
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
    changeScore: PropTypes.func,
    removePlayer: PropTypes.func,
    id: PropTypes.number,
    isHighScore: PropTypes.bool
  };

  render() {
    const { name, score, index, changeScore, removePlayer, id } = this.props;
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>
            ✖
          </button>
          <Icon isHighScore={this.props.isHighScore} />
          {name}
        </span>

        <Counter score={score} index={index} changeScore={changeScore} />
      </div>
    );
  }
}

export default Player;
