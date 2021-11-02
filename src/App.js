import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Journal from "./pages/Journal";
import Calendar from "./pages/Calendar";
import Meds from "./pages/Meds";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route exact path={"/"} component={Register} />
            <Route exact path={"/login"} component={Login} />
            <Route exact path={"/journal"} component={Journal} />
            <Route exact path={"/meds"} component={Meds} />
            <Route exact path={"/calendar"} component={Calendar} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
