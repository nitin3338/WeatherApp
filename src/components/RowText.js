import React from 'react'
import { View, Text, StyleSheet } from "react-native";

const RowText = (props) => {
    const {messageOne, messageTwo,contStyles,messageOneStyles, messageTwoStyles}= props;
  return (
    <View>
    <View style={contStyles}>
    <Text style={messageOneStyles}>{messageOne}</Text>
    <Text  style={messageTwoStyles}>{messageTwo}</Text>


    </View>
    </View>

  
  )
}

const styles = StyleSheet.create({

});

export default RowText
