import React from 'react';
import AnimatedLottieView from 'lottie-react-native';
import {Modal} from 'react-native';

const ActivityLoader = () => {
  return (
    <Modal transparent={true}>
      <AnimatedLottieView
        style={{
          opacity: 0.8,
          backgroundColor: 'rgba(0,0,0,0.4)',
          alignSelf: 'center',
        }}
        source={require('../assets/data/logo.json')}
        autoPlay
        loop
      />
    </Modal>
  );
};

export default ActivityLoader;
