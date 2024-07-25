import { StyleSheet } from "react-native"
import { COLORS, FONT_FAMILY, SIZES } from "../../../Constants/commonStyles"

export const styles = StyleSheet.create({
    container:{

       paddingHorizontal:'3%',
    },
     heading:{
         fontSize:SIZES.fontH4,
         fontFamily:FONT_FAMILY.BOLD
         
     },
     text:{
         fontSize:SIZES.font13,
         paddingVertical:"8%",
         width:'80%',
        
         fontFamily:FONT_FAMILY.REGULAR
        
     },
     text2:{
         color:COLORS.PRIMARY.PURPLE,
         fontSize:SIZES.font13,
       //  fontWeight:'bold',
        paddingBottom:'7%',
        fontFamily:FONT_FAMILY.SEMI_BOLD

     },
     parent:{
       backgroundColor:COLORS.PRIMARY.GREY,
        flex:1
     }
 })