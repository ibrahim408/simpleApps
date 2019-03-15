import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Alert, TouchableHighlight} from 'react-native';
import Icon from "react-native-vector-icons/SimpleLineIcons";
import { Stopwatch, Timer } from 'react-native-stopwatch-timer'

export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      timerStart: false,
      stopwatchStart: false,
      totalDuration: 90000,
      timerReset: false,
      stopwatchReset: false,
    };
    this.playPressed = this.playPressed.bind(this);
    this.puasePressd = this.puasePressd.bind(this);
    this.reset = this.reset.bind(this);
  }
  
  getFormattedTime(time) {
      this.currentTime = time;
  };

  playPressed(){
    if(this.state.stopwatchStart == false){
      this.setState({
        stopwatchStart: true, 
        stopwatchReset: false
      });     
    }
  }

  puasePressd(){
    if(this.state.stopwatchStart == true){
      this.setState({
        stopwatchStart: false, 
        stopwatchReset: false,
      });     
    }
  }

  reset(){
    this.setState({
      stopwatchStart: false,
      stopwatchReset: true,
    });
  }

  render() {
    return (
      <View style={styles.containerLayout}>
        <View style={styles.display}>
          <View style={styles.resetContainer}>
            <Text style={{color: 'white', fontSize: 20}} onPress={this.reset}>reset
            </Text>
          </View>
          <Stopwatch msecs start={this.state.stopwatchStart}
            reset={this.state.stopwatchReset}
            options={options}
            getTime={this.getFormattedTime} />
        </View>
        <View style={styles.pauseAndPlay}>
          <View style={styles.play}>
            <Icon
              name="control-play"
              color="white"
              size={45}
              onPress={this.playPressed}
            />
          </View>
          <View style={styles.pause}>
            <Icon
              name="control-pause"
              color="white"
              size={45}
              onPress={this.puasePressd}
            />          
          </View>
        </View>
      </View>
    );
  }
}

const options = {
  container: {
    padding: 5,
    width: 300,
  },
  text: {
    fontSize: 40,
    color: '#FFF',
    marginLeft: 7,
  }
};

const styles = StyleSheet.create({
  containerLayout: {
    flex: 1,
    backgroundColor: 'red',
  },
  display: {
    flex: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey'
  },
  pauseAndPlay: {
    flex: 8,
    backgroundColor: '#5DBC3C',
    flexDirection: 'row'
  },
  play: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5261F2'
  },
  pause: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',    
    backgroundColor: "#5DBC3C"
  },
  resetContainer: {
    position: 'absolute',
    top: 80,
    left: 250,
    width: 100,
    height: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
