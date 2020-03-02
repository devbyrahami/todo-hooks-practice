import React from "react";

const Todo = ({ todo, removeToDo }) => {
  const handleRemove = () => {
    removeToDo(todo.id);
  };

  return (
    <div>
      <li style={{ listStyle: "none" }}>{todo.task}</li>
      <button onClick={handleRemove}>x</button>
    </div>
  );
};

export default Todo;
