import React ,{useState,useEffect}from "react";
import * as Location from 'expo-location';
import {WEATHER_API_KEY}  from '@env';
import { log } from "react-native-reanimated";

WEATHER_API_KEY =  process.env.WEATHER_API_KEY
export const useGetWeather =()=>{
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const[weather, setWeather] = useState([]);
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [cnt, setCnt] = useState([]);
    const fetchWeatherData = async () => {
      //https://api.weatherstack.com/current? access_key =${WEATHER_API_KEY}& query = lat=${lat}&lon=${long}&units=metric
      //api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}&appid={API key}
      //https://api.weatherstack.com/forecast? access_key = YOUR_ACCESS_KEY& query = New York& forecast_days = 1& hourly = 1
      //https://www.weatherapi.com/weather/?q=25.9471%2c80.9256
      //http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${WEATHER_API_KEY}&units=metric
      try {
        const res = await fetch(
         `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${WEATHER_API_KEY}&units=metric`
        );
        
        const data = await res.json();
        setWeather(data);
      } catch (e) {
        setError("Could not get weather");
      } finally {
        setLoading(false);
      }
    };
    
    
    
      useEffect(() => {
        ;(async()=>{
          let{status}= await Location.requestForegroundPermissionsAsync()
          if(status!=='granted'){
            setError('Permission denied')
            return
          }
          let location = await Location.getCurrentPositionAsync({})
          setLat(location.coords.latitude)
          setLong(location.coords.longitude)
          setCnt(location.coords.cnt)
          await fetchWeatherData();
        })()
      } ,[lat,long,cnt])
      
      return[loading,error, weather]
 }
     
 	