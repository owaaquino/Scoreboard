import React from "react";
import Player from "./Player";
import { Consumer } from "./Context";

const PlayerList = props => {
  return (
    <Consumer>
      {context => (
        <React.Fragment>
          {context.players.map((player, index) => (
            <Player
              name={player.name}
              score={player.score}
              id={player.id}
              key={player.id.toString()}
              index={index}
              isHighestScore={props.highScore === player.score}
            />
          ))}
        </React.Fragment>
      )}
    </Consumer>
  );
};

export default PlayerList;
