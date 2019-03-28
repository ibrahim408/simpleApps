import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import PlayVideo from 'react-native-video';
import savedVideo from '../../localVideos/earth.mp4'

export default class Video extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'green'}}>
        <PlayVideo source={savedVideo}   // Can be a URL or a local file.
          ref={(ref) => {
          this.player = ref
          }}                                      // Store reference
          onBuffer={this.onBuffer}                // Callback when remote video is buffering
          onError={this.videoError}               // Callback when video cannot be loaded
          resizeMode="cover"
          style={StyleSheet.absoluteFill} />
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
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,

    bottom: 0,
    right: 0,
  }
});
