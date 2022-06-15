import * as types from './action-types'
import { getId } from '../utils/helpers'
import axios from 'axios'

export function increment(amount) {
  return {
    type: types.INCREMENT,
    payload: amount,
  }
}

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

export function addTodo(todoName) { // ???????
  return {
    type: types.ADD_TODO,
    payload: { name: todoName, completed: false, id: getId() }
  }
}

export function postTodo(name) {
  return function (dispatch) {
    axios.post('http://localhost:9000/api/todos', { name })
      .then(res => {
        debugger
        dispatch({ type: types.ADD_TODO, payload: res.data.data})
      })
      .catch(err => {
        debugger
      })
  }
}

export function patchTodo(id) {
  return function (dispatch) {
    axios.patch(`http://localhost:9000/api/todos/${id}`)
      .then(res => {
        //  dispatch(fetchTodos()) // works but is not efficient
        dispatch({ type: types.SET_UPDATED_TODO, payload: res.data.data })
      })
      .catch(err => {
        debugger
      })
  }
}

export function fetchTodos() {
  return function (dispatch) {
    // async thing
    // dispatch an action here to start a spinner
    axios.get('http://localhost:9000/api/todos')
      .then(res => {
        dispatch({ type: types.SET_ALL_TODOS, payload: res.data.data })
        // on success or failure (in the distant future)
        // then some action will be dispatched to change state
      })
      .catch(err => {
        debugger
      })
  }
}
