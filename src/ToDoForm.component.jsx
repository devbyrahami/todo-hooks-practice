import React, { useState } from "react";
import uuid from "uuid";

const ToDoForm = ({ addToDo }) => {
  const [todo, setToDo] = useState({
    id: "",
    task: ""
  });

  const handleTask = e => {
    //spreading the all list with new ones..
    setToDo({ ...todo, task: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (todo.task.trim()) {
      addToDo({ ...todo, id: uuid.v4() });
      //reset list
      setToDo({ ...todo, task: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        //controlled component handle by react
        value={todo.task}
        name="task"
        type="text"
        onChange={handleTask}
        placeholder="Type here.."
      />
      <button>Click</button>
    </form>
  );
};

export default ToDoForm;
