import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
import Icon from "react-native-vector-icons/SimpleLineIcons";
import Emoji from 'react-native-emoji';

export default class CustomeCell extends Component<Props> {
  
  onPressButton(){

  }

  render() {
    return (
      <View style={{height: 70}}>
          <View style={styles.container}>
            <View style={styles.avatarContainer}>
              <Image
                style={{height: 50, width: 50}}
                source={this.props.bitmoji}
              />
            </View>
            <View style={styles.infoContainer}>
              <View style={styles.infoDetail}>
                <View style={styles.infoDetailName}>
                  <Text style={{fontSize: 20}}> {this.props.name} 
                  </Text>
                </View>
                <View style={styles.infoDetailStatus}>
                  <View style={{paddingRight: 5}}>
                    <Icon
                      name={this.props.statusIcon}
                      size={10}
                      color= {this.props.statusColor}
                      style={styles.beer} /> 
                  </View>
                  <View style={{paddingRight: 5}}>
                    <Text style={{color: 'grey' }}> {this.props.status}
                    </Text>
                  </View>
                  <View style={{paddingRight: 5}}>
                    <Text style={{color: 'grey'}}>  {this.props.timeStamp}
                    </Text>
                  </View>                  
                </View>
              </View>
              <View style={styles.infoEmoji}>
                <Emoji name={this.props.emojiName} style={{fontSize: 20}} />
              </View>              
            </View>                  
          </View>                 
      </View>      
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        elevation: 2,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',        
    },
    avatarContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    infoContainer: {
      flex: 5,
      flexDirection: 'row',
    },
    infoDetail: {
      flex: 5,
      flexDirection: 'column'
    },
    infoDetailName:{
      flex: 1,
      paddingTop: 10,
    },
    infoDetailStatus: {
      flex: 1,
      paddingLeft: 5,
      flexDirection: 'row',
    },
    infoEmoji: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
});