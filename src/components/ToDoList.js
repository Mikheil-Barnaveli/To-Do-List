import React, { useState } from "react";
import InputListItems from "./InputListItems";
import ListItem from "./ListItem";
import PictureDiv from "./PictureDiv";
import bgPic from "./pics/daytime.jpg";
import { v4 as uuidv4 } from 'uuid';

function ToDoList() {
  const [inputValue, setInputValue] = useState("");
  const [divArray, setDivArray] = useState([]);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [checked, setChecked] = useState(false);
  const [counter, setCounter] = useState(1);
  const currentDate = new Date();
  const month = currentDate.toLocaleString("default", { month: "long" });
  const day = currentDate.getDate();
  

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  function handleCheckboxClick() {
    setChecked((prevChecked) => !prevChecked);
  }
  function deleteItem(id) {
    setDivArray((prevDivArray) =>
      prevDivArray.filter((item) => item.props.id !== id)
    );
  }

  function createDiv() {
    let pusher = divArray;
    setTime(new Date().toLocaleTimeString());
    setCounter((prevState) => prevState + 1);
    setDivArray([
      ...pusher,
      <ListItem
        key={uuidv4()}
        objective={inputValue}
        time={time}
        handleCheckboxClick={handleCheckboxClick}
        checked={checked}
        delete={() => deleteItem(counter)}
        id={counter}
      />,
    ]);
    console.log();
  }

  return (
    <div
      style={{
        width: "clamp(320px, 100%, 1040px)",
        // width: 'Min(320px, 100%)',
        minHeight: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        padding: "10px",
      }}
    >
      <PictureDiv day={day} month={month} bg={bgPic}/>
      <InputListItems add={createDiv} handleInputChange={handleInputChange} />
      <ul
        style={{
          listStyle: "none",
          width: "100%",
          display: "flex",
          flexDirection:'column',
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {divArray.map((items) => {
          return (
            <li
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              key={items.key}
            >
              {items}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ToDoList;
