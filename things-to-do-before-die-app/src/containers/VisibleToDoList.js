import { connect } from 'react-redux'
import { toggleTodo, VisibilityFilters } from '../actions'
import ToDoList from '../components/ToDoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => !todo.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => todo.completed)
    default:
      return todos
  }
}

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
    loadingState: state.todosLoadingState,
    addingState: state.todosAddingState
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onToDoClick: id => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleToDoList = connect(mapStateToProps, mapDispatchToProps)(ToDoList)

export default VisibleToDoList