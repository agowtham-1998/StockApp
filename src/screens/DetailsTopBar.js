import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import NewsScreen from './NewsScreen';
import ProfileScreen from './ProfileScreen';
import ChartScreen from './ChartScreen';
import { Text, View } from 'react-native';
import { RF } from '../constants/responsive';

const Tab = createMaterialTopTabNavigator();

function DetailsTopBar() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    width: 300,
                    alignSelf: 'center',
                    backgroundColor: '#16171C',
                },
                tabBarLabelStyle: {
                    textTransform: 'capitalize',
                    fontSize: RF(16),
                    fontFamily: 'Avenir Next',
                    fontWeight: '500',
                    color: '#43464D',
                    textAlign: 'center',
                    letterSpacing: 0.06,
                },
                tabBarIndicatorStyle: {
                    backgroundColor: '#43464D',
                    width: 62,
                    marginHorizontal: 18,
                },
                swipeEnabled: true
            }}>
            <Tab.Screen name="Profile" component={ProfileScreen}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <Text style={{
                            color: focused ? 'white' : '#43464D',
                            textTransform: 'capitalize',
                            fontSize: RF(16),
                            fontFamily: 'Avenir Next',
                            fontWeight: '500',
                            textAlign: 'center',
                            letterSpacing: 0.06,
                        }}>
                            Profile
                        </Text>),
                }} />
            <Tab.Screen name="News" component={NewsScreen} options={{
                tabBarLabel: 'News',
                tabBarLabel: ({ focused }) => (
                    <Text style={{
                        color: focused ? 'white' : '#43464D',
                        textTransform: 'capitalize',
                        fontSize: RF(16),
                        fontFamily: 'Avenir Next',
                        fontWeight: '500',
                        textAlign: 'center',
                        letterSpacing: 0.06,
                    }}>
                        News
                    </Text>),
            }} />
            <Tab.Screen name="Chart" component={ChartScreen}
                options={{
                    tabBarLabel: 'Chart',
                    tabBarLabel: ({ focused }) => (
                        <Text style={{
                            color: focused ? 'white' : '#43464D',
                            textTransform: 'capitalize',
                            fontSize: RF(16),
                            fontFamily: 'Avenir Next',
                            fontWeight: '500',
                            textAlign: 'center',
                            letterSpacing: 0.06,
                        }}>
                            Chart
                        </Text>),
                }} />
        </Tab.Navigator>
    );
}

export default DetailsTopBar;
