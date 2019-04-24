import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import MainApp from "./src/MainApp";

export default class App extends Component<Props> {
  render() {
    return (
      <MainApp />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  }
});
