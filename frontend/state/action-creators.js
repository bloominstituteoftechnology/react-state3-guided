import * as types from './action-types'
import { getId } from '../utils/helpers'

export function changeInput({ name, value }) {
  return {
    type: types.INPUT_CHANGE,
    payload: { name, value }
  }
}

export function toggleDisplayCompleteds() {
  return {
    type: types.TOGGLE_DISPLAY_COMPLETEDS
  }
}

// ASYNC ACTION CREATORS
export function getTodos() {
  // here we use axios and on success then dispatch the proper action
}

export function addTodo(todoName) {
  // here we use axios and on success then dispatch the proper action
}

export function toggleCompleted(id) {
  // here we use axios and on success then dispatch the proper action
}
