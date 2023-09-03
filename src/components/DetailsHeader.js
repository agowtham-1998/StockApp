import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, PixelRatio } from 'react-native';
import { RF } from '../constants/responsive';

const windowWidth = Dimensions.get('window').width;

 // Convert dp to pixels for the current screen density
 const dpToPixels = (dp) => {
  return PixelRatio.roundToNearestPixel(dp * (windowWidth / 360));
};

const DetailsHeader = ({ title, leftImageSource, rightImageSource,backHandler,onModal }) => {
 
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={backHandler} style={styles.leftContainer}>
        <Image source={leftImageSource} style={styles.leftImage} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={onModal}>
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
    height: dpToPixels(60), 
    backgroundColor: "#16171C"
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftImage: {
    width: dpToPixels(16), 
    height: dpToPixels(16), 
    resizeMode: 'contain',
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
    width: dpToPixels(16),
    height: dpToPixels(3), 
    resizeMode: 'contain'
  },
});

export default DetailsHeader;
