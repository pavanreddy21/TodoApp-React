import React from "react";
import { List } from "@material-ui/core";

import TodoListItem from "./TodoListItem";

const TodoList = function(props) {
  console.log("check");
  console.log(props.items);
  console.log("check");
  return (
    <>
      {/* style={{ overflow: "scroll" }} */}
      {/* <Paper style={{ margin: 16 }}> */}
      {props.items.length > 0 && (
        <List>
          {props.items.map((todo, idx) => (
            <TodoListItem
              {...todo}
              key={`TodoItem.${idx}`}
              divider={idx !== props.items.length - 1}
              onButtonClick={() => props.onItemRemove(idx)}
              onCheckBoxToggle={() => props.onItemCheck(idx)}
              id={idx}
              setCurrentTodo={props.setCurrentTodo}
              state={props.state}
              remainder={todo.remainder}
            />
          ))}
        </List>
      )}
    </>
  );
};

export default TodoList;
