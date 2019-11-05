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

  render() {
    console.log(this.state.value);
    return (
      <form>
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
