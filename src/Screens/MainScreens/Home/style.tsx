import { StyleSheet } from "react-native"
import { COLORS, SIZES } from "../../../Constants/commonStyles"

export const styles = StyleSheet.create({
    container:{
        marginHorizontal:'5%'
       
    },
     heading:{
         fontSize:SIZES.font24,
          fontWeight:'bold',
         // paddingVertical:"5%"
     },
     text:{
         fontSize:SIZES.font13,
         paddingVertical:"8%",
         width:'80%',
         
         
        
     },
     text2:{
         color:COLORS.PRIMARY.PURPLE,
         fontSize:SIZES.font13,
         fontWeight:'bold',
        paddingBottom:'8%'

     },
     parent:{
        backgroundColor:COLORS.PRIMARY.GREY
     }
 })