import React, { Component } from "react";
import CalendarCreate from "./CalendarCreate";
import CalendarDelete from "./CalendarDelete";
import CalendarEdit from "./CalendarEdit";

export default class CalendarIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>Hello from the Calendar Page</h1>
        <CalendarCreate updateToken={this.updateToken} />
        <CalendarEdit />
        <CalendarDelete />
      </div>
    );
  }
}
