import "./App.css";

import React, { useState } from "react";
import TodoTask from "./components/TodoTask";

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTask] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const addTask = () => {
    setTask([
      ...tasks,
      {
        title: input,
      },
    ]);
  };

  return (
    <div className="container">
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter Task"
          name="task"
          id="task"
          value={input}
          onChange={handleChange}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="task-list">
        {tasks.map((task, key) => {
          return <TodoTask key={key} title={task.title} number={key + 1} />;
        })}
      </div>
    </div>
  );
}

export default App;
