import { useState } from "react";

function Name() {
  const [name, setName] = useState("Rohan");
  const [image, setImage] = useState(
    "https://i0.wp.com/www.torontophotographerz.com/wp-content/uploads/2017/06/Business-portrait-23.jpg?fit=800%2C1200&ssl=1"
  );

  function changeToRohan() {
    setName("Rohan");
    setImage(
      "https://i0.wp.com/www.torontophotographerz.com/wp-content/uploads/2017/06/Business-portrait-23.jpg?fit=800%2C1200&ssl=1"
    );
  }

  function changeToSeema() {
    setName("Seema");
    setImage(
      "https://static.vecteezy.com/system/resources/previews/025/474/309/non_2x/portrait-of-a-professional-woman-in-a-suit-business-woman-standing-in-an-office-ai-generated-photo.jpg"
    );
  }

  return (
    <div style={{ padding: "50px" }}>
      <h1>My Name is : {name} </h1>
      <img
        src={image}
        width={300}
        height={300}
        onMouseEnter={changeToSeema}
        onMouseLeave={changeToRohan}
      />
      <br />
      <button onClick={changeToRohan}>Rohan</button>&nbsp;&nbsp;
      <button onClick={changeToSeema}>Seema</button>
    </div>
  );
}

export default Name;
