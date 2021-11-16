import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
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
  }

  setSessionState = (token) => {
    localStorage.setItem("token", token);
    this.setState({ sessionToken: token });
  };

  logout = () => {
    this.setState({
      sessionToken: "",
    });
    localStorage.clear();
  };

  // protectedViews = () => {
  //   if (this.state.sessionToken === localStorage.getItem("token")) {
  //     return (
  //       <Switch>
  //         <Route path="/" exact>
  //           <JournalIndex sessionToken={this.state.sessionToken} />
  //         </Route>
  //       </Switch>
  //     );
  //   } else {
  //     return (
  //       <Route path="/auth">
  //         <Auth setToken={this.setSessionState} />
  //       </Route>
  //     );
  //   }
  // };

  render() {
    // if (this.state.sessionToken) return null;

    return (
      <Container>
        <Router>
          <Switch>
            {/* {this.protectedViews()} */}
            <Route exact path="/">
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
