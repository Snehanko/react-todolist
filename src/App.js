import "./App.css";

import React from "react";

function App() {
  return (
    <div className="container">
      <div className="input-container">
        <input type="text" placeholder="Enter Task" name="task" id="task" />
        <button>Add Task</button>
      </div>
      <div className="task-list">
        <div className="task">
          <p>Task-1:Bring Milk</p>
          <button>Edit Task</button>
          <button>Delete Task</button>
        </div>
        <div className="task">
          <p>Task-2:Toast Bread</p>
          <button>Edit Task</button>
          <button>Delete Task</button>
        </div>
      </div>
    </div>
  );
}

export default App;
