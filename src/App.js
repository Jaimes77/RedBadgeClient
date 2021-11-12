import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Auth from "./components/auth/Auth";
import JournalIndex from "./pages/journal/JournalIndex";
import CalendarIndex from "./pages/calendar/CalendarIndex";
import MedsIndex from "./pages/meds/MedsIndex";

export default class App extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");

    this.state = {
      sessionToken: token || "",
    };
  }

  // componentDidMount() {
  //   if (token && !this.state.sessionToken) {
  //     this.setState({ sessionToken: token });
  //   }
  // }

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
            <Route exact path={"/journal"}>
              <JournalIndex token={this.state.sessionToken} />
            </Route>
            <Route exact path={"/meds"}>
              <MedsIndex token={this.sessionToken} />
            </Route>
            <Route exact path={"/calendar"}>
              <CalendarIndex token={this.sessionToken} />
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
