import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import CurrentWeather from "../screens/CurrentWeather";
import UpcomingWeather from "../screens/UpcomingWeather";
import City from "../screens/City";
import Weather from "../screens/Weather";
import { Feather } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();


const Tabs =({weather} )=>{
  return(
      <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor:'tomato',
        drawerInactiveTintColor:'grey',
        drawerStyle: {
          backgroundColor: '#000',
          width: 240},
        headerStyle:{
          backgroundColor:'green'
        },
        headerTitleStyle:{
          fontWeight:'bold',
          fontSize:25,
          color:'tomato'
        },
      }}
      >
        

        <Drawer.Screen
          name={"Current"}
          options={{
          tabBarIcon: ({ focused }) => (
          <Feather name={"droplet"} size={25} color={focused ? "tomato" : "black"} />
    ),
  }}
>
  {() => <CurrentWeather weatherData={weather.list[0]} />}
</Drawer.Screen>



        <Drawer.Screen name={"Upcoming"} options={{
          tabBarIcon:({focused})=><Feather name="clock" size={25} color={focused? 'tomato':'black'}/>
        }} >
          {()=><UpcomingWeather weatherData={weather.list}/>}
        </Drawer.Screen>


        <Drawer.Screen name={"City"}  options={{
          tabBarIcon:({focused})=><Feather name="home" size={25} color={focused? 'tomato':'black'}/>
        }} >{()=><City weatherData={weather.city}/>}</Drawer.Screen> 


</Drawer.Navigator>
  )
}

export default Tabs;