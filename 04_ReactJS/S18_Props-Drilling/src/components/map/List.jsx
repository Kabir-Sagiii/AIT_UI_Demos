import { useState } from "react";
function List() {
  const [data, setData] = useState([
    <h2>heading</h2>,
    <p>para</p>,
    <section>section element</section>,
    <div>Division JSX element</div>,
  ]);
  return (
    <div style={{ padding: "50px" }}>
      <h2>Data Rendering</h2>
      <div style={{ color: "blue" }}>{data}</div>
    </div>
  );
}

export default List;
