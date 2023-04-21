import React, {useContext} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {LoanCardPropType} from '../screens/CrowdfundingScreen';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import LoanCardField from './LoanCardField';
import BlueButton from './BlueButton';

import {styles} from '../styles/ComponentStyle';
import {LoginContext} from './Main';

interface PropsType {
  item: LoanCardPropType;
}

const convertNumToKAbbreviation = (num: number) => {
  let res = '';
  if (num >= 1000) {
    res += JSON.stringify(num / 1000);
    while (res.charAt(res.length - 1) === '0') {
      res = res.substring(0, res.length - 1);
    }
    res += 'K';
  } else {
    res = JSON.stringify(num);
  }
  return res;
};

const compareDate = (endDate: string) => {
  const currDate = new Date();
  const lastDate = new Date(endDate);
  return lastDate > currDate;
};

const LoanCard = (props: PropsType) => {
  const {userInfo, setUserInfo, loggedIn, setLoggedIn} =
    useContext(LoginContext);
  return (
    <View style={styles.LoanCard.container}>
      <View style={styles.LoanCard.titleView}>
        <View style={styles.LoanCard.titleLeftColumn}>
          <Text style={styles.LoanCard.greyTextStyle}>{props.item.loanId}</Text>
          <Text style={styles.LoanCard.whiteSmallTextStyle}>
            {props.item.type}
          </Text>
        </View>
        <View style={styles.LoanCard.titleRightRow}>
          <Text
            style={[styles.LoanCard.whiteMediumTextStyle, {marginRight: 5}]}>
            Simulate interest
          </Text>
          <TouchableOpacity>
            <AntDesignIcon
              name="right"
              size={13}
              color="white"
              style={{fontWeight: 'bold', margin: 0}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.LoanCard.bodyView}>
        <LoanCardField
          title="Industry"
          value={props.item.industry}
          needBorder={true}
          needBitcoin={false}
        />
        <View style={styles.LoanCard.twoFieldsRowView}>
          <LoanCardField
            title="Funded"
            value={convertNumToKAbbreviation(props.item.funded)}
            needBorder={true}
            needBitcoin={true}
          />
          <LoanCardField
            title="Goal"
            value={convertNumToKAbbreviation(props.item.goal)}
            needBorder={true}
            needBitcoin={true}
          />
        </View>
        <View style={styles.LoanCard.twoFieldsRowView}>
          <LoanCardField
            title="Per annum"
            value={props.item.interest.toFixed(2) + '%'}
            needBorder={true}
            needBitcoin={false}
          />
          <LoanCardField
            title="Month"
            value={JSON.stringify(props.item.duration)}
            needBorder={true}
            needBitcoin={false}
          />
        </View>
        <View style={styles.LoanCard.twoFieldsRowView}>
          <LoanCardField
            title="Min."
            value={convertNumToKAbbreviation(props.item.minInvestment)}
            needBorder={true}
            needBitcoin={true}
          />
          {userInfo.investorType === 'Retail' ? (
            <LoanCardField
              title="Max."
              value={convertNumToKAbbreviation(props.item.maxInvestment)}
              needBorder={true}
              needBitcoin={true}
            />
          ) : (
            <LoanCardField
              title=""
              value=""
              needBorder={false}
              needBitcoin={false}
            />
          )}
        </View>
      </View>
      <View style={styles.LoanCard.factSheetView}>
        <TouchableOpacity>
          <Text style={styles.LoanCard.factSheetText}>View Factsheet</Text>
        </TouchableOpacity>
      </View>
      <BlueButton isDisabled={compareDate(props.item.endDate)} fullWidth={true}>
        Lend
      </BlueButton>
    </View>
  );
};

export default LoanCard;
