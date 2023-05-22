import React from "react";

function ListItem(props) {
  return (
    <div
      style={{
        width: "360px",
        minHeight: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
      id={props.id}
    >
      <div
        style={{
          width: "80%",
          height: "auto",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          whiteSpace: "normal",
        }}
      >
        <h1
          style={{
            width: "100%",
            height: "auto",
            fontSize: "2rem",
            whiteSpace: "normal",
            textAlign: "left",
            wordWrap:'break-word'
          }}
        >
          {props.objective}
        </h1>
        <p>{props.time}</p>
      </div>
      <div style={{ width: "20%", height: "100%", display:'flex', alignItems: "center",
        justifyContent: "center"}}>
        <input type="checkbox" checked={props.isChecked} onClick={props.handleCheckboxClick} style={{width:"50%", height:'2rem'}}></input>
        <button onClick={props.delete} style={{width:"50%", height:'2rem'}}>#</button>
      </div>
    </div>
  );
}

export default ListItem;
