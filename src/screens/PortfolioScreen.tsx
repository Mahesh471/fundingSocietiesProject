import React, {useEffect, useState} from 'react';
import {FlatList, SectionList, Text, View} from 'react-native';

import FlatListItem2 from '../components/FlatListItem2';
import PortfolioCard from '../components/PortfolioCard';
import Lottie from 'lottie-react-native';
import ActivityLoader from '../components/ActivityLoader';

import {data} from '../assets/data/portfolioHeaderData';
import {fetchItems} from '../apiCalls/apiCalls';
import {styles} from '../styles/ScreenStyle';

type DataType = Array<{
  id: string;
  user: string;
  money: string;
  status: string;
  date?: string;
}>;
type SectionListItemType = {
  heading: string;
  data: DataType;
};
type SectionListDataType = Array<SectionListItemType>;

const filterData = (Data: DataType) => {
  const anyData = Data.filter(item => item.status === 'Investment in progress');
  const OngoingData = Data.filter(
    item =>
      item.status === 'Paid' ||
      item.status === 'In Progress' ||
      item.status === 'Partial',
  );
  const CompletedData = Data.filter(item => item.status === 'Approved');
  const DefaultedData = Data.filter(
    item => item.status === 'Unapproved' || item.status === 'Rejected',
  );
  return {
    anyData: {
      heading: '',
      data: anyData,
    },
    OngoingData: {
      heading: 'Ongoing',
      data: OngoingData,
    },
    CompletedData: {
      heading: 'Completed',
      data: CompletedData,
    },
    DefaultedData: {
      heading: 'Defaulted',
      data: DefaultedData,
    },
  };
};

const PortfolioScreen = () => {
  const [curr, setCurr] = useState<string>('Any');
  const [loader, setLoader] = useState(false);
  const [DATA, setDATA] = useState<SectionListDataType>([]);
  const [anyData, setAnyData] = useState<SectionListDataType>([]);
  const [ongoingData, setOngoingData] = useState<SectionListDataType>([]);
  const [completedData, setCompletedData] = useState<SectionListDataType>([]);
  const [defaultedData, setDefaultedData] = useState<SectionListDataType>([]);
  const fetchItemsData = async () => {
    const res = await fetchItems();
    const data = filterData(res);
    setAnyData([
      data.anyData,
      data.OngoingData,
      data.CompletedData,
      data.DefaultedData,
    ]);
    setOngoingData([data.OngoingData]);
    setCompletedData([data.CompletedData]);
    setDefaultedData([data.DefaultedData]);
  };
  useEffect(() => {
    fetchItemsData();
  }, []);
  useEffect(() => {
    setDATA(anyData);
  }, [anyData]);
  useEffect(() => {
    setLoader(true);
    if (curr === 'Any') {
      setDATA(anyData);
    } else if (curr === 'Ongoing') {
      setDATA(ongoingData);
    } else if (curr === 'Completed') {
      setDATA(completedData);
    } else if (curr === 'Defaulted') {
      setDATA(defaultedData);
    }
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, [curr]);
  return (
    <View style={styles.PortfolioScreen.container}>
      {loader && <ActivityLoader />}
      <FlatList
        showsHorizontalScrollIndicator={false}
        style={{flex: 1}}
        horizontal
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <FlatListItem2 title={item.title} curr={curr} setCurr={setCurr} />
        )}
      />
      {DATA.length && DATA[0]?.data.length && !loader ? (
        <View style={{flex: 6}}>
          <SectionList
            showsVerticalScrollIndicator={false}
            scrollsToTop={true}
            stickySectionHeadersEnabled={true}
            sections={DATA}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return <PortfolioCard item={item} />;
            }}
            renderSectionHeader={({section: {heading, data}}) => {
              return (
                <View style={styles.PortfolioScreen.sectionTitle}>
                  {heading !== '' && data.length ? (
                    <Text style={{fontSize: 18, color: 'white'}}>
                      {heading}
                    </Text>
                  ) : null}
                </View>
              );
            }}
          />
        </View>
      ) : (
        !loader && (
          <View style={styles.PortfolioScreen.lottieView}>
            <Lottie
              style={styles.PortfolioScreen.lottieStyle}
              source={require('../assets/data/emptyPortfilio.json')}
              autoPlay
              loop
            />
            <Text style={styles.PortfolioScreen.currText}>
              You don't have any {curr} investments in your portfolio
            </Text>
          </View>
        )
      )}
    </View>
  );
};

export default PortfolioScreen;
