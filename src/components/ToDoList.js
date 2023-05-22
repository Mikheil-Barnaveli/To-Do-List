import React, { useState } from "react";
import InputListItems from "./InputListItems";
import ListItem from "./ListItem";

function ToDoList() {
  const [inputValue, setInputValue] = useState("");
  const [divArray, setDivArray] = useState([]);
  const [time, setTime] = useState(new Date().toLocaleTimeString())

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  function createDiv() {
    let pusher = divArray;
    setTime(new Date().toLocaleTimeString())
    setDivArray([...pusher, <ListItem objective={inputValue} time={time}/>])
    console.log(divArray);
}

  return (
    <div>
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
