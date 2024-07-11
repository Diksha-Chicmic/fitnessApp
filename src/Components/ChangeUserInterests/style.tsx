import { StyleSheet } from "react-native";
import { COLORS,SIZES } from "../../Constants/commonStyles";

export const styles = StyleSheet.create({
    parent: {
      flex: 1,
      backgroundColor: COLORS.PRIMARY.DIMGREY,
    },
    flatListCtr: {
      flex: 5,
      marginVertical:'10%',
      marginLeft:'-4%'
    },
    customButtonCtr: {
     alignItems: 'center',
      paddingTop: '3%',
    },
    title: {
            fontSize: SIZES.font24,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 20,
          },
});