  
import { SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions'
//console.log(`2. visibilityFilter reducer`)
function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
  //console.log(
  //  `9. Inside visibilityFilter reducer.  New filter is ${action.payload}`
  //)
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.payload
    default:
      return state
  }
}

export default visibilityFilter