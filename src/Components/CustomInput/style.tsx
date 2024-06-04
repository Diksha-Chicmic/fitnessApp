import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { COLORS, SIZES } from "../../Constants/commonStyles";
export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 5,
    //borderWidth:1,
    backgroundColor: COLORS.SECONDARY.WHITE,
    height: 42,
    marginVertical: 10,


  },
  icon: {
    flex: 1,
    marginLeft: 4,
    minWidth: 20,
    paddingHorizontal: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    flex: 19,
    flexDirection: "row",
    paddingHorizontal: 15,
    fontSize: SIZES.font13,
    width: 20,
    
  },
})