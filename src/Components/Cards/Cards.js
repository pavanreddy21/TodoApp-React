import React from "react";
import PrimaryCard from "./PrimaryCard";

import { withStyles } from "@material-ui/core/styles";

import TaskDescriptionCard from "./TaskDescriptionCard";

const styles = theme => ({
  TaskDescriptionCard: {
    paddingLeft: "40px",
    width: 335
  },
  tableContainer: {
    width: 335
  },
  content: {
    display: "flex",

    flexGrow: 1,
    flexWrap: "wrap",
    //paddingTop: theme.spacing.unit * 15,
    //paddingLeft: theme.spacing.unit * 5,
    //height: '100vh',
    overflow: "auto"
  }
});

function Cards(props) {
  console.log(props);
  const { classes } = props;

  console.log(props.disp);

  return (
    <div className={classes.content}>
      <div className={classes.tableContainer}>
        <PrimaryCard
          state={props.state}
          changeInput={props.changeInput}
          addTodo={props.addTodo}
          checkTodo={props.checkTodo}
          removeTodo={props.removeTodo}
          disp={props.disp}
          setCurrentTodo={props.setCurrentTodo}
        />
      </div>

      <div className={classes.TaskDescriptionCard}>
        {props.disp !== "" ? (
          <TaskDescriptionCard
            state={props.state}
            onModalClose={props.onModalClose}
            disp={props.disp}
          />
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}

export default withStyles(styles)(Cards);
