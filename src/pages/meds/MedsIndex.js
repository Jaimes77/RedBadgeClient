import React, { Component } from "react";
import styled from "styled-components";
import MedsCreate from "./MedsCreate";
import MedsList from "./MedsList";
import MedsEdit from "./MedsEdit";

export default class MedsIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      updatePressed: false,
      medToUpdate: {},
    };

    this.handleUpdate = this.handleUpdate.bind(this);
    this.updatedMed = this.updatedMed.bind(this);
    this.medDelete = this.medDelete.bind(this);
  }

  handleUpdate(event, med) {
    event.preventDefault();
    fetch(`$(APIURL)/meds/${med.id}`, {
      method: "PUT",
      body: JSON.stringify({
        meds: med,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        this.setState({ updatePressed: false });
        this.fetchMeds();
      })
      .catch((error) => {
        console.log("Entry Error", error);
      });
  }

  updatedMed = (event, entry) => {
    this.setState({
      medToUpdate: entry,
      updatePressed: true,
    });
  };

  componentDidMount() {
    this.fetchMeds();
  }

  fetchMeds = () => {
    fetch(`http://localhost:3000/meds/mine`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    })
      .then((res) => res.json())
      .then((medsList) => {
        medsList.sort((a, b) => {
          return new Date(a.createdAt) - new Date(b.createdAt);
        });
        this.setState({ list: medsList });
      });
  };

  medDelete = (e, medsId) => {
    e.preventDefault();
    fetch(`http://localhost:3000/meds/${medsId}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        this.fetchMeds();
      });
  };
  render() {
    return (
      <Container>
        <h1>Medicine</h1>
        <hr />

        <MedsCreate token={this.props.token} updateListArray={this.fetchMeds} />

        <MedsList
          list={this.state.list}
          delete={this.medDelete}
          update={this.updatedMed}
        />

        {this.state.updatePressed ? (
          <MedsEdit
            modalOpen={this.state.updatePressed}
            update={this.handleUpdate}
            med={this.state.medToUpdate}
          />
        ) : null}
      </Container>
    );
  }
}

const Container = styled.div`
  h1 {
    display: flex;
    justify-content: center;
    font-size: 50px;
  }
`;
