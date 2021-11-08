import React, { Component } from "react";
// import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Auth from "./components/auth/Auth";
import Journal from "./pages/Journal";
import Calendar from "./pages/Calendar";
import Meds from "./pages/Meds";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sessionToken: "",
    };
  }

  updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    this.setState({ sessionToken: newToken });
  };

  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route exact path="/">
              <Auth updateToken={this.updateToken} />
            </Route>
            <Route exact path={"/journal"}>
              <Journal updateToken={this.sessionToken} />
            </Route>
            <Route exact path={"/meds"} component={Meds} />
            <Route exact path={"/calendar"} component={Calendar} />
          </Switch>
        </Router>
      </div>
    );
  }
}

// function App() {
//   const [sessionToken, setSessionToken] = useState("");

//   useEffect(() => {
//     if (localStorage.getItem("token")) {
//       setSessionToken(localStorage.getItem("token"));
//     }
//   }, []);

//   return (
//     <div>
//       <Router>
//         <Switch>
//           <Route exact path="/">
//             <Auth token={updateToken} />
//           </Route>

//           <Route exact path={"/journal"}>
//             <Journal token={sessionToken} />
//           </Route>
//           <Route exact path={"/meds"} component={Meds} />
//           <Route exact path={"/calendar"} component={Calendar} />
//         </Switch>
//       </Router>
//     </div>
//   );
// }

// export default App;
