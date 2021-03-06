import React from "react";
import PrimaryCard from "./PrimaryCard";

import { withStyles } from "@material-ui/core/styles";

import TaskDescriptionCard from "./TaskDescriptionCard";
import AlternateCard from "./AlternateCard";

const styles = theme => ({
  TaskDescriptionCard: {
    paddingLeft: "70px",
    width: 335
  },
  tableContainer: {
    width: 335
  },
  content: {
    display: "flex",

    flexGrow: 1,
    flexWrap: "wrap",
    overflow: "auto"
  }
});

function Cards(props) {
  const { classes } = props;

  return (
    <div className={classes.content}>
      <div className={classes.tableContainer}>
        <PrimaryCard
          state={props.state}
          changeInput={props.changeInput}
          addTodo={props.addTodo}
          checkTodo={props.checkTodo}
          removeTodo={props.removeTodo}
          setCurrentTodo={props.setCurrentTodo}
        />
      </div>

      <div className={classes.TaskDescriptionCard}>
        {props.state.currentTodo !== "" ? (
          <TaskDescriptionCard
            state={props.state}
            onModalClose={props.onModalClose}
          />
        ) : (
          <AlternateCard />
        )}
      </div>
    </div>
  );
}

export default withStyles(styles)(Cards);
