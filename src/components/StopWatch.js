import React, { Component } from "react";

class StopWatch extends Component {
  constructor() {
    super();
    this.state = {
      isRunning: false,
      elapsedTime: 0,
      prevTime: 0
    };
    this.handleChangeWatch = this.handleChangeWatch.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  componentDidMount() {
    this.setIntervalId = setInterval(() => this.tick(), 100);
  }

  tick = () => {
    if (this.state.isRunning) {
      const now = Date.now();
      this.setState(prevState => ({
        prevTime: now,
        elapsedTime: prevState.elapsedTime + (now - this.state.prevTime)
      }));
    }
  };

  handleChangeWatch() {
    this.setState(prevState => ({
      isRunning: !prevState.isRunning
    }));
    if (!this.state.isRunning) {
      this.setState({ prevTime: Date.now() });
    }
  }

  handleReset() {
    this.setState({
      elapsedTime: 0
    });
  }

  render() {
    let seconds = Math.floor(this.state.elapsedTime / 1000);
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">{seconds}</span>
        <button onClick={this.handleChangeWatch}>
          {this.state.isRunning ? "Stop" : "Start"}
        </button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default StopWatch;
