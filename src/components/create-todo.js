import React from 'react'

export default class CreateTodo extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: "",
    }
  }



  handleCreate(event) {
    event.preventDefault()
    this.props.createTask(this.state.value)
    this.input.value = ''
    this.setState({ value: '' })
  }
  render() {
    const inputStyle = {
      margin: "5px"
    }
    return (
      <form onSubmit={this.handleCreate.bind(this)}>
      <input type='text' style={inputStyle} placeholder='Make a todo?' ref={el => this.input = el} onChange={event => this.setState({ value: event.target.value })} />
      <button>Create</button>
      </form>
    )
  }
}
