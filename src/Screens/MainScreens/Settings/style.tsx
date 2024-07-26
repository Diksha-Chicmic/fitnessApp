import { StyleSheet } from "react-native"
import { COLORS,SIZES,FONT_FAMILY } from "../../../Constants/commonStyles"

export const styles= StyleSheet.create({
    container:{
      //marginHorizontal:10,
       flex:1,
       backgroundColor:COLORS.PRIMARY.GREY
    },
    heading:{
        fontSize:SIZES.fontH3,
        fontWeight:'bold',
        marginVertical:20,
        marginHorizontal:'2%',
        fontFamily:FONT_FAMILY.SEMI_BOLD
    }
})