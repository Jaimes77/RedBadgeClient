import React, { Component } from "react";
import styled from "styled-components";

export default class MedsEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      medname: "",
      dose: "",
      frequency: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      id: this.props.med.id,
      medname: this.props.med.medname,
      dose: this.props.med.dose,
      frequency: this.props.med.frequency,
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
              <form
                onSubmit={this.handleSubmit}
                style={{
                  width: "44vw",
                  height: "40vh",
                  paddingRight: "50px",
                  paddingLeft: "50px",
                  backgroundColor: "white",
                }}
              >
                <input
                  style={{
                    border: "1px black solid",
                    width: "10vw",
                    height: "5vh",
                    margin: "55px 0px",
                  }}
                  type="text"
                  name="medname"
                  placeholder="Medicine"
                  value={this.state.medname}
                  onChange={this.handleChange}
                  required
                />

                <input
                  style={{ width: "10vw", height: "5vh", margin: " 0px 55px " }}
                  type="text"
                  name="dose"
                  placeholder="Dosage"
                  value={this.state.dose}
                  onChange={this.handleChange}
                  required
                />
                <input
                  style={{ width: "10vw", height: "5vh", margin: "45px" }}
                  type="text"
                  name="frequency"
                  placeholder="Frequency"
                  value={this.state.frequency}
                  onChange={this.handleChange}
                  required
                />

                <br />

                <button
                  type="submit"
                  style={{
                    margin: "50px  50px 250px 250px",
                    background: "rgb(241, 196, 15)",
                    border: "0",
                    borderRadius: "35px",
                    width: "10%",
                  }}
                >
                  Edit
                </button>
                <button
                  type="submit"
                  onClick={modalClose}
                  style={{
                    background: "rgb(241, 196, 15)",
                    border: "0",
                    borderRadius: "35px",
                    width: "10%",
                  }}
                >
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
  background: rgb(241, 196, 15);
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
