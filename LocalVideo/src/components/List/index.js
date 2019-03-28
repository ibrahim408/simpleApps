import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import CustomListView from './CustomListView'   

export default class List extends Component<Props> {

  getData() {
    return [
      {
        key: 1, title: 'Albert Einstein',
        description: 'Video 00:34',
        image_url: require('../../images/2.jpeg')
      },
      {
        key: 2,
        title: 'Isaac newton',
        description: 'Video 00:34',
        image_url: require('../../images/3.jpeg')
      },
      {
        key: 1, title: 'Albert Einstein',
        description: 'Video 00:34',
        image_url: require('../../images/4.jpeg')
      },
      {
        key: 2,
        title: 'Isaac newton',
        description: 'Video 00:34',
        image_url: require('../../images/5.jpeg')
      },
      {
        key: 1, title: 'Albert Einstein',
        description: 'Video 00:34',
        image_url: require('../../images/2.jpeg')
      },
      {
        key: 2,
        title: 'Isaac newton',
        description: 'Video 00:34',
        image_url: require('../../images/3.jpeg')
      },
      {
        key: 1, title: 'Albert Einstein',
        description: 'Video 00:34',
        image_url: require('../../images/4.jpeg')
      },
      {
        key: 2,
        title: 'Isaac newton',
        description: 'Video 00:34',
        image_url: require('../../images/5.jpeg')
      },
      {
        key: 1, title: 'Albert Einstein',
        description: 'Video 00:34',
        image_url: require('../../images/2.jpeg')
      },
      {
        key: 2,
        title: 'Isaac newton',
        description: 'Video 00:34',
        image_url: require('../../images/3.jpeg')
      },
    ]
  }

   render() {
      return (
         <View style={styles.container}>
           <CustomListView
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
      backgroundColor: 'grey'
   }
})