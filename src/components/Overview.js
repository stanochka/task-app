import React from "react";

class Overview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tasks, handleDelete } = this.props;

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
}

export default Overview;
