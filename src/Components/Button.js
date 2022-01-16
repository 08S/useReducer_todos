import { useState, useReducer } from "react";

const ACTIONS = {
  INCREMENT: "Increment",
  DECREMENT: "Decrement"
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

function Button() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  // const [count, setCount] = useState(0)

  const Increment = () => {
    dispatch({ type: ACTIONS.INCREMENT });
    //  setCount(count + 1)
  };

  const decrement = () => {
    dispatch({ type: ACTIONS.DECREMENT });
    //  setCount(count - 1)
  };

  return (
    <div>
      <button onClick={Increment}>+</button>
      <h1>{state.count}</h1>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default Button;
