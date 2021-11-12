import React, { Component } from "react";
import { withRouter } from "react-router-dom";

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
      <div>
        <h1>Registration</h1>
        <h6>
          orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          ligula ante, feugiat nec tristique at, hendrerit ultricies mi. In
          libero orci, sodales fermentum nibh et, rhoncus dapibus purus. Vivamus
          a tincidunt magna. Aliquam nec ultricies massa. Mauris sit amet
          feugiat tellus, ac vestibulum tortor. Maecenas ac diam porta, commodo
          metus ac, porta ligula. Aenean ut semper felis. Nunc nec laoreet mi.
          Integer felis lectus, luctus eu eros tristique, consequat luctus elit.
          Aliquam eu eros pharetra turpis tincidunt semper. Nullam congue tortor
          et justo venenatis molestie.
        </h6>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            value={this.state.firstname}
            onChange={this.handleChange}
            required
          />

          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={this.state.lastname}
            onChange={this.handleChange}
            required
          />

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />

          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default withRouter(Register);
