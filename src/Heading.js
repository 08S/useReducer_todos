import React, { useContext } from "react";
import { FirstName } from "./App";

function Heading() {
  const fname = useContext(FirstName);

  return (
    <div>
      <h1>My Name is {fname}</h1>
    </div>
  );
}

export default Heading;
