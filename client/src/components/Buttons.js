import React from 'react'
import "../components/Buttons.css"

export default function Buttons(props) {
  return (
    <>
      <div  className="buttons-container">
        <button className="button-one" onClick={props.buttonMatch} name="1">1</button>
        <button className="button-two" onClick={props.buttonMatch} name="2">2</button>
        <button className="button-three" onClick={props.buttonMatch} name="3">3</button>
      </div>
      
    </>
  )
}
