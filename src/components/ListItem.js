import React from 'react'

function ListItem(props) {
  return (
    <div style={{width:"17rem", minHeight:"4rem", display:"flex", alignItems:"center", justifyContent:"space-between"}}>
        <h1>{props.objective} hi </h1>
        <p>{props.time} 12</p>
        <div>
            <button onClick={props.check}>@</button>
            <button onClick={props.delete}>#</button>
        </div>
    </div>
  )
}

export default ListItem