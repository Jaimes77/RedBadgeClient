import React, { Component } from "react";

export default class CalendarCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      event: "",
      date: "",
      time: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch(`http://localhost:3000/calendar/create`, {
      method: "POST",
      body: JSON.stringify({
        calendar: this.state,
      }),

      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    })
      .then((response) => {
        response.json().then((response) => {
          this.props.updateScheduleArray();
          this.setState({
            event: "",
            date: "",
            time: "",
          });
          console.log("response", response);
        });
      })

      .catch((error) => {
        console.log("Entry Error", error);
      });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="event"
            placeholder="Event"
            value={this.state.event}
            onChange={this.handleChange}
            required
          />

          <input
            type="text"
            name="date"
            placeholder="Date"
            value={this.state.date}
            onChange={this.handleChange}
            required
          />

          <input
            type="text"
            name="time"
            placeholder="Time"
            value={this.state.time}
            onChange={this.handleChange}
            required
          />

          <button type="submit">Post</button>
        </form>
      </div>
    );
  }
}
