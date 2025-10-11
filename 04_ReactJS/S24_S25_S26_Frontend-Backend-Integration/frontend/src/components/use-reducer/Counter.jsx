import { useReducer } from "react";
import reducerFn from "./myReducer";
function Counter() {
  var [state, dispatch] = useReducer(reducerFn, 0);

  //   var [count,countdispatch] = useReducer();

  return (
    <div className="use-reducer">
      <h1>
        Counter App : <span>{state}</span>
      </h1>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        inc by 1
      </button>

      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        dec by 1
      </button>
      <button onClick={dispatch}>reset</button>
    </div>
  );
}

export default Counter;
