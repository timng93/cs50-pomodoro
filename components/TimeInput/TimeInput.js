import React, {Component} from "react";
import {Text, View, TextInput} from "react-native";
// import PropTypes from "prop-types";
// import styles from "./styles";

export default class TimeInput extends Component {
  state = {
    secs: this.props.value % 60,
    mins: Math.floor(this.props.value / 60)
  };
  getMin = minChange => {
    const mins = +minChange;
    this.setState({mins});
    this.props.onChange(mins * 60 + this.state.secs);
  };

  getSec = secChange => {
    const secs = +secChange;
    this.setState({secs});
    this.props.onChange(this.state.mins * 60 + secs);
  };
  render() {
    return (
      <View>
        <Text>TimeInput</Text>
      </View>
    );
  }
}
