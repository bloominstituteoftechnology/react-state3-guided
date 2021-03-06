import React from 'react'
import Form from './Form'
import TodoList from './TodoList'
// REDUX related imports
import { connect } from 'react-redux' // utility to "connect"
import * as actions from '../state/action-creators'

function App(props) {
  return (
    <div>
      <h1>Todo App</h1>
      <span>{props.count}&nbsp;</span>
      <button onClick={() => props.increment(5)}>inc</button>
      <TodoList />
      <Form />
    </div>
  )
}

// by connecting, each slice of state
// and each A.C. arrives into the component via props
export default connect(st => st, actions)(App)
