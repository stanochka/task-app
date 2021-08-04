import React from "react";

const Overview = (props) => {
  const { tasks, handleDelete } = props;

  return (
    <ul>
      {tasks.map((task, i) => {
        return (<li key={task.id}>
                  <strong>{i+1})</strong>
                  {task.text}
                  <button id={task.id} onClick={handleDelete}>Delete</button>
                </li>
                );
      })}
    </ul>
  );
}

export default Overview;
