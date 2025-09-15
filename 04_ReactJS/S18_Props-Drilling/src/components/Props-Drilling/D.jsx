import React from "react";

function D(props) {
  return (
    <div>
      <h1>D Component</h1>
      <br />
      <p style={{ color: "blue", textAlign: "left", fontWeight: "bold" }}>
        {props.data}
      </p>
    </div>
  );
}

export default D;
