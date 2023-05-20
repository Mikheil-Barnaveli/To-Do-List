import React from 'react'

function InputListItems(props) {
  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
        <input type='text' value={props.value} style={{width:"15rem", minHeight:"2rem", fontSize:"1.5rem"}} id='input-list-item'></input>
        <button htmlFor="input-list-item" style={{width:"2rem", minHeight:"2rem", fontSize:"1rem"}} onClick={props.add}>Add</button>
    </div>
  )
}

export default InputListItems