import React from "react";
import { useSelector } from "react-redux";

function Display() {
  const data = useSelector((store) => {
    return store.name;
  });

  return (
    <div style={{ padding: "50px" }}>
      <h1>Display Component</h1>
      <br />
      <p
        style={{
          color: "blue",
          fontWeight: "bold",
          textAlign: "left",
          fontSize: "21px",
        }}
      >
        {data}
      </p>
    </div>
  );
}

export default Display;
