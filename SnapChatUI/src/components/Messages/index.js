import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import CustomeListView from './CustomeListView'   

export default class Messages extends Component<Props> {

  getData() {
    return [
      {
        key: 1, name: 'Abdi',
        bitmoji: require('../../images/bitmoji1.jpeg'),
        status: 'Recieved',
        statusIcon: 'cursor',
        statusColor: 'purple',
        timeStamp: '13m',
        emojiName: 'yellow_heart'
      },
      {
        key: 2,
        name: 'rick fox',
        bitmoji: require('../../images/bitmoji2.jpeg'),
        status: 'Opened',
        statusIcon: 'cursor',
        statusColor: 'red',
        timeStamp: '50m',
        emojiName: 'hourglass_flowing_sand'        
      },
      {
        key: 1, name: 'Jessica Black',
        bitmoji: require('../../images/bitmoji3.jpeg'),
        status: 'Tap to chat',
        statusIcon: 'bubble',
        statusColor: 'red',
        timeStamp: '2h',
        emojiName: 'sunglasses'
      },
      {
        key: 2,
        name: 'hibo',
        bitmoji: require('../../images/bitmoji4.jpg'),
        status: 'Opened',
        statusIcon: 'bubble',
        statusColor: 'blue',
        timeStamp: '10h',
        emojiName: 'sunglasses'
      },
      {
        key: 1, name: 'ibrahim ibrahim',
        bitmoji: require('../../images/bitmoji5.jpeg'),
        status: 'Opened',
        statusIcon: 'cursor',
        statusColor: 'purple',
        timeStamp: '18h',
        emojiName: 'blush'
      },
      {
        key: 2,
        name: 'ryan',
        bitmoji: require('../../images/bitmoji6.png'),
        status: 'Recieved',
        statusIcon: 'bubble',
        statusColor: 'purple',
        timeStamp: '3d',
        emojiName: 'blush'
      },
      {
        key: 1, name: 'lee ryan',
        bitmoji: require('../../images/bitmoji2.jpeg'),
        status: 'Recieved',
        statusIcon: 'cursor',
        statusColor: 'purple',
        timeStamp: '2w',
        emojiName: 'fire'
      },
      {
        key: 2,
        name: 'big red',
        bitmoji: require('../../images/bitmoji3.jpeg'),
        status: 'Recieved',
        statusIcon: 'cursor',
        statusColor: 'purple',
        timeStamp: '2w',
        emojiName: 'sunglasses'
      },
      {
        key: 1, name: 'older bro',
        bitmoji: require('../../images/bitmoji4.jpg'),
        status: 'Recieved',
        statusIcon: 'cursor',
        statusColor: 'blue',
        timeStamp: '4w',
        emojiName: 'blush'
      },
      {
        key: 2,
        name: 'lala',
        bitmoji: require('../../images/bitmoji5.jpeg'),
        status: 'Opened',
        statusIcon: 'bubble',
        statusColor: 'blue',
        timeStamp: '4w',
        emojiName: 'blush'
      },
    ]
  }

   render() {
      return (
         <View style={styles.container}>
           <CustomeListView
             navigation={this.props.navigation}
             itemList={this.getData()}
           />
         </View>
      )
   }
}


const styles = StyleSheet.create ({
   container: {
      flex: 1,
      backgroundColor: 'white',
      paddingTop: 50
   }
})