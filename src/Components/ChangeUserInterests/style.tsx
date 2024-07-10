import { StyleSheet } from "react-native";
import { COLORS,SIZES } from "../../Constants/commonStyles";

export const styles = StyleSheet.create({
    parent: {
      flex: 1,
      backgroundColor: COLORS.PRIMARY.DIMGREY,
    },
    flatListCtr: {
      flex: 4,
      marginVertical:'15%',
      marginLeft:'-4%'
    },
    customButtonCtr: {
      flex: 1,
      alignItems: 'center',
      paddingTop: '10%',
    },
    title: {
            fontSize: SIZES.font24,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 20,
          },
});