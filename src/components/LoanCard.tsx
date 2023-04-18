import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {LoanCardPropType} from '../screens/CrowdfundingScreen';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import LoanCardField from './LoanCardField';
import BlueButton from './BlueButton';
import {styles} from '../styles/ComponentStyle';

interface PropsType {
  item: LoanCardPropType;
}

const convertNumToString = (num: number) => {
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

const LoanCard = (props: PropsType) => {
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
            value={convertNumToString(props.item.funded)}
            needBorder={true}
            needBitcoin={true}
          />
          <LoanCardField
            title="Goal"
            value={convertNumToString(props.item.goal)}
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
            value={convertNumToString(props.item.minInvestment)}
            needBorder={true}
            needBitcoin={true}
          />
          <LoanCardField
            title="Max."
            value={convertNumToString(props.item.maxInvestment)}
            needBorder={true}
            needBitcoin={true}
          />
        </View>
      </View>
      <View style={styles.LoanCard.factSheetView}>
        <TouchableOpacity>
          <Text style={styles.LoanCard.factSheetText}>View Factsheet</Text>
        </TouchableOpacity>
      </View>
      <BlueButton isDisabled={true} fullWidth={true}>
        Lend
      </BlueButton>
    </View>
  );
};

export default LoanCard;
