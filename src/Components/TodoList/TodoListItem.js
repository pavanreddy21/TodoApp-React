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
  console.log("In todolistItem");
  console.log(props.state);
  console.log(props.state.currentTodo !== "");
  var remainderText = "";
  if (props.remainder !== "") {
    remainderText = JSON.stringify(props.remainder);
    var dat = new Date(remainderText);
    console.log(dat);
  }

  return (
    <Card raised={true}>
      <ListItem divider={props.divider}>
        <Checkbox
          onClick={props.onCheckBoxToggle}
          checked={props.checked}
          disableRipple
        />
        <ButtonBase onClick={props.setCurrentTodo.bind(this, props.id)}>
          <ListItemText primary={props.txt} />

          {remainderText !== "" ? (
            <ListItem>
              <Chip label={remainderText.substring(1, 11)} />
              <Chip label={remainderText.substring(12, 17)} />
            </ListItem>
          ) : (
            ""
          )}
        </ButtonBase>
        <ListItemSecondaryAction>
          {props.checked ? (
            <ClearIcon aria-label="Delete Todo" onClick={props.onButtonClick} />
          ) : (
            ""
          )}
        </ListItemSecondaryAction>
      </ListItem>
    </Card>
  );
};

export default TodoListItem;
