import axios from 'axios';

class StockMarketService {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://www.alphavantage.co/query';
  }

  async fetchStockData(symbol) {
    try {
      const response = await axios.get(this.baseUrl, {
        params: {
          function: 'TIME_SERIES_INTRADAY',
          symbol: symbol,
          interval: '5min',
          apikey: this.apiKey,
        },
      });

      return response.data;
    } catch (error) {
      console.error('Error fetching stock data:', error);
      throw error;
    }
  }
}

export default StockMarketService;
