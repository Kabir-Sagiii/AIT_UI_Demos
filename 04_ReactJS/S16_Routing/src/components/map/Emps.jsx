import { useState } from "react";
import { empsData } from "./Emps";

function Emps() {
  const [state, setState] = useState(empsData);
  return (
    <div style={{ padding: "50px" }}>
      <h1 style={{ color: "green", marginBottom: "50px" }}>Employee's Data</h1>
      <table width={1000} cellPadding={15}>
        <thead style={{ backgroundColor: "black", color: "white" }}>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>GENDER</th>
            <th>DESIGNATION</th>
            <th>SALARY</th>
          </tr>
        </thead>
        <tbody align="center">
          {state.map(({ empid, empname, salary, gender, designation }) => {
            return (
              <tr>
                <td>{empid}</td>
                <td>{empname}</td>
                <td>{gender}</td>
                <td>{designation}</td>
                <td>{salary}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Emps;
