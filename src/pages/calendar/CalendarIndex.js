import React, { Component } from "react";
import styled from "styled-components";
import CalendarCreate from "./CalendarCreate";
import CalendarAppts from "./CalendarAppts";
import CalendarEdit from "./CalendarEdit";

export default class CalendarIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      schedule: [],
      updatePressed: false,
      apptToUpdate: {},
    };

    this.handleUpdate = this.handleUpdate.bind(this);
    this.updatedAppt = this.updatedAppt.bind(this);
    this.apptDelete = this.apptDelete.bind(this);
  }

  handleUpdate(event, appt) {
    event.preventDefault();
    fetch(`$(APIURL)/calendar/${this.state.apptToUpdate.id}`, {
      method: "PUT",
      body: JSON.stringify({
        calendar: appt,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        this.setState({ updatePressed: false });
        this.fetchAppts();
      })
      .catch((error) => {
        console.log("Entry Error", error);
      });
  }

  updatedAppt = (event, appt) => {
    this.setState({
      apptToUpdate: appt,
      updatePressed: true,
    });
  };

  componentDidMount() {
    this.fetchAppts();
  }

  fetchAppts = () => {
    fetch(`http://localhost:3000/calendar/mine`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    })
      .then((res) => res.json())
      .then((calendarAppts) => {
        calendarAppts.sort((a, b) => {
          return new Date(a.createdAt) - new Date(b.createdAt);
        });

        this.setState({ schedule: calendarAppts });
      });
  };

  apptDelete = (e, calendarId) => {
    e.preventDefault();
    fetch(`http://localhost:3000/calendar/${calendarId}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        this.fetchAppts();
      });
  };

  render() {
    return (
      <Container>
        <h1>Appointments</h1>
        <hr />

        <CalendarCreate
          token={this.props.token}
          updateScheduleArray={this.fetchAppts}
        />

        <CalendarAppts
          schedule={this.state.schedule}
          delete={this.apptDelete}
          update={this.updatedAppt}
        />

        {this.state.updatePressed ? (
          <CalendarEdit
            modalOpen={this.state.updatePressed}
            update={this.handleUpdate}
            appt={this.state.apptToUpdate}
          />
        ) : null}
      </Container>
    );
  }
}

const Container = styled.div`
  h1 {
    display: flex;
    justify-content: center;
    font-size: 50px;
  }
`;
