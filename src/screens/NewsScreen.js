import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';

// Sample news data (replace with your actual data)
const newsData = [
  {
    id: '1',
    title: 'Stock Market Soars to New Heights',
    description: 'The stock market reached record highs today...',
    date: '2023-09-01',
  },
  {
    id: '2',
    title: 'Tech Stocks Rally Amid Earnings Reports',
    description: 'Tech giants reported strong earnings, boosting the market...',
    date: '2023-09-02',
  },
  // Add more news articles as needed
];

function NewsScreen() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate fetching news data from an API (replace with your data fetching logic)
  useEffect(() => {
    // Replace this with your actual data fetching logic
    setTimeout(() => {
      setNews(newsData);
      setIsLoading(false);
    }, 1000); // Simulating a delay for data loading
  }, []);

  // Render each news article
  const renderItem = ({ item }) => (
    <View style={styles.newsItem}>
      <Text style={styles.newsTitle}>{item.title}</Text>
      <Text style={styles.newsDescription}>{item.description}</Text>
      <Text style={styles.newsDate}>Published on: {item.date}</Text>
    </View>
  );

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#487FD9" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={news}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
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
    fontWeight: 'bold',
    marginBottom: 16,
    fontSize: 20,
    fontFamily: 'Avenir Next',
    fontWeight: '500',
    color: '#FFFFFF',
  },
  newsItem: {
    marginTop: 20,
  },
  newsTitle: {
    fontSize: 16,
    fontFamily: 'Avenir Next',
    fontWeight: '500',
    color: '#FFFFFF',
    letterSpacing: 0.06,
  },
  newsDescription: {
    fontSize: 16,
    fontFamily: 'Avenir Next',
    fontWeight: '500',
    color: '#FFFFFF',
    textAlign: 'right',
    letterSpacing: 0.06,
  },
  newsDate: {
    fontSize: 16,
    fontFamily: 'Avenir Next',
    fontWeight: '500',
    color: '#78CBBB',
    textAlign: 'right',
    letterSpacing: 0.06,
    marginTop:10
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NewsScreen;
