import React from "react";
import { Feather } from "@expo/vector-icons";
import { View, StyleSheet, Text } from "react-native";

const IconText = (props) => {
    const{iconName,iconColor,bodyText,bodyTextStyles}= props
    const{textTheme,cont}= styles
  return (
    <View style={cont}>
      <Feather name={iconName} size={30} color={iconColor} />
      <Text style={[textTheme,bodyTextStyles]}>{bodyText}</Text>

    </View>
    
  );
};
const styles = StyleSheet.create({
    textTheme:{
        fontWeight: 'bold',
    },
    cont:{
        alignItems: 'center',
    }
});

export default IconText;
