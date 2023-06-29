import {Dimensions, StyleSheet} from 'react-native';

export const styles = {
  BlueButton: StyleSheet.create({
    buttonView: {
      backgroundColor: '#0096FF',
      alignItems: 'center',
      justifyContent: 'center',
      height: Dimensions.get('window').height>600?45:35,
      width: '90%',
      borderRadius: 5,
      marginTop: '2%',
      marginBottom: '4%',
    },
    buttonText: {
      color: 'white',
      fontSize: 15,
    },
  }),
  ConfirmPasswordInputField: StyleSheet.create({
    inputField: {
      width: '90%',
      height: 20,
      color: 'white',
      borderBottomColor: 'white',
      borderBottomWidth: 1,
      padding: 0,
      marginTop: 0,
    },
    passInputView: {
      flexDirection: 'row',
    },
    passLabel: {
      color: '#f3f3f3',
      fontSize: 10,
      alignSelf: 'flex-start',
      marginLeft: '5%',
    },
    eyeIconView: {
      alignSelf: 'flex-end',
      paddingBottom: 5,
      //borderColor: 'white',
      borderBottomWidth: 1,
    },
    eyeIcon: {
      width: 15,
      height: 14,
    },
  }),
  EmailInputField: StyleSheet.create({
    emailLabel: {
      color: '#f3f3f3',
      fontSize: 10,
      alignSelf: 'flex-start',
      marginLeft: '5%',
    },
    inputField: {
      width: '90%',
      height: 20,
      color: 'white',
      padding: 0,
      marginTop: 0,
    },
  }),
  InvalidText: StyleSheet.create({
    invalidTextView: {
      marginBottom: '7%',
      marginLeft: '5%',
      marginRight: '5%',
      width: '90%',
      paddingRight: '5%',
      overflow: 'visible',
      alignSelf: 'flex-start',
      flexDirection: 'row',
      alignItems: 'center',
    },
    invalidInputImg: {
      marginTop: 5,
      marginBottom: 5,
      marginRight: 5,
      height: 12,
      width: 12,
      borderRadius: 7.5,
    },
    invalidText: {
      color: '#ff9933',
      fontSize: 10,
    },
  }),
  PasswordInputField: StyleSheet.create({
    inputField: {
      width: '90%',
      height: 20,
      color: 'white',
      borderBottomColor: 'white',
      borderBottomWidth: 1,
      padding: 0,
      marginTop: 0,
    },
    passInputView: {
      flexDirection: 'row',
    },
    passLabel: {
      color: '#f3f3f3',
      fontSize: 10,
      alignSelf: 'flex-start',
      marginLeft: '5%',
    },
    eyeIconView: {
      alignSelf: 'flex-end',
      paddingBottom: 5,
      borderColor: 'white',
      borderBottomWidth: 1,
    },
    eyeIcon: {
      width: 15,
      height: 14,
    },
  }),
  HeaderTabItem: StyleSheet.create({
    headerTabItem: {
      width: '48%',
      paddingVertical: '2.5%',
      borderRadius: 30,
      borderColor: '#0000FF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerTabText: {
      color: 'white',
    },
  }),
  FlatListItem :StyleSheet.create({
    itemView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: '4%',
      borderBottomColor: 'white',
      borderBottomWidth: 0.5,
    },
    firstCol: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    dateMoneyText: {
      fontSize: 15,
      color: 'white',
    },
    actionStatusText: {
      fontSize: 14,
      color: '#EBEBE3',
    },
    secondCol: {
      flexDirection: 'column',
      alignItems: 'flex-end',
    },
    moneyView: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    statusView: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    dateText: {
      marginRight: '2%',
      marginLeft: 1,
    },
    statusText: {
      marginLeft: '5%',
    },
  }),
  PortfolioCard: StyleSheet.create({
    container: {
      marginVertical: '2%',
    },
    upperContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'rgba(255,255,255,0.2)',
      justifyContent: 'space-between',
      padding: '3%',
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      borderBottomWidth: 0.5,
      borderColor: 'white',
    },
    upperLeftColumn: {
      flexDirection: 'column',
    },
    idText: {
      color: '#EBEBE3',
      fontSize: 11,
    },
    userText: {
      color: '#C3C3BB',
      fontSize: 10.5,
    },
    moneyView: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    moneyText: {
      color: 'white',
      fontWeight: '500',
      fontSize: 14,
      marginLeft: 1,
      marginRight: 1,
    },
    lowerContainer1: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: 'rgba(255,255,255,0.2)',
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
      padding: '3%',
    },
    lowerLeftColumn: {
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    lowerRightColumn: {
      flexDirection: 'column',
      alignItems: 'flex-end',
    },
    paidView: {
      width: 40,
      backgroundColor: '#21B6A8',
      borderRadius: 3,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: '1.5%',
      marginTop: 6,
    },
    paidText: {
      color: 'white',
      fontSize: 10.5,
    },
    inProgressView: {
      marginTop: 6,
      padding: '5%',
      paddingHorizontal: '7%',
      borderColor: 'gold',
      borderWidth: 1,
      borderRadius: 3,
    },
    inProgressText: {
      fontSize: 10.5,
      color: 'gold',
    },
    partialView: {
      borderColor: 'orange',
      borderWidth: 1,
      padding: '5%',
      paddingHorizontal: '7%',
      borderRadius: 3,
      marginTop: 6,
    },
    partialText: {
      color: 'orange',
      fontSize: 10.5,
    },
    lowerContainer2: {
      backgroundColor: 'rgba(255,255,255,0.2)',
      alignItems: 'flex-end',
      paddingTop: '5%',
      padding: '3%',
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
    },
  }),
  FlatListItem2: StyleSheet.create({
    itemContainer: {
      height: 60,
      width: 90,
      justifyContent: 'space-around',
      marginHorizontal: 3,
      paddingHorizontal: 7,
      paddingVertical: 7,
      borderRadius: 3,
    },
    titleText: {
      fontSize: 12,
    },
  }),
  LoanCard: StyleSheet.create({
    container: {
      backgroundColor: 'rgba(255,255,255,0.2)',
      marginBottom: '5%',
      borderRadius: 5,
    },
    titleView: {
      width: '100%',
      paddingLeft: '5%',
      paddingRight: '4%',
      paddingVertical: '3%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    titleLeftColumn: {
      flexDirection: 'column',
    },
    titleRightRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    greyTextStyle: {
      color: '#C3C3BB',
      fontSize: 11,
    },
    whiteSmallTextStyle: {
      color: 'white',
      fontSize: 11,
    },
    whiteMediumTextStyle: {
      color: 'white',
      fontSize: 13,
    },
    bodyView: {
      borderBottomColor: '#C3C3BB',
      borderBottomWidth: 0.5,
    },
    twoFieldsRowView: {
      flexDirection: 'row',
    },
    factSheetView: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: '4%',
    },
    factSheetText: {
      color: 'white',
      fontSize: 14,
      fontWeight: '500',
    },
  }),
  LoanCardField: StyleSheet.create({
    fieldView: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: '5%',
      marginVertical: '2%',
      paddingVertical: '3%',
    },
    valueView: {
      flexDirection: 'row',
      alignItems: 'center'
    },  
    whiteMediumTextStyle: {
      color: 'white',
      fontSize: 13,
    },
    greyMediumTextStyle: {
      color: '#C3C3BB',
      fontSize: 13,
    },
  })
};
