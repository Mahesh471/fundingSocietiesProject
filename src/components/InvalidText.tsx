import React from 'react';
import {Text, Image, View} from 'react-native';

import {styles} from '../styles/ComponentStyle';

interface PropsType {
  children: React.ReactNode;
}

const InvalidText = (props: PropsType) => {
  return (
    <View style={styles.InvalidText.invalidTextView}>
      {props.children && (
        <Image
          source={require('../assets/images/invalidInput.jpg')}
          style={styles.InvalidText.invalidInputImg}
        />
      )}
      <Text style={styles.InvalidText.invalidText}>{props.children}</Text>
    </View>
  );
};

export default InvalidText;
