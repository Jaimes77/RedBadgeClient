import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import AuthNavbar from "./components/auth/AuthNavbar";
import Auth from "./components/auth/Auth";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import JournalNavbar from "./pages/journal/JournalNavbar";
import JournalIndex from "./pages/journal/JournalIndex";
import CalendarNavbar from "./pages/calendar/CalendarNavbar";
import CalendarIndex from "./pages/calendar/CalendarIndex";
import MedsNavbar from "./pages/meds/MedsNavbar";
import MedsIndex from "./pages/meds/MedsIndex";

export default class App extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");

    this.state = {
      sessionToken: token || "",
    };

    // this.logout = this.logout.bind(this);
  }

  setSessionState = (token) => {
    localStorage.setItem("token", token);
    this.setState({ sessionToken: token });
  };

  render() {
    return (
      <Container>
        <Router>
          <Switch>
            <Route exact path="/" component={AuthNavbar} />
            <Route exact path="/auth">
              <Auth setToken={this.setSessionState} />
            </Route>
            <Route exact path="/register">
              <Register setToken={this.setSessionState} />
            </Route>
            <Route exact path="/login">
              <Login setToken={this.setSessionState} />
            </Route>
            <Route exact path={"/journal"}>
              <JournalNavbar />
              <JournalIndex token={this.state.sessionToken} />
            </Route>
            <Route exact path={"/meds"}>
              <MedsNavbar />
              <MedsIndex token={this.state.sessionToken} />
            </Route>
            <Route exact path={"/calendar"}>
              <CalendarNavbar />
              <CalendarIndex token={this.state.sessionToken} />
            </Route>
          </Switch>
        </Router>
      </Container>
    );
  }
}

const Container = styled.div`
  background: #007090;
  height: 100vh;
`;
