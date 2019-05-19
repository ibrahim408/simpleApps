import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity, Image} from 'react-native';

export default class BackCover extends Component<Props> {
  render() {
    return (
      <View style={styles.border}>
        <View style={styles.container}>
          <Image
            style={styles.imageStyle}
            source={require('../../images/cardBackSide.png')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  border: {
    flex: 1,
    backgroundColor: '#152852',
    borderRadius: 20
  },
  container: {
    flex: 1,
    margin: 15,
    backgroundColor: 'white',
  },
  imageStyle: {
    flex:1 , 
    width: undefined, 
    height: undefined
  }
});