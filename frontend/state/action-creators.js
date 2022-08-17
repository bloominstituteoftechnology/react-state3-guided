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
  return function (dispatch) {
    axios.get(URL)
      .then((res) => {
        dispatch({ type: types.ADD_ALL_TODOS, payload: res.data.data })
      })
      .catch((err) => {
        debugger
      })
  }
}

export function addTodo(todoName) { // type string
  return function (dispatch) {
    axios.post(URL, { name: todoName })
      .then(res => {
        dispatch({ type: types.ADD_TODO, payload: res.data.data })
      })
      .catch(err => {
        debugger
        // dispatch({ type: 'SET_ERROR', payload: err.message })
      })
  }
}

export function toggleCompleted(id) {
  return function (dispatch) {
    axios.patch(URL + id)
      .then(res=> {
        debugger
      })
      .catch(err => {
        debugger
      })
  }
}
