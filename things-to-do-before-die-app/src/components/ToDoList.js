
import React, { useEffect } from 'react'
import ToDo from './ToDo'
import { useDispatch } from 'react-redux'
import { getToDoListFromAPI } from '../actions'

const ToDoList = ({ todos, loadingState, addingState, onToDoClick }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getToDoListFromAPI(20))
  }, [dispatch])

  if (loadingState === 'loading') {
    return (
      <div>
        <h1>Loading things to do before die from API...please wait.</h1>
      </div>
    )
  }

  if (
    (loadingState === 'success' && addingState === '') ||
    (loadingState === 'success' && addingState === 'success')
  ) {
    console.log('RENDERING THINGS TODO BEFORE DIE', { todos })

    return (
    <div className="list">
      <h1>Click on the activity when completed:</h1>
      <ul>
        {todos.map((todo, index) => (
          <ToDo key={index} {...todo} onClick={() => onToDoClick(index)} />
        ))}
      </ul>
    </div>
    )
  }

  if (loadingState === 'failure') {
    return (
      <div>
        <h1>FAILED! Loading things to do before die...</h1>
      </div>
    )
  }

  if (addingState === 'adding') {
    return (
      <div>
        <h1>Saving things to do before die...</h1>
      </div>
    )
  }

  if (addingState === 'success') {
    return (
      <div>
        <h1>Successfully Saved...</h1>
      </div>
    )
  }

  if (addingState === 'failure') {
    return (
      <div>
        <h1>FAILED SAVING things to do before die...</h1>
      </div>
    )
  }
}

export default ToDoList