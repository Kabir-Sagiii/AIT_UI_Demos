import { useState } from "react";

function Names() {
  const [state, setState] = useState([
    //500
    "ved",
    "ridhi",
    "raju",
    "Shyam",
    "Sameer",
    "Priya",
    "AIT",
    "ASHOK",
  ]);
  return (
    <div>
      <ol>
        {state.map(function (element) {
          return <li> {element} </li>;
        })}
      </ol>
    </div>
  );
}

export default Names;
