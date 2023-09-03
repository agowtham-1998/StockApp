import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { RF } from '../constants/responsive';

const apiKey = '8adb1b17af80d873ca8a4720c0ceff51'; // Replace with your Marketstack API key
const baseUrl = 'http://api.marketstack.com/v1/eod'; // Use the "eod" function

const WatchlistScreen = ({ navigation }) => {
  const [watchlist, setWatchlist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace with an array of stock symbols you want to fetch
    const stockSymbols = ['T', 'MSCI', 'CSCO', 'MMM', 'AAPL',
      'BLK', 'MSFT', 'ZM', 'BYND']; // Example symbols

    // Fetch data for each stock symbol
    Promise.all(
      stockSymbols.map((symbol) => {
        // Construct the API URL for each symbol
        const apiUrl = `${baseUrl}?access_key=${apiKey}&symbols=${symbol}`;

        // Fetch stock data from Marketstack for the current symbol
        return fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
            // Check if the data contains information for the symbol
            if (data.data && data.data.length > 0) {
              // Extract the latest data point (e.g., the most recent closing price)
              const latestData = data.data[0];

              // Create an object with the desired data for the current symbol
              return {
                symbol: symbol,
                name: getCompanyName(symbol), // Fetch company name based on symbol
                price: latestData.close,
                percentageChange: latestData.close ? calculatePercentageChange(latestData.close) : 0,
                // You can extract other relevant data fields here
              };
            } else {
              console.error('Invalid data received for symbol:', symbol);
              return null;
            }
          })
          .catch((error) => {
            console.error('Error fetching data for symbol:', symbol, error);
            return null;
          });
      })
    )
      .then((stockDataArray) => {
        // Remove null entries (symbols with missing or invalid data)
        const filteredStockData = stockDataArray.filter((item) => item !== null);
        setWatchlist(filteredStockData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  // Function to fetch company name based on stock symbol (replace with your data source)
  const getCompanyName = (symbol) => {
    // You can use a different API or data source to fetch company names based on symbols
    // For simplicity, we are using a static mapping here
    const symbolToCompanyName = {
      'T': 'AT&T Inc.',
      'MSCI': 'MSCI Inc.',
      'CSCO': 'Cisco Systems',
      'MMM': '3M Co.',
      'AAPL': 'Apple Inc.',
      'BLK': 'Blackrock Inc.',
      'MSFT': 'Microsoft Corp.',
      'ZM': 'Zoom Video Commu',
      'BYND': 'Beyond Meat Inc.',
      // Add more mappings as needed
    };

    return symbolToCompanyName[symbol] || 'Unknown Company';
  };

  // Function to calculate percentage change
  const calculatePercentageChange = (closePrice) => {
    const close = parseFloat(closePrice);
    const randomPercentageChange = (Math.random() - 0.5) * 10; // Generate a random value between -5% and 5%
    return randomPercentageChange.toFixed(2);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Details',{screen:'Profile',params:{stock: item }})}
      style={[styles.row, { backgroundColor: getItemBackgroundColor() }]}
    >
      <View style={styles.column1}>
        <Text style={styles.name}>{item.name}</Text>
      </View>
      <View style={styles.column2}>
        <Text style={styles.price}>{`$${item.price}`}</Text>
      </View>
      <View style={styles.column3}>
        <Text style={item.percentageChange >= 0 ? styles.positiveChange : styles.negativeChange}>
          {item.percentageChange}%
        </Text>
      </View>
    </TouchableOpacity>
  );

  // Function to determine the background color for list items
  const getItemBackgroundColor = () => {
    const color = currentIndex % 2 === 0 ? '#1E1F26' : '#16171C';
    currentIndex++;
    return color;
  };

  let currentIndex = 0;



  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={watchlist}
          renderItem={renderItem}
          keyExtractor={(item) => item.symbol}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16171C',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  column1: {
    flex: 1,
    alignItems: 'flex-start',
  },
  column2: {
    flex: 1,
    alignItems: 'flex-end',
  },
  column3: {
    flex: 1,
    alignItems: 'flex-end',
  },
  name: {
    fontSize: RF(16),
    fontFamily: 'Avenir Next',
    fontWeight: '500',
    color: '#FFFFFF',
    letterSpacing: 0.06,
  },
  price: {
    fontSize: RF(16),
    fontFamily: 'Avenir Next',
    fontWeight: '500',
    color: '#FFFFFF',
    textAlign: 'right',
    letterSpacing: 0.06,
  },
  positiveChange: {
    fontSize: RF(16),
    fontFamily: 'Avenir Next',
    fontWeight: '500',
    color: '#78CBBB',
    textAlign: 'right',
    letterSpacing: 0.06,
  },
  negativeChange: {
    color: '#FF3165',
    fontSize: RF(16),
    fontFamily: 'Avenir Next',
    fontWeight: '500',
    textAlign: 'right',
    letterSpacing: 0.06,
  },
});

export default WatchlistScreen;
