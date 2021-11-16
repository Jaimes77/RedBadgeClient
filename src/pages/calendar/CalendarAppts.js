import React from "react";
import styled from "styled-components";

const CalendarAppts = (props) => {
  return (
    <Table>
      <THead>
        <TR>
          <TH>Appointment</TH>
          <TH>Date</TH>
          <TH>Time</TH>
          <TH>Edit</TH>
          <TH>Delete</TH>
        </TR>
      </THead>
      <TBody>
        {props.schedule.map((appt, id) => {
          return (
            <TR key={id}>
              <TD>{appt.event}</TD>
              <TD>{appt.date}</TD>
              <TD>{appt.time}</TD>
              <TD>
                <Button onClick={(e) => props.update(e, appt)}>Edit</Button>
              </TD>
              <TD>
                <Button onClick={(e) => props.delete(e, appt.id)}>
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
  // background: rgb(241, 196, 15);
  // background: linear-gradient(
  //   58deg,
  //   rgba(241, 196, 15, 1) 20%,
  //   rgba(243, 172, 18, 1) 100%
  // );
  // &:hover {
  //   filter: brightness(5.03);
  // }
`;

export default CalendarAppts;
