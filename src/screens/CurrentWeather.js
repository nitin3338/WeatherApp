import {  SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { StatusBar } from "react-native";
import RowText from "../components/RowText";
import { WeatherType } from "../utilities/WeatherType";
import { ImageBackground } from "react-native";
import { useState, useEffect } from "react";
import { clouds, thunderstrom, snow, sunny, rain, mist } from "../../assets/image/bgImage";

export default function CurrentWeather({weatherData}) {
  const { wrapper, container, tempstyles, feels, highLow, highLowWrapper,city,countryData,populationWrapper,populationText,riseSetWrapper,riseSetText,rowLayout } = styles;
  const { main: { temp, feels_like, temp_max, temp_min }, weather, wind: { speed }, main: { humidity } } = weatherData;
  
  const {name} = weatherData;


  const weatherCondition = weather[0].main
  const [backgroundImage, setBackgroundImage] = useState(null);

  console.log(temp)
  useEffect(() => {
    setBackgroundImage(getBackgroundImg(weatherCondition));
  }, [weatherData]);
  function getBackgroundImg(weather) {
    if (weather === "Snow") return snow;
    if (weather === "Clear") return sunny;
    if (weather === "Rain") return rain;
    if (weather === "Haze") return mist;
    if (weather === "Clouds") return clouds;
    if (weather === "Thunderstorm") return thunderstrom;
  }

  return (
    <SafeAreaView style={[wrapper,{backgroundColor:WeatherType[weatherCondition].backgroundColor}]}>

      
       
         <View style={container}>
       
         <ImageBackground source={backgroundImage}style={styles.backgroundImg} resizeMode='cover'>
         <ScrollView>
         <Text style={city}>{name}</Text>
        <View style={styles.mainStyle}>
          <Feather name={WeatherType[weatherCondition].icon} size={50} color="#0B5345" />
          <Text style={tempstyles}>{temp }°c</Text>  
          <Text style={feels}>Feels Like :{feels_like}°c</Text>
        </View>
        
        <RowText  
          messageOne={`High:${temp_max} °c`}
          messageTwo={`Low:${temp_min} °c`}
          contStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
        <View style={styles.info}>
    <Text style={{ fontSize: 22, color: '#0B5345' }}>Humidity</Text>
    <Text style={{ fontSize: 22, color: '#000' }}>{humidity} %</Text>
    <Text style={{ fontSize: 22, color: '#0B5345' }}>Wind Speed</Text>
    <Text style={{ fontSize: 22, color: '#000' }}>{speed} m/s</Text>
</View>

</ScrollView>  
</ImageBackground>  

      </View>
      
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:'#000'
  },
  mainStyle:{
    marginLeft:30,
    marginTop:150
  },
  wrapper: {
    flex: 1,
  },
  tempstyles: {
    color: "#0B5345",
    fontSize: 48,
    fontWeight:'bold'
  },
  feels: {
    color: "#0B5345",
    fontSize: 30,
    fontWeight:'bold'
  },
  highLowWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    gap:15,
    alignItems: "center",
    marginTop:30
  },
  highLow: {
    color: "#0B5345",
    fontSize: 20,
    fontWeight:'bold'
  },
  bodyWrapper: {
    justifyContent: "center",
    alignContent: "center",
    marginTop: 30
  },
  description:{
    alignItems:'flex-start',
    fontSize:30,
    fontWeight: 'bold',
  },
  info: {
    flexDirection:'column',
    padding: 10,
    borderRadius: 15,
    justifyContent: 'space-between',
    margin:20,
},
backgroundImg:{
  flex: 1,
  width: '100%',
},
city:{
  justifyContent: 'center',
  alignSelf: 'center',
  fontSize:40,
  fontWeight: 'bold',
  color: 'green'
},
countryData:{
  fontSize:30,
  fontWeight: 'bold',
  color: 'green'
},
populationWrapper:{
  justifyContent: 'center',
  marginTop:30
},
populationText:{
  fontSize:25,
  color:'#0B5345',
  marginLeft:7.5

},
riseSetWrapper:{
  justifyContent:'space-around',
  marginTop:30,
},
riseSetText:{
  fontSize:20,
  color:'#0B5345'
},
rowLayout:{
  flexDirection:'row',
  alignItems: 'center',
}

});
