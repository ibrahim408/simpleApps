import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import CardFlip from 'react-native-card-flip';
import BackCover from './src/components/BackCover'
import FrontCover from './src/components/FrontCover'

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <CardFlip style={styles.cardContainer} ref={(card) => this.card = card} >
          <TouchableOpacity activeOpacity={1} style={[styles.card]} onPress={() => this.card.flip()} >
            <FrontCover />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={1} style={[styles.card]} onPress={() => this.card.flip()} >
            <BackCover />
          </TouchableOpacity>
        </CardFlip>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  cardContainer:{
    width: 320,
    height: 500,
  },
  card:{
    width: 320,
    height: 500,
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity:0.5,
  },
  card1: {
    backgroundColor: '#FE474C',
  },
  card2: {
    backgroundColor: '#FEB12C',
  },
  label: {
    lineHeight: 470,
    textAlign: 'center',
    fontSize: 55,
    fontFamily: 'System',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
