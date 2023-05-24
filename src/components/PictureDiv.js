import React from 'react'

function PictureDiv(props) {

  return (
    <div
      style={{
        width:"100%",
        height:"30dvh",
        display: "flex",
        flexDirection:"column",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        backgroundColor:"#4169E1",
        backgroundImage:`url(${props.bg})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover", 
        backgroundPosition:"center",
        padding:"1rem",
        borderTopLeftRadius:'12px',
        borderTopRightRadius:'12px',
      }}
    >
    <h1 style={{color:"black"}}>{props.day} {props.month}</h1>
    <h1 style={{color:"black"}}>{props.time}</h1>
    </div>
  )
}

export default PictureDiv