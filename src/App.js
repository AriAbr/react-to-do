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
        { description: 'blunt the knives', isCompleted: false },
        { description: 'bend the forks', isCompleted: false }
      ],
      newTodoDescription: ''
    };
  }

  deleteTodo(index) {
    // console.log('deleteTodo executed')
    // console.log(index)
    const newTodos = this.state.todos.filter(todo => (this.state.todos.indexOf(todo) !== index));
    // console.log(newTodos)
    this.setState({ todos: newTodos });
  }

  handleChange(e) {
    this.setState({ newTodoDescription: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.newTodoDescription) {return}
    const newTodo = { description: this.state.newTodoDescription, isCompleted: false };
    this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: ''});
  }

  toggleComplete(index) {
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState({ todos: todos });
    }

  render() {
    return (
      <div className="App">
        <ul>
          { this.state.todos.map( (todo, index) =>
            <ToDo
              key={ index }
              description={ todo.description }
              isCompleted={ todo.isCompleted }
              toggleComplete={ () => this.toggleComplete(index) }
              deleteTodo={ () => this.deleteTodo(index) }
            />
          )}
        </ul>
        <form onSubmit= { (e) => this.handleSubmit(e) }>
          <input type="text" value={ this.state.newTodoDescription } onChange={ (e) => this.handleChange(e) } />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
