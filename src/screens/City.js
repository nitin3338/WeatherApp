import React from 'react'
import { Text, StyleSheet, View, ImageBackground } from 'react-native'
import IconText from '../components/IconText';
import  moment  from "moment";

const City = ({weatherData}) => {
    const{cont,img,city,countryData,populationWrapper,populationText,riseSetWrapper,riseSetText,rowLayout}= styles
    const{name,country,population,sunrise,sunset} = weatherData 
  return (
        <View style ={cont}>
            <ImageBackground source={require('../../assets/image/Cityimg.jpg')} style={styles.img}>
               <View>
               <Text style={city}>{name}</Text>
                <Text style={countryData}>{country}</Text>
               </View>
                <View style={[populationWrapper,rowLayout]}>
                    <IconText iconName={'user'} iconColor={'red'} bodyText={`Population:${population}`} bodyTextStyles={populationText}/>
                </View>
                <View style={[riseSetWrapper,rowLayout]}>
                    <IconText iconName={'sunrise'} iconColor={'#fff'} bodyText={moment(sunrise).format('h:mm:ss a')} bodyTextStyles={riseSetText} />
                
                    <IconText iconName={'sunset'} iconColor={'#fff'} bodyText={moment(sunset).format('h:mm:ss a')} bodyTextStyles={riseSetText} />
                    
                </View>
            </ImageBackground>
        </View>
  )
}

const styles = StyleSheet.create({
    cont:{
        flex: 1,
    },
    img:{
        flex: 1,
    },
    city:{
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize:40,
        fontWeight: 'bold',
        color: 'green'
    },
    countryData:{
        justifyContent: 'center',
        alignSelf: 'center',
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
        
        color:'red',
        marginLeft:7.5

    },
    riseSetWrapper:{
        justifyContent:'space-around',
        marginTop:30,
    },
    riseSetText:{
        fontSize:20,
       
        color:'#fff'
    },
    rowLayout:{
        flexDirection:'row',
        alignItems: 'center',
    }
});

export default City
