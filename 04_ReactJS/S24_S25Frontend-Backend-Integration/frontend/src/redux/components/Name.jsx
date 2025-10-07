import { useRef } from "react";
import myStore from "../store/store";
import nameActionCreator from "../action-creators/nameActionCreator";
function Name() {
  const inputRef = useRef(null);
  function getName() {
    var actionObject = nameActionCreator(inputRef.current.value);

    myStore.dispatch(actionObject);
  }
  return (
    <div style={{ padding: "50px" }}>
      <h1>Name Component</h1>
      <br />
      <input ref={inputRef} placeholder="enter name" /> &nbsp;
      <button onClick={getName}>Submit</button>
    </div>
  );
}

export default Name;
