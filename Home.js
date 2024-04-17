import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Background from './Background';
import Btn from './Btn';


const Home = (props) => {
  return (
    <Background>
      <View style={{ marginHorizontal: 40, marginVertical: 100 }}>
      <Text style={{ color: 'white', fontSize: 64 }}>Sarthak Papneja</Text>
      <Btn bgColor='blue' textColor='white' btnLabel="Reg. No." />
      <Btn bgColor='white' textColor='blue' btnLabel="22BCE1360" />
      </View>
    </Background>
  );
}

export default Home;