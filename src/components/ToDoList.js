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
  const handleButtonClick = () => {
    setDivValue(inputValue);
  };

  function createDiv() {
    let pusher = divArray;
    setDivArray([...pusher, <ListItem objective={divValue} id={counter}/>])
    setCounter(prevState => prevState + 1)
    console.log(counter);
    console.log(pusher);
}

  return (
    <div>
      <InputListItems
        add={() => {handleButtonClick(); createDiv()}}
        handleInputChange={handleInputChange}
      />
      {divArray.map((item, index) => {
        return  <ListItem objective={divValue} key={index} id={counter}/>;
      })}

      {/* <ListItem objective={divValue}/> */}
    </div>
  );
}

export default ToDoList;
