import React from 'react'
import TodosList from './todos-list'
import TaskMessage from './task-message'
import CreateTodo from './create-todo'
import Request from 'superagent'



export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      message: '',
    }
  }
  getDB() {
    var url = 'http://localhost:3000/todos'
    Request.get(url)
    .then( (response) => {
      this.setState({ todos: JSON.parse(response.text) })
    })
  }
  componentWillMount() {
    this.getDB()
  }

  deleteTodoInDB(todo) {
    var url = `http://localhost:3000/todos/${todo.id}/delete`
    Request.post(url)
    .send({todo})
    .then( (response) => {
      this.getDB()
    })
  }

  createTodoInDB(todo) {
    var url = 'http://localhost:3000/todos'
    Request.post(url)
    .send({todo})
    .then( (response) => {
      this.getDB()
    })
  }

  updateTodoInDB(todo) {
    var url = 'http://localhost:3000/todos/' + todo.id
    Request.post(url)
    .send({todo})
    .then( (response) => {
      this.getDB()
    })
  }


  toggleTask(task) {
    const foundTodo = _.find(this.state.todos, todo => todo.task === task)
    foundTodo.isCompleted = !foundTodo.isCompleted
    let msg
    foundTodo.isCompleted ? msg = "You marked '" + task + "' as complete" : msg = "You marked '" + task + "' as incomplete"
    this.updateTodoInDB(foundTodo)
    this.setState({ message: msg })
  }

  saveTask(oldTask, newTask) {
    const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask)
    foundTodo.task = newTask
    this.setState({ todos: this.state.todos })
    this.updateTodoInDB(foundTodo)
    let msg = "You changed '" + oldTask + "' to '" + newTask + "'"
    this.setState({ message: msg })
  }

  createTask(task) {
    if (task === '') {
      this.setState({ message: 'Tasks can not be blank' })
    } else if (_.find(this.state.todos, todo => todo.task === task)) {
      this.setState({ message: 'That task is already on your List' })
    }
    else {
      let msg = "You added '" + task + "' to your Todo List"
      this.setState({ message: msg })
      this.createTodoInDB({
        task: task,
        isCompleted: false
      })
    }
  }

  cancelMsg(task) {
    let msg = "You cancelled editing '" + task + "'"
    this.setState({ message: msg })
  }

  deleteTask(task) {
    const foundTodo = _.find(this.state.todos, todo => todo.task === task)
    let msg = "You deleted " + task + " from your Todo List"
    this.deleteTodoInDB(foundTodo)
    this.setState({ message: msg })
  }

  clearMsg() {
    this.setState({ message: "" })
  }

  render() {
    const divStyle = {
      margin: '25px'
    }
    return (
      <div style={divStyle}>
        <h1>Todo List</h1>
        <TaskMessage message={this.state.message} clearMsg={this.clearMsg.bind(this)}/>
        <CreateTodo createTask={this.createTask.bind(this)} defaultValue='' />
        <TodosList
          todos={this.state.todos}
          toggleTask={this.toggleTask.bind(this)}
          saveTask={this.saveTask.bind(this)}
          deleteTask={this.deleteTask.bind(this)}
          cancelMsg={this.cancelMsg.bind(this)}
          />
      </div>
    )
    debugger
  }


}
