import { StyleSheet } from "react-native";
import { SIZES,COLORS, FONT_FAMILY } from "../../../Constants/commonStyles";


export const styles = StyleSheet.create({
    heading: {
      fontSize: SIZES.fontH4,
      fontWeight: 'bold',
      fontFamily:FONT_FAMILY.BOLD,
  
    },
    direction: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    parent: {
      marginHorizontal: '6%',
      justifyContent: 'center',
    
    },
    container:{
      backgroundColor:COLORS.PRIMARY.GREY
    }
  });