import React from 'react'
import TodosListItem from './todos-list-item'
import TodosListHeader from './todos-list-header'
import _ from 'lodash'

export default class TodosList extends React.Component {

  renderItems() {

    const props = _.omit(this.props, 'todos')

    return (
      _.map(this.props.todos, (todo, index) =>
      <TodosListItem key={index} {...todo} {...props}/> )
      )
    }
    render() {
      const tableStyle = {
        tableLayout: 'fixed',
        width: '26%'
      }

      return (
        <table style={tableStyle}>
          <TodosListHeader />
          <tbody>
            {this.renderItems()}
          </tbody>
        </table>
    )
  }
}
