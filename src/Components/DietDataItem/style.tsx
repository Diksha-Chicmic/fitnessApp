import { StyleSheet } from "react-native";
import { SIZES,COLORS } from "../../Constants/commonStyles";


export const styles = StyleSheet.create({
    conatiner: {
      flex: 1,
     marginVertical:'5%',
      backgroundColor: COLORS.SECONDARY.WHITE,
      borderRadius: SIZES.rounding2,
      padding: 16,
      paddingVertical: 20,
    },
    box: {
      marginHorizontal: 15,
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
      fontWeight:'bold'
      //fontFamily: FONT_FAMILY.REGULAR,
    },
    title: {
      fontSize: SIZES.fontH6,
     // fontFamily: FONT_FAMILY.MEDIUM,
      color: 'black',
    },
    quant: {
      color: COLORS.SECONDARY.GREY,
     margin:'3%',
      fontWeight:'bold'
      //fontFamily: FONT_FAMILY.REGULAR,
    },
    caloriesText: {
      //fontFamily: FONT_FAMILY.REGULAR,
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