import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

import './App.css';

import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      items: [],
      id: '',
      text: '',
      done: false
    }
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const newTask = {
      id: Date.now(),
      text: this.state.text,
      done: false
    }

    const UpdateTask = [...this.state.items, newTask];
    this.setState({
      items: UpdateTask,
      id: '',
      text: '',
      done: false
    });
  }

  handleDelete = (id) => {
    const filteredItems = this.state.items.filter(item => item.id !== id);

    this.setState({
      items: filteredItems
    });
  }

  handleDone = (id) => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    const taskDone = this.state.items.find(item => item.id === id);

    const updatedTask = {
      id: id,
      text: taskDone.text,
      done: !taskDone.done
    }

    const updatedList = [...filteredItems, updatedTask];

    this.setState({
      items: updatedList
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <TodoInput
            task={this.state.text}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          <TodoList
            tasks={this.state.items}
            handleDone={this.handleDone}
            handleDelete={this.handleDelete}
          />
        </div>
      </div>
    );
  }
}

export default App;