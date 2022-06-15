import React from 'react'
// REDUX related imports
import { connect } from 'react-redux' // utility to "connect"
import * as actions from '../state/action-creators'

class Form extends React.Component {
  onChange = evt => {
    const { name, value } = evt.target
    this.props.changeInput({ name, value })
  }
  onSubmit = evt => {
    const { addTodo, form } = this.props
    evt.preventDefault()
    addTodo(form.name)
  }
  render() {
    const {
      form,
      toggleDisplayCompleteds,
      displayCompleteds,
    } = this.props
    return (
      <>
        <form id="todoForm" onSubmit={this.onSubmit}>
          <input
            onChange={this.onChange}
            value={form.name}
            placeholder="Type todo"
            name="name"
            type="text"
          />
          <input type="submit" disabled={!form.name.trim().length} />
        </form>

        <button onClick={toggleDisplayCompleteds}>
          {displayCompleteds ? 'Hide' : 'Show'} Completed
        </button>
      </>
    )
  }
}

export default connect(st => st, actions)(Form)
