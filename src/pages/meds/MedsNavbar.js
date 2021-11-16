import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MedsNavbar = () => {
  const logout = () => {
    localStorage.clear();
  };

  return (
    <Nav>
      <Logo href="#">
        i <span>Care</span>
      </Logo>
      <Menu>
        <Link to="/journal" style={linkStyle}>
          Journal
        </Link>
        <Link to="/calendar" style={linkStyle}>
          Calendar
        </Link>
        <Link to="/" onClick={() => logout()} style={linkStyle}>
          Logout
        </Link>
      </Menu>
    </Nav>
  );
};

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: white;
`;

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "black",
};

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

export default MedsNavbar;
