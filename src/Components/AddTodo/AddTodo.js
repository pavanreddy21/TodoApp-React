import React from "react";
import { Paper, Fab, Grid } from "@material-ui/core";

import InputBase from "@material-ui/core/InputBase";
import { withStyles } from "@material-ui/core/styles";

import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const styles = {
  bootstrapRoot: {
    "label + &": {
      //marginTop: theme.spacing.unit * 3,
    }
  },
  bootstrapInput: {
    borderRadius: "25px",
    position: "relative",
    // backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "100%",
    // padding: '10px 12px',
    // transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:focus": {
      borderColor: "#80bdff",
      borderRadius: "25px",
      border: "2px solid #609"
    }
  },
  bootstrapFormLabel: {
    fontSize: 18
  }
};

function AddTodo(props) {
  const { classes } = props;

  // value={props.inputValue}
  //       onChange={props.onInputChange}
  //       onKeyPress={props.onInputKeyPress}
  return (
    <React.Fragment>
    {/* <Paper style={{ margin: 16, padding: 16 }}> */}
      <Grid container style={{  padding: 14 }}>
        <Grid xs={10} md={11} item style={{ paddingRight: 16 }}>
          <InputBase
            id="bootstrap-input"
            placeholder="Click to quickly add a task"
            value={props.inputValue}
            onChange={props.onInputChange}
            onKeyPress={props.onInputKeyPress}
            classes={{
              root: classes.bootstrapRoot,
              input: classes.bootstrapInput
            }}
            fullWidth
          />
        </Grid>
        <Grid xs={2} md={1} item>
          <Fab size="small" onClick={props.onButtonClick}>
            <ArrowUpwardIcon color={props.inputValue==="" ? "disabled":"primary"}/>
          </Fab>
        </Grid>
      </Grid>
    {/* </Paper> */}
    </React.Fragment>
  );
}

export default withStyles(styles)(AddTodo);
