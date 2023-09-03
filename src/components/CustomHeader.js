import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, Dimensions, PixelRatio, TouchableOpacity } from 'react-native';
import { RF } from '../constants/responsive';


const windowWidth = Dimensions.get('window').width;

 // Convert dp to pixels for the current screen density
 const dpToPixels = (dp) => {
  return PixelRatio.roundToNearestPixel(dp * (windowWidth / 360));
};

const CustomHeader = ({ title, leftImageSource, rightImageSource, online }) => {
 
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.leftContainer}>
        <ImageBackground source={leftImageSource} style={styles.leftImage}>
          {online ? (
            <Image source={require('../assets/Images/online.png')} style={styles.onlineIcon} />
          ) : (
            <Image source={require('../assets/Images/offline.png')} style={styles.offlineIcon} />
          )}
        </ImageBackground>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity>
         <Image source={rightImageSource} style={styles.rightImage} />
      </TouchableOpacity> 
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: windowWidth * 0.04, 
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc', 
    height: dpToPixels(60), 
    backgroundColor: "#16171C"
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftImage: {
    width: 33, 
    height:34,
    padding:0,
    resizeMode: 'contain',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  onlineIcon: {
    width: 8, 
    height: 8,
    resizeMode: 'contain'
  },
  offlineIcon: {
    width: 8, 
    height: 8,
    resizeMode: 'contain'
  },
  title: {
    fontSize: RF(20),
    fontFamily: 'Avenir Next',
    fontWeight: '400',
    color: '#FFFFFF',
    textAlign: 'center',
    letterSpacing: 0.08,
  },
  rightImage: {
    width: 16,
    height: 3, 
    resizeMode: 'contain'
  },
});

export default CustomHeader;
