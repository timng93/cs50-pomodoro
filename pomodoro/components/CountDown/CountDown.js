import React from "react";
import {Text} from "react-native";
import CountDown from ".";
// import PropTypes from "prop-types";
import styles from "./styles";

const CountDown = props => {
  const totalSecs = Math.round(props.timeRemaining / 1000);
  const mins = Math.floor(totalSecs / 60);
  const secs = totalSecs % 60;
  return <Text style={styles.text}>CoutDown</Text>;
};

export default CountDown;
