import React from 'react'

export default class TodosListItem extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isEditing: false
    }
  }

  onSaveClick() {
    const oldTask = this.props.task
    const newTask = this.newValue
    this.props.saveTask(oldTask, newTask)
    this.setState({
      isEditing: false,
    })
  }

  onEditClick() {
    this.setState({ isEditing: true})
  }

  onCancelClick() {
    this.props.cancelMsg(this.props.task)
    this.setState({ isEditing: false})
  }

  onDeleteClick() {
    this.props.deleteTask(this.props.task)
  }

  renderTaskSection() {
    const { task, isCompleted } = this.props

    const taskStyle = {
      color: isCompleted ? 'green' : 'red',
      textDecoration: isCompleted ? 'line-through' : 'none',
      cursor: 'pointer'
    }

    this.newValue = this.props.task
    if (this.state.isEditing) {
      return (
        <td style={taskStyle}>
          <input type='text' defaultValue={this.props.task} onChange={(e) => this.newValue = e.target.value} />
        </td>
      )
    }
    return (
      <td onClick={this.props.toggleTask.bind(this, task)} style={taskStyle}>
        {this.props.task}
      </td>
    )
  }

  renderActionSection() {
    const buttonStyle = {
      margin: '5px'
    }
    if (this.state.isEditing) {
      return (
        <td>
          <button style={buttonStyle} onClick={this.onSaveClick.bind(this)}>Save</button>
          <button style={buttonStyle} onClick={this.onCancelClick.bind(this)}>Cancel</button>
        </td>
      )
    }
    return (
      <td>
        <button style={buttonStyle} onClick={this.onEditClick.bind(this)}>Edit</button>
        <button style={buttonStyle} onClick={this.onDeleteClick.bind(this)}>Delete</button>
      </td>
    )
  }
  render() {
    return (
      <tr>
        {this.renderTaskSection()}
        {this.renderActionSection()}
      </tr>
    )
  }
}
