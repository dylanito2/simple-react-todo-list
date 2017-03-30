import React from 'react'

export default class TodosListHeader extends React.Component {
  render() {
    const thStyle = {
      width: '13%'
    }
    return (
      <thead>
        <tr>
          <th style={thStyle}>Task</th>
          <th style={thStyle}>Actions</th>
        </tr>
      </thead>
    )
  }
}
