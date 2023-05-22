import React, { useState } from "react";
import InputListItems from "./InputListItems";
import ListItem from "./ListItem";

function ToDoList() {
  const [inputValue, setInputValue] = useState("");
  const [divArray, setDivArray] = useState([]);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [checked, setChecked] = useState(false)
  const [counter, setCounter] = useState(1)

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
    function deleteItem(id) {
      setDivArray((prevDivArray) => prevDivArray.filter((item) => item.props.id !== id));
  }

  function createDiv() {
    let pusher = divArray;
    setTime(new Date().toLocaleTimeString())
    setCounter(prevState => prevState + 1)
    setDivArray([...pusher, <ListItem objective={inputValue} time={time} handleCheckboxClick={handleCheckboxClick} checked={checked} delete={() => deleteItem(counter)} id={counter}/> ])
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
      {divArray.map((items, index) => {
        return <li key={index} >{items}</li>
        
      })}
      </ul>
    </div>
  );
}

export default ToDoList;
