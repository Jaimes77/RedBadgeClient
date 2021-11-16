import React from "react";
import styled from "styled-components";

const JournalEntries = (props) => {
  return (
    <Table>
      <THead>
        <TR>
          <TH>Date</TH>
          <TH>Title</TH>
          <TH>Entry</TH>
          <TH>Edit</TH>
          <TH>Delete</TH>
        </TR>
      </THead>
      <TBody>
        {props.entries.map((entry, id) => {
          return (
            <TR key={id}>
              <TD>{entry.date}</TD>
              <TD>{entry.title}</TD>
              <TD>{entry.entry}</TD>
              <TD>
                <Button onClick={(e) => props.update(e, entry)}>Edit</Button>
              </TD>
              <TD>
                <Button onClick={(e) => props.delete(e, entry.id)}>
                  Delete
                </Button>
              </TD>
            </TR>
          );
        })}
      </TBody>
    </Table>
  );
};

const Table = styled.table`
  width: 100vw;
  border-spacing: 0;
  border: 1px solid black;
`;

const THead = styled.thead`
  height: 10vh;
`;

const TBody = styled.tbody`
  width: 0vh;
  height: 10vh;
  border: 1px black solid;

  background: transparent;
`;

const TR = styled.tr`
  width: 100vw;
  background: transparent;
  border-bottom: 2px solid black;
  border-top: 1px solid black;
  margin: 10px 10px;
`;

const TH = styled.th`
  width: 100vw;
  margin: 0px 0px;
  background: transparent;
  border-bottom: 2px solid black;
  border-top: 1px solid black;
  margin: 10px 10px;
  color: white;
  font-weight: bold;
`;

const TD = styled.td`
  text-align: center;
  padding: 1rem;
  margin: 10px 10px;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  border-top: 1px solid black;
`;

const Button = styled.button`
  width: 5vw;
  padding: 5px 50px;
  font-size: 11px;
  font-weight: 750;
  border: none;
  border-radius: 50px 50px 50px 50px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: transparent;
`;

export default JournalEntries;
