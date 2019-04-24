import Icon2 from 'react-native-vector-icons/AntDesign'
import React from "react";
import { View } from "react-native";

import styles from "./styles";

const CustomHeader = ({ navigation }) => (
  <View style={[styles.container]}>
    <Icon2
      name="menufold"
      size={32}
      color="black"
      onPress={() => navigation.openDrawer()}
    />
  </View>
);

export default CustomHeader;