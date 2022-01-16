import { useState, useReducer } from "react";
import Todos from "./Todos";

export const ACTION = {
  ADD_TODOS: "add_todos",
  TOGGLE_TODOS: "toggle_todos",
  DELETE_TODOS: "delete_todos"
};
const reducer = (todos, action) => {
  switch (action.type) {
    case ACTION.ADD_TODOS:
      return [...todos, newTodos(action.payload.name)];
    case ACTION.TOGGLE_TODOS:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTION.DELETE_TODOS:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
};

function newTodos(name) {
  return { id: Date.now(), name: name, complete: false };
}

function Form() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTION.ADD_TODOS, payload: { name: name } });
    setName("");
  }

  // console.log(todos);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      {todos.map((todo) => {
        return <Todos key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </div>
  );
}

export default Form;
