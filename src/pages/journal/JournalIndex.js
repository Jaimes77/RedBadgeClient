import React, { Component } from "react";
import JournalEntries from "./JournalEntries";
import JournalCreate from "./JournalCreate";
import JournalEdit from "./JournalEdit";

export default class JournalIndex extends Component {
  constructor(props) {
    super(props);

    this.handleUpdate = this.handleUpdate.bind(this);
    this.updatedEntry = this.updatedEntry.bind(this);
    this.entryDelete = this.entryDelete.bind(this);

    this.state = {
      entries: [],
      updatePressed: false,
      entryToUpdate: {},
    };
  }

  handleUpdate(event, entry) {
    event.preventDefault();
    fetch(`http://localhost:3000/journal/${entry.id}`, {
      method: "PUT",
      body: JSON.stringify({
        journal: entry,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        this.setState({ updatePressed: false });
        this.fetchEntries();
      })
      .catch((error) => {
        console.log("Entry Error", error);
      });
  }

  updatedEntry = (event, entry) => {
    this.setState({
      entryToUpdate: entry,
      updatePressed: true,
    });
  };

  componentDidMount() {
    this.fetchEntries();
  }

  fetchEntries = () => {
    fetch(`http://localhost:3000/journal/mine`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    })
      .then((res) => res.json())
      .then((journalEntries) => {
        //sort entries by createdAt
        journalEntries.sort((a, b) => {
          return new Date(a.createdAt) - new Date(b.createdAt);
        });

        this.setState({ entries: journalEntries });
      });
  };

  entryDelete = (e, journalId) => {
    e.preventDefault();
    fetch(`http://localhost:3000/journal/${journalId}`, {
      method: "DELETE",
      // body: JSON.stringify({ journal: { id: event.target.id } }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        this.fetchEntries();
      });
  };

  render() {
    // const entries =
    //   this.state.entries.length >= 1 ? (
    //   ) : (
    //     <div></div>
    //   );
    return (
      <div>
        <h1>Hello from Journal Page</h1>
        <JournalCreate
          token={this.props.token}
          updateEntriesArray={this.fetchEntries}
        />
        <JournalEntries
          entries={this.state.entries}
          delete={this.entryDelete}
          update={this.updatedEntry}
        />

        {this.state.updatePressed ? (
          <JournalEdit
            modalOpen={this.state.updatePressed}
            // updatedEntry={this.updatedEntry}
            update={this.handleUpdate}
            entry={this.state.entryToUpdate}
          />
        ) : null}
      </div>
    );
  }
}
