import * as types from './action-types'
import axios from 'axios'

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
const URL = 'http://localhost:9000/api/todos/' // add slash at the end!

export function getTodos() {
  return function(dispatch) {
    axios.get(URL)
      .then((res) => {

      })
      .catch((err) => {
        
      })
  }
}

export function addTodo(todoName) {
  return function(dispatch) {
    // here we use axios and on success then dispatch the proper action
  }
}

export function toggleCompleted(id) {
  return function(dispatch) {
    // here we use axios and on success then dispatch the proper action
  }
}
