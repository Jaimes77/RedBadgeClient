import React, { Component } from "react";
import styled from "styled-components";
// import { Modal } from "styled-react-modal";
import { withRouter, Link } from "react-router-dom";

const initialState = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  usernameError: "",
  emailError: "",
  passwordError: "",
};

class Register extends Component {
  state = initialState;
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);
  }

  handleClick = () => {
    this.props.history.push("/journal");
  };

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  validate = () => {
    let usernameError = "";
    let emailError = "";
    let passwordError = "";

    if (!this.state.username) {
      usernameError = "username cannot be blank";
    }

    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }

    if (this.state.password.length < 6) {
      passwordError = "password must be atleast 6 characters";
    }
    if (emailError || usernameError || passwordError) {
      this.setState({ emailError, usernameError, passwordError });
      return false;
    }

    return true;
  };
  handleSubmit(event) {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      this.setState(initialState);
    }

    fetch(`$(APIURL)/user/create`, {
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
          if (isValid) {
            this.handleClick();
          } else {
            this.setState(initialState);
          }
        });
      })
      .catch((error) => {
        console.log("registration error", error);
      });
  }
  render() {
    return (
      <>
        <Nav>
          <Logo href="#">
            i <span>Care</span>
          </Logo>
          <Menu>
            <Link to="/" style={linkStyle}>
              Home
            </Link>
          </Menu>
        </Nav>

        <CardWrapper>
          <CardHeader>
            <CardHeading>Register</CardHeading>
          </CardHeader>
          <CardBody>
            <Form onSubmit={this.handleSubmit}>
              <CardFieldset>
                <CardInput
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  value={this.state.firstname}
                  onChange={this.handleChange}
                  required
                />
              </CardFieldset>

              <CardFieldset>
                <CardInput
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  value={this.state.lastname}
                  onChange={this.handleChange}
                  required
                />
              </CardFieldset>
              <CardFieldset>
                <CardInput
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.handleChange}
                  required
                />
                <div>{this.state.usernameError}</div>
              </CardFieldset>
              <CardFieldset>
                <CardInput
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  required
                />
                <div>{this.state.emailError}</div>
              </CardFieldset>
              <CardFieldset>
                <CardInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  required
                />
                <div>{this.state.passwordError}</div>
              </CardFieldset>
              <CardFieldset>
                <CardButton type="submit">Register</CardButton>
              </CardFieldset>
            </Form>
            <CardFieldset>
              <Link to="/login" style={linkStyle}>
                Already have an account?
              </Link>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
      </>
    );
  }
}

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: white;
`;

const Menu = styled.div``;

const Logo = styled.a`
  padding: 1rem 0;
  color: #007090;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;
  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`;

const CardWrapper = styled.div`
  background: white;
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 300px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;

const CardHeader = styled.header`
  background: rgb(241, 196, 15);
  padding-top: 32px;
  padding-bottom: 32px;
`;

const CardHeading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const CardBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
`;

const CardFieldset = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;

  & + & {
    margin-top: 24px;
  }

  &:nth-last-of-type(2) {
    margin-top: 32px;
  }

  &:last-of-type {
    text-align: center;
  }
`;

const CardInput = styled.input`
  padding: 7px 0;
  width: 100%;
  font-family: inherit;
  font-size: 14px;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #ddd;
  border-left: 0;
  transition: border-bottom-color 0.25s ease-in;

  &:focus {
    border-bottom-color: #e5195f;
    outline: 0;
  }
`;

const CardButton = styled.button`
  display: block;
  width: 100%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: rgb(241, 196, 15);
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "black",
};

const Form = styled.form`
  // width: 280px;
  // display: flex;
  // flex-direction: column;
  // border-radius: 5px;
  // box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;

export default withRouter(Register);
