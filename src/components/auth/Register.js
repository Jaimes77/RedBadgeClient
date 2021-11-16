import React, { Component } from "react";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick = () => {
    this.props.history.push("/journal");
  };

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch(`http://localhost:3000/user/create`, {
      method: "POST",
      body: JSON.stringify({
        user: {
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          username: this.state.username,
          email: this.state.email,
          passwordhash: this.state.password,
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => {
        response.json().then((response) => {
          console.log("response", response);
          this.props.setToken(response.sessionToken);
          this.handleClick();
        });
      })
      .catch((error) => {
        console.log("registration error", error);
      });
  }
  render() {
    return (
      <>
        <Modal>
          <Form onSubmit={this.handleSubmit}>
            <Input
              type="text"
              name="firstname"
              placeholder="First Name"
              value={this.state.firstname}
              onChange={this.handleChange}
              required
            />

            <Input
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={this.state.lastname}
              onChange={this.handleChange}
              required
            />

            <Input
              type="text"
              name="username"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleChange}
              required
            />

            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />

            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
            <Button type="submit">Register</Button>
          </Form>
          <Link to="/login" style={linkStyle}>
            Already have an account?
          </Link>
        </Modal>
      </>
    );
  }
}

const Form = styled.form`
  width: 280px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "black",
};

const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 12px;
  &::placeholder {
    // color: rgba(2, 2, 2, 1);
  }
  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(241, 196, 15);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 11px 40%;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(241, 196, 15);
  background: linear-gradient(
    58deg,
    rgba(241, 196, 15, 1) 20%,
    rgba(243, 172, 18, 1) 100%
  );
  &:hover {
    filter: brightness(1.03);
  }
`;

const Modal = styled.div`
  position: fixed;
  width: 50%;
  padding: 24px;
  left: 25%;
  top: 25%;
  background: white;
  z-index: 1;
`;

// const ModalBackground = styled.div`
//   position: fixed;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   width: 100vw;
//   height: 100vh;
//   background: rgba(0, 0, 0, 0.5);
// `;

export default withRouter(Register);
