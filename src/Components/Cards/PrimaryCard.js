import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";

import AddTodo from "../AddTodo/AddTodo";
import { useInputValue } from "../custom-hooks";
import { Paper, Card } from "@material-ui/core";

import TodoList from "../TodoList/TodoList";

const styles = {
  innerCard: {
    height: "380px",
    width: "375px",
    overflowY: "auto",
    marginRight: "200px"
  }
  ,
  outerCard:{
    height: "450px",
    width: "375px",
    marginRight: "200px"
  }
};

function PrimaryCard(props) {
  const { inputValue, changeInput, clearInput, keyInput } = useInputValue();
  const clearInputAndAddTodo = _ => {
    clearInput();
    props.addTodo(inputValue);
  };

  const { classes } = props;

  return (
    <Card raised={true} className={classes.outerCard}>
    <Card  className={classes.innerCard}>
     

      
      <TodoList
        state={props.state}
        items={props.state.tasklist[props.state.currentList].today}
        onItemCheck={idx => props.checkTodo(idx)}
        onItemRemove={idx => props.removeTodo(idx)}
        setCurrentTodo={idx => props.setCurrentTodo(idx)}
      />
      

      {/* </Paper> */}
    </Card>
    <AddTodo
        inputValue={inputValue}
        onInputChange={changeInput}
        onButtonClick={clearInputAndAddTodo}
        onInputKeyPress={event => keyInput(event, clearInputAndAddTodo)}
      />
      </Card>
  );
}

PrimaryCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PrimaryCard);
