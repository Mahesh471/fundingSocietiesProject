import React from 'react';
import {Text, View} from 'react-native';
import WebView from 'react-native-webview';

const AboutScreen = () => {
  return (
    <WebView
      source={{uri: 'https://fundingsocieties.com/'}}
      style={{flex: 1}}
    />
  );
};

export default AboutScreen;
