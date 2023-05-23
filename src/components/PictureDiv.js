import React from 'react'

function PictureDiv(props) {
  return (
    <div
      style={{
        width:"100%",
        height:"30dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:"blue",
        backgroundImage:"https://t3.ftcdn.net/jpg/02/59/42/54/360_F_259425456_nuW385z4eGarWkyeSs0aLcvgB2vP7yul.jpg",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover"
      }}
    >
    <h1>{props.time}</h1>
    </div>
  )
}

export default PictureDiv