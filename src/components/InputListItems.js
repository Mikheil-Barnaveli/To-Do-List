import React from "react";

function InputListItems(props) {
  return (
    <div
      style={{
        width:"100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding:'10px'
      }}
    >
      <input
        type="text"
        value={props.value}
        onChange={(e) => props.handleInputChange(e)}
        style={{ width: "90%", minHeight: "2rem", fontSize: "1.5rem", border:"2px solid skyblue"}}
        id="input-list-item"
      ></input>
      <button
        htmlFor="input-list-item"
        onClick={props.add}
        id="add-button"
      >
        Add
      </button>
    </div>
  );
}

export default InputListItems;
