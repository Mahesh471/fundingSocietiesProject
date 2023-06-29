import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import {FundsItemType} from '../screens/FundsScreen';
import {dateConverter} from '../assets/utilities/utility';

import {styles} from '../styles/ComponentStyle';

interface PropsType {
  item: FundsItemType;
}

const FlatListItem = (props: PropsType) => {
  const [statusColor, setStatusColor] = useState<string>('white');

  useEffect(() => {
    switch (props.item.status) {
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
        <Text style={styles.FlatListItem.dateMoneyText}>
          {dateConverter(props.item.date)}
        </Text>
        <Text style={styles.FlatListItem.actionStatusText}>
          {props.item.transaction}
        </Text>
      </View>
      <View style={styles.FlatListItem.secondCol}>
        <View style={styles.FlatListItem.moneyView}>
          <FontAwesomeIcon name="bitcoin" size={15} color="white" />
          <Text
            style={[
              styles.FlatListItem.dateMoneyText,
              styles.FlatListItem.dateText,
            ]}>
            {props.item.amount}
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
            {props.item.status}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default FlatListItem;
