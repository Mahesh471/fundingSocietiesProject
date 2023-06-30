import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import FlatListItem from '../components/FlatListItem';
import {getFundsData} from '../services/database';
import ActivityLoader from '../components/ActivityLoader';

export interface FundsItemType {
  amount: number;
  date: string;
  status: string;
  transaction: string;
}

const FundsScreen = () => {
  const [DATA, setDATA] = useState<Array<FundsItemType>>([]);
  const [loader, setLoader] = useState<boolean>(true);
  const loadingFundsData = async () => {
    await getFundsData(setDATA);
    setLoader(false);
  };
  useEffect(() => {
    loadingFundsData();
  }, []);

  return (
    <View style={styles.container}>
      {loader && <ActivityLoader />}
      <View style={styles.flatListView}>
        <FlatList
          data={DATA}
          renderItem={({item}) => {
            return <FlatListItem item={item} />;
          }}
          keyExtractor={(item, index) => index.toString()}
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
