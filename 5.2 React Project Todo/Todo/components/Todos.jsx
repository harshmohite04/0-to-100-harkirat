import React from "react";

function Todos({ todos }) {
  if (!todos || todos.length === 0) {
    return <p>No todos available</p>; // Handle empty or undefined todos
  }

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h1>{todo.title}</h1>
          <h2>{todo.description}</h2>
          <button>{todo.completed ? "Completed" : "Mark as Complete"}</button>
        </div>
      ))}
    </>
  );
}

export default Todos;
