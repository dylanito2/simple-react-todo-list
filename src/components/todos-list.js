import React from 'react'
import TodosListItem from './todos-list-item'
import CreateTodo from './create-todo'
import TodosListHeader from './todos-list-header'
import _ from 'lodash'

export default class TodosList extends React.Component {

  renderItems() {
    return (
      _.map(this.props.todos, (todo, index) =>
      <TodosListItem key={index} {...todo}/> )
      )
    }
    render() {
      return (
      <div>
        <h1>TODO LIST</h1>
        <CreateTodo />
        <table>
          <TodosListHeader />
          <tbody>
            {this.renderItems()}
          </tbody>
        </table>
      </div>
    )
  }
}
