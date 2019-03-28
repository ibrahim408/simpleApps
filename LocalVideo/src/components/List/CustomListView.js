import React, {Component} from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import CustomeCell3 from './CustomeCell3';

export default class List extends Component<Props> {
    render(){
        return(
            <View style={styles.container}>
                <FlatList
                        data={this.props.itemList}
                        renderItem={({ item }) => <CustomeCell3
                            navigation={this.props.navigation}
                            title={item.title}
                            description={item.description}
                            image_url={item.image_url}
                        />}
                    />

            </View>            
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

