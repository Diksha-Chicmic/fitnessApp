import { StyleSheet } from "react-native"
import { COLORS, SIZES } from "../../../Constants/commonStyles"

export const styles = StyleSheet.create({
    container:{
       paddingLeft:20,
       
    },
     heading:{
         fontSize:SIZES.font24,
          fontWeight:'bold',
          paddingVertical:10
     },
     text:{
         fontSize:SIZES.font11,
         paddingVertical:10,
         width:'70%',
         
        
     },
     text2:{
         color:COLORS.PRIMARY.PURPLE,
         fontSize:SIZES.font13,
         fontWeight:'bold',
         paddingVertical:10
     }
 })