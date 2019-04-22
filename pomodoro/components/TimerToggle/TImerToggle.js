import React, {Component} from "react";
import {Button} from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";

export default class TimerToggle extends Component {
  render() {
    const {isRunning, onToggle} = this.props;
    const title = isRunning ? "Pause Timer" : "Start Time";
    return (
      <Button style={styles.button}>
        title={title}
        onPress = {onToggle}
      </Button>
    );
  }
}

TimerToggle.PropTypes = {
  onToggle: PropTypes.func.isRequired,
  isRunning: PropTypes.bool.isRequired
};
