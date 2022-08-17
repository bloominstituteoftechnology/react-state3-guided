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
export function addTodo(todoName) {

}

export function toggleCompleted(id) {

}

