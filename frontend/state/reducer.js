import { combineReducers } from 'redux'
import * as types from './action-types'

const initialTodos = []
function todos(todosState = initialTodos, action) {
  switch (action.type) {
    case types.TOGGLE_COMPLETED: {
      const id = action.payload
      return todosState.map(td => {
        if (td.id !== id) return td
        return { ...td, completed: !td.completed }
      })
    }
    case types.ADD_TODO: {
      const newTodo = action.payload
      return todosState.concat(newTodo)
    }
    default:
      return todosState
  }
}

const initialForm = { name: '', anotherInput: '' }
function form(formState = initialForm, action) {
  switch (action.type) {
    case types.ADD_TODO:
      return initialForm
    case types.INPUT_CHANGE: {
      const { name, value } = action.payload
      return { ...formState, [name]: value }
    }
    default:
      return formState
  }
}

function displayCompleteds(displayCompletedsState = true, action) {
  switch (action.type) {
    case types.TOGGLE_DISPLAY_COMPLETEDS:
      return !displayCompletedsState
    default:
      return displayCompletedsState
  }
}

export default combineReducers({
  // here go your reducers combined
  // into one super big reducer
  todos,
  form,
  displayCompleteds,
})
