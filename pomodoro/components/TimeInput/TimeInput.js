import React, {Component} from "react";
import {Text, View, TextInput} from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";

export default class TimeInput extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.number
  };

  state = {
    mins: Math.floor(this.props.value / 60),
    secs: this.props.value % 60
  };

  handleMinChange = minString => {
    const mins = +minString;
    this.setState({mins});
    this.props.onChange(mins * 60 + this.state.secs);
  };

  handleSecChange = secString => {
    const secs = +secString;
    this.setState({secs});
    this.props.onChange(this.state.mins * 60 + secs);
  };
  render() {
    return (
      <View style={styles.container}>
        {this.props.title && (
          <Text style={styles.bold}>{this.props.title}</Text>
        )}
        <View style={styles.controls}>
          <Text>Mins: </Text>
          <TextInput
            defaultValue={`${this.state.mins}`}
            style={styles.input}
            keyboardType="numeric"
            onChangeText={this.handleMinChange}
          />
          <Text>Secs: </Text>
          <TextInput
            defaultValue={`${this.state.secs}`}
            style={styles.input}
            keyboardType="numeric"
            onChangeText={this.handleSecChange}
          />
        </View>
      </View>
    );
  }
}
