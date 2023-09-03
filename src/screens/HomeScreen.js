import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import CustomHeader from '../components/CustomHeader';
import DashboardScreen from './DashboardScreen';

function HomeScreen({ navigation }) {


    return (
        <View style={{ backgroundColor: '#16171C', flex: 1 }}>
            <View>
                <CustomHeader
                    title="Dashboard"
                    leftImageSource={require('../assets/Images/profile.png')}
                    rightImageSource={require('../assets/Images/doticon.png')}
                    online={true}
                />
            </View>
            <View style={{flex:1,bottom:1}}>
               <DashboardScreen/>
            </View> 
           
        </View>
    );
}

export default HomeScreen;
