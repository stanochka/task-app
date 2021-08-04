import React from 'react';
import Overview from './components/Overview';
import uniqid from "uniqid";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      task: { text: '', id: uniqid() },
      tasks: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ task: {text: event.target.value, id: this.state.task.id, } });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ tasks: this.state.tasks.concat(this.state.task),
                    task: { text: '', id: uniqid() }, });
  }
  render() {
    const { task, tasks } = this.state;

    return (
      <div className="App">
        <form>
          <label htmlFor="taskInput">Enter new task:</label>
          <input type="text" id="taskInput" value={task.text} onChange={this.handleChange} />
          <button type="submit" onClick={this.handleSubmit}>Submit</button>
        </form>
        <Overview tasks={tasks} />
        <p>Tasks count: {tasks.length}</p>
      </div>
    );
  }
}

export default App;
