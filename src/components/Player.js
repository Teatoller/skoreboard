import React, { PureComponent } from "react";
import Counter from "./Counter";

class Player extends PureComponent {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { name, score, index, changeScore, removePlayer, id } = this.props;
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>
            ✖
          </button>
          {name}
        </span>

        <Counter score={score} index={index} changeScore={changeScore} />
      </div>
    );
  }
}

export default Player;
