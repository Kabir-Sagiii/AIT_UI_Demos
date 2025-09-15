import { useState } from "react";
import B from "./B";
import myContext from "./context";

function A() {
  const [state, setState] = useState("Hyderabad");
  return (
    <div style={{ padding: "50px" }}>
      <h1>A Component</h1>
      <br />
      <button
        onClick={() => {
          setState("Pune City");
        }}
      >
        Share with B
      </button>
      <br />
      <br />
      <hr />
      <br />
      <myContext.Provider value={state}>
        <B />
      </myContext.Provider>
    </div>
  );
}

export default A;
