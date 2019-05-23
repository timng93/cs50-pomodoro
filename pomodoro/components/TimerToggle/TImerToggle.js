import React, {Component} from "react";
import {Button, Text} from "react-native";
import PropTypes from "prop-types";

const TimerToggle = props => {
  const title = props.isRunning ? "Pause" : "Start";
  return <Button title={title} onPress={props.onToggle} />;
};

TimerToggle.propTypes = {
  onToggle: PropTypes.func.isRequired,
  isRunning: PropTypes.bool.isRequired
};

export default TimerToggle;
