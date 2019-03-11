import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export function TaskVariety(props) {
  return (
    <div>
      <ListItem button>
        <ListItemText primary="My Lists" color="blue"/>
      </ListItem>
      <ListItem button onClick={props.changeList.bind(this, "AllTasks")}>
        <ListItemText primary="All Tasks" />
      </ListItem>
      <ListItem button onClick={props.changeList.bind(this, "personal")}>
        <ListItemText primary="Personal" />
      </ListItem>
      <ListItem button onClick={props.changeList.bind(this, "work")}>
        <ListItemText primary="Work" />
      </ListItem>
      <ListItem button onClick={props.changeList.bind(this, "groceryList")}>
        <ListItemText primary="Grocery List" />
      </ListItem>
    </div>
  );
}
