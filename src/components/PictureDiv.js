import React from 'react'

function PictureDiv(props) {

  return (
    <div
      style={{
        width:"100%",
        height:"30dvh",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        backgroundColor:"red",
        backgroundImage:`url(${props.bg})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover", 
        backgroundPosition:"center"
      }}
    >
    <h1>{props.time}</h1>
    </div>
  )
}

export default PictureDiv