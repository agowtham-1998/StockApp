import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import DetailsHeader from '../components/DetailsHeader';
import DetailsTopBar from './DetailsTopBar';
import AlarmModal from '../components/AlarmModal';

function DetailsScreen({ navigation, route }) {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const { stock } = route.params.params;
  const stockData = stock;
  console.log("stockDetails", stockData);
  const name = stock ? stock.name : "Beyond Meat INC.";


  return (

    <View style={{ backgroundColor: '#16171C', flex: 1 }}>
      <View>
        <DetailsHeader
          title={name}
          leftImageSource={require('../assets/Images/leftarrow.png')}
          rightImageSource={require('../assets/Images/doticon.png')}
          backHandler={() => navigation.goBack()}
          onModal={toggleModal}
        />
      </View>
      <AlarmModal isVisible={isModalVisible} onClose={toggleModal} stock={stockData} />
      <DetailsTopBar />

    </View>

  );
}

export default DetailsScreen;
