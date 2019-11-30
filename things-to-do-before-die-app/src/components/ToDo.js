  
import React from 'react'

const ToDo = ({ completed, text, onClick }) => {
  //console.log(`6. todo render..again. and again...`)

  return (
    <li
      onClick={onClick}
      style={{ color: completed ? 'white' : 'darkblue' }}
    >
      {text}
    </li>
  )
}

export default ToDo