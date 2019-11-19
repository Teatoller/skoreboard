import React, { Component } from "react";
import { Provider } from "./Context";
import Header from "./Header";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
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
  }
  // player id counter
  prevPlayerId = 4;

  handleScoreChange = (index, delta) => {
    this.setState(prevState => ({
      score: (prevState.players[index].score += delta)
    }));
  };

  handleAddPlayer = name => {
    this.setState(prevState => {
      return {
        players: [
          ...prevState.players,
          {
            name: name,
            score: 0,
            id: (this.prevPlayerId += 1)
          }
        ]
      };
    });
  };

  handleRemovePlayer = id => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  };

  getHighScore = () => {
    const scores = this.state.players.map(p => p.score);
    const highScore = Math.max(...scores);
    if (highScore) {
      return highScore;
    }
    return null;
  };

  render() {
    const highScore = this.getHighScore();
    return (
      <Provider
        value={{
          players: this.state.players,
          actions: {
            changeScore: this.handleScoreChange,
            removePlayer: this.handleRemovePlayer
          }
        }}
      >
        <div className="scoreboard">
          <Header title="Scoreboard" players={this.state.players} />

          {/* Players list */}
          {this.state.players.map((player, index) => (
            <Player
              name={player.name}
              id={player.id}
              score={player.score}
              key={player.id.toString()}
              index={index}
              isHighScore={highScore === player.score}
            />
          ))}

          <AddPlayerForm addPlayer={this.handleAddPlayer} />
        </div>
      </Provider>
    );
  }
}

export default App;
