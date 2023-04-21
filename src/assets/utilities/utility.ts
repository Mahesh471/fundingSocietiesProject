import { BUTTON } from "../constants/colorCodes"

export const getButtonColor = (enable: boolean) => {
    return enable? BUTTON.PRIMARY.BG: BUTTON.DISABLED.BG;
}

export const getTextColor = (enable: boolean) => {
    return enable? BUTTON.PRIMARY.TEXT: BUTTON.DISABLED.TEXT;
}

export const extractMonth = (date: string) => {
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
  export const dateConverter = (date: string) => {
    return (
      date.substring(8,10) + ' ' + extractMonth(date) + ' ' + date.substring(0, 4)
    );
  };