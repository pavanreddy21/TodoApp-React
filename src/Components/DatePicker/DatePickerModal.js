import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Button from "@material-ui/core/Button";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

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
    // console.log(this.props);
    // console.log(this.state.startDate);

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
