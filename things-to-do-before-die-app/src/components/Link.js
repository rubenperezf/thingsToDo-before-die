  
import React from 'react'

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <a
      href=""
      onClick={e => {
        //console.log(`7. link onClick`)
        e.preventDefault()
        onClick()
      }}
    >
      {children}
    </a>
  )
}

export default Link