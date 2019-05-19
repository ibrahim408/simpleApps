import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity, Image} from 'react-native';
import FireIcon from "react-native-vector-icons/FontAwesome5";

export default class BottomHalf extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.descriptionContainer}>
          <View style={{flex: 1, flexDirection: 'column', justifyCenter: 'flex-end', marginTop:10}}>
            <Text style={{color: '#525DB7', fontSize: 20, fontWeight: 'bold'}}>Ability: Energy Burn
            </Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={{fontSize: 10}}>All Energy attached to this Pokémon are fire Energy instead of their usual type.
            </Text>
            <View style = {styles.lineStyle} />          
          </View>          
        </View>
        <View style={styles.descriptionDosContainer}>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center' }}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{height: 18, width:18, borderRadius: 18/2, marginRight: 1, backgroundColor: 'red'}}>
                <View style={{flex: 1, justifyCenter: 'center', alignItems: 'center'}}>
                  <FireIcon
                    name="gripfire"
                    color="black"
                    size={17}
                  />                 
                </View>              
              </View>
              <View style={{height: 18, width:18, borderRadius: 18/2, marginRight: 1, backgroundColor: 'red'}}>
                <View style={{flex: 1, justifyCenter: 'center', alignItems: 'center'}}>
                  <FireIcon
                    name="gripfire"
                    color="black"
                    size={17}
                  />                 
                </View>              
              </View>
              <View style={{height: 18, width:18, borderRadius: 18/2, marginRight: 1, backgroundColor: 'red'}}>
                <View style={{flex: 1, justifyCenter: 'center', alignItems: 'center'}}>
                  <FireIcon
                    name="gripfire"
                    color="black"
                    size={17}
                  />                 
                </View>              
              </View>
              <View style={{height: 18, width:18, borderRadius: 18/2, marginRight: 1, backgroundColor: 'red'}}>
                <View style={{flex: 1, justifyCenter: 'center', alignItems: 'center'}}>
                  <FireIcon
                    name="gripfire"
                    color="black"
                    size={17}
                  />                 
                </View>              
              </View>                                                                      
            </View>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}> Fire Spin
              </Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
              <Text style={{fontSize: 20}}>200
              </Text>
            </View>                        
          </View>
          <View style={{flex: 1}}>
            <Text style={{fontSize: 11}}>Discard 3 Engergy attached to this Pokémon.
            </Text>
          </View>          
        </View> 
        <View style={styles.attributeContainer}>
          <View style={{flex: 1, flexDirection: 'column'}}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
              <Text style={{fontSize: 8, fontWeight: 'bold'}}>weakness
              </Text>
            </View>
            <View style={{flex: 2, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end'}}>
              <View style={{height: 12, width:12, borderRadius: 12/2, marginRight: 1, backgroundColor: 'blue'}}>
                <View style={{flex: 1, justifyCenter: 'center', alignItems: 'center'}}>
                  <FireIcon
                    name="mandalorian"
                    color="black"
                    size={13}
                  />                 
                </View>              
              </View>
            </View>            
          </View>
          <View style={{flex: 1, flexDirection: 'column'}}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
              <Text style={{fontSize: 8, fontWeight: 'bold'}}>resistance
              </Text>            
            </View> 
            <View style={{flex: 2, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end'}}>
              <View style={{height: 12, width:12, borderRadius: 12/2, marginRight: 1, backgroundColor: 'grey'}}>
                <View style={{flex: 1, justifyCenter: 'center', alignItems: 'center'}}>
                  <FireIcon
                    name="jedi"
                    color="black"
                    size={13}
                  />                 
                </View>              
              </View>
            </View>                     
          </View>
          <View style={{flex: 1,  flexDirection: 'column'}}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
              <Text style={{fontSize: 8, fontWeight: 'bold'}}>retreat cost
              </Text>            
            </View> 
            <View style={{flex: 2, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end'}}>
              <View style={{height: 12, width:12, borderRadius: 12/2, marginRight: 1, backgroundColor: 'green'}}>
                <View style={{flex: 1, justifyCenter: 'center', alignItems: 'center'}}>
                  <FireIcon
                    name="affiliatetheme"
                    color="black"
                    size={13}
                  />                 
                </View>              
              </View>
            </View>           
          </View>                    
        </View>
        <View style={styles.descriptionTresContainer}>
          <View style={{flex: 1, margin: 2, borderColor: '#CCA327', borderWidth: 2, backgroundColor: 'transparent'}}>
            <Text style={{fontSize: 8}}>Spits fire that is hot enough to melt boulders. Known to unintentionally cause forest fires. LV. 76 #6
            </Text> 
          </View>
        </View>
        <View style={styles.copyRightContainer}>
          <View style={{flex: 2}}>
            <Text style={{fontWeight: 'bold', fontSize: 8}}> Illus. Mitsuhiro Arita
            </Text>
          </View>
          <View style={{flex: 8}}>
            <Text style={{ fontSize: 7}}> @ 1995, 96, 98, 99 Nintendo, Creates, GAMEFREAK. @ 1993
            </Text>          
          </View>          
        </View>               
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
  },
  descriptionContainer: {
    flex: 6,
    flexDirection: 'column',
    marginRight: 23,
    marginLeft: 23,
    marginTop: 3,
    marginBottom: 3,
  },
  descriptionDosContainer: {
    flex: 4,
    marginRight: 23,
    marginLeft: 23,
    marginTop: 3,    
  }, 
  attributeContainer: {
    flex: 2,
    flexDirection: 'row',
  },
  descriptionTresContainer: {
    flex: 2,
    marginRight: 23,
    marginLeft: 23,
  }, 
  copyRightContainer: {
    flex: 1,
    marginLeft: 1,
    marginRight: 1,
    flexDirection: 'row'
  },
  lineStyle:{
    marginTop: 5,
    borderWidth: 0.5,
    borderColor:'black',
   }     
});