import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, ImageBackground} from 'react-native';
import TopHalf from './TopHalf.js'
import BottomHalf from './BottomHalf.js'

export default class FrontCover extends Component<Props> {
  render() {
    return (
      <View style={styles.border}>
        <View style={styles.container}>
          <ImageBackground source={require('../../images/backGroundThree.png')}style={{width: '100%', height: '100%'}}>
            <TopHalf />
            <BottomHalf />
          </ImageBackground>                                      
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  border: {
    flex: 1,
    backgroundColor: '#EDD867',
    borderRadius: 20
  },
  container: {
    flex: 1,
    margin: 15,
    backgroundColor: '#FF9966',
  }     
});
