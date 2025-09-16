import { useContext } from "react";
import myContext from "./context";
import D from "./D";
function C() {
  var data = useContext(myContext);
  return (
    <div>
      <h1>C Component : {data}</h1>
      <br />
      <p style={{ color: "green", textAlign: "left", fontWeight: "bold" }}>
        {data}
      </p>
      <br />
      <hr />
      <br />
      <D />
    </div>
  );
}

export default C;
