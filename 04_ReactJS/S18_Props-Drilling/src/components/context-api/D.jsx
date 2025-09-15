import { useContext } from "react";
import myContext from "./context";

function D() {
  const context_data = useContext(myContext);
  return (
    <div>
      <h1>D Component</h1>
      <br />
      <p style={{ color: "blue", textAlign: "left", fontWeight: "bold" }}>
        {context_data}
      </p>
    </div>
  );
}

export default D;
