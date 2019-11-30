import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addToDoListToAPI } from '../actions'

const AddToDo = ({ dispatch }) => {
  const [inputTextValue, setInputTextValue] = useState('')

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          //console.log('form submit / adding to do')
          dispatch(addToDoListToAPI(inputTextValue))
          setInputTextValue('')
        }}
      >
        <label htmlFor="what-to-do">Add more things to your bucket list: </label>

        <input
          id="what-to-do"
          value={inputTextValue}
          onChange={e => setInputTextValue(e.target.value)}
          placeholder="what to do?"
        />
        <button disabled={!inputTextValue.length} type="submit">
          Add
        </button>
      </form>
    </div>
  )
}

export default connect()(AddToDo)