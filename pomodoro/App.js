import React from "react";
import {StyleSheet, Text, View} from "react-native";
import TimeInput from "./components/TimeInput";
import CountDown from "./components/CountDown";
import TimerToggle from "./components/TimerToggle";

const DEFAULT_WORK_MINS = 25;

const minToSec = mins => mins * 60;

export default class App extends React.Component {
  state = {
    timeRemain: minToSec(DEFAULT_WORK_MINS) * 1000
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Test</Text>
        <CountDown timeRemain={this.state.timeRemain} />
        <TimeInput />
        <TimerToggle />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
