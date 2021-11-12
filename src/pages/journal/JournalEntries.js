import React from "react";

const JournalEntries = (props) => {
  return (
    <div>
      <hr />
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Title</th>
            <th>Entry</th>
          </tr>
        </thead>
        <tbody>
          {props.entries.map((entry, id) => {
            return (
              <tr key={id}>
                <th scope="row">{entry.id}</th>
                <td>{entry.date}</td>
                <td>{entry.title}</td>
                <td>{entry.entry}</td>
                <td>
                  <button onClick={(e) => props.delete(e, entry.id)}>
                    Delete
                  </button>

                  <button onClick={(e) => props.update(e, entry)}>
                    Update
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default JournalEntries;
