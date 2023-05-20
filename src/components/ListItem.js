import React from 'react'

function ListItem(props) {
  return (
    <div style={{width:"17rem", minHeight:"4rem", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap"}} id={props.id}>
        <h1 style={{width:"10rem", minHeight:"4rem", display:"flex", flexWrap:"wrap", fontSize:"2rem"}}>{props.objective}</h1>
        <p>{props.time} 12</p>
        <div>
            <button onClick={props.check}>@</button>
            <button onClick={props.delete}>#</button>
        </div>
    </div>
  )
}

export default ListItem