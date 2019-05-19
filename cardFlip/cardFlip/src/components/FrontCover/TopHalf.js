import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity, Image} from 'react-native';
import FireIcon from "react-native-vector-icons/FontAwesome5";

export default class TopHalf extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.evolutionContainer}>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end', marginRight: 10}}>
            <Text style={{fontSize: 7.5}}>Evolves from Charmeleon
            </Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end', marginRight: 10}}>
            <Text style={{fontSize: 7.5}}>Put Charizard on the Stage | card
            </Text>
          </View>        
        </View>
        <View style = {styles.lineStyle} /> 
        <View style={styles.nameContainer}>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
            <Text style={{fontSize: 20,fontWeight: 'bold'}}>Charizard
            </Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row', marginRight: 15}}>
            <View style={{flex: 4, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
              <Text style={{fontSize: 20, color: 'red'}}> 120 HP
              </Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
              <View style={{height: 25, width:25, borderRadius: 30/2, marginRight: 1, backgroundColor: 'red'}}>
                <View style={{flex: 1, justifyCenter: 'center', alignItems: 'center'}}>
                  <FireIcon
                    name="gripfire"
                    color="black"
                    size={22}
                  />                 
                </View>              
              </View>           
            </View>          
          </View>         
        </View> 
        <View style={styles.imageContainer}>
          <View style={{flex: 1, marginRight: 10, marginLeft: 10, marginTop: 5, marginBottom: 5, backgroundColor: '#CCA327'}}>
            <View style={{flex: 1, margin:5, backgroundColor: 'white'}}>
              <Image
                style={styles.imageStyle}
                source={require('../../images/charizard2.jpg')}
              />            
            </View>
          </View>
        </View>
        <View style={styles.heightWeightContainer}>
          <View style ={{flex:1 , backgroundColor: '#EDD867',marginRight: 23, marginLeft: 23, marginTop: 0, marginBottom: 3}}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginRight: 2, marginLeft: 2, marginTop: 1, marginBottom: 1, backgroundColor: '#CCA327'}}>
              <Text style={{ fontSize: 11, fontWeight: 'bold'}}>Flame Pokemon. HT 5'07", WT: 200 lbs.
              </Text>
            </View>
          </View>
        </View>                
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
  },
  evolutionContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 3,
  },
  nameContainer: {
    flex: 3, 
    flexDirection: 'row',  
  }, 
  imageContainer: {
    flex: 15,
  },
  heightWeightContainer: {
    flex: 2,
  }, 
  imageStyle: {
    flex:1 , 
    width: undefined, 
    height: undefined
  },
  lineStyle:{
    marginTop: 5,
    borderWidth: 0.5,
    borderColor:'#EDD867',
    marginLeft: 8,
    marginRight: 8,
   }      
});