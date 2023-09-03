import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function MarketViewScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Market Overview</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Market Index:</Text>
        <Text style={styles.infoValue}>Dow Jones: 35,000</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Market Status:</Text>
        <Text style={styles.infoValue}>Open</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Top Gainers:</Text>
        <Text style={styles.infoValue}>AAPL (+2.5%), GOOGL (+1.8%), MSFT (+1.5%)</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Top Losers:</Text>
        <Text style={styles.infoValue}>AMZN (-2.0%), TSLA (-1.5%), FB (-1.2%)</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#16171C',
  },
  header: {
    fontSize: 16,
    fontFamily: 'Avenir Next', 
    fontWeight: '500',
    color: '#FFFFFF',
    textAlign: 'center',
    letterSpacing: 0.06,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    paddingTop:10

  },
  infoLabel: {
    fontSize: 16,
    fontFamily: 'Avenir Next',
    fontWeight: '500',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  infoValue: {
    fontSize: 16,
    fontFamily: 'Avenir Next', 
    fontWeight: '500',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default MarketViewScreen;
