import React from 'react'
import Form from './Form'
import TodoList from './TodoList'
// REDUX related imports
import { connect } from 'react-redux' // utility to "connect"
import * as actions from '../state/action-creators'

function App(props) {
  // via props, we can access each slice of state
  // and via props, we access each action creator
  const onSubmit = () => {
    props.addTodo(props.form.name)
  }
  const toggleStatus = id => () => {
    props.toggleCompleted(id)
  }
  return (
    <div>
      <h1>Todo App</h1>
      <span>{props.count}</span>
      <button onClick={evt => props.increment(5)}>inc</button>
      <TodoList
        todos={props.todos} // redux store
        displayCompleteds={props.displayCompleteds} // redux store
        toggleStatus={toggleStatus}
      />
      <Form
        onSubmit={onSubmit}
        onChange={props.changeInput}
        toggleShouldShow={props.toggleDisplayCompleteds}
        displayCompleteds={props.displayCompleteds}
        disabled={!props.form.name.length}
        values={props.form}
      />
    </div>
  )
}

// by connecting, each slice of state
// and each A.C. arrives into the component via props
export default connect(st => st, actions)(App)
