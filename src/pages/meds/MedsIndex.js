import React, { Component } from "react";
import MedsCreate from "./MedsCreate";
import MedsDelete from "./MedsDelete";
import MedsEdit from "./MedsEdit";

export default class MedsIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>Hello from the Meds Page</h1>
        <MedsCreate updateToken={this.updateToken} />
        <MedsEdit />
        <MedsDelete />
      </div>
    );
  }
}
