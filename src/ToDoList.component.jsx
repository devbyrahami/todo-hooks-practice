import React from "react";
import Todo from "./ToDo.component";

const ToDoList = ({ todos, removeToDo }) => {
  return (
    <ul>
      {todos.map(todo => {
        return <Todo key={todo.id} todo={todo} removeToDo={removeToDo} />;
      })}
    </ul>
  );
};

export default ToDoList;
