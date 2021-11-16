import React, { Component } from "react";
import styled from "styled-components";

export default class CalendarEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      event: "",
      date: "",
      time: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      id: this.props.id,
      event: this.props.appt.event,
      date: this.props.appt.date,
      time: this.props.appt.time,
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.update(event, this.state);
  };

  render() {
    const { modalOpen } = this.props;
    const { modalClose } = this.props;

    return (
      <>
        {modalOpen ? (
          <ModalBackground>
            <Modal>
              <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  name="event"
                  placeholder="Appointment"
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

                <button type="submit">Edit</button>
                <button type="submit" onClick={modalClose}>
                  Close
                </button>
              </form>
            </Modal>
          </ModalBackground>
        ) : null}
      </>
    );
  }
}

const Modal = styled.div`
  position: fixed;
  width: 50%;
  padding: 24px;
  left: 25%;
  top: 25%;
  background: white;
  z-index: 1;
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
`;
