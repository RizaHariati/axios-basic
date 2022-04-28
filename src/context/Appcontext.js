import React, { Component, createContext } from "react";

const AppContext = createContext();

export default class AppProvider extends Component {
  state = {
    userName: "",
    isAuthenticated: "",
  };
  render() {
    return <div></div>;
  }
}
