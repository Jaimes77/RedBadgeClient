import React, { Component } from "react";

export default class JournalCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      title: "",
      entry: "",
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

    fetch(`http://localhost:3000/journal/create`, {
      method: "POST",
      body: JSON.stringify({
        journal: this.state,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    })
      .then((response) => {
        response.json().then((logEntries) => {
          this.props.updateEntriesArray();
          this.setState({
            date: "",
            title: "",
            entry: "",
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
            name="date"
            placeholder="Date"
            value={this.state.date}
            onChange={this.handleChange}
            required
          />

          <input
            type="text"
            name="title"
            placeholder="Title"
            value={this.state.title}
            onChange={this.handleChange}
            required
          />
          <input
            type="text"
            name="entry"
            placeholder="Entry"
            value={this.state.entry}
            onChange={this.handleChange}
            required
          />

          <button type="submit">Post</button>
        </form>
      </div>
    );
  }
}
