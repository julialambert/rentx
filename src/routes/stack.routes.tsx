import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { CarDetails } from '../screens/CarDetails';
import { Home } from '../screens/Home';
import { MyCars } from '../screens/MyCars';
import { Scheduling } from '../screens/Scheduling';
import { Confirmation } from '../screens/Confirmation';
import { SchedulingDetails } from '../screens/SchedulingDetails';
import { SignIn } from '../screens/SignIn';
import { SignUpFirstStep } from '../screens/SignUp/SignUpFirstStep';
import { SignUpSecondStep } from '../screens/SignUp/SignUpSecondStep';
import { Splash } from '../screens/Splash';

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes(){
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName='SignIn'
    >
      <Screen 
        name='Splash'
        component={Splash}
      />

      <Screen 
        name='SignIn'
        component={SignIn}
      />

      <Screen 
        name='SignUpFirstStep'
        component={SignUpFirstStep}
      />

      <Screen 
        name='SignUpSecondStep'
        component={SignUpSecondStep}
      />

      <Screen 
        name='Home'
        component={Home}
        options={{
          gestureEnabled: false
        }}
      />

      <Screen 
        name='CarDetails'
        component={CarDetails}
      />

      <Screen 
        name='Scheduling'
        component={Scheduling}
      />

      <Screen 
        name='SchedulingDetails'
        component={SchedulingDetails}
      />

      <Screen 
        name='Confirmation'
        component={Confirmation}
      />

      <Screen 
        name='MyCars'
        component={MyCars}
      />
    </Navigator>
  )
}