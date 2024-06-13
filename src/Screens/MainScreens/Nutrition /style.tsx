import { StyleSheet } from "react-native"
import { COLORS,SIZES } from "../../../Constants/commonStyles"


export const styles= StyleSheet.create({
    heading:{
       fontSize:SIZES.font24,
       textAlign:'center',
       fontWeight:'bold'
    },
    text:{
       color:COLORS.PRIMARY.PURPLE
    },
    container:{
       marginVertical:25,
       
    }
})