import { StyleSheet } from "react-native";
import { SIZES } from "../../../Constants/commonStyles";


export const styles = StyleSheet.create({
    heading: {
      fontSize: SIZES.font18,
      fontWeight: 'bold'
    },
    direction: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    parent: {
      marginHorizontal: '6%',
      justifyContent: 'center',
    }
  });