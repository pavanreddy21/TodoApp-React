import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export function TaskVariety(props) {
  return (
    <div>
      <ListItem button>
      <i class="material-icons">
check_circle_outline
</i> <p style={{color:"blue",fontWeight:"700",fontSize:"18px"}}>MY LISTS</p>
        {/* <ListItemText primary="My Lists" style={{color:"blue"}}/> */}
      </ListItem>
      <ListItem button onClick={props.changeList.bind(this, "AllTasks")}>
        <ListItemText style={{paddingLeft:"30px"}} primary="All Tasks"  />
      </ListItem>
      <ListItem button onClick={props.changeList.bind(this, "personal")}>
        <ListItemText style={{paddingLeft:"30px"}} primary="Personal" />
      </ListItem>
      <ListItem button onClick={props.changeList.bind(this, "work")}>
        <ListItemText style={{paddingLeft:"30px"}} primary="Work" />
      </ListItem>
      <ListItem button onClick={props.changeList.bind(this, "groceryList")}>
        <ListItemText style={{paddingLeft:"30px"}} primary="Grocery List" />
      </ListItem>
    </div>
  );
}
