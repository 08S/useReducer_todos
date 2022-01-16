import { FirstName } from "./App";

function Comp() {
  return (
    <FirstName.Consumer>
      {(fname) => {
        return <h1> My name is {fname} </h1>;
      }}
    </FirstName.Consumer>
  );
}

export default Comp;
