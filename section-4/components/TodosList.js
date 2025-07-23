import React from "react";

const TodosList = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
  const todos = await response.json();

  return (
    <div className="todos-container">
      {todos.map(({ id, title, completed }) => (
        <div className="todo-card" key={id}>
          <input type="checkbox" checked={completed} readOnly />
          <p>{title}</p>
        </div>
      ))}
    </div>
  );
};

export default TodosList;
