import React from 'react';
import {Text, View} from 'react-native';

const DummyScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00264D',
      }}>
      <Text style={{fontSize: 25, color: 'white'}}>Dummy Screen</Text>
    </View>
  );
};

export default DummyScreen;
