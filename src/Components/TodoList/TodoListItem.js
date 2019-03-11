import React from "react";

import {
  ButtonBase,
  ListItem,
  Checkbox,
  ListItemText,
  ListItemSecondaryAction,
  Chip,
  Card
} from "@material-ui/core";


import ClearIcon from "@material-ui/icons/Clear";
const TodoListItem = function(props) {

   let textStyle;
  if(props.checked) 
  textStyle={textDecoration:"line-through"};
  else   textStyle={textDecoration:"none"};




  var remainderText = "";
  if (props.remainder !== "") {
    remainderText = JSON.stringify(props.remainder);
  }



  return (
    <Card  >
      <ListItem divider={props.divider}>
        <Checkbox
          onClick={props.onCheckBoxToggle}
          checked={props.checked}
          disableRipple
        />
        
          <ListItemText primary={props.txt} style={textStyle} button onClick={props.setCurrentTodo.bind(this, props.id)}/>

          {remainderText !== "" ? (
            <ListItem>
              <Chip label={remainderText.substring(1, 11)} />
              <Chip label={remainderText.substring(12, 17) + " UTC"} />
            </ListItem>
          ) : (
            ""
          )}
        
        <ListItemSecondaryAction>
          {props.checked ? (
            <ClearIcon aria-label="Delete Todo" onClick={props.onButtonClick } id="deleteButton"/>
          ) : (
            ""
          )}
        </ListItemSecondaryAction>
      </ListItem>
    </Card>
  );
};

export default TodoListItem;
