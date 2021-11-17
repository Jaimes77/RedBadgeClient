import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import caregiver from "./caregiver.png";

export default function AuthNavbar() {
  return (
    <Container>
      <Nav>
        <Logo href="#">
          i <span>Care</span>
        </Logo>

        <Menu>
          <Link to="/login" style={linkStyle}>
            Login
          </Link>
          <Link to="/register" style={linkStyle}>
            Register
          </Link>
        </Menu>
      </Nav>

      <Split>
        {/* <SplitTitle>Caregiver</SplitTitle> */}
        <div>
          <SplitImg src={caregiver} alt="" />
        </div>
        <h1>
          noun|\'ker-gi-ver\ 1: one who gives the tremendous gift of love and
          aid to another <br />
          2: symbol of strenght and dedication
        </h1>
      </Split>
    </Container>
  );
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

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "black",
};

const Menu = styled.div``;

const Container = styled.div`
  max-width: 90vw,
  margin: 0
`;

const Split = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 80px 10px 50px 150px;
  align-items: center;
  grid-gap: 20px;

   @media (max-width: 786px) {
    grid-template-columns: 1fr;
      }
  }
`;

const SplitImg = styled.img`
  height: 60%;
  width: 60%;
`;
