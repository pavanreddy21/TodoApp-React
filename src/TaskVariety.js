import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export function TaskVariety(props) {

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
      
    </div>
  );
}
