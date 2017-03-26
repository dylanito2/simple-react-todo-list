import React from 'react'

export default class CreateTodo extends React.Component {
  render() {
    return (
      <form>
      <input type='text' placeholder='Make a todo?' ref='' />
      <button>Create</button>
      </form>
    )
  }
}
