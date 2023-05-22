import React from "react";

function InputListItems(props) {
  return (
    <div
      style={{
        width:"100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input
        type="text"
        value={props.value}
        onChange={(e) => props.handleInputChange(e)}
        style={{ width: "90%", minHeight: "2rem", fontSize: "1.5rem" }}
        id="input-list-item"
      ></input>
      <button
        htmlFor="input-list-item"
        style={{ width: "10%", minHeight: "2rem", fontSize: "1rem" }}
        onClick={props.add}
      >
        Add
      </button>
    </div>
  );
}

export default InputListItems;
