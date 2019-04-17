import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, SafeAreaView, Image,TouchableHighlight} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends Component<Props> {
  
  constructor(props){
    super(props)
    this.state = { 
      activeIndex:0,
      data: [
        {
          key: 1,
          name: "tiger",
          image_url: require('./images/tiger.jpeg')
        },
        {
          key: 2,
          name: "lion",
          image_url: require('./images/lion.jpeg')
        },
        {
          key: 3,
          name: "leopard",
          image_url: require('./images/leopard.jpeg')
        },
        {
          key: 4,
          name: "cheetah",
          image_url: require('./images/cheetah.jpeg')
        },                        
      ] 
    };
  }  

    _renderItem ({item, index}) {
        return (
          <View style={{flex:1,justifyContent:'center',alignItems:'center', shadowOffset: { width: 10, height: 10 }, shadowColor: '#000', shadowOpacity: 1, elevation: 10, backgroundColor : "#0000"}}> 
              <Image
                  source={item.image_url}
                  />
              <Text style={{fontSize: 25, color:'#fff'}} >{item.name}</Text>
          </View>
        );
    }
  render() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{height: 50, width: 50}}>
              <TouchableHighlight
                  onPress={
                      () => { this.carousel._snapToItem(this.state.activeIndex-1)}
                  }>
                  <Icon
                    name="chevron-left"
                    backgroundColor ='red'
                    size={20} 
                    />
              </TouchableHighlight>
            </View>
            <View style={{height: 250, width: 250}}>
              <Carousel
                      ref={ref => this.carousel = ref}
                      data={this.state.data}
                      sliderWidth={250}
                      itemWidth={250}
                      renderItem={this._renderItem}
                      onSnapToItem = { index => this.setState({activeIndex:index}) }
                  />
           </View>
           <View style={{height: 50, width: 50, paddingLeft: 30}}>
              <TouchableHighlight            
                  onPress={
                      () => { this.carousel._snapToItem(this.state.activeIndex+1)}
                  }>
                  <Icon
                    name="chevron-right"
                    backgroundColor ='red'
                    size={20} 
                    />              
              </TouchableHighlight>
            </View>
        </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#39842A',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide: {
    height: 50,
    width: 50,
    backgroundColor: 'red'
  }
});
