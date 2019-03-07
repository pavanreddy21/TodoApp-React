import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Card, CardContent } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import DatePickerModal from "../DatePicker/DatePickerModal";
import ButtonBase from "@material-ui/core/ButtonBase";
import Modal from "@material-ui/core/Modal";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: 355,
    height: 542
  },
  paper: {
    height: 140,
    width: 100
  },
  card: {},
  smallCard: {
    width: "100",
    height: "50"
  },
  model: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: "none"
  }
});
class TaskDescriptionCard extends React.Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    console.log(this.props);
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.model}>
            <DatePickerModal
              onModalClose={this.props.onModalClose}
              handleClose={this.handleClose}
            />
          </div>
        </Modal>

        <Card raised={true} className={classes.root}>
          <h2>
            {
              this.props.state.tasklist[this.props.state.currentList].today[
                this.props.state.currentTodo
              ].txt
            }
          </h2>
          <Grid container className={classes.root} spacing={16}>
            <Grid item xs>
              <Grid
                container
                className={classes.demo}
                justify="center"
                spacing={16}
              >
                <Grid item>
                  <Card
                    raised={true}
                    className={classes.paper}
                    style={{ height: "70px", marginTop: "20px" }}
                  >
                    <CardContent>
                      <ButtonBase onClick={this.handleOpen}>
                        <Typography variant="caption">Add Remainder</Typography>
                      </ButtonBase>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item>
                  <Card
                    raised={true}
                    className={classes.paper}
                    style={{ height: "70px", marginTop: "20px" }}
                  >
                    <CardContent>
                      <Typography variant="caption">Share Task</Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item>
                  <Card
                    raised={true}
                    className={classes.paper}
                    style={{ height: "70px", marginTop: "20px" }}
                  >
                    <CardContent>
                      <Typography variant="caption">Personal</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </React.Fragment>
    );
  }
}

TaskDescriptionCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TaskDescriptionCard);
