import React, { Component } from "react";
import styled from "styled-components";

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
      <Form>
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
        <br />

        <Button type="submit" onClick={this.handleSubmit}>
          Post
        </Button>
      </Form>
    );
  }
}

const Form = styled.div`
  width: 13vw;
  margin: 10px auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  input {
    display:flex;
    justify-content: center;
    width: 25vh;
    height: 42px;
    padding: 0px 10px;
    font-size: 12px;
    color: black;

  
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  margin-left: 50px;
  width: 5vw;
  padding: 5px 50px;
  font-size: 15px;
  font-weight: 750;
  border: none;
  border-radius: 50px 50px 50px 50px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(241, 196, 15);
  background: linear-gradient(
    58deg,
    rgba(241, 196, 15, 1) 20%,
    rgba(243, 172, 18, 1) 100%
  );
  &:hover {
    filter: brightness(3);
  }
`;
