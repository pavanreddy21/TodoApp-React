import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Button from "@material-ui/core/Button";

class DatePickerModal extends React.Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);

    this.addRemainder = this.addRemainder.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  addRemainder() {
    this.props.onModalClose(this.state.startDate);
    this.props.handleClose();
  }
  render() {
    return (
      <React.Fragment>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
          showTimeSelect
        />
        <Button color="primary" onClick={this.addRemainder}>
          Add Remainder
        </Button>
      </React.Fragment>
    );
  }
}

export default DatePickerModal;
