

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import PickupDetailsScreen from './screens/PickupDetailsScreen';
import RouteMapScreen from './screens/RouteMapScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PickupDetails" component={PickupDetailsScreen} />
        <Stack.Screen name="RouteMap" component={RouteMapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

