import { useState, useEffect } from "react";
import "./Users.css";
import { getUsers } from "./Users";
function Users() {
  const [users, setUsers] = useState(null);

  useEffect(function () {
    getUsers(setUsers);
  }, []);

  return (
    <div className="users">
      <h1>Random Users Information</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
        unde, molestiae ducimus mollitia obcaecati eaque aperiam facilis
        incidunt reiciendis non illo eveniet quo reprehenderit impedit tempora
        deserunt dolorem quam quis, minima, id iure dolores. Ea temporibus
        dolore reprehenderit cum natus non pariatur aliquam vitae impedit optio
        dolorum earum saepe magni, qui expedita animi similique quasi. Eos
        tempora asperiores libero reprehenderit ullam cumque beatae iste? Error
        dolore odio ipsum optio voluptas quam eum eaque labore natus blanditiis,
        totam voluptates rerum atque ullam distinctio cumque velit magni
        doloremque laboriosam repudiandae. Repellendus, aut distinctio
        consequuntur harum ullam corrupti? Itaque pariatur alias consequuntur
        soluta.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi minima
        sunt accusamus incidunt voluptatem quos natus ipsam, nemo, illum
        corporis odio. Ipsum amet impedit ullam unde ex sit quidem at
        exercitationem porro! Maxime, perferendis officiis dolorum voluptate
        iusto repellat illo sapiente, voluptas voluptatum placeat assumenda
        mollitia, laborum accusamus exercitationem! Vel nemo unde placeat
        similique voluptatibus magni deserunt inventore et asperiores quaerat,
        distinctio possimus, error quas molestiae saepe eveniet rem reiciendis?
      </p>

      <section className="users-data">
        <table width={"100%"} cellPadding={20}>
          <thead>
            <th>IMAGE</th>
            <th>NAME</th>
            <th>GENDER</th>
            <th>AGE</th>
            <th>EMAIL</th>
          </thead>
          <tbody></tbody>
        </table>
      </section>
    </div>
  );
}

export default Users;
