import React, { Component } from "react";
import Header from "./Header";
import Player from "./Player";

class App extends Component {
  state = {
    players: [
      {
        name: "Steven",
        score: 0,
        id: 1
      },
      {
        name: "Denzel",
        score: 0,
        id: 2
      },
      {
        name: "Nigel",
        score: 0,
        id: 3
      },
      {
        name: "Fay",
        score: 0,
        id: 4
      }
    ]
  };

  handleScoreChange = (index, delta) => {
    this.setState(prevState => ({
      score: (prevState.players[index].score += delta)
    }));
    // console.log("index:" + index , "delta:" + delta);
  };

  handleRemovePlayer = id => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  };

  render() {
    return (
      <div className="scoreboard">
        <Header
          title="Scoreboard"
          // totalPlayers={this.state.players.length}
          players={this.state.players}
        />

        {/* Players list */}
        {this.state.players.map((player, index) => (
          <Player
            name={player.name}
            id={player.id}
            score={player.score}
            key={player.id.toString()}
            index={index}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}
          />
        ))}
      </div>
    );
  }
}

export default App;
