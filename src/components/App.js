import React, { Component } from "react";
import Header from "./Header";
import { Provider } from "./Context";
import AddPlayerForm from "./AddPlayerForm";
import PlayerList from "./PlayerList";

class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        score: 0,
        id: 1
      },
      {
        name: "Treasure",
        score: 0,
        id: 2
      },
      {
        name: "Ashley",
        score: 0,
        id: 3
      },
      {
        name: "James",
        score: 0,
        id: 4
      }
    ]
  };

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

  getHighestScore = () => {
    const score = this.state.players.map(p => p.score);
    const highestScore = Math.max(...score);
    if (highestScore) {
      return highestScore;
    }
    return null;
  };

  render() {
    const highScore = this.getHighestScore();
    return (
      <Provider
        value={{
          players: this.state.players,
          actions: {
            changeScore: this.handleScoreChange,
            removePlayer: this.handleRemovePlayer,
            addPlayer: this.handleAddPlayer
          }
        }}
      >
        <div className="scoreboard">
          <Header />
          {/* Players list */}
          <PlayerList highScore={highScore} />
          <AddPlayerForm />
        </div>
      </Provider>
    );
  }
}

export default App;
