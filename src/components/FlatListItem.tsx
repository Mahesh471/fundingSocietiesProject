import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import {styles} from '../styles/ComponentStyle';

interface PropsType {
  id: string;
  date: string;
  money: string;
  action: string;
  status: string;
}

const FlatListItem = (props: PropsType) => {
  const [statusColor, setStatusColor] = useState<string>('white');

  useEffect(() => {
    switch (props.status) {
      case 'Confirm':
        setStatusColor('aqua');
        break;
      case 'Processing':
        setStatusColor('yellow');
        break;
      case 'Cancel':
        setStatusColor('red');
        break;
      case 'Pending':
        setStatusColor('yellow');
        break;
      default:
        setStatusColor('white');
    }
  });

  return (
    <View style={styles.FlatListItem.itemView}>
      <View style={styles.FlatListItem.firstCol}>
        <Text style={styles.FlatListItem.dateMoneyText}>{props.date}</Text>
        <Text style={styles.FlatListItem.actionStatusText}>{props.action}</Text>
      </View>
      <View style={styles.FlatListItem.secondCol}>
        <View style={styles.FlatListItem.moneyView}>
          <FontAwesomeIcon name="bitcoin" size={15} color="white" />
          <Text
            style={[
              styles.FlatListItem.dateMoneyText,
              styles.FlatListItem.dateText,
            ]}>
            {props.money}
          </Text>
          <AntDesignIcon name="right" size={12} color="white" />
        </View>
        <View style={styles.FlatListItem.statusView}>
          <FontAwesomeIcon name="circle" size={8} color={statusColor} />
          <Text
            style={[
              styles.FlatListItem.actionStatusText,
              styles.FlatListItem.statusText,
            ]}>
            {props.status}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default FlatListItem;
