import React from "react";

function ListItem(props) {
  console.log(props);
  return (
    <div
      style={{
        width: "17rem",
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
          width: "75%",
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
      <div style={{ width: "25%", height: "100%" }}>
        <button onClick={props.check}>@</button>
        <button onClick={props.delete}>#</button>
      </div>
    </div>
  );
}

export default ListItem;
