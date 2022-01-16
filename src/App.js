import React, { createContext } from "react";
import Comp from "./Comp";
import Heading from "./Heading";
import Form from "./Components/Form";
import "./styles.css";

const FirstName = createContext();

export default function App() {
  return (
    <div className="App">
      <FirstName.Provider value={"Shubham"}>
        <Comp />
        <Heading />
      </FirstName.Provider>
      <Form />
    </div>
  );
}

export { FirstName };
