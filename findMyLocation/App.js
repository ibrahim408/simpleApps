import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableHighlight,Dimensions} from 'react-native';

export default class App extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
      show: false,
    };

    this.onPressButton = this.onPressButton.bind(this)
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }
  
  onPressButton(){
    this.setState({
    show: true,
    });
  }

  renderLocation(){
    if(this.state.show == true){
      return(
          <View>
          <View style={styles.latitudeTextContainer}>
            <Text style={{fontSize: 15, fontWeight: "bold"}}>Latitude: {this.state.latitude}
            </Text>
          </View>
          <View style={styles.longitudeTextContainer}>
            <Text style={{fontSize: 15, fontWeight: "bold"}}>Longitude: {this.state.longitude}
            </Text>
          </View>
          </View>
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>    
        {this.renderLocation()}
        <TouchableHighlight
          onPress={this.onPressButton}
          style={styles.buttonStyle}
        >
        <Text style={{fontSize: 15, fontWeight: "bold"}}> Find My Location
        </Text>
        </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8C92AC'
  },
  buttonStyle: {
    position: 'absolute',
    bottom: 80,
    left: '22%',
    width: 200,
    height: 56,
    borderRadius:50,
    borderColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BEBEBE'
  },
  latitudeTextContainer:{
    position: 'absolute',
    width: 200,
    height: 56,
    top: 200,
    left: '22%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  longitudeTextContainer:{
    position: 'absolute',
    width: 200,
    height: 56,
    top: 150,
    left: '22%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }  
});
