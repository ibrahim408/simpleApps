import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import List from './src/components/List'
import Video from './src/components/Video'
import { createStackNavigator, createAppContainer } from "react-navigation";





class App extends React.Component {

  render() {
    return (



      <List navigation={this.props.navigation} />
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    List: List,
    Video: Video
  },
  {
    initialRouteName: "List"
  }
);


export default createAppContainer(AppNavigator);

