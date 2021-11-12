import React, { Component } from "react";
import Register from "./Register";
import Login from "./Login";
import NavbarAuth from "./NavbarAuth";

export default class Auth extends Component {
  render() {
    return (
      <div>
        <NavbarAuth />
        <Register setToken={this.props.setToken} />
        <Login setToken={this.props.setToken} />
      </div>
    );
  }
}
