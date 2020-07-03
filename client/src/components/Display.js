import React from 'react'
import './Display.css'

function Display(props) {
  return (
    <div>
      <h1 className="header">Press {props.pianoKey}</h1>
    </div>
  )
}

export default Display;