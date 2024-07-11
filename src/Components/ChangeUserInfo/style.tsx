import { StyleSheet } from "react-native";
import { COLORS } from "../../Constants/commonStyles";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: COLORS.PRIMARY.DIMGREY,
      paddingHorizontal: 16,
      borderRadius: 10,
    },
    box: {
      flexDirection: 'row',
      marginTop: 38,
    },
    box2: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    }
  });