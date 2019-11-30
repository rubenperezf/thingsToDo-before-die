
import { ADD_TODO, TOGGLE_TODO, SET_TODOS } from '../actions'
//console.log(`1. todo reducer`)

function todos(state = [], action) {
  switch (action.type) {
    case SET_TODOS:
      return action.payload
    case ADD_TODO:
      return [
        ...state,
        { text: action.payload.text, completed: action.payload.completed }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.payload) {
          return { ...todo, completed: !todo.completed }
        }
        return todo
      })
    default:
      return state
  }
}

export default todos
