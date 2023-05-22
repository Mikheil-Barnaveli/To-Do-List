import React from "react";

function InputListItems(props) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input
        type="text"
        value={props.value}
        onChange={(e) => props.handleInputChange(e)}
        style={{ width: "clamp(275px, 100%, 500px)", minHeight: "2rem", fontSize: "1.5rem" }}
        id="input-list-item"
      ></input>
      <button
        htmlFor="input-list-item"
        style={{ width: "2rem", minHeight: "2rem", fontSize: "1rem" }}
        onClick={props.add}
      >
        Add
      </button>
    </div>
  );
}

export default InputListItems;
