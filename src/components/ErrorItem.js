import React from 'react'
import { Feather } from "@expo/vector-icons";
import { Text, View, StyleSheet } from 'react-native';

const ErrorItem = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.errorMessage}>Sorry Something Went Wrong</Text>
        <Feather name='frown' size={100} color={'#fff'}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorMessage:{
        fontSize:30,
        color:'#fff',
        marginHorizontal:10,
        textAlign: 'center',
    }
});

export default ErrorItem
