import { useState, useRef } from "react";

function CounterRef() {
  const [state, setState] = useState(100);
  var refObject = useRef(500); //refObject = {current:500}
  var variableCount = 1;

  function display() {
    console.log("Variable Value", variableCount);

    console.log("State Value", state);

    console.log("Ref Value", refObject.current);
  }

  function modifyVariable() {
    variableCount++;
  }

  function updateState() {
    setState(state + 1);
  }

  function updateRef() {
    refObject.current = refObject.current + 1;
  }

  return (
    <div className="counterRef">
      <h1>Variable Value : {variableCount}</h1>
      <br />
      <h1>State Value : {state}</h1>
      <br />
      <h1>Ref Value : {refObject.current}</h1>

      <button onClick={updateRef}>Update Ref Value</button>

      <button onClick={modifyVariable}>Modify Variable</button>
      <button onClick={updateState}>Update State</button>
      <button onClick={display}>Display Details</button>
    </div>
  );
}

export default CounterRef;
