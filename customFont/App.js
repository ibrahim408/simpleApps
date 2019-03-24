import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight} from 'react-native';

export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      fontOne: 'Avenir-Heavy',
      fontTwo: 'GujaratiSangamMN-Bold',
      fontThree: 'Trebuchet-BoldItalic',
      fontFour: 'Zapfino',
      fontFive: 'Cochin',
      fontSix: 'Zapfino',
      fontSeven: 'Arial',
      fontEight: 'Verdana',
      fontChange: false
    };
  }

  onPressButton = () =>{
    if(this.state.fontChange == false){
      this.setState({
        fontOne: 'Arial',
        fontTwo: 'Arial',
        fontThree: 'Arial',
        fontFour: 'Arial',
        fontFive: 'Arial',
        fontSix: 'Arial',
        fontSeven: 'Arial',
        fontEight: 'Arial',
        fontChange: true 
      });
      return;
    }

    this.setState({
      fontOne: 'Avenir-Heavy',
      fontTwo: 'GujaratiSangamMN-Bold',
      fontThree: 'Trebuchet-BoldItalic',
      fontFour: 'Zapfino',
      fontFive: 'Cochin',
      fontSix: 'Zapfino',
      fontSeven: 'Arial',
      fontEight: 'Verdana',
      fontChange: false
    }); 

  }

  render() {   
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={{fontFamily: this.state.fontUno }}>   wake up at 6am everyday </Text>
          <Text style={{fontFamily: this.state.fontTwo }}>   lets see what IBM talking about </Text>
          <Text style={{fontFamily: this.state.fontThree }}> enjoy the little moments </Text>
          <Text style={{fontFamily: this.state.fontFour }}>  beatiful weather G </Text>
          <Text style={{fontFamily: this.state.fontFive }}>  30 days they say </Text>
          <Text style={{fontFamily: this.state.fontSix }}>  思毛與 美夫君志持 此岳尓 菜採須兒 家吉閑名 告 </Text>
          <Text style={{fontFamily: this.state.fontSeven }}>  waxaan la ciyaareynaa </Text>
          <Text style={{fontFamily: this.state.fontEight }}>  kaliya ku raaxeyso </Text>
        </View>
        <View style={styles.button}>
           <TouchableHighlight onPress={this.onPressButton}>
            <Text style={{fontFamily: 'Arial Rounded MT Bold', color: 'white'}}> Change the font
            </Text>
           </TouchableHighlight>
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
    height: "70%",
    backgroundColor: '#FFB6C1',
    borderRadius: 10,
    shadowOpacity: 0.75,
    shadowRadius: 10,
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 2 },
  },
  button: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: 'black',
    height: 50,
    width: 130,
    borderRadius: 100/2,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
