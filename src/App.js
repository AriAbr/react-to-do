import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { description: 'chip the glasses', isCompleted: false },
        { description: 'crack the plates', isCompleted: false },
        { description: 'blunt the knives', isCompleted: true },
        { description: 'bend the forks', isCompleted: true }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <ul>
          { this.state.todos.map( (todo, index) =>
            <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } />
          )}
        </ul>
      </div>
    );
  }
}

export default App;
