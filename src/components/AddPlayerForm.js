import React, { Component } from "react";
import { Consumer } from "./Context";

class AddPlayerForm extends Component {
  // state = {
  //   value: ""
  // };

  playerInput = React.createRef();

  // handleValueChange = e => {
  //   this.setState({ value: e.target.value });
  // };

  render() {
    return (
      <Consumer>
        {context => {
          const handleSubmit = e => {
            e.preventDefault();
            context.actions.addPlayer(this.playerInput.current.value);
            // this.setState({
            //   value: ""
            // });
            e.currentTarget.reset();
          };
          return (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                ref={this.playerInput}
                // value={this.state.value}
                // onChange={this.handleValueChange}
                placeholder="Enter a player's name"
              />
              <input type="submit" value="Add Player" />
            </form>
          );
        }}
      </Consumer>
    );
  }
}

export default AddPlayerForm;
