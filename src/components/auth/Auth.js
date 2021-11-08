import React, { Component } from "react";
import Register from "./Register";
import Login from "./Login";

export default class Auth extends Component {
  render() {
    return (
      <div>
        <Register updateToken={this.props.updateToken} />
        <Login updateToken={this.props.updateToken} />
      </div>
    );
  }
}
