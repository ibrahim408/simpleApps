import React, {Component} from 'react';
import { View, FlatList, StyleSheet, Text, Dimensions, Image } from 'react-native';
import CustomeCell from './CustomeCell';
import Icon from "react-native-vector-icons/MaterialIcons";


export default class CustomeListView extends Component<Props> {
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.topBottons}>
                    <View style={styles.leftTop}>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{}}>
                              <Image
                                style={{width: 35, height: 35, borderRadius: 35 / 2, overflow: "hidden", borderWidth: 2, borderColor: "white"}}
                                source={require('../../images/storyImage.jpg')}
                              />                            
                            </View>
                            <View style={{paddingLeft: 5}}>
                                <Icon
                                    name='search'
                                    size={25}
                                    color='white'
                                    />
                            </View>
                            <View style={{paddingLeft: 5}}>
                                <Text style={{color: 'white', fontSize: 20}}> Friends
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.rightTop}>
                        <View style={{flex: 1,  flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{paddingRight: 5}}>
                                <Icon
                                    name='group-add'
                                    size={25}
                                    color='white'
                                    />
                            </View>
                            <View style={{}}>
                                <Icon
                                    name='library-add'
                                    size={25}
                                    color='white'
                                    />                        
                            </View>                        
                        </View>
                    </View>
                </View>
                <View style={styles.infoContainer}>
                    <FlatList
                            data={this.props.itemList}
                            renderItem={({ item }) => <CustomeCell
                                navigation={this.props.navigation}
                                name={item.name}
                                bitmoji={item.bitmoji}
                                status={item.status}
                                timeStamp={item.timeStamp}
                                emojiName={item.emojiName}
                                statusColor={item.statusColor}
                                statusIcon={item.statusIcon}
                            />}
                        />
                    <View style={styles.bottomButtonsContainer}>
                        <View style={styles.captureButton}>
                        </View>
                    </View>
                    <View style={styles.bottomButtonsContainer}>
                        <View style={{paddingRight: 40, paddingTop: 20}}>
                            <Icon
                                name='chat-bubble-outline'
                                size={30}
                                color='grey'
                                 /> 
                        </View>
                        <View style={styles.captureButton}>
                        </View>                    
                        <View style={{paddingLeft: 40, paddingTop: 20}}>
                            <Icon
                                name='filter-none'
                                size={30}
                                color='grey'
                                 />                     
                        </View>
                    </View>
                </View>                
            </View>            
        );
    };
}

var width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#26BEFF'
    },
    topBottons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    storyIcon: {
        marginLeft: 8,
        height: 37,
        width: 37,
        borderRadius: 40,
        borderWidth: 1,    
    },
    leftTop: {
        width: 150,
    },
    rightTop: {
        width: 65,
    },
    infoContainer: {
        flex: 12,
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    bottomButtonsContainer: {
        position: 'absolute',
        bottom: 20,
        height: 75,
        width: width,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    captureButton: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        backgroundColor: 'transparent',
        borderColor: 'grey',
        borderWidth: 5
    },
});