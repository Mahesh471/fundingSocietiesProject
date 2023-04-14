import React from 'react';
import {Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

import {styles} from '../styles/ComponentStyle';

interface PropsType {
  item: {
    id: string;
    user: string;
    money: string;
    status: string;
    date?: string;
  };
}

const extractMonth = (date: string) => {
  const splitDate = date.split('-');
  const monthInteger = splitDate[1];
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  return months[parseInt(monthInteger) - 1];
};
const dateConverter = (date: string) => {
  return (
    date.substring(8) + ' ' + extractMonth(date) + ' ' + date.substring(0, 4)
  );
};

const PortfolioCard = (props: PropsType) => {
  const {item} = props;
  return (
    <View style={styles.PortfolioCard.container}>
      <View style={styles.PortfolioCard.upperContainer}>
        <View style={styles.PortfolioCard.upperLeftColumn}>
          <Text style={styles.PortfolioCard.idText}>{item.id}</Text>
          <Text style={styles.PortfolioCard.userText}>{item.user}</Text>
        </View>
        <View style={styles.PortfolioCard.moneyView}>
          <FontAwesome name="bitcoin" size={14} color="white" />
          <Text style={styles.PortfolioCard.moneyText}>{item.money}</Text>
          <AntDesignIcon
            name="right"
            size={13}
            color="white"
            style={{fontWeight: 'bold'}}
          />
        </View>
      </View>
      {item.date ? (
        <View style={styles.PortfolioCard.lowerContainer1}>
          <View style={styles.PortfolioCard.lowerLeftColumn}>
            <Text style={styles.PortfolioCard.idText}>
              {extractMonth(item.date)} repayment Date
            </Text>
            <Text style={styles.PortfolioCard.idText}>
              {extractMonth(item.date)} status
            </Text>
          </View>
          <View style={styles.PortfolioCard.lowerRightColumn}>
            <Text style={styles.PortfolioCard.userText}>
              {dateConverter(item.date)}
            </Text>
            {item.status === 'Paid' && (
              <View style={styles.PortfolioCard.paidView}>
                <Text style={styles.PortfolioCard.paidText}>{item.status}</Text>
              </View>
            )}
            {item.status === 'In Progress' && (
              <View style={styles.PortfolioCard.inProgressView}>
                <Text style={styles.PortfolioCard.inProgressText}>
                  {item.status}
                </Text>
              </View>
            )}
            {item.status === 'Partial' && (
              <View style={styles.PortfolioCard.partialView}>
                <Text style={styles.PortfolioCard.partialText}>
                  {item.status}
                </Text>
              </View>
            )}
          </View>
        </View>
      ) : (
        <View style={styles.PortfolioCard.lowerContainer2}>
          <Text style={styles.PortfolioCard.userText}>{item.status}</Text>
        </View>
      )}
    </View>
  );
};

export default PortfolioCard;
