import { StyleSheet } from "react-native";
import { SIZES,COLORS, FONT_FAMILY } from "../../Constants/commonStyles";


export const styles = StyleSheet.create({
    conatiner: {
      flex: 1,
     marginVertical:'4%',
      backgroundColor: COLORS.SECONDARY.WHITE,
      borderRadius: SIZES.rounding2,
      padding: 16,
      paddingVertical: 20,
    },
    box: {
      marginHorizontal: '3%',
      paddingHorizontal: 15,
      paddingVertical: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderColor: COLORS.SECONDARY.LIGHTGREY,
    },
    div: {},
    heading: {
      fontSize: SIZES.fontH5,
  
      paddingBottom: 8,
      color: 'black',
      fontWeight:'bold',
      fontFamily: FONT_FAMILY.REGULAR,
    },
    title: {
      fontSize: SIZES.fontH6,
      fontFamily: FONT_FAMILY.MEDIUM,
      color: 'black',
    },
    quant: {
      color: COLORS.SECONDARY.GREY,
     marginVertical:'3%',
      fontWeight:'500',
      fontFamily: FONT_FAMILY.REGULAR,
    },
    caloriesText: {
      fontFamily: FONT_FAMILY.REGULAR,
      fontSize: SIZES.font14,
      color: 'black',
    },
    borderStyle: {
      borderTopWidth: 1.5,
    },
    close: {
      position: 'absolute',
      top: 10,
      right: 10,
    },
  });