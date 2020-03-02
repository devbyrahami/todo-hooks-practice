import React, { useState, useEffect } from "react";
import "./App.css";
import ToDoForm from "./ToDoForm.component";
import ToDoList from "./ToDoList.component";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function App() {
  //the main reason we position our state/alltasks here is so we can pass down the props to its children
  const [todos, setToDos] = useState([]);

  const addToDo = todo => {
    setToDos([todo, ...todos]);
  };

  useEffect(() => {
    //convert into object
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    //checking if there is a list of tasks..
    if (storageTodos) {
      //if so we update the state with the persist tasks..
      setToDos(storageTodos);
    }
  }, []);

  useEffect(() => {
    //save and convert object into strings
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const removeToDo = id => {
    //filter good to remove items from an array
    setToDos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="App">
      <p>ToDo:</p>
      <ToDoForm addToDo={addToDo} />
      <ToDoList todos={todos} removeToDo={removeToDo} />
    </div>
  );
}

export default App;
