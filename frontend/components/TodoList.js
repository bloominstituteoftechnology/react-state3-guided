import React from 'react'
import Todo from './Todo'
// REDUX related imports
import { connect } from 'react-redux' // utility to "connect"
import * as actions from '../state/action-creators'

class TodoList extends React.Component {
  render() {
    const { todos, displayCompleteds } = this.props
    return (
      <div id="todos">
        <h2>Todos:</h2>
        {
          todos.reduce((acc, td) => {
            const shouldDisplay = displayCompleteds || !td.completed
            if (shouldDisplay) return acc.concat(
              <Todo todo={td} key={td.id} />
            )
            return acc
          }, [])
        }
      </div>
    )
  }
}

export default connect(st => st, actions)(TodoList)
