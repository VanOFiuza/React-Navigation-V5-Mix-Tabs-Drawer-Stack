import * as React from 'react';
import { Text, View,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


import HomeScreen from './pages/home';
import HomeScreenDetail from './pages/homeDetail'
import SettingsScreenDetail from './pages/settingsDetail'
import NotificationsScreen from './pages/notification'

import SettingsScreen from './pages/settings';

import iconHome from './assets/home.png' 
import iconHomeBlack from './assets/homeblack.png' 
import iconSettings from './assets/settings.png'
import iconSettingsBlack from './assets/settingsblack.png'




const Tab = createBottomTabNavigator();
const StackSettings = createStackNavigator();
const StackHome = createStackNavigator();
const Drawer = createDrawerNavigator();

const navOptionHandler =() => ({
    headerShown:false
})

function HomeStack(){
  return(
    <StackHome.Navigator  initialRouteName ="Home" >
      <StackHome.Screen name ="Home" component ={HomeScreen}  options={navOptionHandler}/>
      <StackHome.Screen name ="HomeDetail" component ={HomeScreenDetail} options={navOptionHandler} />
    </StackHome.Navigator>
  )
}

function SettingsStack(){
  return(
    <StackSettings.Navigator  initialRouteName ="Settings">
      <StackSettings.Screen name ="Settings" component ={SettingsScreen} options={navOptionHandler}/>
      <StackSettings.Screen name ="SettingsDetail" component ={SettingsScreenDetail} options={navOptionHandler} />
    </StackSettings.Navigator>
  )
}
 function TabNavigator(){
   return(
  <Tab.Navigator
           screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused
                  ? iconHome
                  : iconHomeBlack;
              } else if (route.name === 'Settings') {
                iconName = focused 
                ? iconSettings
                : iconSettingsBlack;
              }
  
              // You can return any component that you like here!
              return <Image source={iconName} style={{width:20,height:20}} resizeMode= "contain" />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'gray',
            inactiveTintColor: 'black',
          }}
   
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Settings" component={SettingsStack} />
    </Tab.Navigator>
   )
}

export default function Routes() {
  return (
    <NavigationContainer>
       <Drawer.Navigator initialRouteName="MenuTab">
        <Drawer.Screen name="MenuTab" component={TabNavigator} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}