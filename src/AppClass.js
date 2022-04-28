import React, { Component } from "react";

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      nama: this.nama,
    };
  }

  render() {
    return (
      <div>
        <p>I'm Class</p>
        <button onClick={this.setState({ conter: this.state.counter + 1 })}>
          click me
        </button>
      </div>
    );
  }
}
