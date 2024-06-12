import { Dimensions } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { RFValue } from 'react-native-responsive-fontsize';


export const COLORS = {
    PRIMARY: {
      GREY: "#F4F6FA",
      PURPLE: "#7265E3",
      DIMPURPLE: "#E1DDF5",
      DARKGREY: "#ECECEC",
      DIMGREY: "#F4F6FA",
    },
    SECONDARY: {
      GREY: "#A9A9A9",
      WHITE: "#FFFFFF",
      RED: "#ff0033",
      ORANGE: "#F7A56D",
     CYAN: "#44C7BC",
     LIGHTGREY: "#DCDDE0",
    },
  };
  const HEADER_CONST = DeviceInfo.isTablet() ? RFValue(11) : RFValue(13);
  export const SIZES = {
    icon: DeviceInfo.isTablet() ? RFValue(12) : RFValue(13),
    spacing: DeviceInfo.isTablet() ? RFValue(7) : RFValue(8),
    rounding: 5,
    rounding2: 7,
    rounding3:27,
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    
    font11: DeviceInfo.isTablet() ? RFValue(10) : RFValue(11),
    font13: DeviceInfo.isTablet() ? RFValue(12) : RFValue(13),
    font14: DeviceInfo.isTablet() ? RFValue(13) : RFValue(14),
    font15: DeviceInfo.isTablet() ? RFValue(13) : RFValue(15),
    font17: DeviceInfo.isTablet() ? RFValue(16) : RFValue(17),
    font18: DeviceInfo.isTablet() ? RFValue(17) : RFValue(18),
    font24: DeviceInfo.isTablet() ? RFValue(23) : RFValue(24),
    
    fontH1: RFValue(HEADER_CONST * 2),
    fontH2: RFValue(HEADER_CONST * 1.8),
    fontH3: RFValue(HEADER_CONST * 1.6),
    fontH4: RFValue(HEADER_CONST * 1.4),
    fontH5: RFValue(HEADER_CONST * 1.2),
    fontH6: RFValue(HEADER_CONST * 1.0),
  }