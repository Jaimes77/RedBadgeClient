import React, { Component } from "react";
import Register from "./Register";
import Login from "./Login";

export default class Auth extends Component {
  render() {
    return (
      <>
        <Login setToken={this.props.setToken} />
        <Register setToken={this.props.setToken} />
      </>
    );
  }
}
