import { useState } from "react";

function Users() {
  const [users, setUsers] = useState([
    {
      username: "raj", //
      city: "pune",
    },
    {
      username: "rohan",
      city: "hyd",
    },
    {
      username: "priya",
      city: "ban",
    },
    {
      username: "seema",
      city: "delhi",
    },
    {
      username: "santosh",
      city: "indore",
    },
  ]);
  return (
    <div style={{ padding: "50px" }}>
      <h1>Users Information</h1>
      {users.map(function (user) {
        return (
          <div>
            <hr />
            <dl>
              <dt style={{ color: "green" }}>
                <strong>Username</strong>
              </dt>
              <dd>{user.username}</dd>
              <dt style={{ color: "green" }}>
                <strong>City</strong>
              </dt>
              <dd>{user.city}</dd>
            </dl>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default Users;
