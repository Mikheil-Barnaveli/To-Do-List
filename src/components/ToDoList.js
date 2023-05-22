import React, { useState } from "react";
import InputListItems from "./InputListItems";
import ListItem from "./ListItem";

function ToDoList() {
  const [inputValue, setInputValue] = useState("");
  const [divValue, setDivValue] = useState("");
  const [divArray, setDivArray] = useState([]);
  const [counter, setCounter] = useState(0);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  function createDiv() {
    let pusher = divArray;
    setDivValue(inputValue);
    setDivArray([...pusher, <ListItem objective={divValue} id={counter}/>])
    setCounter(prevState => prevState + 1)
    console.log(divArray);
}

  return (
    <div>
      <InputListItems
        add={createDiv}
        handleInputChange={handleInputChange}
      />
      <ul style={{listStyle:"none"}}>
      {divArray.map((item) => {
        return <li key={counter}><ListItem objective={divValue} id={counter}/></li>
      })}
      </ul>
    </div>
  );
}

export default ToDoList;
