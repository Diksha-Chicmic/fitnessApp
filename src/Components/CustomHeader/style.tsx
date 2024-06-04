import { StyleSheet } from "react-native"; 
import { COLORS,SIZES } from "../../Constants/commonStyles";

export const styles = StyleSheet.create({
    parent: {
      backgroundColor:COLORS.PRIMARY.GREY
    },
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      position: 'relative'
    },
    backBtn: {
      position: "absolute",
      padding: 15,
      justifyContent: "center",
      alignContent: "center",
      left: 15, 
      zIndex:1
     
    },
    logo: {
      flex: 1,
      alignItems: "center",
    },
  });