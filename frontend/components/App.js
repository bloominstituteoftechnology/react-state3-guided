import React, { useEffect } from 'react'
import Form from './Form'
import TodoList from './TodoList'
// REDUX related imports
import { connect } from 'react-redux' // utility to "connect"
import { toggleDisplayCompleteds } from '../state/action-creators'

function App(props) {
  useEffect(() => {
    props.getTodos()
  }, [])
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
function mapStateToProps(state) {
  return {
    displayCompleteds: state.displayCompleteds,
  }
}
export default connect(mapStateToProps, actions)(App)
