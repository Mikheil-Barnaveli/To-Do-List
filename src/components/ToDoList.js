import React, { useState } from 'react'
import InputListItems from './InputListItems'
import ListItem from './ListItem'

function ToDoList() {
    const [inputValue, setInputValue] = useState("")
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };



  return (
    <div>
        <InputListItems add={handleInputChange}/>
        <ListItem objective={inputValue}/>

    </div>
  )
}

export default ToDoList