import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { TaskVariety } from "../TaskVariety";
import Fab from "@material-ui/core/Fab";
import Cards from "../Components/Cards/Cards";

class HomePage extends React.Component {
  state = {
    open: true,
    tasklist: {
      "AllTasks": { today: [] },
      "personal": { today: [] },
      "work": {
        today: []
      },
      "groceryList": {
        today: []
      }
    },
    currentList: "AllTasks",
    currentTodo: ""
  };

  handleDrawer = () => {
    var presentState = this.state.open;

    if (presentState) {
      this.setState({ open: false });
    } else this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  onCurrentListChange = txt => {
    var presentState = { ...this.state };
    presentState.currentList = txt;
    presentState.currentTodo = "";
    this.setState(presentState);
  };

  changeInput = event => {
    var presentState = { ...this.state };
    presentState.currentList = event.target.value;
    this.setState(presentState);
  };

  addTodo = txt => {
    var presentState = { ...this.state };

    if (txt !== "") {
      presentState.tasklist[presentState.currentList].today.push({
        txt,
        checked: false,
        remainder: ""
      });
    }

    this.setState(presentState);
  };

  checkTodo = idx => {
    var presentState = { ...this.state };

    presentState.tasklist[presentState.currentList].today.map((todo, index) => {
      if (idx === index) {
        todo.checked = !todo.checked;
      }

      return todo;
    });

    this.setState(presentState);
  };

  setCurrentTodo = (text) => {
    var presentState = { ...this.state };
    presentState.currentTodo = text;
    this.setState(presentState);
  };

  onModalClose = text => {
    var presentState = { ...this.state };
    // console.log(text);
    presentState.tasklist[presentState.currentList].today[
      presentState.currentTodo
    ].remainder = text;
    // console.log(st.tasklist[st.currentList].today[this.state.currentTodo]);
    // console.log("yo");
    // console.log(this.state.tasklist[this.state.currentList].today[this.state.currentTodo].txt);
    this.setState(presentState);
  };

  removeTodo = (idx) => {
    var presentState = { ...this.state };

    presentState.tasklist[
      presentState.currentList
    ].today = presentState.tasklist[presentState.currentList].today.filter(
      (todo, index) => idx !== index
    );
    presentState.currentTodo = "";
    console.log(presentState.tasklist.AllTasks.today);
    this.setState(presentState);
  };

  render() {
    const { classes } = this.props;
    //  console.log(Object.keys(this.state.tasklist));
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="absolute"
          className={classNames(
            classes.appBar,
            this.state.open && classes.appBarShift
          )}
          style={{ background: "white", color: "gray" }}
        >
          <Toolbar
            disableGutters={!this.state.open}
            className={classes.toolbar}
          >
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawer}
              className={classNames(
                classes.menuButton,
                this.state.open && classes.menuButtonHidden
              )}
            >
              <MenuIcon />
            </IconButton>

            <Fab
              variant="extended"
              style={{ background: "blue", color: "white" }}
              aria-label="Add"
              className={classes.margin}
            >
              +New
            </Fab>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(
              classes.drawerPaper,
              !this.state.open && classes.drawerPaperClose
            )
          }}
          open={this.state.open}
        >
          <div className={classes.toolbarIcon} />
          <Divider />
          <List>
            <TaskVariety state={this.state} changeList={this.onCurrentListChange} />
          </List>
          <Divider />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />

          <h1 style={{ width: "100%" }}>{this.state.currentList}</h1>

          <Cards
            state={this.state}
            changeInput={this.changeInput}
            addTodo={this.addTodo}
            checkTodo={this.checkTodo}
            removeTodo={this.removeTodo}
            
            setCurrentTodo={this.setCurrentTodo}
            onModalClose={this.onModalClose}
          />
        </main>
      </div>
    );
  }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired
};

// Styling using Jss
const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },

  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  menuButtonHidden: {
    // display: 'none',
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),

    width: 0,
    [theme.breakpoints.up("sm")]: {
      width: 0
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    display: "flex",

    flexGrow: 1,
    flexWrap: "wrap",
    paddingTop: theme.spacing.unit * 15,
    paddingLeft: theme.spacing.unit * 5,
    height: "100vh",
    overflow: "auto"
  },
  heading: {
    width: "1300px"
  },

  tableContainer: {
    width: 335
  },
  h5: {
    marginBottom: theme.spacing.unit * 2
  }
});

export default withStyles(styles)(HomePage);
