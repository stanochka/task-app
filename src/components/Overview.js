import React from "react";

class Overview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tasks } = this.props;

    return (
      <ul>
        {tasks.map((task, i) => {
          return <li key={task.id}><strong>{i+1})</strong> {task.text}</li>;
        })}
      </ul>
    );
  }
}

export default Overview;
