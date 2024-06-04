import { StyleSheet } from "react-native";
import { COLORS } from "../../Constants/commonStyles";

export const styles= StyleSheet.create({
    container:{
        flexDirection:'row',
         margin:30
     },
     item: {
        backgroundColor: COLORS.SECONDARY.WHITE,
        borderRadius: 200,
        padding: 11,
        marginHorizontal:8,
        
      },
})