import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import DashboardScreen from '../screens/DashboardScreen';
import WatchlistScreen from '../screens/WatchListScreen';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
      <Stack.Screen name="Details" component={DetailsScreen} options={{headerShown:false}} />
      <Stack.Screen name="Dashboard" component={DashboardScreen} options={{headerShown:false}} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
