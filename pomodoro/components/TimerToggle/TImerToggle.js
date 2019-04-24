import React, {Component} from "react";
import {Button, Text} from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";

class TimerToggle extends Component {
  render() {
    const {isRunning, onToggle} = this.props;
    const title = isRunning ? "Pause Timer" : "Start Time";
    return <Text>TimerToggle</Text>;
  }
}

TimerToggle.PropTypes = {
  onToggle: PropTypes.func.isRequired,
  isRunning: PropTypes.bool.isRequired
};

export default TimerToggle;
