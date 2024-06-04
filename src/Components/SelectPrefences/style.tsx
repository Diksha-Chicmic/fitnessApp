import { StyleSheet } from "react-native";
import { COLORS ,SIZES} from "../../Constants/commonStyles";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
  parent: {
   flex:1,
    //width: '100%',
    margin:20,
    //height:"10%"
    
  },
  childCtr: {
   paddingVertical: RFValue(17),
   paddingHorizontal: RFValue(10),
    flexDirection: "row",
   justifyContent: "space-between",
    backgroundColor: COLORS.SECONDARY.WHITE,
    borderRadius: SIZES.rounding2,
  },
  textCtr: {
    alignItems: "center",
    justifyContent: "center",
    color:'black'
  },
  text: {
    fontSize: SIZES.font13,
    color:'black'
  },
});