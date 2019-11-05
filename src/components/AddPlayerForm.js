import React, { Component } from "react";

class AddPlayerForm extends Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
    this.handleValueChange = this.handleValueChange.bind(this);
  }

  handleValueChange = e => {
    this.setState({ value: e.target.value });
  };

  // event handler to allow users to submit player name
  handleSubmit = e => {
    e.preventDefault();
    this.props.addPlayer(this.state.value);
    this.setState({ value: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleValueChange}
          placeholder="Please enter a player's name"
        />

        <input type="submit" value="Add Player" />
      </form>
    );
  }
}

export default AddPlayerForm;
