import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import List from './src/components/List'

export default class App extends Component {
  render() {
    return (
      <List />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
