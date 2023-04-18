import React, {useCallback, useEffect, useState} from 'react';
import {RefreshControl, ScrollView, Text, View} from 'react-native';
import LoanCard from '../components/LoanCard';
import {getLoanData} from '../firebase/database';
import ActivityLoader from '../components/ActivityLoader';
import {styles} from '../styles/ScreenStyle';

interface LoanCardPropType {
  duration: number;
  funded: number;
  goal: number;
  industry: string;
  interest: number;
  loanId: string;
  maxInvestment: number;
  minInvestment: number;
  type: string;
  endDate: string;
}

const CrowdfundingScreen = () => {
  const [loanData, setLoanData] = useState<Array<LoanCardPropType>>([]);
  const [loader, setLoader] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const loadingLoanData = async () => {
    await getLoanData(setLoanData);
    setLoader(false);
  };

  useEffect(() => {
    loadingLoanData();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <View style={styles.CrowdfundingScreen.container}>
      <Text style={styles.CrowdfundingScreen.titleStyle}>Funding Now</Text>
      {loader ? (
        <ActivityLoader />
      ) : (
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          <View style={styles.CrowdfundingScreen.bodyStyle}>
            {loanData.map((item, index) => {
              return <LoanCard key={index} item={item} />;
            })}
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default CrowdfundingScreen;
export {type LoanCardPropType};
