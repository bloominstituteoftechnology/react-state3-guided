import React from 'react'
import Form from './Form'
import TodoList from './TodoList'
// REDUX related imports
import { connect } from 'react-redux' // utility to "connect"
import * as actions from '../state/action-creators'

function App(props) {
  props.getTodos()
  return (
    <div>
      <h1>Todo App</h1>
      <TodoList />
      <Form />
      <button onClick={props.toggleDisplayCompleteds}>
        {props.displayCompleteds ? 'Hide' : 'Show'} Completed
      </button>
    </div>
  )
}

// by connecting, slices of state and action
// creators arrive into the component via props
export default connect(st => st, actions)(App)
