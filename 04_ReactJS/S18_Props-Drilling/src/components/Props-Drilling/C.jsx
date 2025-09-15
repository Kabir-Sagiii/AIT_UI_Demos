import React from "react";
import D from "./D";
function C(props) {
  return (
    <div>
      <h1>C Component</h1>
      <br />
      <p style={{ color: "green", textAlign: "left", fontWeight: "bold" }}>
        {props.data}
      </p>
      <br />
      <hr />
      <br />
      <D data={props.data} />
    </div>
  );
}

export default C;
