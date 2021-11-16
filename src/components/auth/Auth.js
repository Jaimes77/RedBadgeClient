import React, { Component } from "react";
import styled from "styled-components";
import Register from "./Register";
import Login from "./Login";

export default class Auth extends Component {
  render() {
    return (
      <>
        <Nav>
          <Logo href="#">
            i <span>Care</span>
          </Logo>
        </Nav>

        <Container>
          <CardBody>
            <Login setToken={this.props.setToken} />
          </CardBody>
          <CardBody>
            <Register setToken={this.props.setToken} />
          </CardBody>
        </Container>
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

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const CardBody = styled.div``;
