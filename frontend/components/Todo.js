import React from 'react'
// REDUX related imports
import { connect } from 'react-redux' // utility to "connect"
import * as actions from '../state/action-creators'

class Todo extends React.Component {
  render() {
    const { todo, toggleCompleted } = this.props
    return (
      <div onClick={() => toggleCompleted(todo.id)} className="todo">
        {todo.name}{todo.completed ? ' ✔️' : ''}
      </div>
    )
  }
}

export default connect(st => st, actions)(Todo)
