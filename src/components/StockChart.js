import React from 'react';
import { View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      data: [50, 60, 55, 70, 65],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // Adjust color as needed
      strokeWidth: 2, // Line thickness
    },
  ],
};

const chartConfig = {
  backgroundGradientFrom: 'white',
  backgroundGradientTo: 'white',
  decimalPlaces: 2, // Number of decimal places for labels
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
};

function StockChart() {
  return (
    <View>
      <LineChart
        data={data}
        width={300} // Width of the chart
        height={200} // Height of the chart
        chartConfig={chartConfig}
      />
    </View>
  );
}

export default StockChart;
