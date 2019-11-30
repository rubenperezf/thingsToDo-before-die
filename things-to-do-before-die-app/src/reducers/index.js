import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibility-filter'
import todosLoadingState from './todos-loading-state'
import todosAddingState from './todos-adding-state'

export default combineReducers({
  todos,
  visibilityFilter,
  todosLoadingState,
  todosAddingState
})