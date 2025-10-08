import { useRef } from "react";

function RefDom() {
  const h1Ref = useRef(null); //h1Ref= {current:h1DomElement}
  const buttonRef = useRef(null);

  function updateDOM() {
    buttonRef.current.style.border = "3px solid red";
    buttonRef.current.style.padding = "10px 20px";
    buttonRef.current.style.backgroundColor = "red";

    h1Ref.current.style.color = "blue";
    h1Ref.current.innerText = "DOM Manipulated using Ref Cocnept";
  }

  return (
    <div style={{ padding: "50px" }}>
      <h1 ref={h1Ref}>Dom manipulation using Ref</h1>
      <br />
      <button ref={buttonRef} onClick={updateDOM}>
        Submit
      </button>
    </div>
  );
}

export default RefDom;
