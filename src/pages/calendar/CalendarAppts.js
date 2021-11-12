import React from "react";

const CalendarAppts = (props) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Appointment</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {props.schedule.map((appt, id) => {
            return (
              <tr key={id}>
                <th scope="row">{appt.id}</th>
                <td>{appt.event}</td>
                <td>{appt.date}</td>
                <td>{appt.time}</td>
                <td>
                  <button onClick={(e) => props.delete(e, appt.id)}>
                    Delete
                  </button>
                  <button onClick={(e) => props.update(e, appt)}>Update</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CalendarAppts;
