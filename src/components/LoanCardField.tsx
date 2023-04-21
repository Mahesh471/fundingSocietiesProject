import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {styles} from '../styles/ComponentStyle';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface PropsType {
  title: string;
  value: string;
  needBorder: boolean;
  needBitcoin: boolean;
}

const LoanCardField = (props: PropsType) => {
  return (
    <View
      style={[
        styles.LoanCardField.fieldView,
        props.needBorder && {
          borderBottomColor: '#C3C3BB',
          borderBottomWidth: 0.5,
        },
        (props.title === 'Min.' || props.title === 'Max.') && {
          marginBottom: '5%',
        },
      ]}>
      <Text style={styles.LoanCardField.greyMediumTextStyle}>
        {props.title}
      </Text>
      <View style={styles.LoanCardField.valueView}>
        {props.needBitcoin && (
          <FontAwesome name="bitcoin" size={14} color="white" />
        )}
        <Text
          style={[styles.LoanCardField.whiteMediumTextStyle, {marginLeft: 3}]}>
          {props.value}
        </Text>
      </View>
    </View>
  );
};

export default LoanCardField;
