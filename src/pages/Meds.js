import React, { Component } from "react";

export default class Meds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      medname: "",
      dose: "",
      frequency: "",
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
    const token = localStorage.getItem("token");

    fetch(`http://localhost:3000/meds/create`, {
      method: "POST",
      body: JSON.stringify({
        meds: {
          medname: this.state.medname,
          dose: this.state.dose,
          frequency: this.state.frequency,
        },
      }),

      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: token,
      }),
    })
      .then((response) => {
        response.json().then((response) => {
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
            name="medname"
            placeholder="Name of Medicine"
            value={this.state.medname}
            onChange={this.handleChange}
            required
          />

          <input
            type="text"
            name="dose"
            placeholder="Dose"
            value={this.state.dose}
            onChange={this.handleChange}
            required
          />

          <input
            type="text"
            name="frequency"
            placeholder="Frequency"
            value={this.state.frequency}
            onChange={this.handleChange}
            required
          />
          <button type="submit">Post</button>
        </form>
      </div>
    );
  }
}
