import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Camera from './src/components/Camera'
import Messages from './src/components/Messages'

export default class App extends Component<Props> {
  render() {
    return (
      <Messages />
    );
  }
}

const styles = StyleSheet.create({
});
