import { StyleSheet } from "react-native"
import { COLORS,FONT_FAMILY,SIZES } from "../../../Constants/commonStyles"


export const styles= StyleSheet.create({
    heading:{
       fontSize:SIZES.fontH4,
       textAlign:'center',
       fontWeight:'bold',
       marginHorizontal:'6%'
       //fontFamily:FONT_FAMILY.BOLD
    },
    text:{
       color:COLORS.PRIMARY.PURPLE
    },
    container:{
      // marginVertical:'6%',
       
    },
    parent:{
      backgroundColor:COLORS.PRIMARY.GREY
    }
})