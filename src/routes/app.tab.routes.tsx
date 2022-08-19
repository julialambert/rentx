import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import { useTheme } from 'styled-components';
import { AppStackRoutes } from './app.stack.routes';
import { Profile } from '../screens/Profile';
import { MyCars } from '../screens/MyCars';
import HomeSvg from '../assets/home.svg';
import CarSvg from '../assets/car.svg';
import PeopleSvg from '../assets/people.svg';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppTabRoutes(){
  const theme = useTheme();
  return (
    <Navigator 
      screenOptions={{ headerShown: false }}
      tabBarOptions={{
        activeTintColor: theme.colors.main,
        inactiveTintColor: theme.colors.text_details,
        showLabel: false,
        style: {
          paddingVertical: Platform.OS === 'ios'? 20 : 0,
          height: 78,
          backgroundColor: theme.colors.backgroung_primary
        }
      }}
    >
      <Screen 
        name='Home'
        component={AppStackRoutes}
        options={{
          tabBarIcon: (({ color }) => (
            <HomeSvg width={24} height={24} fill={color}/>
          ))
        }}
      />

      <Screen 
        name='Profile'
        component={Profile}
        options={{
          tabBarIcon: (({ color }) => (
            <PeopleSvg width={24} height={24} fill={color}/>
          ))
        }}
      />

      <Screen 
        name='MyCars'
        component={MyCars}
        options={{
          tabBarIcon: (({ color }) => (
            <CarSvg width={24} height={24} fill={color}/>
          ))
        }}
      />
    </Navigator>
  )
}