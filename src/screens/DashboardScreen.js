import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import NewsScreen from './NewsScreen';
import MarketViewScreen from './MarketViewScreen';
import WatchlistScreen from './WatchListScreen';
import { Text } from 'react-native';
import { RF } from '../constants/responsive';

const Tab = createMaterialTopTabNavigator();

function DashboardScreen() {
  return (
    <Tab.Navigator initialRouteName='Watchlist'
      screenOptions={{
        tabBarStyle: { backgroundColor: "#16171C" },
        tabBarLabelStyle: {
          textTransform: 'capitalize',
          fontSize: RF(16),
          fontFamily: 'Avenir Next',
          fontWeight: '500',
          color: '#43464D',
          letterSpacing: 0.06,
        },
        tabBarIndicatorStyle: {
          backgroundColor: "#487FD9"
        },
        swipeEnabled: true
      }}>
      <Tab.Screen name="News" component={NewsScreen}
        options={{
          tabBarLabel: 'News',
          tabBarLabel: ({ focused }) => (
            <Text style={{
              color: focused ? '#FFFFFF' : '#43464D',
              textTransform: 'capitalize',
              fontSize: RF(16),
              fontFamily: 'Avenir Next',
              fontWeight: '500',
              letterSpacing: 0.06,
            }}>
              News
            </Text>),
        }} />
      <Tab.Screen name="Watchlist" component={WatchlistScreen}
        options={{
          tabBarLabel: 'Watchlist',
          tabBarLabel: ({ focused }) => (
            <Text style={{
              color: focused ? '#FFFFFF' : '#43464D',
              textTransform: 'capitalize',
              fontSize: RF(16),
              fontFamily: 'Avenir Next',
              fontWeight: '500',
              letterSpacing: 0.06,
            }}>
              Watchlist
            </Text>),
        }} />
      <Tab.Screen name="MarketView" component={MarketViewScreen}
        options={{
          tabBarLabel: 'Market OverView',
          tabBarLabel: ({ focused }) => (
            <Text style={{
              color: focused ? '#FFFFFF' : '#43464D',
              textTransform: 'capitalize',
              fontSize: RF(16),
              fontFamily: 'Avenir Next',
              fontWeight: '500',
              letterSpacing: 0.06,
            }}>
              MarketView
            </Text>),
        }} />
    </Tab.Navigator>
  );
}

export default DashboardScreen;
