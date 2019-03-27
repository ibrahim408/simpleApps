import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import CustomCell2 from './CustomCell2';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


const CustomListView = ({ itemList }) => (
    <View style={styles.container}>
        <FlatList
                data={itemList}
                renderItem={({ item }) => <CustomCell2
                    title={item.title}
                    description={item.description}
                    image_url={item.image_url}
                />}
            />

    </View>
);

export default CustomListView;