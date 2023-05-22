import React, { useState } from "react";
import InputListItems from "./InputListItems";
import ListItem from "./ListItem";

function ToDoList() {
  const [inputValue, setInputValue] = useState("");
  const [divArray, setDivArray] = useState([]);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [checked, setChecked] = useState(false)

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  function handleCheckboxClick() {
      if(checked == false){
        setChecked(!checked)
      }
      else if(checked == true){
        setChecked(!checked)
      }
    }

  function createDiv() {
    let pusher = divArray;
    setTime(new Date().toLocaleTimeString())
    setDivArray([...pusher, <ListItem objective={inputValue} time={time} handleCheckboxClick={handleCheckboxClick} checked={checked} delete={deleteItem}/> ])
}
  function deleteItem() {
    setDivArray(
      divArray.filter(a =>
          a.id !== divArray.id
        )
      )
  }


  return (
    <div style={{
      width: "clamp(320px, 100%, 640px)",
      minHeight: "auto",
      display: "flex",
      flexDirection:"column",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      padding:"10px"
    }}>
      <InputListItems
        add={createDiv}
        handleInputChange={handleInputChange}
      />
      <ul style={{listStyle:"none"}}>
      {divArray.map((item, index) => {
        return <li key={index} >{item}</li>
        
      })}
      </ul>
    </div>
  );
}

export default ToDoList;
