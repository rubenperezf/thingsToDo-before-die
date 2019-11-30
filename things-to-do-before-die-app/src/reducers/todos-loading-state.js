  
import {
    LOADING_TODOS,
    SUCCESS_LOADING_TODOS,
    FAILURE_LOADING_TODOS
  } from '../actions'
  
  function todosLoadingState(state = 'loading', action) {
    switch (action.type) {
      case LOADING_TODOS:
        return 'loading'
      case SUCCESS_LOADING_TODOS:
        return 'success'
      case FAILURE_LOADING_TODOS:
        return 'failure'
      default:
        return state
    }
  }
  
  export default todosLoadingState