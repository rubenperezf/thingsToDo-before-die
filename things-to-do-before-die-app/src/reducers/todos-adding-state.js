  
import {
    ADDING_TODO,
    SUCCESS_ADDING_TODO,
    FAILURE_ADDING_TODO
  } from '../actions'
  
  function todosAddingState(state = '', action) {
    //console.log('inside todosAddingState reducer', { action })
    switch (action.type) {
      case ADDING_TODO:
        return 'adding'
      case SUCCESS_ADDING_TODO:
        return 'success'
      case FAILURE_ADDING_TODO:
        return 'failure'
      default:
        return state
    }
  }
  
  export default todosAddingState