import React from 'react'

class Form extends React.Component {
  onChange = evt => {
    const { name, value } = evt.target
    this.props.onChange({ name, value })
  }
  onSubmit = evt => {
    evt.preventDefault()
    this.props.onSubmit()
  }
  render() {
    const {
      values,
      toggleShouldShow,
      displayCompleteds,
      disabled,
    } = this.props
    return (
      <>
        <form id="todoForm" onSubmit={this.onSubmit}>
          <input
            onChange={this.onChange}
            value={values.name}
            placeholder="Type todo"
            name="name"
            type="text"
          />
          <input type="submit" disabled={disabled} />
        </form>

        <button onClick={toggleShouldShow}>
          {displayCompleteds ? 'Hide' : 'Show'} Completed
        </button>
      </>
    )
  }
}

export default Form
