import React from 'react'
import TodosList from './todos-list'

const todos = [
  {
    task: "Make this sweet app",
    isCompleted: false
  },
  {
    task: "See a movie",
    isCompleted: false
  }
]


export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      todos: todos
    }
  }
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodosList todos={this.state.todos} />
      </div>
    )
  }
}
