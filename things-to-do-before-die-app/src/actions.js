
import { compose, map, take } from 'ramda'
export const SET_TODOS = 'SET_TODOS'
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const SHOW_ALL = 'SHOW_ALL'
export const SHOW_COMPLETED = 'SHOW_COMPLETED'
export const SHOW_ACTIVE = 'SHOW_ACTIVE'
export const LOADING_TODOS = 'LOADING_TODOS'
export const SUCCESS_LOADING_TODOS = 'SUCCESS_LOADING_TODOS'
export const FAILURE_LOADING_TODOS = 'FAILURE_LOADING_TODOS'
export const ADDING_TODO = 'ADDING_TODO'
export const SUCCESS_ADDING_TODO = 'SUCCESS_ADDING_TODO'
export const FAILED_ADDING_TODO = 'FAILED_ADDING_TODO'

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

function getToDoThingsBeforeDie() {
  return fetch('http://localhost:2500/thingsToDo')
}

export function getToDoListFromAPI(limit) {
  return function(dispatch) {
    dispatch({ type: LOADING_TODOS })

    return getToDoThingsBeforeDie()
      .then(response => response.json())
      .then(
        todos => {

          dispatch({ type: SET_TODOS, payload: todos })
          dispatch({ type: SUCCESS_LOADING_TODOS })
        },
        err => dispatch({ type: FAILURE_LOADING_TODOS })
      )
  }
}

function addToDoThingsBeforeDie(text) {
  return fetch('http://localhost:2500/thingsToDo', {
    method: 'POST',
    body: JSON.stringify({
      text: text,
      completed: false
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
}


export function addToDoListToAPI(text) {


  return function(dispatch) {
    dispatch({ type: ADDING_TODO })

    return addToDoThingsBeforeDie(text)
      .then(result => result.json())
      .then(
        newToDo => {
          console.log('Successfully added what to do before die')

          dispatch({
            type: ADD_TODO,
            payload: { text: newToDo.text, completed: newToDo.completed }
          })
          dispatch({ type: SUCCESS_ADDING_TODO })
        },
        err => {
          dispatch({ type: FAILED_ADDING_TODO })
        }
      )
  }
}


export function toggleTodo(index) {
  return { type: TOGGLE_TODO, payload: index }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, payload: filter }
}

//dispatch(addTodo(text))

