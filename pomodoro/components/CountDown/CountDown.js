import {Text} from "react-native";
// import PropTypes from "prop-types";
import styles from "./styles";
import React, {Component} from "react";

export default class CountDown extends Component {
  render() {
    const {timeRemain} = this.props;
    const totalSecs = Math.round(timeRemain / 1000);
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    const paddedZero = secs < 10 ? "0" : "";
    return (
      <Text style={styles.text}>
        {mins}:{paddedZero}
        {secs}
      </Text>
    );
  }
}
