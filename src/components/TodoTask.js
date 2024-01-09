import React from "react";

function TodoTask({ title, number }) {
  return (
    <>
      <p>
        {number}:{title}
      </p>
      <button>Edit Task</button>
      <button>Delete Task</button>
    </>
  );
}

export default TodoTask;
