import React from 'react'

export default class TaskMessage extends React.Component {

  constructor(props) {
    super(props)
  }

  renderClearLink() {

    if (this.props.message != '') {
      const clearStyle = {

        color: 'navy',
        fontSize: '8pt',
        cursor: 'pointer'
      }
      return (
        <span style={clearStyle} onClick={this.props.clearMsg}>
          (clear)
        </span>
      )
    }
    return ""
  }
  render() {

    return (
      <p>{this.props.message} {this.renderClearLink()}</p>
    )
  }
}
