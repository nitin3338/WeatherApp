import React from 'react'
import { View, StyleSheet, FlatList, ImageBackground } from 'react-native'
import { Feather } from "@expo/vector-icons";
import  Listitem  from "../components/Listitem";





const UpcomingWeather = ({weatherData}) => {
  const renderItem = ({item})=>(
    <Listitem condition={item.weather[0].main} dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max}/> )
  const {cont,img}= styles
  return (
        <View style={cont}>
            <ImageBackground source={require('../../assets/image/UpcomingImg.jpg')} style={img}>
            
            
            <FlatList
            data={weatherData}
            renderItem={renderItem} 
            keyExtractor={(item)=>item.dt_txt}
            />
            </ImageBackground>
        </View>
  )
}

const styles = StyleSheet.create({
    cont:{
        flex: 1,
        backgroundColor:'#royalblue'
    },
    
    img:{
        flex:1,
    }
});

export default UpcomingWeather
