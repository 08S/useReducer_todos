import { ACTION } from "./Form";

function Todos({ todo, dispatch }) {
  return (
    <div>
      <h2 style={{ color: todo.complete ? "#AAA" : "#000" }}>{todo.name}</h2>
      <button
        onClick={() =>
          dispatch({ type: ACTION.TOGGLE_TODOS, payload: { id: todo.id } })
        }
      >
        toggle
      </button>
      <button
        onClick={() =>
          dispatch({ type: ACTION.DELETE_TODOS, payload: { id: todo.id } })
        }
      >
        delete
      </button>
    </div>
  );
}

export default Todos;
