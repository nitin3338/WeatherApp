import React ,{useState,useEffect}from "react";
import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';
import Tabs from "./src/components/Tabs";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import {useGetWeather} from "./src/hooks/useGetWeather";
import ErrorItem from "./src/components/ErrorItem";


const App = (props) => {
const[loading, error, weather] = useGetWeather()

 console.log(loading, error, weather);

 if(weather && weather.list&& !loading){
  return (
    <NavigationContainer>
    <Tabs weather= {weather}/>
    </NavigationContainer>
  );
 }
  
    return(
      <View style={styles.container}>
        {error?(<ErrorItem/>):(< ActivityIndicator size={'large'} color={'blue'}/>)}
        
      </View>
    )
}






const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
  }
});

export default App
