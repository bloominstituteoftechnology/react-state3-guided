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

export function addTodo(todoName) {
  return {
    type: types.ADD_TODO,
    payload: { name: todoName, completed: false, id: getId() }
  }
}

export function toggleCompleted(id) {
  return {
    type: types.TOGGLE_COMPLETED,
    payload: id,
  }
}
