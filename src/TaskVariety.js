import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import InputBase from '@material-ui/core/InputBase';
import { useInputValue } from "./Components/custom-hooks";



export function TaskVariety(props) {
  const { inputValue, changeInput, clearInput, keyInput } = useInputValue();

  const clearInputAndAddList = _ => {
    clearInput();
    props.onTaskListChange(inputValue);
  };

  return (
    <div>
      <ListItem button>
      <i className="material-icons">
check_circle_outline
</i> <p style={{color:"blue",fontWeight:"700",fontSize:"18px"}}>MY LISTS</p>
       
      </ListItem>

      {Object.keys(props.state.tasklist).map(( task,idx) => (
        <ListItem button key={idx} onClick={props.changeList.bind(this, task)}>
        <ListItemText style={{paddingLeft:"30px"}} primary={task}  />
      </ListItem>
      ))
      }
      <ListItem>
      <InputBase style={{paddingLeft:"30px"}} placeholder="+New List" 
                  value={inputValue}
                   
                   onChange={changeInput}
                   onKeyPress={event => keyInput(event, clearInputAndAddList)}
      />
      </ListItem>
    </div>
  );
}
