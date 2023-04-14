import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import FlatListItem from '../components/FlatListItem';
import HeaderTabItem from '../components/HeaderTabItem';

import {data as paymentData} from '../assets/data/paymentData';
import {data as repaymentData} from '../assets/data/repaymentData';

const FundsScreen = () => {
  const [isPaymentSelected, setIsPaymentSelected] = useState<boolean>(true);
  const [isRepaymentSelected, setIsRepaymentSelected] =
    useState<boolean>(false);
  const [DATA, setDATA] = useState(paymentData);

  useEffect(() => {
    isPaymentSelected ? setDATA(paymentData) : setDATA(repaymentData);
  }, [isPaymentSelected]);

  return (
    <View style={styles.container}>
      <View style={styles.headerTabView}>
        <HeaderTabItem
          isSelected={isPaymentSelected}
          setIsSelected={setIsPaymentSelected}
          setIsOtherSelected={setIsRepaymentSelected}>
          Payment
        </HeaderTabItem>
        <HeaderTabItem
          isSelected={isRepaymentSelected}
          setIsSelected={setIsRepaymentSelected}
          setIsOtherSelected={setIsPaymentSelected}>
          Repayment
        </HeaderTabItem>
      </View>
      <View style={styles.flatListView}>
        <FlatList
          data={DATA}
          renderItem={({item}) => {
            return <FlatListItem {...item} />;
          }}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '3%',
    backgroundColor: '#00264D',
  },
  headerTabView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  flatListView: {
    flex: 1,
  },
});

export default FundsScreen;
