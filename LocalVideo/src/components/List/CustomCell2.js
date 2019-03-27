import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableHighlight } from 'react-native';
import Icon from "react-native-vector-icons/SimpleLineIcons";

const CustomCell = ({ title, description, image_url }) => (
    <View style={{height: 200}}>
        <View style={styles.container}>
          <Image
            resizeMode="cover"
            style={styles.canvas}
            source={image_url}
          />
          <View style={styles.playContainer}>
            <Icon
                name="control-play"
                color='white'
                size={40}
            />
          </View>
          <View style={styles.titleContainer}>
            <Text style={{fontFamily: 'GujaratiSangamMN-Bold', color: 'white', fontSize: 25}}> {title}
            </Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={{color: 'white', fontSize: 15}}> {description}
            </Text>
          </View>                   
        </View>                 
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        elevation: 2,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',        
    },
    canvas: {
        flex: 1,
        width: null,
        height: null,
    },    
    playContainer: {
        position: 'absolute',
        bottom: 80,
        left: 150,
        backgroundColor: 'black',
        opacity: .5,
        height: 65,
        width: 65,
        borderRadius: 100/2,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'        
    },
    titleContainer: {
        position: 'absolute',
        bottom: 25,
        left: 80,
        height: 65,
        width: 200,
        borderRadius: 100/2,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center' 
    },
    descriptionContainer: {
        position: 'absolute',
        bottom: 0,
        left: 80,
        height: 65,
        width: 200,
        borderRadius: 100/2,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'         
    }
});

export default CustomCell;