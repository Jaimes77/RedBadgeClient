import React from "react";

const MedsList = (props) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Medicine</th>
            <th>Dosage</th>
            <th>Frequency</th>
          </tr>
        </thead>
        <tbody>
          {props.list.map((med, id) => {
            return (
              <tr key={id}>
                <th scope="row">{med.id}</th>
                <td>{med.medname}</td>
                <td>{med.dose}</td>
                <td>{med.frequency}</td>
                <td>
                  <button onClick={(e) => props.delete(e, med.id)}>
                    Delete
                  </button>

                  <button onClick={(e) => props.update(e, med)}>Update</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MedsList;
