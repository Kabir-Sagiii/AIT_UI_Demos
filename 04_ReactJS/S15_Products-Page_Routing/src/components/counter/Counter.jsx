import { useState } from "react";

function Counter() {
  var [state, setState] = useState(0);

  function increaseCount() {
    setState((currentState) => {
      // updater function
      return currentState + 3;
    }); //0+3 ===> 3

    setState((currentState) => {
      return currentState + 1;
    }); //3+1 ==> 4

    setState((currentState) => {
      return currentState + 5;
    }); //4+5 ==> 9 ===> re-rendering
  }

  return (
    <div style={{ padding: "50px" }}>
      <h1>Count Value is : {state} </h1>

      <button onClick={increaseCount}>incCount</button>
    </div>
  );
}

export default Counter;
