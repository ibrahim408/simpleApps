import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.fontOne}>   wake up at 6am everyday </Text>
          <Text style={styles.fontTwo}>   lets see what IBM talking about </Text>
          <Text style={styles.fontThree}> enjoy the little moments </Text>
          <Text style={styles.fontFour}>  beatiful weather G </Text>
          <Text style={styles.fontFour}>  30 days they say </Text>
          <Text style={styles.fontFour}>  思毛與 美夫君志持 此岳尓 菜採須兒 家吉閑名 告 </Text>
          <Text style={styles.fontFour}>  waxaan la ciyaareynaa </Text>
          <Text style={styles.fontFour}>  kaliya ku raaxeyso </Text>
        </View>
        <View style={styles.button}>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  textContainer: {
    justifyContent: 'space-between',
    height: "70%"
  },
  fontOne: {
    fontFamily: 'Avenir-Heavy'
  },
  fontTwo: {
    fontFamily: 'GujaratiSangamMN-Bold'
  },
  fontThree: {
    fontFamily: 'Trebuchet-BoldItalic'
  },
  fontFour: {
    fontFamily: 'Zapfino' 
  },
  button: {
    position: 'absolute',
    alignSelf: 'center', 
    bottom: 50,
    backgroundColor: 'orange',
    height: 50
  }
});
