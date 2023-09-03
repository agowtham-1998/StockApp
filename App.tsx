import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
export default function App() {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{flex:1}}>
          <AppNavigator />
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}
