import { useState } from "react";

function Counter() {
  var [state, setState] = useState(0);

  function increaseCount() {
    setState(state + 1);
  }

  return (
    <div style={{ padding: "50px" }}>
      <h1>Count Value is : {state} </h1>

      <button onClick={increaseCount}>incCount</button>
    </div>
  );
}

// function Counter() {
//   var myArray = useState(0);

//   function increaseCount() {
//     myArray[1](myArray[0] + 1);
//   }

//   return (
//     <div style={{ padding: "50px" }}>
//       <h1>Count Value is : {myArray[0]} </h1>

//       <button onClick={increaseCount}>incCount</button>
//     </div>
//   );
// }

export default Counter;

// function Counter() {
//   var count = 0;

//   function increaseCount() {
//     count++;
//     console.log(count);
//   }

//   return (
//     <div style={{ padding: "50px" }}>
//       <h1>Count Value is : {count}</h1>

//       <button onClick={increaseCount}>incCount</button>
//     </div>
//   );
// }

// export default Counter;
