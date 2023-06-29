import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import WebView from 'react-native-webview';
import {RootStackParamList} from '../navigation/StackNavigator';

type PropsType = NativeStackScreenProps<RootStackParamList, 'WebViewScreen'>;

const WebViewScreen = ({navigation, route}: PropsType) => {
  useEffect(() => {
    navigation.setOptions({title: route.params.title});
  });
  return <WebView source={{uri: route.params.url}} style={{flex: 1}} />;
};

export default WebViewScreen;
