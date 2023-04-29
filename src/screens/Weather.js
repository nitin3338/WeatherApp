import React,{useState,useEffect} from 'react'
import { View, StyleSheet,Text, ImageBackground} from 'react-native'
import IconText from '../components/IconText';
import { clouds, thunderstrom, snow, sunny, rain, mist } from "../../assets/image/bgImage";


const Weather = ({weatherData}) => {
    const{name}= weatherData;
   
    const { main: { temp, feels_like, temp_max, temp_min }, weather, wind: { speed }, main: { humidity } } = weatherData;

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
    <View style={StyleSheet.container}>
        <ImageBackground source={backgroundImage}style={styles.backgroundImg} resizeMode='cover'>
        <View >
        <Text style={styles.city}>{name}</Text>  
        </View>
        <View style={styles.box2}>
        <Text style={styles.tempstyles}>{temp }°c</Text>  
        <Text style={styles.feels}>Feels Like :{feels_like}°c</Text>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    city:{
        marginTop:20,
        marginLeft:10,
        fontSize:20,
        color:'#000'
    },
    backgroundImg:{
        flex: 1,
        width: '100%',
      },
      box2:{
        flexDirection:'column',
        marginTop:30,
        justifyContent:'flex-start'
      },
      tempstyles:{
        fontSize:50,
        margin:10,
      }

});

export default Weather
